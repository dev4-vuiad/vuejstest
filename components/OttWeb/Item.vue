
<script setup>
    const { $toTimeAgo, $getEpTxt } = useNuxtApp()
    const props = defineProps(['pending', 'id', 'postDate', 'slug', 'tvshowTitle', 'originalTitle', 'episodeNumber', 'seasonNumber', 'src', 'srcSet', 'chanelImage', 'postType', 'category'])
    let pending = props.pending
    let id = props.id
    let postDate = props.postDate
    let slug = props.slug
    let tvshowTitle = props.tvshowTitle
    let episodeNumber = props.episodeNumber
    let seasonNumber = props.seasonNumber
    let originalTitle = props.originalTitle
    let src = props.src
    let srcSet = props.srcSet
    let chanelImage = props.chanelImage
    let postType = props.postType || 'tv_show'
    let category = props.category

    onBeforeMount(() => {
        if (pending) {
            id = undefined
            postDate = undefined
            slug = undefined
            tvshowTitle = undefined
            episodeNumber = undefined
            seasonNumber = undefined
            originalTitle = undefined
            src = undefined
            srcSet = undefined
            chanelImage = undefined
            postType = 'tv_show'
            category = props.category
        }
    })

    watch(
        () => props.pending,
        () => {
            id = props.id
            postDate = props.postDate
            slug = props.slug
            tvshowTitle = props.tvshowTitle
            episodeNumber = props.episodeNumber
            seasonNumber = props.seasonNumber
            originalTitle = props.originalTitle
            src = props.src
            srcSet = props.srcSet
            chanelImage = props.chanelImage
            postType = props.postType
            category = props.category
        }
    )
</script>

<template>
    <div class="tv-show tv_show type-tv_show status-publish has-post-thumbnail hentry category-netflix category-u-drama">
        <div class="tv-show__poster loading-bg">
            <div class="box-tv-channel">
                <img v-if="chanelImage" class="tv-channel" :src="`../images/14733859921126.png`" alt="" width="83" height="31" :key="id" />
            </div>
            <NuxtLink :to="(postType == 'movie' ? '/movie/' : '/episode/') + slug" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <img :src="`../images/14733859921126.png`"  class="tv-show__poster--image tv_show__poster--image lazyload" :key="id" alt="" />
            </NuxtLink>
            <div :class="postType == 'movie' ? 'box-movie' : 'box-tv_show'">{{ category }}</div>
        </div>
        <div class="tv-show__body">
            <div class="tv-show__info">
                <div class="tv-show__info--head">
                    <div class="tv-show__meta"><span class="tv-show__meta--release-year">{{ postDate ? $toTimeAgo(postDate) : ' ' }}</span></div>
                    <div v-if="originalTitle" class="original-title-tvshow">
                    {{ originalTitle }}
                    </div>
                    <NuxtLink :to="(postType == 'movie' ? '/movie/' : '/episode/') + slug" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                        <span style="display:none" class="span_sea_ep_title">{{ $getEpTxt(seasonNumber, episodeNumber) }}</span>
                        <h3 class="masvideos-loop-tv-show__title tv-show__title">{{ tvshowTitle }}</h3>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>