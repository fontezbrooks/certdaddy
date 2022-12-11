const { _electron: electron } = require('playwright');
const { test, expect } = require('@playwright/test')

test('Should Click Create Csr', async () => {
    const electronApp = await electron.launch({ args: ['./dist/main.js'] })
                          // @ts-ignore
    const appPath = await electronApp.evaluate(async ({ app}) => {
        return app.getAppPath()
    });

    const window = await electronApp.firstWindow();
    window.on('console', console.log);
    const locator = window.getByTestId('createCsrButton');

    expect(await locator.isVisible()).toBe(true);
})

test('Should Click Create Pfx', async () => {
    const electronApp = await electron.launch({ args: ['./dist/main.js'] })

    const window = await electronApp.firstWindow();

    const locator = window.getByTestId('createPfxButton');
    expect(await locator.isVisible()).toBe(true);

    // await electronApp.close();
});

test('Should Click Decode Csr Button', async () => {
    const electronApp = await electron.launch({ args: ['./dist/main.js'] })

    const window = await electronApp.firstWindow();

    const locator = window.getByTestId('decodeCsrButton');
    expect(await locator.isVisible()).toBe(true);
    await window.click('text=DECODE CSR');
    // await electronApp.close();
});

test('Should Click COMBINE PUBLIC AND PRIVATE KEY Button', async () => {
    const electronApp = await electron.launch({ args: ['./dist/main.js'] })

    const window = await electronApp.firstWindow();

    const locator = window.getByTestId('combinePubAndPrivButton');
    expect(await locator.isVisible()).toBe(true);

    await electronApp.close();
});
