const express = require('express')
const router = express.Router()
const Url = require('../models/urls')
const urlEncode = require('../utilities/urlEncode_generator')
const port = 3000

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const { url } = req.body
  Url.findOne({ url })
    .lean()
    .then(urlSearchResult => {
      if (!urlSearchResult) {
        const encodeLength = 5
        const urlCode = urlEncode.urlEncode(encodeLength)
        Url.create({ url, urlCode })
        return res.render('index', { url, reurl: `http://localhost:${port}/${urlCode}` })
      }

      return res.render('index', { url: urlSearchResult.url, reurl: `http://localhost:${port}/${urlSearchResult.urlCode}` })
    })
    .catch(error => console.error(error))
})

router.get('/:urlCode', (req, res) => {
  const { urlCode } = req.params
  Url.findOne({ urlCode })
    .then(urlSearchResult => res.redirect(urlSearchResult.url))
    .catch(error => console.error(error))
})

module.exports = router
