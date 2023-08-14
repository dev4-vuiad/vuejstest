const popularItems = [
    {
        id: "%ed%95%98%ed%8a%b8-%ec%98%a4%eb%b8%8c-%ec%8a%a4%ed%86%a4", 
        year: 2023, 
        title: "하트 오브 스톤", 
        genres:  ["서양영화", "스릴러", "액션"], 
        thumbnail: {
            src: "https://image002.modooup.com/wp-content/uploads/2023/08/fzDIKaIhMRCczXhmxXxVnJKfDBV.jpg",
            srcset: "https://image002.modooup.com/wp-content/uploads/2023/08/fzDIKaIhMRCczXhmxXxVnJKfDBV.jpg 300w, https://image002.modooup.com/wp-content/uploads/2023/08/fzDIKaIhMRCczXhmxXxVnJKfDBV-200x300.jpg 200w, https://image002.modooup.com/wp-content/uploads/2023/08/fzDIKaIhMRCczXhmxXxVnJKfDBV-150x225.jpg 150w"
        }
    },
    {
        id: "라방", 
        year: 2019, 
        title: "라방", 
        genres: ["범죄", "한국영화"], 
        thumbnail: {
            src: "https://image002.modooup.com/wp-content/uploads/2023/08/hvjR3E9K9iRlVTsTSEByPflZjQ0.jpg",
            srcset: "https://image002.modooup.com/wp-content/uploads/2023/08/hvjR3E9K9iRlVTsTSEByPflZjQ0.jpg 300w, https://image002.modooup.com/wp-content/uploads/2023/08/hvjR3E9K9iRlVTsTSEByPflZjQ0-200x300.jpg 200w, https://image002.modooup.com/wp-content/uploads/2023/08/hvjR3E9K9iRlVTsTSEByPflZjQ0-150x225.jpg 150w, https://image002.modooup.com/wp-content/uploads/2023/08/hvjR3E9K9iRlVTsTSEByPflZjQ0-16x24.jpg 16w, https://image002.modooup.com/wp-content/uploads/2023/08/hvjR3E9K9iRlVTsTSEByPflZjQ0-24x36.jpg 24w, https://image002.modooup.com/wp-content/uploads/2023/08/hvjR3E9K9iRlVTsTSEByPflZjQ0-32x48.jpg 32w"
        }
    },
    {
        id: "범죄도시-3", 
        year: 2023, 
        title: "범죄도시 3", 
        genres: ["범죄", "액션", "한국영화"], 
        thumbnail: {
            src: "https://image002.modooup.com/wp-content/uploads/2023/07/kOrXI09Ng7QMxB41TqTogSodn2b-300x450.jpg",
            srcset: "https://image002.modooup.com/wp-content/uploads/2023/07/jbremGnsRR4XZMDj97YHt20isRP-300x450.jpg 300w, https://image002.modooup.com/wp-content/uploads/2023/07/jbremGnsRR4XZMDj97YHt20isRP-200x300.jpg 200w, https://image002.modooup.com/wp-content/uploads/2023/07/jbremGnsRR4XZMDj97YHt20isRP-150x225.jpg 150w, https://image002.modooup.com/wp-content/uploads/2023/07/jbremGnsRR4XZMDj97YHt20isRP-16x24.jpg 16w, https://image002.modooup.com/wp-content/uploads/2023/07/jbremGnsRR4XZMDj97YHt20isRP-24x36.jpg 24w, https://image002.modooup.com/wp-content/uploads/2023/07/jbremGnsRR4XZMDj97YHt20isRP-32x48.jpg 32w, https://image002.modooup.com/wp-content/uploads/2023/07/jbremGnsRR4XZMDj97YHt20isRP.jpg 600w"
        }
    },
    {
        id: "스파이더맨-어크로스-더-유니버스", 
        year: 2023, 
        title: "스파이더맨: 어크로스 더 유니버스", 
        genres: ["모험", "애니메이션", "액션"], 
        thumbnail: {
            src: "https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-300x450.jpg",
            srcset: "https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-300x450.jpg 300w, https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-200x300.jpg 200w, https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-683x1024.jpg 683w, https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-768x1152.jpg 768w, https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-1024x1536.jpg 1024w, https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-1365x2048.jpg 1365w, https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-600x900.jpg 600w, https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-150x225.jpg 150w, https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-16x24.jpg 16w, https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-24x36.jpg 24w, https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-32x48.jpg 32w, https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-scaled.jpg 1707w"

        }
    },
    {
        id: "%ec%82%ac%eb%9e%91%ec%9d%98-%ea%b3%a0%ea%b3%a0%ed%95%99", 
        year: 2020, 
        title: "사랑의 고고학", 
        genres: ["드라마", "로맨스", "한국영화"], 
        thumbnail: {
            src: "https://image002.modooup.com/wp-content/uploads/2023/08/5sQss4mYJa0oONrHUn03SqeVHEx-300x450.jpg",
            srcset: "https://image002.modooup.com/wp-content/uploads/2023/08/5sQss4mYJa0oONrHUn03SqeVHEx-300x450.jpg 300w, https://image002.modooup.com/wp-content/uploads/2023/08/5sQss4mYJa0oONrHUn03SqeVHEx-200x300.jpg 200w, https://image002.modooup.com/wp-content/uploads/2023/08/5sQss4mYJa0oONrHUn03SqeVHEx-150x225.jpg 150w, https://image002.modooup.com/wp-content/uploads/2023/08/5sQss4mYJa0oONrHUn03SqeVHEx.jpg 600w"
        }
    },
    {
        id: "%eb%b9%88%ed%8b%88%ec%97%86%eb%8a%94-%ec%82%ac%ec%9d%b4", 
        year: 2023, 
        title: "빈틈없는 사이", 
        genres: ["드라마", "미스터리", "한국영화"], 
        thumbnail: {
            src: "https://image002.modooup.com/wp-content/uploads/2023/08/7eThTfPenyYVmZHMOMeE4oCB8fw-1.jpg",
            srcset: "https://image002.modooup.com/wp-content/uploads/2023/08/7eThTfPenyYVmZHMOMeE4oCB8fw-1.jpg 300w, https://image002.modooup.com/wp-content/uploads/2023/08/7eThTfPenyYVmZHMOMeE4oCB8fw-1-200x300.jpg 200w, https://image002.modooup.com/wp-content/uploads/2023/08/7eThTfPenyYVmZHMOMeE4oCB8fw-1-150x225.jpg 150w, https://image002.modooup.com/wp-content/uploads/2023/08/7eThTfPenyYVmZHMOMeE4oCB8fw-1-16x24.jpg 16w, https://image002.modooup.com/wp-content/uploads/2023/08/7eThTfPenyYVmZHMOMeE4oCB8fw-1-24x36.jpg 24w, https://image002.modooup.com/wp-content/uploads/2023/08/7eThTfPenyYVmZHMOMeE4oCB8fw-1-32x48.jpg 32w"
        }
    }
]

export default popularItems