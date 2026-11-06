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
    baseURL: 'http://127.0.0.1:3000',
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
    command: 'NODE_ENV=test VITE_E2E_MODE=true npx tsx server.ts',
    url: 'http://127.0.0.1:3000/api/health',
    reuseExistingServer: true,
    timeout: 60000,
  },
});
