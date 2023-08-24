<script setup>
    import { onBeforeUpdate } from 'vue'; 
    const props = defineProps(['title', 'originalTitle', 'src', 'episodeNumber', 'link'])
    let title = props.title
    let originalTitle = props.originalTitle
    let src = props.src
    let episodeNumber = props.episodeNumber
    let link = props.link

    onBeforeUpdate(() => {
        title = props.title
        originalTitle = props.originalTitle
        src = props.src
        episodeNumber = props.episodeNumber
        link = props.link
    })
</script>

<template>
    <div v-if="episodeNumber" class="tv-show  tv_show type-tv_show status-publish has-post-thumbnail hentry ">  
        <div class="tv-show__badge">
            <span class="tv-show__badge--featured">
                Featured
            </span>
        </div>
        <div class="tv-show__poster box-phim">
                <a :href="'/' + link" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                    <img :src="src" class="tv-show__poster--image tv_show__poster--image">		                                                     
                <span style="display:none" class="span_sea_ep_title box-ep">{{ episodeNumber }}화</span></a>
                <div class="box-tv_show">예능</div>
        </div>
        <div class="tv-show__body">
            <div class="tv-show__info">
                <div class="tv-show__info--head">
                    <div class="tv-show__meta">
                        <div class="tv-show__meta--release-year">
                        
                        </div>
                    </div>
                    <a :href="'/' + link " class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                        <h3 class="masvideos-loop-tv-show__title  tv-show__title">
                            {{ title }}		                                                                
                        </h3>
                    </a>
                    <div class="original-title-search">{{ originalTitle }}</div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="movie type-movie status-publish has-post-thumbnail hentry">
        <div class="movie__poster box-phim">
            <a :href="'/movie/' + title" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img :src="src" class="movie__poster--image">
            </a>
            <div class="box-movie">영화</div>
        </div>
        <div class="movie__body">
            <div class="movie__info">
                <div class="movie__info--head">
                    <a href="'/movie/ + title"
                        class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                        <h3 class="masvideos-loop-movie__title  movie__title">{{ title }}</h3>
                    </a>
                    <div class="original-title__movie-search">
                        {{ originalTitle }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>