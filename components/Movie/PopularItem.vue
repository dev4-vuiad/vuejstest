<script setup>
    import { onBeforeUpdate } from 'vue'
    const props = defineProps(['link', 'year', 'title', 'genres', 'src'])
    let year = props.year
    let title = props.title
    let genres = props.genres
    let src = props.src

    onBeforeUpdate(() => {
        props.year = props.year
        props.title = props.title
        props.genres = props.genres
        props.src = props.src
    });
</script>

<template>
    <div class="post-202135 movie type-movie status-publish has-post-thumbnail hentry movie_genre-230 movie_genre-238 movie_genre-wmovie">
        <div class="movie__poster">
            <NuxtLink :to="'/movie/' + title" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img width="300" height="450" :src="src" class="movie__poster--image" alt="" loading="lazy">
            </NuxtLink>
        </div>
        <div class="movie__body"><span class="movie__meta--release-year">{{ year }}</span>
            <NuxtLink :to="'/movie/' + title" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <h3 class="masvideos-loop-movie__title movie__title">{{ title }}</h3>
            </NuxtLink>
            <span class="movie__meta--genre">
                <template v-for="(genre, index) in genres" :key="index">
                    <span v-if="index > 0">, </span>
                    <NuxtLink :to="'/movie-genre/' + genre.link" rel="tag">{{ genre.name }}</NuxtLink>
                </template>
            </span>
        </div>
    </div>
</template>