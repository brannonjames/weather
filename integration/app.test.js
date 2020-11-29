const path = require('path');

describe('Weather App', () => {
  beforeAll(async () => {
      const entryPoint = `file:${path.join(__dirname, '../build/index.html')}`;
    await page.goto(entryPoint);
  });

  it('should be titled "Weather App"', async () => {
    await expect(page.title()).resolves.toMatch('Weather App');

    await page.waitForSelector('#display-input');

    const input = await page.$('#display-input');

    await input.focus();
    await input.type('Minneapolis');
    

    const suggestions = await page.$$('.search-suggestion');

    expect(suggestions.length).toBeGreaterThan(0);


    console.log(await (await input.getProperty('value')).jsonValue());
  });
});