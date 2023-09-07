<script setup>
    const props = defineProps(['data', 'title', 'base', 'type'])
    const base = props.base || 'movie-genre'
    const data = props.data
    const title = props.title
    const type = props.type || 'movie'
</script>

<template>
    <div id="masvideos_movies_widget-2" class="widget masvideos masvideos_movies_widget masvideos-movies-widget">
        <div class="widget-header"><span class="widget-title">{{ title }}</span></div>
        <div class="masvideos masvideos-movies ">
            <div class="movies columns-1">
                <div class="movies__inner">
                    <div v-for="(item, index) in data" :key="index"
                        class="post-201925 movie type-movie status-publish has-post-thumbnail hentry movie_genre-231 movie_genre-kmovie">
                        <div class="movie__body">
                            <span class="movie__meta--release-year">{{ item.year }}</span>
                            <NuxtLink :to="'/' + type + '/' + encodeURIComponent(item.title)" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                <h3 class="masvideos-loop-movie__title  movie__title">{{ item.tvshowTitle || item.title }}</h3>
                            </NuxtLink>
                            <span class="movie__meta--genre">
                                <template v-for="(genre, idx) in item.genres" :key="genre">
                                    <span v-if="idx > 0">, </span>
                                    <NuxtLink :to="'/' + base + '/' + encodeURIComponent(genre.name)" rel="tag"><span v-html="genre.name"></span></NuxtLink>
                                </template>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>