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

run the app:
```javascript
> SET DEBUG=app:* & npm start
```

Then load http://localhost:3000/ in your browser to access the app.

Note: You could also start the app just using the npm start command. Specifying the DEBUG variable as shown enables console logging/debugging.

Using Nodemon (that checks files for chnages and automatically reloads the server):

run app:
```javascript
> SET DEBUG=app:* & npm run devstart
```

## Database

Following the example of the [Library](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose), instead we use these entities:

Book=Bicycle

BookInstance=BicycleInstance

Author=Cyclist

Genre=Brand

Bicycle:
- cyclist
- registration_number
- brand
- url

BicycleInstance:
- bicycle
- status
- reported_on
- url

Cyclist:
- first_name
- family_name
- date_of_birth
- url

Brand:
- name
- url

## Database MongoDB Sandbox

We'll be using a free subscription MongoDB in the cloud Sandbox:

https://mlab.com/plans/pricing/#plan-type=sandbox

Account Name: byebyebicycle 
Username: wvanheemstra
Password: =on request only=

PLAN TYPE	Sandbox

CLOUD PROVIDER	Amazon Web Services

REGION	Europe (Ireland) (eu-west-1)

PLAN LINE & SIZE	
Sandbox FREE

STORAGE 
0.5 GB

MONGODB VERSION	3.4.15 (MMAPv1)

DATABASE NAME	byebyebicycle

Total Price	$0

To connect using the mongo shell:

```javascript
mongo ds247330.mlab.com:47330/byebyebicycle -u <dbuser> -p <dbpassword>
```

To connect using a driver via the standard MongoDB URI

```javascript
mongodb://<dbuser>:<dbpassword>@ds247330.mlab.com:47330/byebyebicycle
```

Database username: wvanheemstra
Database password: -on request only-

The database can be accessed as follows:

mongodb://wvanheemstra:your_password@ds247330.mlab.com:47330/byebyebicycle

Popolate the database as follows:

```javascript
node populatedb mongodb://wvanheemstra:your_password@ds247330.mlab.com:47330/byebyebicycle
```
