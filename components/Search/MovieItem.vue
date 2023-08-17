<script setup>
    const props = defineProps(['title', 'originalTitle', 'src'])
    const title = props.title
    const originalTitle = props.originalTitle
    const src = props.src
</script>

<template>
    <div class="movie type-movie status-publish has-post-thumbnail hentry">
        <div class="movie__poster box-phim">
            <a :href="'/movie/' + title" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img :src="src" class="movie__poster--image">
            </a>
            <div class="box-movie">영화</div>
        </div>
        <div class="movie__body">
            <div class="movie__info">
                <div class="movie__info--head">
                    <a href="https://kokoatv.net/movie/%ec%82%ac%eb%9e%91%ec%9d%98-%ea%b3%a0%ea%b3%a0%ed%95%99"
                        class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                        <h3 class="masvideos-loop-movie__title  movie__title">{{ title }}</h3>
                    </a>
                    <div class="original-title__movie-search">
                        {{ originalTitle }}
                    </div>
                </div>
            </div>
        </div>
</div></template>