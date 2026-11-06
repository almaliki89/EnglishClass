import { auth } from '../lib/firebase';

/**
 * Returns authorization headers for backend API calls.
 * If running in E2E mode, provides 'Bearer e2e-admin-token' or 'Bearer e2e-student-token'.
 * In browser production, retrieves the current authenticated user's Firebase ID token.
 */
export async function getAuthHeaders(options: { asAdmin?: boolean } = {}): Promise<Record<string, string>> {
  const isE2EMode = typeof window !== 'undefined' && (
    import.meta.env.VITE_E2E_MODE === 'true' || 
    localStorage.getItem('e2e_mode') === 'true'
  );

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (isE2EMode) {
    headers['Authorization'] = options.asAdmin ? 'Bearer e2e-admin-token' : 'Bearer e2e-student-token';
    headers['x-e2e-mode'] = 'true';
    if (options.asAdmin) {
      headers['x-e2e-role'] = 'admin';
    }
    return headers;
  }

  try {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const token = await currentUser.getIdToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }
  } catch (err) {
    console.warn('Could not retrieve Firebase auth token for API request:', err);
  }

  return headers;
}
