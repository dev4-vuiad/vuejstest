<script setup>
    const props = defineProps(['data', 'pending'])
    let data = props.data
    watch(
        () => props.pending,
        () => {
            data = props.data
        }
    )
</script>

<template>
    <div class="widget masvideos masvideos_movies_widget masvideos-movies-widget">
        <div class="widget-header"><span class="widget-title">주간 영화 인기컨텐츠</span></div>
        <div class="masvideos masvideos-movies">
            <div class="movies columns-1">
                <div class="movies__inner">
                    <div v-for="item in data" class="movie type-movie status-publish has-post-thumbnail hentry" :postid="item.id">
                        <div class="movie__body">
                            <span class="movie__meta--release-year">{{ item.postType == 'tv_show' ? item.postDate.substr(0, 10) : item.year }}</span>
                            <NuxtLink :to="(item.postType == 'tv_show' ? '/episode/' : '/movie/') + item.slug" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                <h3 class="masvideos-loop-movie__title movie__title search">{{ item.title }}</h3>
                            </NuxtLink>
                            <span class="movie__meta--genre">
                                <template v-for="(genre, idx) in item.genres">
                                    <span v-if="idx > 0">, </span>
                                    <NuxtLink :to="(item.postType == 'tv_show' ? '/tv-show-genre/' : '/movie-genre/') + genre.slug" class="movie__meta--genre" rel="tag">
                                        <span v-html="genre.name"></span>
                                    </NuxtLink>
                                </template>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>