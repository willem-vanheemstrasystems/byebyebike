# byebyebike
Bye Bye Bike

Uses the interface of FDR RDW at https://fdr.rdw.nl/ to query for bikes by id.

Example: 

Brand: BATAVUS
Registration Nr: 123456789

Request:

GET

https://fdr.rdw.nl/WebResource.axd?

d=nqPAycPCFfR40r8wHrOIbXW1tTQiDAzrASCi1-251yT0qBB1B2h6eVpTusSNfozTv8YFRwQz-rCLl9CSASaRDaS0K1A7SFI49EOs55SgIe8GoQtfP6WTq_zZX6deL8MNICZqicv1sXLmsZA6nzH7BCuMvi3V4PEWjrHWUtut19nInvOiMPNhaqIxG1dNx2M4C7J5RgDHnaho6dqBzhdyF0ytwNU1&
t=636432477240000000

Response:

Brand: BATAVUS
Model:	Niet geregistreerd
Type/color:	CITYBIKE / GEEL
Framenumber: 123456789
Stolen:	Yes
Registrationdate theft:	20-04-2009

## Scraping FDR RWD 

Based on 'An introduction to Web Scraping with NodeJS' at https://codeburst.io/an-introduction-to-web-scraping-with-node-js-1045b55c63f7


## Submitting form data FDR RWD

Based on 'Getting started with Selenium WebDriver for NodeJS' at https://team.goodeggs.com/getting-started-with-selenium-webdriver-for-node-js-f262a00c52e1 

NOTE: In case the Chrome Web Driver is not recognized, follow these instructions:

Ok assuming you are using Windows please try the following steps:

Download the latest version of ChromeDriver from here ChromeDriver

Extract the zip and place the contents somewhere you know where it is for example "C:\Users\UserName\AppData\ChromeDriver"

Go to your Control Panel -> System -> Edit the System Variables. Click on the "environment variables" button.

In the system variables box there will be a variable named "Path" select it and click edit. Copy and paste the path to the containing directory of the chromedriver.exe you downloaded onto the end of the variable value and end it with a semi-colon.

Click ok and again to close environment variables and again to close system properties.

Close and reopen your terminal window.

Run the command again.

I hope this helps - there is a good tutorial here (http://simpleprogrammer.com/2014/02/03/selenium-with-node-js/)

Run the following command for the browser to be GUI tested:

```javascript
mocha integration-test.coffee --compilers coffee:coffee-script/register
```


## Submitting form data FDR RWD

Based on 'Selenium with NodeJS' at https://simpleprogrammer.com/selenium-with-node-js/

Then, execute the code by running:

```javascript
node first_test.js
```

If you run into this problem:

https://atablogs.agiletestingalliance.org/selenium/how-to-solve-disable-developer-mode-extensions-pop-up-in-chrome-using-selenium-and-node-js/

## Advanced form submission of FDR site

Based on 'Getting started with Selenium + NodeJS' at https://help.crossbrowsertesting.com/selenium-testing/getting-started/javascript/

Based on 'Selenium WebDriver: Learn to automate a browser with WebDriver and JavaScript' at https://umaar.com/dev-tips/124-webdriver-js/

## Sending Keys 

Based on 'Sending Keys in Selenium in NodeJS' at http://www.softpost.org/selenium-with-node-js/sending-keys-in-selenium-in-node-js/

Download and install ChromeDriver for Windows from here

http://chromedriver.storage.googleapis.com/index.html?path=2.36/

Run 

```javascript
node eight_test.js
```

## Express

Based on 'Express web framework (Node.js/JavaScript)' at https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs

