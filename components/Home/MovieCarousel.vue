<script setup>
    const renderCount = ref(0)
    const props = defineProps(['data'])
    let data = props.data

    watch(
        () => props.data,
        () => {
            renderCount.value ++
            data = props.data
        }
    )

    onMounted(() => {
        // Bottom slider
        setTimeout(() => {
            let slider = $('#moviesCarousel').find('.slick-track').slick({
                slidesToShow: 6,
                slidesToScroll: 2,
                infinite: false,
                responsive: [{"breakpoint":768,"settings":{"slidesToShow":2,"slidesToScroll":1}},{"breakpoint":992,"settings":{"slidesToShow":3,"slidesToScroll":1}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":1}}]
            })
            $('#moviesCarousel').find('button.slick-next').on('click', function() {
                slider.slick('slickNext')
            })
            $('#moviesCarousel').find('button.slick-prev').on('click', function() {
                slider.slick('slickPrev')
            })
        }, 100)
    })
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
            <div class="home-section__action"><a href="/movie-genre/한국영화/" class="home-section__action-link">전체보기</a>
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
                                            <div class="movie type-movie status-publish has-post-thumbnail hentry"
                                                style="width: 100%; display: inline-block;" :postid="item.id">
                                                <div class="movie__poster">
                                                    <a
                                                        :href="'/movie/' + item.slug"
                                                        class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link"
                                                        tabindex="0">
                                                        <img 
                                                            :src="item.src"
                                                            :srcset="item.srcSet"
                                                            decoding="async"
                                                            class="movie__poster--image lazyload" alt=""
                                                            :key="renderCount"
                                                        />
                                                    </a>
                                                </div>
                                                <div class="movie__body">
                                                    <div class="movie__info">
                                                        <div class="movie__info--head">
                                                            <div class="original-title__single">{{ item.originalTitle || ' ' }}</div>
                                                            <div class="movie__meta">
                                                                <span class="movie__meta--release-year">{{ item.year || ' ' }}</span>
                                                                <span class="movie__meta--genre">
                                                                    <template v-for="(genre, idx) in item.genres" :key="idx">
                                                                        <span v-if="idx > 0">, </span>
                                                                        <a :href="'/movie-genre/' + genre.slug" rel="tag" tabindex="0">
                                                                            <span v-html="genre.name"></span>
                                                                        </a>
                                                                    </template>
                                                                </span>
                                                            </div>
                                                            <a :href="'/movie/' + item.slug"
                                                                class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link"
                                                                tabindex="0">
                                                                <h3 class="masvideos-loop-movie__title  movie__title">
                                                                    {{ item.title || ' ' }}
                                                                </h3>
                                                            </a>
                                                        </div>
                                                        <div class="original-title">{{ item.originalTitle || ' ' }}</div>
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