import * as j from './janus'

j.init({
  debug: true,
  dependencies: j.useDefaultDependencies(),
  callback: () => {
    console.log('init successfully')
  },
})
