<script setup>
    import { onBeforeUpdate } from 'vue'; 
    const props = defineProps(['title', 'originalTitle', 'src', 'srcSet', 'seasonNumber', 'episodeNumber', 'link', 'postType'])
    let postType = props.postType
    let title = props.title
    let originalTitle = props.originalTitle
    let src = props.src
    let srcSet = props.srcSet
    let seasonNumber = props.seasonNumber
    let episodeNumber = props.episodeNumber
    let link = props.link

    onBeforeUpdate(() => {
        postType = props.postType
        title = props.title
        originalTitle = props.originalTitle
        src = props.src
        srcSet = props.srcSet
        seasonNumber = props.seasonNumber
        episodeNumber = props.episodeNumber
        link = props.link
    })
</script>

<template>
    <div v-if="postType == 'tv_show'" class="tv-show  tv_show type-tv_show status-publish has-post-thumbnail hentry ">  
        <div class="tv-show__badge">
            <span class="tv-show__badge--featured">
                Featured
            </span>
        </div>
        <div class="tv-show__poster box-phim">
                <NuxtLink :to="'/episode/' + encodeURIComponent(link.replace('episode/', ''))" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                    <img :src="src" :srcset="srcSet" class="tv-show__poster--image tv_show__poster--image">		                                                     
                <span style="display:none" class="span_sea_ep_title box-ep">{{ seasonNumber + ' - ' + episodeNumber }} 화</span></NuxtLink>
                <div class="box-tv_show">예능</div>
        </div>
        <div class="tv-show__body">
            <div class="tv-show__info">
                <div class="tv-show__info--head">
                    <div class="tv-show__meta">
                        <div class="tv-show__meta--release-year">
                        
                        </div>
                    </div>
                    <NuxtLink :to="'/episode/' + encodeURIComponent(link.replace('episode/', ''))" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                        <h3 class="masvideos-loop-tv-show__title  tv-show__title">
                            {{ title }}		                                                                
                        </h3>
                    </NuxtLink>
                    <div class="original-title-search">{{ originalTitle }}</div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="movie type-movie status-publish has-post-thumbnail hentry">
        <div class="movie__poster box-phim">
            <NuxtLink :to="'/movie/' + encodeURIComponent(title)" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img :src="src" :srcset="srcSet" class="movie__poster--image">
            </NuxtLink>
            <div class="box-movie">영화</div>
        </div>
        <div class="movie__body">
            <div class="movie__info">
                <div class="movie__info--head">
                    <NuxtLink :to="'/movie/' + encodeURIComponent(title)"
                        class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                        <h3 class="masvideos-loop-movie__title  movie__title">{{ title }}</h3>
                    </NuxtLink>
                    <div class="original-title__movie-search">
                        {{ originalTitle }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>