const Url = require('../urls')
const mongoose = require('./config/mongoose')

db.once('open', () => {
    Url.create({
      url: 'https://www.google.com',
      urlCode: 'qq123'
    })
  console.log('Seeder is ready.')
})