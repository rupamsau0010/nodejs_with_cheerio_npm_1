// Import dependencies
require("dotenv").config()
const request = require("request")
const cheerio = require("cheerio")

// get url
const URL = process.env.URL

request(URL, (err, response, html) => {
    if (!err && response.statusCode == 200) {
        const $ = cheerio.load(html)
        $('.post-preview').each((i, el) => {
            const title = $(el).find('.post-title').text().replace("jdh", '')
            const link = $(el).find('a').attr('href')
            const date = $(el).find('.post-date').text()
        })
    }
})