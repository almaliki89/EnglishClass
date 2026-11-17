import fs from 'node:fs';

const reportPath = process.argv[2];
if (!reportPath) {
  console.error('Usage: node scripts/verify_dependency_audit.mjs <npm-audit-json>');
  process.exit(2);
}

let report;
try {
  report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
} catch (error) {
  console.error('Dependency audit report is missing or invalid:', error.message);
  process.exit(2);
}

const allowedAdvisory = 'https://github.com/advisories/GHSA-fc5q-39xc-vjpf';
const allowedPackage = 'picomatch';
const allowedVersion = '4.0.7';
const lock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));
const lockedPicomatch = lock.packages?.['node_modules/picomatch']?.version;

if (lockedPicomatch !== allowedVersion) {
  console.error(
    `Unexpected picomatch lock version: ${lockedPicomatch ?? 'missing'}. The temporary exception is valid only for ${allowedPackage}@${allowedVersion}.`
  );
  process.exit(1);
}

const vulnerabilities = report.vulnerabilities ?? {};

function isOnlyTheKnownPicomatchAdvisory(name, path = new Set()) {
  if (path.has(name)) return false;

  const item = vulnerabilities[name];
  if (!item || !Array.isArray(item.via) || item.via.length === 0) return false;

  const nextPath = new Set(path);
  nextPath.add(name);

  for (const via of item.via) {
    if (typeof via === 'string') {
      if (!isOnlyTheKnownPicomatchAdvisory(via, nextPath)) return false;
      continue;
    }

    if (
      via?.name !== allowedPackage ||
      via?.url !== allowedAdvisory ||
      via?.range !== '<=4.0.7' ||
      via?.severity !== 'high'
    ) {
      return false;
    }
  }

  return true;
}

const allowed = [];
const blocked = [];

for (const [name, item] of Object.entries(vulnerabilities)) {
  if (isOnlyTheKnownPicomatchAdvisory(name)) {
    allowed.push({ name, severity: item.severity, range: item.range });
  } else {
    blocked.push({
      name,
      severity: item.severity,
      range: item.range,
      via: item.via,
    });
  }
}

if (blocked.length > 0) {
  console.error('Dependency audit found vulnerabilities outside the narrowly documented picomatch exception:');
  console.error(JSON.stringify(blocked, null, 2));
  process.exit(1);
}

if (allowed.length > 0) {
  const names = allowed.map((item) => item.name).sort();
  if (!names.includes(allowedPackage)) {
    console.error('The reported dependency chain did not include the expected direct picomatch advisory.');
    process.exit(1);
  }

  console.warn(
    `TEMPORARY DEV-TOOLING EXCEPTION: ${allowed.length} npm audit finding(s) are transitively attributable only to ${allowedPackage}@${allowedVersion} (${allowedAdvisory}).`
  );
  console.warn(
    'The exception is limited to this exact upstream advisory and exact lockfile version. Remove it as soon as the upstream project publishes a verified fixed release.'
  );
  console.log(JSON.stringify(allowed, null, 2));
} else {
  console.log('Dependency audit passed with no vulnerabilities.');
}
