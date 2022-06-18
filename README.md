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

Go to test.js change location of file login.html to your location file.
ex: my location of file login.html is D:/FPT Course/5 - Summer 2022/SWT301/Selenium-js/logins/login.html
```sh
await driver.get("file:///D:/FPT Course/5 - Summer 2022/SWT301/Selenium-js/logins/login.html");
```

## Run test
```sh
cd tests
node test.js
```

## Process
Selenium automatic run login.html file
Default of username and password:
```sh
username = "admin";
password = "1";
```
- If username and password correct redirect to welcome page.
- Else redirect to wrong page.
 

Title of each page print in terminal.
```sh
4 stasus of login:
Status is: Welcom
Status is: Wrong Password
Status is: Wrong Username
Status is: Wrong Username and Password
```
> Note: You can change default account in login.js or test case in test.js

## Source
[link](https://www.lambdatest.com/blog/automation-testing-with-selenium-javascript/)