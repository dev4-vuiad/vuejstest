<script setup>

    const props = defineProps(['id', 'year', 'title', 'types', 'thumbnail'])
    const id = props.id
    const year = props.year
    const title = props.title
    const types = props.types
    const thumbnail = props.thumbnail
</script>

<template>
    <div class="post-202135 movie type-movie status-publish has-post-thumbnail hentry movie_genre-230 movie_genre-238 movie_genre-wmovie">
        <div class="movie__poster">
            <NuxtLink :to="{path: 'movie/' + id}" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img width="300" height="450" :src="thumbnail.src" class="movie__poster--image" alt="" loading="lazy" :srcset="thumbnail.srcset">
            </NuxtLink>
        </div>
        <div class="movie__body"><span class="movie__meta--release-year">{{ year }}</span>
            <NuxtLink :to="{path: 'movie/' + id}" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <h3 class="masvideos-loop-movie__title movie__title">{{ title }}</h3>
            </NuxtLink>
            <span class="movie__meta--genre">
                <template v-for="(name, index) in types" :key="index">
                    <span v-if="index > 0">, </span>
                    <NuxtLink :to="{path: 'movie-genre/' + name}" rel="tag">{{ name }}</NuxtLink>
                </template>
            </span>
        </div>
    </div>
</template>