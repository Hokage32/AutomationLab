const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})
describe('movie list functions', () => {


test('Cross off works', async () => {

    let inputBar = await driver.findElement(By.xpath('//input'))

    await inputBar.sendKeys('Dog World\n')
    await driver.sleep(3000)

    await driver.findElement(By.xpath('//li/span')).click()
    await driver.sleep(2000)




})

test('Delete button works', async () => {
    await driver.findElement(By.xpath("//button[text()='x']")).click()
    await driver.sleep(2000)
})

test('Messages work', async () => {
   const message = await driver.findElement(By.id('message'))

   expect(message.isDisplayed()).toBeTruthy()
})

})