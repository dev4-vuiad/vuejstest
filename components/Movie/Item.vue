<script setup>
    import { onBeforeUpdate } from 'vue'

    const props = defineProps(['id', 'link', 'year', 'title', 'originalTitle', 'genres', 'src', 'srcSet'])
    const renderCount = ref(0)
    let id = props.id
    let year = props.year
    let title = props.title
    let originalTitle = props.originalTitle
    let genres = props.genres
    let src = props.src
    let srcSet = props.srcSet

    onBeforeUpdate(() => {
        const oldId = id
        id = props.id
        year = props.year
        title = props.title
        originalTitle = props.originalTitle
        genres = props.genres
        src = props.src
        srcSet = props.srcSet
        if (oldId !== id) {
            renderCount.value ++
        }
    })
</script>

<template>
    <div class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-wmovie" :postid="id">
        <div class="movie__poster loading-bg">
            <NuxtLink :to="'/movie/' + encodeURIComponent(title)" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img
                    width="300" height="450"
                    :src="src"
                    :srcset="srcSet"
                    class="movie__poster--image lazyload" alt="" :key="renderCount" />
            </NuxtLink>
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
                                    <NuxtLink :to="'/movie-genre/' + encodeURIComponent(genre.name)" rel="tag"><span v-html="genre.name"></span></NuxtLink>
                                </template>
                            </span>
                    </div>
                    <NuxtLink :to="'/movie/' + encodeURIComponent(title)" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                        <h3 class="masvideos-loop-movie__title  movie__title">{{ title }}</h3>
                    </NuxtLink>
                </div>
                <div class="original-title">
                    {{ originalTitle }}
                </div>
            </div>
        </div>
    </div>
</template>