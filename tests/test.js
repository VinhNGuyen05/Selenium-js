const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {

    var username = "admin";
    var password = "1";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();


    //To fetch http://google.com from the browser with our code.
    await driver.get("file:///D:/FPT Course/5 - Summer 2022/SWT301/Selenium-js/logins/login.html");

    //To send a search query by passing the value in searchString.
    await driver.findElement(By.id("username")).sendKeys(username, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await driver.findElement(By.id("submit")).click();

    //Verify the page title and princdt it
    var title = await driver.getTitle();
    console.log('Log is:', title);

    //It is always a safe practice to quit the browser after execution
    await driver.quit();

}

example()