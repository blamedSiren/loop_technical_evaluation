import {test} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {BoardPage} from '../pages/BoardPage';
import cases from '../data/testCases.json';

const CREDS = {email:'admin', password:'password123'};

for(const tc of cases){
    test(`TC${tc.id}: "${tc.task}" is in "${tc.column}" of ${tc.project} with tags[${tc.tags.join(', ')}]`, async ({page}) => {
        await new LoginPage(page).login(CREDS.email, CREDS.password);
        const board = new BoardPage(page);
        await board.openProject(tc.project);
        await board.verifyTask(tc.column, tc.task, tc.tags);
    });
}