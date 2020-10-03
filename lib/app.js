/**
 * App module
 * @module lib/app
 */

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const pretty = require('express-prettify')
const { origin } = require('./config')
const { getAbout } = require('../routes/about')

/**
 * Express app
 * @const
 * @namespace app
 */
const app = express()

// Logging middleware
app.use(morgan('tiny'))

// CORS middleware
app.use(cors({ origin }))

// Prettyify middleware
// Use ?pretty query string t return pretty json
app.use(pretty({ query: 'pretty' }))

/**
 * Home
 * @name GET:/
 */
app.get('/', (req, res) => res.json({
  title: 'Welcome',
  body: 'Hello, world.'
}))

/**
 * About
 * @name GET:/about
 * @see module:routes/user
 */
app.get('/about', getAbout)

/**
 * Return 404 error
 * @name 404
 */
app.use((req, res) => res.status(404).json({
  name: '404 Page Not Found',
  message: `Cannot ${req.method} ${req.path}`
}))

module.exports = app
