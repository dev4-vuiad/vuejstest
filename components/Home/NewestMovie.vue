<script setup>
    const props = defineProps(['data'])
    let data = props.data
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
                                class="post-202538 movie type-movie status-publish has-post-thumbnail hentry movie_genre-222 movie_genre-224 movie_genre-wmovie movie_genre-220 movie_genre-221">
                                <div class="movie-list">
                                    <div class="movie-list__poster">
                                        <a :href="'/movie/' + item.title"
                                            class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link"><img
                                                width="150" height="225"
                                                :src="item.src"
                                                class="movie__poster--image" alt="" loading="lazy"
                                                sizes="(max-width: 150px) 100vw, 150px"></a>
                                    </div>
                                    <div class="movie-list__body">
                                        <span class="movie-list__year">{{ item.year }}</span>
                                        <a :href="'/movie/' + item.title"
                                            class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                            <h3 class="movie-list__name">{{ item.title }}</h3>
                                        </a>
                                        <span class="movie-list__genre">
                                            <template v-for="(genre, idx) in item.genres" :key="idx">
                                                <span v-if="idx > 0">, </span>
                                                <a :href="'/movie-genre/' + genre.link" rel="tag">{{ genre.name }}</a>
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