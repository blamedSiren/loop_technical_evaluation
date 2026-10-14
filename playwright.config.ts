import {defineConfig} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30_000,
    retries: 1,
    reporter: [['list'], ['html', {open: 'never'}]],
    use: {
        baseURL: 'https://create-asana-like-pr-39y5.bolt.host/',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },
});