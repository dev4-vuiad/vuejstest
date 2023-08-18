<script setup>

    const props = defineProps(['link', 'year', 'title', 'originalTitle', 'genres', 'src'])
    const link = props.link
    const year = props.year
    const title = props.title
    const originalTitle = props.originalTitle
    const genres = props.genres
    const src = props.src
</script>

<template>
    <div class="post-202538 movie type-movie status-publish has-post-thumbnail hentry movie_genre-222 movie_genre-224 movie_genre-wmovie movie_genre-220 movie_genre-221">
        <div class="movie__poster">
            <a :href="'/movie/' + title" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img
                    width="300" height="450"
                    :src="src"
                    class="movie__poster--image" alt="" loading="lazy"
                    sizes="(max-width: 300px) 100vw, 300px">
            </a>
        </div>
        <div class="movie__body">
            <div class="movie__info">
                <div class="movie__info--head">
                    <div class="original-title__single">
                        {{ originalTitle }} 
                    </div>
                    <div class="movie__meta"><span class="movie__meta--release-year">{{ year }}</span>
                            <span class="movie__meta--genre">
                                <template v-for="(genre, index) in genres" :key="index">
                                    <span v-if="index > 0">, </span>
                                    <a :href="'/movie-genre/' + genre.link" rel="tag">{{ genre.name }}</a>
                                </template>
                            </span>
                    </div>
                    <a :href="'/movie/' + title" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                        <h3 class="masvideos-loop-movie__title  movie__title">{{ title }}</h3>
                    </a>
                </div>
                <div class="original-title">
                    {{ originalTitle }}
                </div>
            </div>
        </div>
    </div>
</template>