const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  url: {
    type: String,
    require: true
  },
  urlCode: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('url', urlSchema)
