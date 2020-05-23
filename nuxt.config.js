export default {
	modules: [
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/api': {
      target: 'localhost:3000',
      pathRewrite: {
        '^/api': '/'
      }
    }
  }
}
