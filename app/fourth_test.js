"use strict"; 
var webdriver = require("selenium-webdriver"),
SeleniumServer = require("selenium-webdriver/remote").SeleniumServer;
var chrome = require("selenium-webdriver/chrome");

var cbtHub = "http://hub.crossbrowsertesting.com:80/wd/hub";
var fdrRDW = "https://fdr.rdw.nl";
var googleSite = "https://www.google.com";

var username = 'yourusername@yourcompany.com';
var authkey = 'yourauthkey';

// Make sure the PATH is set to find ChromeDriver. I'm on a Unix
// system. You'll need to adapt to whatever is needed for
// Windows. Actually, since you say that you can get a browser to show
// up if you don't try to specify options, your ChromeDriver is
// probably already on your PATH, so you can probably skip this.
process.env["PATH"] += ";C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\chromedriver\\lib\\chromedriver\\";

var options = new chrome.Options();


var caps = {
    'name': 'Basic Test Example',
    'build': '1.0',
    'browserName': 'Chrome',
    'version': '10',
    'platform': 'Windows 7 64-Bit',
    'screenResolution': '1366x768'
}

caps.username = username;
caps.password = authkey;

var driver = new webdriver.Builder()
  .usingServer(googleSite)
  .withCapabilities(caps)
  .build();

/**
var driver = new webdriver.Builder()
    .usingServer(cbtHub)
    .withCapabilities(caps)
    .build();

function checkTitle() {
    driver.getTitle()
    .then(function(title) {
         console.log("The title is: " + title)
     });
    return webdriver.until.titleIs('Selenium Test Example Page');
}
 
function handleFailure(err) {
     console.error('Something went wrong!\n', err.stack, '\n');
     quitDriver();
} 
function quitDriver() {
    console.log("WebDriver is about to close.");
    driver.quit();
} 
driver.get('http://crossbrowsertesting.github.io/selenium_example_page.html'); 
driver.wait(checkTitle, 1000).then(quitDriver, handleFailure);
 */