const mongoose = require('mongoose')
mongoose.connect(process.env.MongoDB_URI_reurl)
const db = mongoose.connection

db.on('error', () => {
  console.log('error:', error)
})

db.on('open', () => {
  console.log('MongoDB is connecting')
})