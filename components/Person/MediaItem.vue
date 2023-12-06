<script setup>
    import { onBeforeUpdate } from 'vue';
    const { $getEpTxt } = useNuxtApp() 
    const props = defineProps(['pending', 'id', 'title', 'slug', 'originalTitle', 'src', 'srcSet', 'seasonNumber', 'episodeNumber', 'category', 'postType'])
    const renderCount = ref(0)
    let pending = props.pending
    let id = props.id
    let postType = props.postType
    let title = props.title
    let slug = props.slug
    let originalTitle = props.originalTitle
    let src = props.src
    let srcSet = props.srcSet
    let seasonNumber = props.seasonNumber
    let episodeNumber = props.episodeNumber
    let category = props.category

    onBeforeMount(() => {
        if (pending) {
            id = undefined
            postType = undefined
            title = ''
            slug = ''
            originalTitle = ''
            src = undefined
            srcSet = undefined
            seasonNumber = ''
            episodeNumber = ''
            category = ''
        }
    })
    watch(
        () => props.pending,
        () => {
            id = props.id
            postType = props.postType
            title = props.title
            slug = props.slug
            originalTitle = props.originalTitle
            src = props.src
            srcSet = props.srcSet
            seasonNumber = props.seasonNumber
            episodeNumber = props.episodeNumber
            category = props.category
        }
    )
</script>

<template>
    <div v-if="postType == 'tv_show'" class="tv-show  tv_show type-tv_show status-publish has-post-thumbnail hentry" :postid="id">  
        <div class="tv-show__badge">
            <span class="tv-show__badge--featured">
                Featured
            </span>
        </div>
        <div class="tv-show__poster box-phim">
                <NuxtLink :to="'/episode/' + slug" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                    <img :src="src" class="tv-show__poster--image tv_show__poster--image" :key="id">		                                                     
                <span style="display:none" class="span_sea_ep_title box-ep">{{ $getEpTxt(seasonNumber, episodeNumber) }}</span></NuxtLink>
                <div class="box-tv_show" v-if="postType == 'tv_show'">{{ category }}</div>
        </div>
        <div class="tv-show__body">
            <div class="tv-show__info">
                <div class="tv-show__info--head">
                    <div class="tv-show__meta">
                        <div class="tv-show__meta--release-year">
                        
                        </div>
                    </div>
                    <NuxtLink :to="'/episode/' + slug" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                        <h3 class="masvideos-loop-tv-show__title  tv-show__title">
                            {{ title }}		                                                                
                        </h3>
                    </NuxtLink>
                    <div class="original-title-search">{{ originalTitle }}</div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="movie type-movie status-publish has-post-thumbnail hentry" :postid="id">
        <div class="movie__poster box-phim">
            <NuxtLink :to="'/movie/' + slug" class="masvideos-LoopMovie-link masvideos-loop-movie__link movie__link">
                <img :src="src" :srcset="srcSet" class="movie__poster--image" :key="id">
            </NuxtLink>
            <div class="box-movie" v-if="postType == 'movie'">영화</div>
        </div>
        <div class="movie__body">
            <div class="movie__info">
                <div class="movie__info--head">
                    <NuxtLink :to="'/movie/' + slug"
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