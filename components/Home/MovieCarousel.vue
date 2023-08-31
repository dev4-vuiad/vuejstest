<script setup>
    const props = defineProps(['data'])
    let data = props.data
</script>

<template>
    <div class="section-movies-carousel-aside-header__inner">
        <header class="home-section__header section-movies-carousel-aside-header__header">
            <h2 class="home-section__title">최신 한국영화</h2>
            <div class="section-movies-carousel-aside-header__custom-arrows">
                <button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button"
                    aria-disabled="true" style="">Previous</button><button class="slick-next slick-arrow" aria-label="Next"
                    type="button" style="" aria-disabled="false">Next</button>
            </div>
            <div class="home-section__action"><NuxtLink to="/movie-genre/한국영화/" class="home-section__action-link">View All</NuxtLink>
            </div>
        </header>
        <div class="section-movies-carousel__carousel">
            <div class="movies-carousel__inner" data-ride="vodi-slick-carousel" data-wrap=".movies__inner">
                <div class="masvideos masvideos-movies ">
                    <div class="movies columns-6">
                        <div class="movies__inner slick-initialized slick-slider">
                            <div class="slick-list draggable">
                                <div class="slick-track"
                                    style="opacity: 1; transform: translate3d(0px, 0px, 0px);">
                                    <div class="slick-slide slick-current slick-active" data-slick-index="0" v-for="(item, index) in data" :key="index" aria-hidden="false">
                                        <div>
                                            <div class="post-202504 movie type-movie status-publish has-post-thumbnail hentry movie_genre-230 movie_genre-238 movie_genre-kmovie"
                                                style="width: 100%; display: inline-block;">
                                                <div class="movie__poster"><NuxtLink
                                                        :to="'/movie/' + item.title"
                                                        class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link"
                                                        tabindex="0">
                                                        <img width="300" height="450"
                                                            :src="item.src"
                                                            :srcset="item.srcSet"
                                                            class="movie__poster--image" alt="" loading="lazy"
                                                            sizes="(max-width: 300px) 100vw, 300px"></NuxtLink>
                                                </div>
                                                <div class="movie__body">
                                                    <div class="movie__info">
                                                        <div class="movie__info--head">
                                                            <div class="original-title__single">{{ item.originalTitle }}</div>
                                                            <div class="movie__meta">
                                                                <span class="movie__meta--release-year">{{ item.year }}</span>
                                                                <span class="movie__meta--genre">
                                                                    <template v-for="(genre, idx) in item.genres" :key="idx">
                                                                        <span v-if="idx > 0">, </span>
                                                                        <NuxtLink :to="'/movie-genre/' + genre.link" rel="tag" tabindex="0">{{ genre.name }}</NuxtLink>
                                                                    </template>
                                                                </span>
                                                            </div>
                                                            <NuxtLink to="/movie/%ec%82%ac%eb%9e%91%ec%9d%98-%ea%b3%a0%ea%b3%a0%ed%95%99/"
                                                                class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link"
                                                                tabindex="0">
                                                                <h3 class="masvideos-loop-movie__title  movie__title">
                                                                    사랑의 고고학</h3>
                                                            </NuxtLink>
                                                        </div>
                                                        <div class="original-title">{{ item.originalTitle }}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>