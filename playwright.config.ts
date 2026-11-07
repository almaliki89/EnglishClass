import { defineConfig, devices } from '@playwright/test';

import fs from 'fs';
import path from 'path';

if (!process.env.PLAYWRIGHT_BROWSERS_PATH) {
  if (fs.existsSync('/ms-playwright')) {
    process.env.PLAYWRIGHT_BROWSERS_PATH = '/ms-playwright';
  } else if (fs.existsSync('/.playwright-browsers')) {
    process.env.PLAYWRIGHT_BROWSERS_PATH = '/.playwright-browsers';
  } else if (fs.existsSync(path.resolve(process.cwd(), '.playwright-browsers'))) {
    process.env.PLAYWRIGHT_BROWSERS_PATH = path.resolve(process.cwd(), '.playwright-browsers');
  }
}

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  expect: {
    timeout: 8000,
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: 'http://127.0.0.1:3001',
    trace: 'off',
    video: 'off',
    screenshot: 'only-on-failure',
    headless: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'PORT=3001 NODE_ENV=test npx tsx server.ts',
    url: 'http://127.0.0.1:3001/api/health',
    reuseExistingServer: false,
    timeout: 60000,
  },
});
