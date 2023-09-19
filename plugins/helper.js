export default defineNuxtPlugin(() => {
    return {
      provide: {
        apiBaseUrl: () => {
            const config = useAppConfig()
            return process.server ? config.apiBaseUrlSsr : config.apiBaseUrl
        }
      }
    }
  })