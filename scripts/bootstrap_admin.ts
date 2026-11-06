/**
 * SECURE FIREBASE ADMINISTRATOR BOOTSTRAPPER
 * 
 * Usage:
 *   npx tsx scripts/bootstrap_admin.ts --email=alnukhbazubair@gmail.com
 *   npx tsx scripts/bootstrap_admin.ts --email=teacher@almaliki.edu.iq --role=teacher
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

async function bootstrapAdmin() {
  const args = process.argv.slice(2);
  let targetEmail = "alnukhbazubair@gmail.com";
  let targetRole = "admin";

  for (const arg of args) {
    if (arg.startsWith("--email=")) {
      targetEmail = arg.split("=")[1].trim().toLowerCase();
    }
    if (arg.startsWith("--role=")) {
      targetRole = arg.split("=")[1].trim().toLowerCase();
    }
  }

  console.log(`========================================================`);
  console.log(`SECURE FIREBASE ADMINISTRATOR BOOTSTRAPPER`);
  console.log(`Target Email: ${targetEmail}`);
  console.log(`Target Role: ${targetRole}`);
  console.log(`========================================================`);

  try {
    let user;
    try {
      user = await auth.getUserByEmail(targetEmail);
    } catch (err: any) {
      if (err.code === "auth/user-not-found") {
        console.log(`User not found in Firebase Auth. Creating user: ${targetEmail}...`);
        user = await auth.createUser({
          email: targetEmail,
          emailVerified: true,
          displayName: targetRole === "admin" ? "مدير المنصة العام" : "معلم المنهج",
        });
      } else {
        throw err;
      }
    }

    const isAdmin = targetRole === "admin";
    const isTeacher = targetRole === "teacher" || isAdmin;

    const claims = {
      admin: isAdmin,
      teacher: isTeacher,
      role: targetRole,
      assignedAt: new Date().toISOString(),
    };

    // Set cryptographically signed Custom Claims
    await auth.setCustomUserClaims(user.uid, claims);
    console.log(`✓ Custom Claims assigned successfully:`, claims);

    // Persist to trusted directory in Firestore
    const collectionName = isAdmin ? "admins" : "teachers";
    await db.collection(collectionName).doc(user.uid).set({
      uid: user.uid,
      email: user.email,
      role: targetRole,
      isAdmin,
      isTeacher,
      bootstrappedAt: new Date().toISOString(),
    }, { merge: true });

    console.log(`✓ Directory record created in Firestore: /${collectionName}/${user.uid}`);
    console.log(`========================================================`);
    console.log(`SUCCESS: User ${targetEmail} (${user.uid}) is now a verified ${targetRole.toUpperCase()}`);
    console.log(`========================================================`);
  } catch (error) {
    console.error("❌ Failed to bootstrap administrator:", error);
    process.exit(1);
  }
}

bootstrapAdmin();
