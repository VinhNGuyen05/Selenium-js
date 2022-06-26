const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

const testCase = [
    { username: "test", password: "123" },
    { username: "test", password: "132" },
    { username: "selenium", password: "123" },
    { username: "admin", password: "admin" },
    { username: "user", password: "123" },
    { username: "group4", password: "test" },
];
//6 test case

async function checkAccount(item) {
    var result;
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://selenium-js.web.app");
    await driver.findElement(By.id("username")).sendKeys(item.username, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(item.password, Key.RETURN);
    await driver.findElement(By.id("submit")).click();
    var title = await driver.getTitle();
    console.log('username: ' + item.username + ' | password: ' + item.password);
    if (title.localeCompare("Welcome") === 0) {
        // result = " : pass";
        console.log('\x1b[32m%s\x1b[0m', 'pass');
    } else {
        console.log('\x1b[31m%s\x1b[0m', 'fail');
    }
    await driver.quit();
}

const test = async() => {
    console.clear();
    for (item of testCase) {
        await checkAccount(item);
    }
};

test();