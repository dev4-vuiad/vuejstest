
<script setup>
    import { onBeforeUpdate } from 'vue'; 
    const props = defineProps(['year', 'duration', 'title', 'originalTitle', 'genres', 'src', 'description', 'outlink'])

    let year = props.year
    let duration = props.duration
    let title = props.title
    let originalTitle = props.originalTitle
    let genres = props.genres
    let src = props.src
    let description = props.description
    let outlink = props.outlink

    onBeforeUpdate(() => {
        year = props.year
        duration = props.duration
        title = props.title
        originalTitle = props.originalTitle
        genres = props.genres
        src = props.src
        description = props.description
        outlink = props.outlink
    });

</script>

<template>
    <div class="single-movie__sidebar column ">
        <div class="summary entry-summary">
            <div class="single-movie__sidebar--head-info">
                <div class="movie__poster">
                    <img width="300" height="450"
                        :src="src"
                        class="movie__poster--image" alt="" decoding="async"
                        srcset=""
                        sizes="(max-width: 300px) 100vw, 300px">
                    </div>
                <div class="movie__body">
                    <h3 class="masvideos-loop-movie__title  movie__title">{{ title }}</h3>
                    <div class="original-title__single">
                        {{ originalTitle }} 
                    </div>
                    <div class="movie__meta"><span class="movie__meta--release-year">{{ year }}</span><span
                            class="movie__meta--movie-run-time">{{ duration }}</span>
                            <span class="movie__meta--genre">
                                <template v-for="(genre, idx) in genres" :key="idx">
                                    <span v-if="idx > 0">, </span>
                                    <a :href="'/movie-genre/' + encodeURIComponent(genre.name)" rel="tag"><span v-html="genre.name"></span></a>
                                </template>
                            </span>
                    </div>
                </div>
            </div>
            <div style="margin-bottom:15px;">
                <a :href="outlink" class="a_btn_out">
                    <button class="btn-outlink">바로보기</button>
                </a>
            </div>
            <div class="movie__description">
                <div v-html="description"></div>
            </div>
            <div class="movie__sharing vodi-sharing"></div>
            <div class="movie__info--head"></div>
        </div>
    </div>
    <div class="single-movie-ads-box">
        <div class="ads-box-child">
        </div>
    </div>
</template>