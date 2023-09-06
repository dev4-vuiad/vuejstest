<script setup>
    import { onBeforeUpdate } from 'vue'
    const props = defineProps(['link', 'year', 'title', 'genres', 'src', 'srcSet'])
    const renderCount = ref(0)
    let year = props.year
    let title = props.title
    let genres = props.genres
    let src = props.src
    let srcSet = props.srcSet

    onBeforeUpdate(() => {
        year = props.year
        title = props.title
        genres = props.genres
        src = props.src
        srcSet = props.srcSet
        renderCount.value ++
    });
</script>

<template>
    <div class="post-202135 movie type-movie status-publish has-post-thumbnail hentry movie_genre-230 movie_genre-238 movie_genre-wmovie">
        <div class="movie__poster">
            <NuxtLink :to="'/movie/' + encodeURIComponent(title)" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img width="300" height="450" :src="src" :srcset="srcSet" class="movie__poster--image" alt="" :key="renderCount">
            </NuxtLink>
        </div>
        <div class="movie__body"><span class="movie__meta--release-year">{{ year }}</span>
            <NuxtLink :to="'/movie/' + encodeURIComponent(title)" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
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