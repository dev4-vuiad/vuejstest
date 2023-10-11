<script setup>
    const renderCount = ref(0)
    const props = defineProps(['data'])
    let data = props.data

    watch(
        () => props.data,
        () => {
            data = props.data
        }
    )
</script>

<template>
    <div class="featured-with-list-view-movies-list">
        <header class="featured-with-list-view-movies-list__header">
            <h2 class="section-movies-list__title">Newest Movies</h2>
        </header>
        <div class="featured-with-list-view-movies-list__info">
            <div class="list-view-movies-list">
                <div class="masvideos masvideos-movies ">
                    <div class="movies columns-1">
                        <div class="movies__inner">
                            <div v-for="(item, index) in data" :key="index"
                                class="movie type-movie status-publish has-post-thumbnail hentry" :postid="item.id">
                                <div class="movie-list">
                                    <div class="movie-list__poster">
                                        <NuxtLink :to="'/movie/' + item.slug"
                                            class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                            <img
                                                :src="item.src"
                                                :srcset="item.srcSet"
                                                class="movie__poster--image lazyload" alt=""
                                                :key="item.id"
                                            />
                                        </NuxtLink>
                                    </div>
                                    <div class="movie-list__body">
                                        <span class="movie-list__year">{{ item.year || ' ' }}</span>
                                        <NuxtLink :to="'/movie/' + item.slug"
                                            class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                            <h3 class="movie-list__name">{{ item.title || ' ' }}</h3>
                                        </NuxtLink>
                                        <span class="movie-list__genre">
                                            <template v-for="(genre, idx) in item.genres" :key="idx">
                                                <span v-if="idx > 0">, </span>
                                                <NuxtLink :to="'/movie-genre/' + encodeURIComponent(genre.name)" rel="tag">
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
            </div>
        </div>
    </div>
</template>