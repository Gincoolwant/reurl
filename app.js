const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('./config/mongoose')
const routes = require('./routes/index')

const app = express()
const port = 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

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

