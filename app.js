const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Url = require('./models/urls')

const app = express()
const port = 3000

mongoose.connect(process.env.MongoDB_URI_reurl)
const db = mongoose.connection

db.on('error', () => {
  console.log('error:', error)
})

db.on('open', () => {
  console.log('MongoDB is connecting')
})

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:urlCode', (req, res) => {
  const { urlCode } = req.params
  Url.findOne({ urlCode })
    .then(url => res.redirect(url.url))
    .catch(error => console.error(error))
})

app.post('/', (req, res) => {
  const { url } = req.body
  Url.findOne({ url })
    .lean()
    .then(urlSearchResult => {
      if (!urlSearchResult) {
        const encodeLength = 5
        const urlCode = urlEncode(encodeLength)
        Url.create({ url, urlCode })
        return res.render('index', { url, reurl: `http://localhost:${port}/${urlCode}` })
      }

      return res.render('index', { url: urlSearchResult.url, reurl: `http://localhost:${port}/${urlSearchResult.urlCode}` })
    })
    .catch(error => console.error(error))

})

app.listen(port, () => {
  console.log(`App is connecting on http://localhost:${port}`)
})

// generate random password
function urlEncode(length) {
  let reurlCode = ''
  let collection = []

  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const upperCaseLetters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
  const numbers = '0123456789'.split('')

  collection = collection.concat(lowerCaseLetters).concat(upperCaseLetters).concat(numbers)

  for (let i = 1; i <= length; i++) {
    randomIndex = Math.floor(Math.random() * collection.length)
    reurlCode += collection[randomIndex]
  }

  return reurlCode
}

