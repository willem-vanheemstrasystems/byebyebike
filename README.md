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

