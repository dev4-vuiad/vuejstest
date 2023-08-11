const popularItems = [
    {
        id: "어 하이어 로", 
        year: 2023, 
        title: "어 하이어 로", 
        genres:  ["드라마", "로맨스", "서양영화"], 
        thumbnail: {
            src: "https://image002.modooup.com/wp-content/uploads/2023/08/gyJrK89QJlW7Uhsa6lSPZnrxbup.jpg",
            srcset: "https://image002.modooup.com/wp-content/uploads/2023/08/gyJrK89QJlW7Uhsa6lSPZnrxbup.jpg 300w, https://image002.modooup.com/wp-content/uploads/2023/08/gyJrK89QJlW7Uhsa6lSPZnrxbup-200x300.jpg 200w, https://image002.modooup.com/wp-content/uploads/2023/08/gyJrK89QJlW7Uhsa6lSPZnrxbup-150x225.jpg 150w, https://image002.modooup.com/wp-content/uploads/2023/08/gyJrK89QJlW7Uhsa6lSPZnrxbup-16x24.jpg 16w, https://image002.modooup.com/wp-content/uploads/2023/08/gyJrK89QJlW7Uhsa6lSPZnrxbup-24x36.jpg 24w, https://image002.modooup.com/wp-content/uploads/2023/08/gyJrK89QJlW7Uhsa6lSPZnrxbup-32x48.jpg 32w"
        }
    },
    {
        id: "완벽한 커플", 
        year: 2019, 
        title: "완벽한 커플", 
        genres: ["TV 영화", "드라마", "서양영화"], 
        thumbnail: {
            src: "https://image002.modooup.com/wp-content/uploads/2023/08/h4jGfhWaR4KaCjjrzUQqvsHS5wb-300x450.jpg",
            srcset: "https://image002.modooup.com/wp-content/uploads/2023/08/h4jGfhWaR4KaCjjrzUQqvsHS5wb-300x450.jpg 300w, https://image002.modooup.com/wp-content/uploads/2023/08/h4jGfhWaR4KaCjjrzUQqvsHS5wb-200x300.jpg 200w, https://image002.modooup.com/wp-content/uploads/2023/08/h4jGfhWaR4KaCjjrzUQqvsHS5wb-150x225.jpg 150w, https://image002.modooup.com/wp-content/uploads/2023/08/h4jGfhWaR4KaCjjrzUQqvsHS5wb-16x24.jpg 16w, https://image002.modooup.com/wp-content/uploads/2023/08/h4jGfhWaR4KaCjjrzUQqvsHS5wb-24x36.jpg 24w, https://image002.modooup.com/wp-content/uploads/2023/08/h4jGfhWaR4KaCjjrzUQqvsHS5wb-32x48.jpg 32w, https://image002.modooup.com/wp-content/uploads/2023/08/h4jGfhWaR4KaCjjrzUQqvsHS5wb.jpg 600w"
        }
    },
    {
        id: "악마들", 
        year: 2023, 
        title: "악마들", 
        genres: ["스릴러", "한국영화"], 
        thumbnail: {
            src: "https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b-300x450.jpg",
            srcset: "https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b-300x450.jpg 300w, https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b-200x300.jpg 200w, https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b-683x1024.jpg 683w, https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b-768x1151.jpg 768w, https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b-1025x1536.jpg 1025w, https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b-1367x2048.jpg 1367w, https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b-600x900.jpg 600w, https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b-150x225.jpg 150w, https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b-16x24.jpg 16w, https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b-24x36.jpg 24w, https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b-32x48.jpg 32w, https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b.jpg 1430w"
        }
    },
    {
        id: "너와 끝까지", 
        year: 2023, 
        title: "너와 끝까지", 
        genres: ["동양영화", "로맨스"], 
        thumbnail: {
            src: "https://image002.modooup.com/wp-content/uploads/2023/08/xEKHj0rjvEZ99uhXecELUbyqjj8.jpg",
            srcset: "https://image002.modooup.com/wp-content/uploads/2023/08/xEKHj0rjvEZ99uhXecELUbyqjj8.jpg 300w, https://image002.modooup.com/wp-content/uploads/2023/08/xEKHj0rjvEZ99uhXecELUbyqjj8-200x300.jpg 200w, https://image002.modooup.com/wp-content/uploads/2023/08/xEKHj0rjvEZ99uhXecELUbyqjj8-150x225.jpg 150w, https://image002.modooup.com/wp-content/uploads/2023/08/xEKHj0rjvEZ99uhXecELUbyqjj8-16x24.jpg 16w, https://image002.modooup.com/wp-content/uploads/2023/08/xEKHj0rjvEZ99uhXecELUbyqjj8-24x36.jpg 24w, https://image002.modooup.com/wp-content/uploads/2023/08/xEKHj0rjvEZ99uhXecELUbyqjj8-32x48.jpg 32w"

        }
    },
    {
        id: "서양영화", 
        year: 2020, 
        title: "서양영화", 
        genres: ["서양영화", "스릴러"], 
        thumbnail: {
            src: "https://image002.modooup.com/wp-content/uploads/image_webp/2020/12/564d83d009dfc133ef1064b7064a5ea8.webp",
            srcset: ""
        }
    },
    {
        id: "영원한 제국", 
        year: 1995, 
        title: "영원한 제국", 
        genres: ["드라마", "미스터리", "한국영화"], 
        thumbnail: {
            src: "https://image002.modooup.com/wp-content/uploads/2023/08/cetowkINhYSyBz3YTRn024I7H4Z-1.jpg",
            srcset: "https://image002.modooup.com/wp-content/uploads/2023/08/cetowkINhYSyBz3YTRn024I7H4Z-1.jpg 300w, https://image002.modooup.com/wp-content/uploads/2023/08/cetowkINhYSyBz3YTRn024I7H4Z-1-200x300.jpg 200w, https://image002.modooup.com/wp-content/uploads/2023/08/cetowkINhYSyBz3YTRn024I7H4Z-1-150x225.jpg 150w, https://image002.modooup.com/wp-content/uploads/2023/08/cetowkINhYSyBz3YTRn024I7H4Z-1-16x24.jpg 16w, https://image002.modooup.com/wp-content/uploads/2023/08/cetowkINhYSyBz3YTRn024I7H4Z-1-24x36.jpg 24w, https://image002.modooup.com/wp-content/uploads/2023/08/cetowkINhYSyBz3YTRn024I7H4Z-1-32x48.jpg 32w"
        }
    }
]

export default popularItems