import { defineMultiCacheOptions } from "nuxt-multi-cache/dist/runtime/serverOptions";
import redisDriver from 'unstorage/drivers/redis'

export default defineMultiCacheOptions({
    route: {
        buildCacheKey(event) {
          const path = event.path
          // Handle specific routes that need query strings.
          if (path === '/movie' || path === '/movie/') {
            const { page, orderBy, filter_genre, year_filter } = getQuery(event)
            if ((page == 1 || typeof page == 'undefined') && (orderBy == 'date' || typeof orderBy == 'undefined') && !Boolean(filter_genre) && !Boolean(year_filter)) {
                return 'movie_page_1'
            } else {
                return 'no_cache_key'
            }
          } else if (path.startsWith('/tv-shows') || path.startsWith('/k-drama') || path.startsWith('/k-show') || path.startsWith('/k-sisa') || path.startsWith('/u-drama') || path.startsWith('/ott-web')) {
            const { page, orderBy } = getQuery(event)
            if ((page == 1 || typeof page == 'undefined') && (orderBy == 'date' || typeof orderBy == 'undefined')) {
                return path.replaceAll('/','') + '_page_1'
            } else {
                return 'no_cache_key'
            }
          }
    
          return path.split('?')[0]
        },
        storage: {
          driver: redisDriver({
            base: 'kokoatv_frontend:',
            db: 2
          })
        },
      },
})