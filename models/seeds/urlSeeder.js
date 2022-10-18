const Url = require('../urls')
const mongoose = require('mongoose')
mongoose.connect(process.env.MongoDB_URI_reurl)
const db = mongoose.connection

db.on('error', () => {
  console.log('error:', error)
})

db.once('open', () => {
    Url.create({
      url: 'https://www.google.com',
      urlCode: 'qq123'
    })
  console.log('Seeder is ready.')
})