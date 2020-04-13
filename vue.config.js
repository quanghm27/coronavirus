module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/coronavirus/'
    : '/',
    chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'covid-19'
        return args
      })
    }
  }