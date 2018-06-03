const webdriver = require('selenium-webdriver');
var brand = "BATAVUS";
var frame_number = "123456789";

// Make sure the PATH is set to find ChromeDriver.
process.env["PATH"] += ";C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\chromedriver\\lib\\chromedriver\\";

const browser = new webdriver
    .Builder()
    .usingServer()
    .withCapabilities({
        'browserName': 'chrome'
    }).build();

async function start() {
    // const url = 'http://en.wikipedia.org/wiki/Wiki';
    const url = 'https://fdr.rdw.nl/'; 
    //browser.get(url);
    browser.get(url)
    .then(enterSearchCriteria)
    .then(clickSearchButton)
    .then(extractSearchResult)
    .then(quitBrowser);

    //const search_button = await browser.findElements(webdriver.By.css('[id^="ctl00_cntMaincol_btnZoeken"]'))
    //console.log('Found', search_button.length, 'search buttons.' )
    //browser.click(search_button);

//    const links = await browser.findElements(webdriver.By.css('[href^="/wiki/"]'))
//    console.log('Found', links.length, 'Wiki links.' )

//    browser.quit();
}

start();
//browser.manage().window().setSize(1000, 600).then(start);

async function enterSearchCriteria() {

    //const brand = "BATAVUS";
    //const frame_number = "123456789";

    const search_input_brand = await browser.findElements(webdriver.By.css('[id^="ctl00_cntMaincol_ctrlZoekOpFramenummer_drpMerk"]'))
    console.log('Found', search_input_brand.length, 'search input brands.')
    // Enter brand
//    webElement objBrand = await driver.findElement(By.id("ctl00_cntMaincol_ctrlZoekOpFramenummer_drpMerk"));
//    objBrand.clear();   //To clear the brand text field    
//    objBrand.sendkeys("BATAVUS"); // To send the input values in brand text field

    //const search_input_frame_number = await browser.findElements(webdriver.By.css('[id^="ctl00_cntMaincol_ctrlZoekOpFramenummer_frameNr"]'))
    const search_input_frame_number = await browser.findElement(webdriver.By.id("ctl00_cntMaincol_ctrlZoekOpFramenummer_frameNr"))
    
    //console.log('Found', search_input_frame_number.length, 'search input frame nrs.')
    // Enter frame number
    search_input_frame_number.click();
//    search_input_frame_number.clear();
//    search_input_frame_number.sendKeys("123456789");
//    browser.findElement(webdriver.By.id("ctl00_cntMaincol_ctrlZoekOpFramenummer_frameNr")).click();
//    browser.findElement(webdriver.By.id("ctl00_cntMaincol_ctrlZoekOpFramenummer_frameNr")).clear();
//    browser.findElement(webdriver.By.id("ctl00_cntMaincol_ctrlZoekOpFramenummer_frameNr")).sendKeys("123456789");
//    console.log('Search input frame number: ', search_input_frame_number.value)
}

async function clickSearchButton(){
    const search_button = await browser.findElements(webdriver.By.css('[id^="ctl00_cntMaincol_btnZoeken"]'))
    console.log('Found', search_button.length, 'search buttons.' )
    search_button[0].click();
    console.log("Search button clicked");
}

function clickFirstLink(){
    const link = '#mw-content-text > p a[title]';
    browser.click(link);
}

async function extractSearchResult(){
    console.log("Extracting search result");
    // ctl00_cntMaincol_ctrlFietsMelding_lblMelding
    const search_result = await browser.findElements(webdriver.By.css('[id^="ctl00_cntMaincol_ctrlFietsMelding_lblMelding"]'))
//    console.log("Search result: ", search_result[0]);
}

function quitBrowser(){
    console.log("Quiting browser");
//    browser.quit();
}