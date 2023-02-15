const Hapi = require('@hapi/hapi')
const Mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./routes/movie.routes')

const init = async () => {
  dotenv.config()
  const PORT = process.env.PORT
  const HOST = process.env.HOST
  const MONGODB_URL = process.env.MONGODB_URL

  const server = Hapi.server({
    port: PORT,
    host: HOST,
  })

  Mongoose.set('strictQuery', true).connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  server.route(routes)
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
