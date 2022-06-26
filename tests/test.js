const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

// const testCase = [
//     { username: "test", password: "123" },
//     { username: "test", password: "132" },
//     { username: "selenium", password: "123" },
//     { username: "admin", password: "admin" }
// ];

async function check(username, password) {
    var result;
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://selenium-js.web.app");
    await driver.findElement(By.id("username")).sendKeys(username, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await driver.findElement(By.id("submit")).click();
    var title = await driver.getTitle();
    if (title.localeCompare("Welcome") === 0) {
        result = " : test valid";
    } else {
        result = " : test invalid";
    }
    console.log('---- username: ' + username + ' | password: ' + password + result);
    await driver.quit();
}

async function testCase() {
    console.clear();
    await check("admin", "123");
    await check("user", "132");
    await check("selenium", "123");
    await check("admin", "admin");
}

testCase()