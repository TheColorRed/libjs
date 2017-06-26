const libjs = require('libjs')

libjs.register(
  class Test extends libjs.component {
    domReady() {
      console.log('ready')
    }
    created() {
      console.log('Test created')
    }
  }
)
