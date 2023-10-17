<script setup>
    const props = defineProps(['data', 'title', 'base', 'type'])
    const base = props.base || 'movie-genre'
    let data = props.data
    let title = props.title
    const type = props.type || 'movie'
    
    onBeforeUpdate(() => {
        title = props.title
        data = props.data
    })
</script>

<template>
    <div id="masvideos_movies_widget-2" class="widget masvideos masvideos_movies_widget masvideos-movies-widget">
        <div class="widget-header"><span class="widget-title">{{ title }}</span></div>
        <div class="masvideos masvideos-movies ">
            <div class="movies columns-1">
                <div class="movies__inner">
                    <div v-for="(item, index) in data" :key="index"
                        class="movie type-movie status-publish has-post-thumbnail hentry" :postid="item.id">
                        <div class="movie__body">
                            <span class="movie__meta--release-year">{{ item.year }}</span>
                            <NuxtLink :to="'/' + type + '/' + item.slug" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                <h3 class="masvideos-loop-movie__title  movie__title">{{ item.tvshowTitle || item.title }}</h3>
                            </NuxtLink>
                            <span class="movie__meta--genre">
                                <template v-for="(genre, idx) in item.genres" :key="genre">
                                    <span v-if="idx > 0">, </span>
                                    <NuxtLink :to="'/' + base + '/' + genre.slug" rel="tag"><span v-html="genre.name"></span></NuxtLink>
                                </template>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>