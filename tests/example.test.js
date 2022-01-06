const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe("My first Puppeteer test", () => {
    it("should load the browser", async function () {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: false
        })
        const page = await browser.newPage()
        await page.goto('https://devexpress.github.io/testcafe/example/')
        await page.type('#developer-name', 'Uwakmfon')
        await page.click('#tried-test-cafe')
        await page.select('#preferred-interface','JavaScript API')

        const count = await page.$eval('p', element => element.length)
        console.log('The element count is: ' + count)

        const url = await page.url()
        expect(url).to.contain('github')
        await browser.close()
    })
}) 