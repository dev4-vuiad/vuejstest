<script setup>

    const props = defineProps(['id', 'year', 'title', 'titleEn', 'types', 'thumbnail'])
    const id = props.id
    const year = props.year
    const title = props.title
    const types = props.types
    const titleEn = props.titleEn
    const thumbnail = props.thumbnail
</script>

<template>
    <div class="post-202538 movie type-movie status-publish has-post-thumbnail hentry movie_genre-222 movie_genre-224 movie_genre-wmovie movie_genre-220 movie_genre-221">
        <div class="movie__poster">
            <NuxtLink :to="{path: 'movie/' + id}" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img
                    width="300" height="450"
                    :src="thumbnail.src"
                    class="movie__poster--image" alt="" loading="lazy"
                    :srcset="thumbnail.srcset"
                    sizes="(max-width: 300px) 100vw, 300px">
            </NuxtLink>
        </div>
        <div class="movie__body">
            <div class="movie__info">
                <div class="movie__info--head">
                    <div class="original-title__single">
                        {{ titleEn }} 
                    </div>
                    <div class="movie__meta"><span class="movie__meta--release-year">{{ year }}</span>
                            <span class="movie__meta--genre">
                                <template v-for="(name, index) in types" :key="index">
                                    <span v-if="index > 0">, </span>
                                    <NuxtLink :to="{path: 'movie-genre/' + name}" rel="tag">{{ name }}</NuxtLink>
                                </template>
                            </span>
                    </div>
                    <NuxtLink :to="{path: 'movie/' + id}" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                        <h3 class="masvideos-loop-movie__title  movie__title">{{ title }}</h3>
                    </NuxtLink>
                </div>
                <div class="original-title">
                    {{ titleEn }}
                </div>
            </div>
        </div>
    </div>
</template>