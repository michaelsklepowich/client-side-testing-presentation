'use strict';


const {Builder, By, Key, until} = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;


(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/');
    await driver.findElement(By.name('q')).sendKeys('espn', Key.RETURN);
    await driver.wait(until.titleIs('espn - Google Search'), 1000);
  } finally {
    await console.log('this is working')
    // await driver.quit()

  }
})();
