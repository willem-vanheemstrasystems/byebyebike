var assert = require('assert');
var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var chrome = require("selenium-webdriver/chrome");

// Make sure the PATH is set to find ChromeDriver (minimum 2.36 version required).
process.env["PATH"] += ";C:\\ChromeDriver\\2.36\\";

var options = new chrome.Options();
options.addArguments("start-maximized");
options.addArguments("disable-popup-blocking");
options.addArguments("test-type"); 
var driver = new webdriver.Builder().
withCapabilities(options.toCapabilities()).build();

const url = "https://fdr.rdw.nl/";
const brand = "BATAVUS";
const frame_number = "12345678";

async function start() {
    driver.get(url)
    .then(enterSearchCriteria)
    .then(extractSearchResults)
    .then(quitBrowser);
}

start();

function enterSearchCriteria(){
    console.log("Entering search criteria, brand: ", brand);
    driver.wait(
        until.elementLocated(By.id("ctl00_cntMaincol_ctrlZoekOpFramenummer_drpMerk")), 100
    ).then(element => {
        selectByVisibleText(element, brand)
    });
    console.log("Entering search criteria, frame number: ", frame_number);
    driver.findElement(By.id("ctl00_cntMaincol_ctrlZoekOpFramenummer_frameNr")).sendKeys(frame_number + webdriver.Key.ENTER);
    driver.sleep(500);
}

function extractSearchResults(){
    console.log("Extracting search results");
    var promiseTitle = driver.getTitle();
    promiseTitle.then(function(title) {
      console.log("Title: " + title);
    });

    var promiseSearchResults = driver.findElement(By.id("ctl00_cntMaincol_ctrlFietsMelding_lblMelding")).getText();
    promiseSearchResults.then(function(searchResults){
      console.log("Search results: " + searchResults);
    });
}

function selectByVisibleText(select, textDesired) {
    select.findElements(By.tagName('option'))
    .then(options => {
        options.map(option => {
            option.getText().then(text => {
                if (text == textDesired)
                    option.click();
            });
        });
    });
}

function quitBrowser(){
    console.log("Quiting browser");
    driver.quit();
}
