import type { IncomingMessage, ServerResponse } from "node:http";
import { app, initializeServer } from "../server";

// Vercel Node Function catch-all for the existing Express /api/* routes.
// Firebase Admin credentials are read only from server-side environment variables.
export default async function handler(
  req: IncomingMessage & { method?: string; url?: string },
  res: ServerResponse
): Promise<void> {
  await initializeServer();
  app(req as any, res as any);
}
