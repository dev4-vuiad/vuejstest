<script setup>
    const props = defineProps(['data'])
    const data = props.data
</script>

<template>
    <div class="masvideos masvideos-movies ">
        <div class="movies columns-8">
            <div class="movies__inner">
                <div v-for="(item, index) in data" :key="index" class="post-84871 movie type-movie status-publish has-post-thumbnail hentry movie_genre-209 movie_genre-221 movie_genre-kmovie">
                    <div class="movie__poster">
                        <a :href="'/movie/' + item.title" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                            <img width="220" height="310" :src="item.src" class="movie__poster--image" alt="" loading="lazy">
                        </a>
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
                                        <template v-for="(genre, idx) in item.genres">
                                            <span v-if="idx > 0">, </span>
                                            <a :href="genre.link" rel="tag">{{ genre.name }}</a>
                                        </template>
                                    </span>
                                </div>
                                <a :href="item.link" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                                    <h3 class="masvideos-loop-movie__title  movie__title">{{ item.title }}</h3>
                                </a>
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
</template>