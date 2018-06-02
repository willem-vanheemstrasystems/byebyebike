//var assert = require('assert');
var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var chrome = require('selenium-webdriver/chrome');
var options = new chrome.Options();

options.addArguments('start-maximized');
options.addArguments('test-type');
options.addArguments('chrome.switches','--disable-extensions');

var driver = new webdriver.Builder().withCapabilities(options.toCapabilities()).build();

driver.get('https://www.google.com');
