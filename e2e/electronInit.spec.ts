const { _electron: electron } = require('playwright');
const { test, expect } = require('@playwright/test')

test('example test', async () => {
    const electronApp = await electron.launch({ args: ['./dist/main.js'] })
    // @ts-ignore
    const appPath = await electronApp.evaluate(async ({ app}) => {
        return app.getAppPath()
    });
    console.log(appPath);

    // Wait for the first BrowserWindow to open
    // and return its Page object
    const window = await electronApp.firstWindow();
    console.log(await window.title());

    // await window.screenshot({ path: 'intro.png' })

    window.on('console', console.log);

    // await window.click('text=Create CSR');

    // close app
    await electronApp.close()
});
