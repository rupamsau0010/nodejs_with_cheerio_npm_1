// Import dependencies
require("dotenv").config()
const request = require("request")
const cheerio = require("cheerio")

// get url
const URL = process.env.URL

request(URL, (err, response, html) => {
    if (!err && response.statusCode == 200) {
        const $ = cheerio.load(html)
        const navbarNav = $(".navbar-nav")
        // console.log(navbarNav.text());
        // console.log(navbarNav.find('a').text());

        $('.navbar-nav a').each((i, el) => {
            const item = $(el).text()
            console.log(item);

            // get attibute
            const link = $(el).attr('href')
            console.log(link);  
        })
    }
})