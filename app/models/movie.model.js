const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const schema = new Schema(
  {
    title: String,
    plot: String,
    cast: [String],
    year: Number,
  },
  {
    timestamps: true,
  }
)

module.exports = Mongoose.model('Movie', schema)
