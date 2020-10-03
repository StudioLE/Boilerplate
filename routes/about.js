/**
 * Asset routes module
 * @module routes/about
 */

/**
 * GET:/about
 * Update the user profile
 * @see module:lib/app
 */
const getAbout = async (req, res) => {
  return res.json({
    title: 'About',
    body: 'Hello, world.'
  })
}


module.exports = {
  getAbout
}
