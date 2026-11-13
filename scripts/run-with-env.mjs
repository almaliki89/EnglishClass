import { spawn } from 'node:child_process';

const args = process.argv.slice(2);
const separator = args.indexOf('--');

if (separator < 1 || separator === args.length - 1) {
  console.error('Usage: node scripts/run-with-env.mjs KEY=value [KEY=value ...] -- command [args...]');
  process.exit(2);
}

const assignments = args.slice(0, separator);
const [command, ...commandArgs] = args.slice(separator + 1);
const env = { ...process.env };

for (const assignment of assignments) {
  const match = assignment.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
  if (!match) {
    console.error(`Invalid environment assignment: ${assignment}`);
    process.exit(2);
  }
  env[match[1]] = match[2];
}

const child = spawn(command, commandArgs, {
  cwd: process.cwd(),
  env,
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

child.on('error', (error) => {
  console.error(`Could not start command "${command}": ${error.message}`);
  process.exitCode = 1;
});

child.on('exit', (code, signal) => {
  if (signal) {
    console.error(`Command terminated by signal ${signal}`);
    process.exitCode = 1;
  } else {
    process.exitCode = code ?? 1;
  }
});
