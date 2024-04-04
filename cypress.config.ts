import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'cims-kmutt-testing',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })
    }
  },
  env: {
    BASE_URL: 'http://uat.cims.innosoftkmutt.com'
  }
})
