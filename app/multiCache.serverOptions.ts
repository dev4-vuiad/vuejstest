import { defineMultiCacheOptions } from "nuxt-multi-cache/dist/runtime/serverOptions";

export default defineMultiCacheOptions({
    route: {
        buildCacheKey(event) {
          const path = event.path
          // Handle specific routes that need query strings.
          if (path.startsWith('/movie')) {
            const { page, orderBy, filter_genre, year_filter } = getQuery(event)
            if (page == 1 && orderBy == 'date' && !Boolean(filter_genre) && !Boolean(year_filter)) {
                return 'movie_page_1'
            } else {
                return 'movie_page_' + page + '_orderby_' + orderBy + '_genre_' + filter_genre + '_year_' + year_filter
            }
          }
    
          return path.split('?')[0]
        },
      },
})