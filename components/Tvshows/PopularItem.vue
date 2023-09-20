<script setup>
    import { onBeforeUpdate } from 'vue'
    const { $toTimeAgo } = useNuxtApp()
    const props = defineProps(['id', 'link', 'postDate', 'postDateGmt', 'tvshowTitle', 'src', 'srcSet', 'episodeNumber', 'seasonNumber', 'chanelImage'])
    const renderCount = ref(0)
    let id = props.id
    let postDate = props.postDate
    let postDateGmt = props.postDateGmt
    let tvshowTitle = props.tvshowTitle
    let src = props.src
    let srcSet = props.srcSet
    let episodeNumber = props.episodeNumber
    let seasonNumber = props.seasonNumber
    let chanelImage = props.chanelImage

    onBeforeUpdate(() => {
        postDate = props.postDate
        postDateGmt = props.postDateGmt
        tvshowTitle = props.tvshowTitle
        src = props.src
        srcSet = props.srcSet
        episodeNumber = props.episodeNumber
        seasonNumber = props.seasonNumber
        chanelImage = props.chanelImage
        renderCount.value ++ 
    })
</script>

<template>
    <div :class="'tv-show post-' + id + ' tv_show type-tv_show status-publish has-post-thumbnail hentry category-disney category-k-drama tv_show_genre-action-adventure tv_show_genre-214 tv_show_genre-218 tv_show_tag-1126'">
        <div class="tv-show__poster loading-bg">
            <div class="box-tv-channel">
                <img :src="chanelImage" alt="" width="62" height="31" class="tv-channel" :key="renderCount">
            </div>
            <NuxtLink :to="'/' + link" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <img width="600" height="900"
                :src="src"
                :srcset="srcSet"
                class="tv-show__poster--image tv_show__poster--image lazyload" alt="" :key="renderCount" />
            </NuxtLink>
        </div>
        <div class="tv-show__body">
            <span class="tv-show__meta--release-year">{{ $toTimeAgo(postDate) }}</span>
            <NuxtLink :to="'/' + link" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <span style="display:none;" class="span_sea_ep_title">{{ (!['시즌 1', 'Season 1'].includes(seasonNumber) ? seasonNumber + ' - ' : '') + episodeNumber }}화</span>
                <h3 class="masvideos-loop-tv-show__title tv-show__title">{{ tvshowTitle }}</h3>
            </NuxtLink>
        </div>
    </div>
</template>