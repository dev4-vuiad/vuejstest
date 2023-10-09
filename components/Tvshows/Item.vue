
<script setup>

    import { onBeforeUpdate } from 'vue';
    const { $toTimeAgo, $getEpTxt } = useNuxtApp()
    const props = defineProps(['id', 'postDate', 'postDateGmt', 'title', 'tvshowTitle', 'originalTitle', 'episodeNumber', 'seasonNumber', 'src', 'srcSet', 'chanelImage'])
    const renderCount = ref(0)
    let id = props.id
    let postDate = props.postDate
    let postDateGmt = props.postDateGmt
    let title = props.title
    let tvshowTitle = props.tvshowTitle
    let episodeNumber = props.episodeNumber
    let seasonNumber = props.seasonNumber
    let originalTitle = props.originalTitle
    let src = props.src
    let srcSet = props.srcSet
    let chanelImage = props.chanelImage

    onBeforeUpdate(() => {
        id = props.id
        postDate = props.postDate
        postDateGmt = props.postDateGmt
        title = props.title
        tvshowTitle = props.tvshowTitle
        episodeNumber = props.episodeNumber
        seasonNumber = props.seasonNumber
        originalTitle = props.originalTitle
        src = props.src
        srcSet = props.srcSet
        chanelImage = props.chanelImage
        renderCount.value ++
    })
</script>

<template>
    <div
        :class="'tv-show post-' + id + ' tv_show type-tv_show status-publish has-post-thumbnail hentry category-netflix category-u-drama'">
        <div class="tv-show__poster loading-bg">
            <div class="box-tv-channel">
                <img v-if="chanelImage" class="tv-channel" :src="chanelImage" alt="" width="83" height="31" :key="renderCount">
            </div>
            <NuxtLink :to="'/episode/' + encodeURIComponent(title)" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <img :src="src" :srcset="srcSet" class="tv-show__poster--image tv_show__poster--image lazyload" :key="renderCount" alt="">
            </NuxtLink>
        </div>
        <div class="tv-show__body">
            <div class="tv-show__info">
                <div class="tv-show__info--head">
                    <div class="tv-show__meta"><span class="tv-show__meta--release-year">{{ postDate ? $toTimeAgo(postDate) : '' }}</span></div>
                    <div v-if="originalTitle" class="original-title-tvshow">
                        {{ originalTitle }}
                    </div>
                    <NuxtLink :to="'/episode/' + encodeURIComponent(title)" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                        <span style="display:none" class="span_sea_ep_title">{{ $getEpTxt(seasonNumber, episodeNumber) }}</span>
                        <h3 class="masvideos-loop-tv-show__title  tv-show__title">{{ tvshowTitle }}</h3>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>