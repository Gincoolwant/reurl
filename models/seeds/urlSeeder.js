const Url = require('../urls')
const db = require('./config/mongoose.js')

db.once('open', () => {
  Url.create({
    url: 'https://www.google.com',
    urlCode: 'qq123'
  })
  console.log('Seeder is ready.')
})
