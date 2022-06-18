const { Builder, Capabilities, By } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await (await driver).get("http://127.0.0.1:5500/movieList/index.html");
});

// And an afterAll will do the opposite, it will run after all of our tests have ran
afterAll(async () => {
  await (await driver).quit();
});

test("able to add a movie to the list", async () => {
  await driver
    .findElement(By.xpath('//input[@placeholder="Add Movie"]'))
    .sendKeys("The Good, The Bad, & The Ugly");
  await driver.findElement(By.xpath('//button[text()="Add"]')).click();
  const movie = await driver.findElement(
    By.xpath('//span[text()="The Good, The Bad, & The Ugly"]')
  );

  const isDisplayed = await movie.isDisplayed();
  await driver.sleep(5000);
  expect(isDisplayed).toBeTruthy();
});

test("able to delete a movie from the list", async () => {
  await driver
    .findElement(By.xpath('//input[@placeholder="Add Movie"]'))
    .sendKeys("Butch Cassidy and the Sundance Kid");
  await driver.findElement(By.xpath('//button[text()="Add"]')).click();
  const movie = await driver.findElement(
    By.xpath('//span[text()="Butch Cassidy and the Sundance Kid"]')
  );
  const isDisplayed = await movie.isDisplayed();
  await driver.sleep(2000);
  expect(isDisplayed).toBeTruthy();
  await driver.findElement(By.id("ButchCassidyandtheSundanceKid")).click();
  await driver.sleep(2500);
  expect(isDisplayed).toBeFalsy;
});

describe("able to add 5 movies in a row", () => {
  test("movie1", async () => {
    await driver
      .findElement(By.xpath('//input[@placeholder="Add Movie"]'))
      .sendKeys("Saw 1");
    await driver.findElement(By.xpath('//button[text()="Add"]')).click();
    const movie = await driver.findElement(By.xpath('//span[text()="Saw 1"]'));

    const isDisplayed = await movie.isDisplayed();
    await driver.sleep(1000);
    expect(isDisplayed).toBeTruthy();
  });
  test("movie2", async () => {
    await driver
      .findElement(By.xpath('//input[@placeholder="Add Movie"]'))
      .sendKeys("Saw 2");
    await driver.findElement(By.xpath('//button[text()="Add"]')).click();
    const movie = await driver.findElement(By.xpath('//span[text()="Saw 2"]'));

    const isDisplayed = await movie.isDisplayed();
    await driver.sleep(1000);
    expect(isDisplayed).toBeTruthy();
  });
  test("movie3", async () => {
    await driver
      .findElement(By.xpath('//input[@placeholder="Add Movie"]'))
      .sendKeys("Saw 3");
    await driver.findElement(By.xpath('//button[text()="Add"]')).click();
    const movie = await driver.findElement(By.xpath('//span[text()="Saw 3"]'));

    const isDisplayed = await movie.isDisplayed();
    await driver.sleep(1000);
    expect(isDisplayed).toBeTruthy();
  });
  test("movie4", async () => {
    await driver
      .findElement(By.xpath('//input[@placeholder="Add Movie"]'))
      .sendKeys("Saw 4");
    await driver.findElement(By.xpath('//button[text()="Add"]')).click();
    const movie = await driver.findElement(By.xpath('//span[text()="Saw 4"]'));

    const isDisplayed = await movie.isDisplayed();
    await driver.sleep(1000);
    expect(isDisplayed).toBeTruthy();
  });
  test("movie5", async () => {
    await driver
      .findElement(By.xpath('//input[@placeholder="Add Movie"]'))
      .sendKeys("Saw 5");
    await driver.findElement(By.xpath('//button[text()="Add"]')).click();
    const movie = await driver.findElement(By.xpath('//span[text()="Saw 5"]'));

    const isDisplayed = await movie.isDisplayed();
    await driver.sleep(1000);
    expect(isDisplayed).toBeTruthy();
  });
});
