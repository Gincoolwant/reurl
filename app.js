const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect(process.env.MongoDB_URI_reurl)
const db = mongoose.connection

db.on('error', () => {
  console.log('error:', error)
})

db.on('open', () => {
  console.log('MongoDB is connecting')
})

const exphbs = require('express-handlebars')
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

// app.post('/urls/results', (req, res) => {
//   res.send('here is your url')
// })

app.listen(port, () => {
  console.log(`App is connecting on http://localhost:${port}`)
})