const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function check(username, password, num) {
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();
    //To fetch login from the browser.
    await driver.get("https://selenium-js.web.app");
    //To send a search query by passing the value in searchString.
    await driver.findElement(By.id("username")).sendKeys(username, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await driver.findElement(By.id("submit")).click();
    //Verify the page title and princdt it
    var title = await driver.getTitle();
    console.log('Status of test case ' + num + ' is:', title);
    await driver.quit();
}

function testCase() {
    check("admin", "1", 1);
    check("user", "1", 2);
    check("userasd", "2eqe", 3);
    check("test", "2", 4);
    check("test234", "1", 5);
    check("test", "1", 6);
}

testCase()