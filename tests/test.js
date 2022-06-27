const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

const testCase = [
    { username: "test", password: "1" },
    { username: "admin", password: "1312" },
    { username: "user", password: "1" },
    { username: "admin", password: "admin" },
    { username: "admin", password: "1" },
];
//5 test case

async function checkAccount(item) {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://selenium-js.web.app");
    await driver.findElement(By.id("username")).sendKeys(item.username, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(item.password, Key.RETURN);
    await driver.findElement(By.id("submit")).click();
    var title = await driver.getTitle();
    console.log('username: ' + item.username + ' | password: ' + item.password);
    if (title.localeCompare("Welcome") === 0) {
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