# Bornfight Assignment

## Task 1
The first assignemnt was to exploratory test the Bornfight Games Web Shop at the following URL: https://qa.bornfight.dev/ and prepare a bug report.

The bugs were reported in an instance of Jira accessible here: https://bornfight-zadatak.atlassian.net/jira/software/projects/BZ/boards/1

![Jira screenshot](https://i.ibb.co/M6nfXTx/chrome-az7u-HDgkrp.png)

They are sorted by priority and separated into bugs and improvements.

For the majority of the testing Chrome was used. For compatibility testing Browserstack was used and most popular devices were checked:

 - Android: Chrome
 - Android: Samsung Browser
 - iOS: Safari
 - iOS: Chrome
 - Desktop: Chrome
 - Desktop: Firefox
 - Desktop: Edge
 - Desktop: Opera

## Task 2
The end-to-end flow that was choosen was:
 - picking a game 
 - adding it to a cart
 - placing an order for it. 
 
It was chosen because it is the most basic functionality that needs to exist to justify the existence of the website and the flow that generates revenue and brings most value to the end user.

The flow was automated using Cypress and the IDE of choice was Visual Studio Code.
The Page Object Model code organising pattern was implemented to maximise the reusability of the codebase and to increase readability of the test.

**NOTE**: Since there are active bugs on the website that cause the flow to crash from time to time, the test might not always succeed. If it fails, simply re run the test until the bugs are fixed.

### Setup
In order to set up the test,  [node.js](https://nodejs.org/en/) needs to be installed. 
After cloning the repository, position yourseklf inside a shell in the root folder so that the package.json file is on the same level. Run the commnad: `npm install` to install all dependencies.

After that, the test can be run. There are 2 options:

 - to run the test in headless mode execute: `npm run test-headless`
 - to run the test in headed mode execute: `npm run test`

A test report is generated and saved in the folder: `/mochawesome-report`

## Task 3
Given the nature of the project being an e-commerce website it would be beneficial to test the following aspects:

 - Accessibility testing
 - Load/Peak performance testing
 - Security testing
