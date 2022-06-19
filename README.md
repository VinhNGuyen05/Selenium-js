# Getting Started with Selenium with JS login-test
## _This file will help you get started with topic login-test._

## Features

- Login page use file HTLM, CSS and JS
- Test by Selenium-webdriver

## Tech

Project use:

- [node.js]
- [selenium-web driver]

## Set up environment
Verify if NodeJS and NPM are already installed in system: 
```sh
node -v 
v16.13.0
npm -v
8.10.0
```
Run the following command on the terminal to install browser drivers for Chrome and Firefox:
```sh
npm install --save selenium-webdriver chromedriver geckodriver
```

Project has 2 domain: to test
```sh
https://selenium-js.web.app
https://selenium-js.firebaseapp.com
```
Selenium get domain of project to run
await driver.get("https://selenium-js.web.app");

## Run test
```sh
cd tests
node test.js
```

## Process
Selenium automatic run login.html file
Default of username and password:
```sh
account 01:
username = "admin";
password = "1";

account 02:
username = "user";
password = "1";

account 03:
username = "test";
password = "1";
```
- If username and password correct redirect to welcome page.
- Else redirect to wrong page.
 

Title of each page print in terminal.
```sh
3 stasus of login:
Welcom
Wrong Password
Wrong Username
```
> Note: You can change default account in login.js or test case in test.js

## Source
[link](https://www.lambdatest.com/blog/automation-testing-with-selenium-javascript/)