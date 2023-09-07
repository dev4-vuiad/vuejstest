<script setup>
    const expanded = ref(false)
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

    const onReadMoreClick = (event) => {
        expanded.value = !expanded.value
        let ele = $(event.target), h
        if (expanded.value) {
            let div = ele.parent().clone()
            div.children('div').css('max-height', 'fit-content')
            div.css('display', 'none').appendTo(ele.parent().parent())
            h = div.height()
            div.remove()
        } else {
            h = 50
        }
        ele.prev().css('max-height', h + 'px')
    }
</script>

<style scoped>
    .movie__description > div {
        height: auto;
        transition: max-height 600ms ease-in-out;
        overflow: hidden;
        max-height: 50px;

    }

    .single-movie-v2 .single-movie__player-container--inner .single-movie__sidebar--head-info .movie__body {
        flex: 0 0 100%;
        max-width: 100%;
    }
</style>

<template>
    <div class="movie__head">
        <div class="movie__player">
            <p>https://short.ink/BVP6do_hS<br>
                https://videojs.vidground.com/watch/cVGpkrEHDvy</p>
        </div>
    </div>
    <div class="single-movie__sidebar column poster-custom">
        <div class="movie__poster">
            <img width="300" height="450" :src="src" class="movie__poster--image" alt="" loading="lazy"
                sizes="(max-width: 300px) 100vw, 300px">
        </div>
        <div class="summary entry-summary">
            <div class="single-movie__sidebar--head-info">
                <div class="movie__body">
                    <h3 class="masvideos-loop-movie__title  movie__title"> {{ title }} </h3>
                    <div class="original-title__single">
                        {{ originalTitle }}
                    </div>
                    <div class="movie__meta">
                        <span v-if="year" class="movie__meta--release-year">{{ year }}</span>
                        <span v-if="duration" class="movie__meta--movie-run-time">{{ duration }}</span>
                        <span class="movie__meta--genre">
                            <template v-for="(genre, idx) in genres" :key="idx">
                                <span v-if="idx > 0">, </span>
                                <a :href="'/movie-genre/' + genre.link" rel="tag">{{ genre.name }}</a>
                            </template>
                        </span>
                    </div>
                    <div class="vodi-views-likes"></div>
                </div>
            </div>
            <div style="margin-bottom:15px;">
                <a :href="outlink" class="a_btn_out">
                    <button class="btn-outlink">바로보기</button>
                </a>
            </div>
            <div class="movie__description">
                <div data-readmore="" v-html="description"></div>
                <a v-if="description && description.trim().length" class="maxlist-more" href="#" @click.event="onReadMoreClick">{{ expanded ? 'Show Less' : 'Read More' }}</a>
            </div>
            <div class="movie__sharing vodi-sharing"></div>
            <div class="movie__info--head"></div>
        </div>
    </div>
</template>