# Loop Technical Evaluation

Data-Driven Playwright tests for Asana demo app written using TypeScript.

## Setup
    npm install
    npx playwright install

## Run
    npx playwright test
    npx playwright show-report

## Structure
- `data/testCases.json`: test scenarios (project, task, column, tags). Add an object here to add a new test; no new test code is needed. 
- `pages/LoginPage.ts`: login flow
- `pages/BoardPage.ts`: Project navigation and task/column/tag verification
- `test/board.spec.ts`: generates one test per JSON entry

## Notes
Requires demo app to be reachable: https://create-asana-like-pr-39y5.bolt.host/ ; may need a VPN due to internet provider security protocols.
Credentials admin / password123