const Movie = require('../models/movie.model')

const getAllMoviesHandler = async (req, h) => {
  try {
    const movies = await Movie.find()
    const response = h.response({
      statusCode: 200,
      message: 'Success',
      data: movies,
    })
    response.statusCode = 200
    return response
  } catch (err) {
    const response = h.response({
      statusCode: 500,
      error: 'Internal Server Error',
      message: err.message || 'Something went wrong',
    })
    response.statusCode = 500
    return response
  }
}

const getMovieByIdHandler = async (req, h) => {
  const { movieId } = req.params

  try {
    const movie = await Movie.findById(movieId)
    if (movie === null) {
      const response = h.response({
        statusCode: 404,
        error: 'Not Found',
        message: 'Movie not found',
      })
      response.statusCode = 404
      return response
    }
    const response = h.response({
      statusCode: 200,
      message: 'Success',
      data: movie,
    })
    response.statusCode = 200
    return response
  } catch (err) {
    const response = h.response({
      statusCode: 500,
      error: 'Internal Server Error',
      message: err.message || 'Something went wrong',
    })
    response.statusCode = 500
    return response
  }
}

const addMovieHandler = async (req, h) => {
  const movie = req.payload

  try {
    const newMovie = await Movie.create(movie)
    const response = h.response({
      statusCode: 201,
      message: 'Created a new movie successfully',
    })
    response.statusCode = 201
    return response
  } catch (err) {
    const response = h.response({
      statusCode: 500,
      error: 'Internal Server Error',
      message: err.message || 'Something went wrong',
    })
    response.statusCode = 500
    return response
  }
}

const updateMovieByIdHandler = async (req, h) => {
  const { movieId } = req.params
  const movie = req.payload

  try {
    const result = await Movie.findByIdAndUpdate(movieId, movie, {
      new: true,
    })
    if (result === null) {
      const response = h.response({
        statusCode: 404,
        error: 'Not Found',
        message: 'Movie not found',
      })
      response.statusCode = 404
      return response
    }
    const response = h.response({
      statusCode: 200,
      message: 'Updated movies successfully',
    })
    response.statusCode = 200
    return response
  } catch (err) {
    const response = h.response({
      statusCode: 500,
      error: 'Internal Server Error',
      message: err.message || 'Something went wrong',
    })
    response.statusCode = 500
    return response
  }
}

const deleteMovieByIdHandler = async (req, h) => {
  const { movieId } = req.params

  try {
    const result = await Movie.findByIdAndDelete(movieId)
    if (result === null) {
      const response = h.response({
        statusCode: 404,
        error: 'Not Found',
        message: 'Movie not found',
      })
      response.statusCode = 404
      return response
    }
    const response = h.response({
      statusCode: 200,
      message: 'Deleted movies successfully',
    })
    response.statusCode = 200
    return response
  } catch (err) {
    const response = h.response({
      statusCode: 500,
      error: 'Internal Server Error',
      message: err.message || 'Something went wrong',
    })
    response.statusCode = 500
    return response
  }
}

module.exports = {
  getAllMoviesHandler,
  getMovieByIdHandler,
  addMovieHandler,
  updateMovieByIdHandler,
  deleteMovieByIdHandler,
}
