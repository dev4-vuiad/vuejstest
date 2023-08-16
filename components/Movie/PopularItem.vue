<script setup>

    const props = defineProps(['link', 'year', 'title', 'genres', 'src'])
    const link = props.link
    const year = props.year
    const title = props.title
    const genres = props.genres
    const src = props.src
</script>

<template>
    <div class="post-202135 movie type-movie status-publish has-post-thumbnail hentry movie_genre-230 movie_genre-238 movie_genre-wmovie">
        <div class="movie__poster">
            <a :href="'/movie/' + title" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img width="300" height="450" :src="src" class="movie__poster--image" alt="" loading="lazy">
            </a>
        </div>
        <div class="movie__body"><span class="movie__meta--release-year">{{ year }}</span>
            <a :href="'/movie/' + title" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <h3 class="masvideos-loop-movie__title movie__title">{{ title }}</h3>
            </a>
            <span class="movie__meta--genre">
                <template v-for="(genre, index) in genres" :key="index">
                    <span v-if="index > 0">, </span>
                    <a :href="'/' + genre.link" rel="tag">{{ genre.name }}</a>
                </template>
            </span>
        </div>
    </div>
</template>