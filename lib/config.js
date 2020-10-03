const { env } = process

module.exports = {
  port: env.PORT || 3000,
  host: env.HOST || '0.0.0.0',
  origin: env.ORIGIN || 'http://example.com'
}
