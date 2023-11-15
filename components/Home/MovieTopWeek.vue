<script setup>
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
    <div class="top-movies-list">
        <header class="top-movies-list__header">
            <h2 class="section-movies-list__title">주간 영화 인기컨텐츠</h2>
        </header>
        <div class="top-movies-list__info">
            <div class="masvideos masvideos-movies ">
                <div class="movies columns-1">
                    <div class="movies__inner">
                        <div v-for="(item, index) in data" :key="index" class="movie type-movie status-publish has-post-thumbnail hentry" :postid="item.id">
                            <div class="movie-list">
                                <div class="movie-list__body">
                                    <span class="movie-list__year">{{ item.year }}</span>
                                    <a :href="'/movie/' + item.slug" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                        <h3 class="movie-list__name">{{ item.title }}</h3>
                                    </a>
                                    <span class="movie-list__genre">
                                        <template v-for="(genre, idx) in item.genres" :key="idx">
                                            <span v-if="idx > 0">, </span>
                                            <a :href="'/movie-genre/' + genre.slug" rel="tag"><span v-html="genre.name"></span></a>
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
</template>