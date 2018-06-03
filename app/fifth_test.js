const webdriver = require('selenium-webdriver');

// Make sure the PATH is set to find ChromeDriver.
process.env["PATH"] += ";C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\chromedriver\\lib\\chromedriver\\";

const browser = new webdriver
    .Builder()
    .usingServer()
    .withCapabilities({
        'browserName': 'chrome'
    }).build();

async function start() {
    browser.get('http://en.wikipedia.org/wiki/Wiki');
    const links = await browser.findElements(webdriver.By.css('[href^="/wiki/"]'))
    console.log('Found', links.length, 'Wiki links.' )
    browser.quit();
}

start();

function clickFirstLink(){
    const link = '#mw-content-text > p a[title]';
    browser.click(link);
}