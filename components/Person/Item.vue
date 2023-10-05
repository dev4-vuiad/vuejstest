<script setup>
    const props = defineProps(['id', 'src', 'name', 'slug', 'pending'])
    let id = props.id
    let src = props.src
    let name = props.name
    let slug = props.slug

    watch(
        () => props.pending,
        () => {
            id = props.id
            src = props.src
            name = props.name
            slug = props.slug
        }
    )
</script>

<template>
    <div class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-wmovie" :objectid="id">
        <div class="movie__poster loading-bg">
            <NuxtLink :to="'/person/' + slug" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img width="300" height="450" :src="src" class="movie__poster--image lazyload" alt="" :key="id">
            </NuxtLink>
        </div>
        <div class="movie__body">
            <NuxtLink :to="'/person/' + slug" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <h3 class="masvideos-loop-movie__title movie__title">{{ name }}</h3>
            </NuxtLink>
        </div>
    </div>
</template>