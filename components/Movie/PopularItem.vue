<script setup>
    import { onBeforeUpdate } from 'vue'
    const props = defineProps(['id', 'link', 'year', 'title', 'slug', 'genres', 'src', 'srcSet'])
    const renderCount = ref(0)
    let id = props.id
    let year = props.year
    let title = props.title
    let slug = props.slug
    let genres = props.genres
    let src = props.src
    let srcSet = props.srcSet

    onBeforeUpdate(() => {
        const oldId = id
        id = props.id
        year = props.year
        title = props.title
        slug = props.slug
        genres = props.genres
        src = props.src
        srcSet = props.srcSet
        if (oldId !== id) { 
            renderCount.value ++
        }
    });
</script>

<template>
    <div class="movie type-movie status-publish has-post-thumbnail hentry" :postid="id">
        <div class="movie__poster loading-bg">
            <NuxtLink :to="'/movie/' + slug" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img width="300" height="450" :src="src" :srcset="srcSet" class="movie__poster--image lazyload" alt="" :key="renderCount">
            </NuxtLink>
        </div>
        <div class="movie__body"><span class="movie__meta--release-year">{{ year }}</span>
            <NuxtLink :to="'/movie/' + slug" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <h3 class="masvideos-loop-movie__title movie__title">{{ title }}</h3>
            </NuxtLink>
            <span class="movie__meta--genre">
                <template v-for="(genre, index) in genres" :key="index">
                    <span v-if="index > 0">, </span>
                    <NuxtLink :to="'/movie-genre/' + genre.slug" rel="tag"><span v-html="genre.name"></span></NuxtLink>
                </template>
            </span>
        </div>
    </div>
</template>