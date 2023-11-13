<script setup>
    const renderCount = ref(0)
    const props = defineProps(['data'])
    let data = props.data

    watch(
        [
            () => props.data,
            () => props.title
        ],
        () => {
            renderCount.value ++
            data = props.data
        }
    )
</script>
<template>
    <div class="home-movie-section-aside-header__inner">
        <div class="masvideos masvideos-movies ">
            <div class="movies columns-7">
                <div class="movies__inner">
                    <header class="home-section__header">
                        <h2 class="home-section__title">최신등록영화</h2>
                        <div class="home-section__action">
                            <NuxtLink to="/movie/" class="home-section__action-link link-movie">전체보기</NuxtLink>
                        </div>
                    </header>
                    <div v-for="(item, index) in data" :key="index" class="movie type-movie status-publish has-post-thumbnail hentry" :postid="item.id">
                        <div class="movie__poster loading-bg">
                            <NuxtLink :to="'/movie/' + item.slug"
                                class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                <img 
                                    :src="item.src"
                                    :srcset="item.srcSet"
                                    decoding="async"
                                    class="movie__poster--image lazyload" alt=""
                                    :key="renderCount" 
                                />
                            </NuxtLink>
                        </div>
                        <div class="movie__body">
                            <div class="movie__info">
                                <div class="movie__info--head">
                                    <div class="original-title__single">
                                        {{ item.originalTitle || ' ' }}
                                    </div>
                                    <div class="movie__meta">
                                        <span class="movie__meta--release-year">{{ item.year }}</span>
                                        <span class="movie__meta--genre">
                                            <template v-for="(genre, idx) in item.genres" :key="idx">
                                                <span v-if="idx > 0">, </span>
                                                <NuxtLink :to="'/movie-genre/' + genre.slug" rel="tag"><span v-html="genre.name"></span></NuxtLink>
                                            </template>
                                        </span>
                                    </div>
                                    <NuxtLink :to="'/movie/' + item.slug" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                        <h3 class="masvideos-loop-movie__title movie__title">
                                            {{ item.title || ' ' }}
                                        </h3>
                                    </NuxtLink>
                                </div>
                                <div class="original-title">
                                    {{ item.originalTitle || ' ' }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>