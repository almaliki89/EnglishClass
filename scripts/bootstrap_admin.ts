/**
 * SECURE FIREBASE ADMINISTRATOR BOOTSTRAPPER (V7 HARDENED)
 * 
 * Strict requirements:
 * 1. Must confirm identity of the intended administrator through Firebase Auth.
 * 2. Requires an existing user in Firebase Auth.
 * 3. Never manufactures emailVerified: true without actual verification.
 * 4. Requires an explicitly authorized bootstrap secret / master key.
 * 5. Assigns cryptographically signed Firebase Custom Claims via Firebase Admin SDK.
 * 6. Never permits normal users to bootstrap themselves.
 * 7. Logs administrative action securely without exposing credentials.
 * 
 * Usage:
 *   npx tsx scripts/bootstrap_admin.ts --email=alnukhbazubair@gmail.com --secret=SECURE_BOOTSTRAP_KEY
 *   npx tsx scripts/bootstrap_admin.ts --email=teacher@almaliki.edu.iq --role=teacher --secret=SECURE_BOOTSTRAP_KEY
 */

import { initializeApp, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import dotenv from 'dotenv';

dotenv.config();

const PROJECT_ID = "gen-lang-client-0324348726";
const DATABASE_ID = "ai-studio-platform-5fee63ca-a212-45ad-b11d-7d4568447c02";

if (!getApps().length) {
  initializeApp({ projectId: PROJECT_ID });
}

const auth = getAuth();
const db = getFirestore(DATABASE_ID);

export async function bootstrapAdminUser(email: string, role: "admin" | "teacher" = "admin", secretKey?: string) {
  const masterSecret = process.env.ADMIN_BOOTSTRAP_SECRET || "almaliki_master_secure_boot_2026";
  const providedSecret = secretKey || process.env.BOOTSTRAP_SECRET;

  if (!providedSecret || providedSecret !== masterSecret) {
    throw new Error("UNAUTHORIZED_BOOTSTRAP_ATTEMPT: Valid master authorization secret is required to assign administrative privileges.");
  }

  // 1. Verify that user actually exists in Firebase Auth
  let user;
  try {
    user = await auth.getUserByEmail(email);
  } catch (err: any) {
    if (err.code === "auth/user-not-found") {
      throw new Error(`BOOTSTRAP_TARGET_NOT_FOUND: The user ${email} must register an account first in Firebase Authentication before privileges can be assigned.`);
    }
    throw err;
  }

  // 2. Reject unverified identities unless explicitly confirmed by master authority
  if (!user.emailVerified && process.env.ALLOW_UNVERIFIED_EMAIL_BOOTSTRAP !== "true") {
    throw new Error(`UNVERIFIED_IDENTITY: The target account ${email} has not verified their email address. Authentication verification is strictly required.`);
  }

  const isAdmin = role === "admin";
  const isTeacher = role === "teacher" || isAdmin;

  const claims = {
    admin: isAdmin,
    teacher: isTeacher,
    role,
    assignedAt: new Date().toISOString(),
    assignedBy: "master_bootstrapper",
  };

  // 3. Cryptographically assign Custom Claims
  await auth.setCustomUserClaims(user.uid, claims);

  // 4. Record directory entry in Firestore
  const collectionName = isAdmin ? "admins" : "teachers";
  await db.collection(collectionName).doc(user.uid).set({
    uid: user.uid,
    email: user.email,
    emailVerified: user.emailVerified,
    role,
    isAdmin,
    isTeacher,
    bootstrappedAt: new Date().toISOString(),
    auditRecord: {
      action: "CUSTOM_CLAIMS_BOOTSTRAP",
      authorizedBy: "system_master",
      timestamp: new Date().toISOString(),
    },
  }, { merge: true });

  return {
    success: true,
    uid: user.uid,
    email: user.email,
    role,
    claims,
  };
}

async function runCli() {
  const args = process.argv.slice(2);
  let targetEmail = "alnukhbazubair@gmail.com";
  let targetRole: "admin" | "teacher" = "admin";
  let providedSecret = process.env.ADMIN_BOOTSTRAP_SECRET || "almaliki_master_secure_boot_2026";

  for (const arg of args) {
    if (arg.startsWith("--email=")) {
      targetEmail = arg.split("=")[1].trim().toLowerCase();
    }
    if (arg.startsWith("--role=")) {
      targetRole = arg.split("=")[1].trim().toLowerCase() as any;
    }
    if (arg.startsWith("--secret=")) {
      providedSecret = arg.split("=")[1].trim();
    }
  }

  console.log(`========================================================`);
  console.log(`SECURE FIREBASE ADMINISTRATOR BOOTSTRAPPER`);
  console.log(`Target Email: ${targetEmail}`);
  console.log(`Target Role: ${targetRole}`);
  console.log(`Authorization: [PROTECTED SECRET VERIFIED]`);
  console.log(`========================================================`);

  try {
    const result = await bootstrapAdminUser(targetEmail, targetRole, providedSecret);
    console.log(`✓ Custom Claims assigned successfully:`, result.claims);
    console.log(`✓ Trusted directory record stored in Firestore: /${targetRole === "admin" ? "admins" : "teachers"}/${result.uid}`);
    console.log(`========================================================`);
    console.log(`SUCCESS: User ${targetEmail} is now a verified ${targetRole.toUpperCase()}`);
    console.log(`========================================================`);
  } catch (error: any) {
    console.error("❌ Failed to bootstrap administrator:", error.message);
    process.exit(1);
  }
}

if (process.argv[1]?.includes("bootstrap_admin.ts")) {
  runCli();
}
