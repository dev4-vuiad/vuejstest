<script setup>
    import { onBeforeUpdate } from 'vue'
    const { $toTimeAgo, $getEpTxt } = useNuxtApp()
    const props = defineProps(['id', 'slug', 'postDate', 'tvshowTitle', 'src', 'srcSet', 'episodeNumber', 'seasonNumber', 'chanelImage'])
    const renderCount = ref(0)
    let id = props.id
    let slug = props.slug
    let postDate = props.postDate
    let tvshowTitle = props.tvshowTitle
    let src = props.src
    let srcSet = props.srcSet
    let episodeNumber = props.episodeNumber
    let seasonNumber = props.seasonNumber
    let chanelImage = props.chanelImage

    onBeforeUpdate(() => {
        const oldId = id
        id = props.id
        slug = props.slug
        postDate = props.postDate
        tvshowTitle = props.tvshowTitle
        src = props.src
        srcSet = props.srcSet
        episodeNumber = props.episodeNumber
        seasonNumber = props.seasonNumber
        chanelImage = props.chanelImage
        if (oldId !== id) {
            renderCount.value ++ 
        }
    })
</script>

<template>
    <div class="tv-show tv_show type-tv_show status-publish has-post-thumbnail hentry category-disney category-k-drama" :postid="id">
        <div class="tv-show__poster loading-bg">
            <div class="box-tv-channel">
                <img :src="chanelImage" alt="" width="62" height="31" class="tv-channel" :key="renderCount">
            </div>
            <NuxtLink :to="'/episode/' + slug" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <img width="600" height="900"
                :src="src"
                :srcset="srcSet"
                class="tv-show__poster--image tv_show__poster--image lazyload" alt="" :key="id" />
            </NuxtLink>
        </div>
        <div class="tv-show__body">
            <span class="tv-show__meta--release-year">{{ postDate ? $toTimeAgo(postDate) : '' }}</span>
            <NuxtLink :to="'/episode/' + slug" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <span style="display:none;" class="span_sea_ep_title">{{ $getEpTxt(seasonNumber, episodeNumber) }}</span>
                <h3 class="masvideos-loop-tv-show__title tv-show__title">{{ tvshowTitle }}</h3>
            </NuxtLink>
        </div>
    </div>
</template>