export default defineNuxtPlugin(() => {
    return {
      provide: {
        apiBaseUrl: () => {
            const config = useAppConfig()
            return process.server ? config.apiBaseUrlSsr : config.apiBaseUrl
        },
        toTimeAgo: (d) => {
          const now = new Date()
          let date = new Date(d.replace(' ', 'T') + '+09:00')
          let disTs = Math.ceil((now.valueOf() - date.valueOf()) / 1000)
          if (disTs >= 48 * 3600) {
              d = new Date(date.valueOf() + 3600 * 9 * 1000)
              return d.getUTCFullYear() + '-' + (d.getUTCMonth() + 1).toString().padStart(2, '0') + '-' + d.getUTCDate().toString().padStart(2, '0')
          } else if (disTs >= 24 * 3600 && disTs < 48 * 3600) {
              return '1일 전'
          } else if (disTs >= 3600 && disTs < 24 * 3600) {
              let hours = Math.floor(disTs / 3600)
              return hours + '시간 전'
          } else if (disTs < 3600 && disTs >= 60) {
              let minutes = Math.floor(disTs / 60)
              return minutes + '분 전'
          } else {
              return disTs + '초 전'
          }
        },
        isProdEnv: () => {
          return process.env.NODE_ENV == 'production'
        }
      }
    }
  })