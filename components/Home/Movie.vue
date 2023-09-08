<script setup>
    const props = defineProps(['data', 'title'])
    let data = props.data
    let title = props.title
</script>
<template>
    <div class="home-movie-section-aside-header__inner">
        <div class="masvideos masvideos-movies ">
            <div class="movies columns-7">
                <div class="movies__inner">
                    <header class="home-section__header">
                        <h2 class="home-section__title">{{ title }}</h2>
                        <div class="home-section__action">
                            <NuxtLink to="/movie/" class="home-section__action-link link-movie">View all</NuxtLink>
                        </div>
                    </header>
                    <div v-for="(item, index) in data" :key="index" class="post-202538 movie type-movie status-publish has-post-thumbnail hentry movie_genre-222 movie_genre-224 movie_genre-wmovie movie_genre-220 movie_genre-221">
                        <div class="movie__poster">
                            <NuxtLink :to="'/movie/' + item.title"
                                class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                <img width="300"
                                    height="450"
                                    :src="item.src"
                                    :srcset="item.srcSet"
                                    class="movie__poster--image" alt="" loading="lazy"
                                    sizes="(max-width: 300px) 100vw, 300px">
                            </NuxtLink>
                        </div>
                        <div class="movie__body">
                            <div class="movie__info">
                                <div class="movie__info--head">
                                    <div class="original-title__single">
                                        {{ item.originalTitle }}
                                    </div>
                                    <div class="movie__meta">
                                        <span class="movie__meta--release-year">{{ item.year }}</span>
                                        <span class="movie__meta--genre">
                                            <template v-for="(genre, idx) in item.genres" :key="idx">
                                                <span v-if="idx > 0">, </span>
                                                <NuxtLink :to="'/movie-genre/' + encodeURIComponent(genre.name)" rel="tag"><span v-html="genre.name"></span></NuxtLink>
                                            </template>
                                        </span>
                                    </div>
                                    <NuxtLink :to="'/movie/' + item.title" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                        <h3 class="masvideos-loop-movie__title movie__title">
                                            {{ item.title }}
                                        </h3>
                                    </NuxtLink>
                                </div>
                                <div class="original-title">
                                    {{ item.originalTitle }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>