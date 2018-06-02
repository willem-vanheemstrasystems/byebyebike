var webdriver = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");

// Make sure the PATH is set to find ChromeDriver. I'm on a Unix
// system. You'll need to adapt to whatever is needed for
// Windows. Actually, since you say that you can get a browser to show
// up if you don't try to specify options, your ChromeDriver is
// probably already on your PATH, so you can probably skip this.
process.env["PATH"] += ";C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\chromedriver\\lib\\chromedriver\\";

var options = new chrome.Options();

// Commented out because they are obviously not what you want.
// Uncomment and adapt as needed:
//
// options.setChromeBinaryPath("/tmp/foo");
// options.addArguments(["--blah"]);
options.addArguments('chrome.switches','--disable-extensions');

var driver = new webdriver.Builder().
   withCapabilities(options.toCapabilities()).build();

// driver.get("http://www.google.com");
driver.get("https://fdr.rdw.nl");