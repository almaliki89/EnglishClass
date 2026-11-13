import { spawn } from 'node:child_process';

const npmExec = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const child = spawn(npmExec, ['tsx', 'server.ts'], {
  cwd: process.cwd(),
  env: { ...process.env, PORT: '3001', NODE_ENV: 'test', VITE_E2E_MODE: 'true' },
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

const stop = (signal) => {
  if (!child.killed) child.kill(signal);
};

process.on('SIGINT', () => stop('SIGINT'));
process.on('SIGTERM', () => stop('SIGTERM'));

child.on('error', (error) => {
  console.error(`Failed to start the E2E server: ${error.message}`);
  process.exitCode = 1;
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.exitCode = signal === 'SIGINT' ? 130 : 1;
  } else {
    process.exitCode = code ?? 1;
  }
});
