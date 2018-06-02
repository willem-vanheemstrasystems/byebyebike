const webdriver = require('selenium-webdriver');

const browser = new webdriver
    .Builder()
    .usingServer()
    .withCapabilities({
        'browserName': 'chrome'
    }).build();

async function start() {
    browser.get('https://www.google.com');
    const links = await browser.findElements(webdriver.By.css('[href^="/wiki/"]'))
    console.log('Found', links.length, 'Wiki links.' )
    browser.quit();
}

start();