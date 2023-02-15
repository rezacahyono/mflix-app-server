const Joi = require('joi')
const {
  getAllMoviesHandler,
  getMovieByIdHandler,
  addMovieHandler,
  updateMovieByIdHandler,
  deleteMovieByIdHandler,
} = require('../handlers/movie.handlers')

const routes = [
  {
    method: 'GET',
    path: '/api/movies',
    handler: getAllMoviesHandler,
  },
  {
    method: 'GET',
    path: '/api/movies/{movieId}',
    handler: getMovieByIdHandler,
    options: {
      validate: {
        params: Joi.object({
          movieId: Joi.string().min(24),
        }),
      },
    },
  },
  {
    method: 'POST',
    path: '/api/movies',
    handler: addMovieHandler,
    options: {
      validate: {
        payload: Joi.object({
          title: Joi.string().required(),
          plot: Joi.string().required(),
          cast: Joi.array().items(Joi.string().required()),
          year: Joi.number().required(),
        }),
      },
    },
  },
  {
    method: 'PUT',
    path: '/api/movies/{movieId}',
    handler: updateMovieByIdHandler,
    options: {
      validate: {
        params: Joi.object({
          movieId: Joi.string().min(24),
        }),
      },
    },
  },
  {
    method: 'DELETE',
    path: '/api/movies/{movieId}',
    handler: deleteMovieByIdHandler,
    options: {
      validate: {
        params: Joi.object({
          movieId: Joi.string().min(24),
        }),
      },
    },
  },
]

module.exports = routes
