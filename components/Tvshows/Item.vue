
<script setup>

    import { onBeforeUpdate } from 'vue';

    const props = defineProps(['id', 'postDate', 'postDateGmt', 'title', 'tvshowTitle', 'originalTitle', 'episodeNumber', 'seasonNumber', 'src', 'chanelImage'])
    let id = props.id
    let postDate = props.postDate
    let postDateGmt = props.postDateGmt
    let title = props.title
    let tvshowTitle = props.tvshowTitle
    let episodeNumber = props.episodeNumber
    let seasonNumber = props.seasonNumber
    let originalTitle = props.originalTitle
    let src = props.src
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
        chanelImage = props.chanelImage
    })

    const toTimeAgo = (d) => {
        const now = new Date()
        let date = new Date(d.replace(' ', 'T') + '+09:00')
        let disTs = Math.ceil((now.valueOf() - date.valueOf()) / 1000)
        if (disTs >= 48 * 3600) {
            d = new Date(date.valueOf() + 3600 * 9 * 1000)
            return d.getUTCFullYear() + '-' + (d.getUTCMonth() + 1).toString().padStart(2, '0') + '-' + d.getUTCDate().toString().padStart(2, '0')
        } else if (disTs >= 24 * 3600 && disTs < 48 * 3600) {
            return '1일 전'
        } else if (disTs >= 3600 && disTs < 24 * 3600) {
            let hours = Math.floor(disTs / 3600)
            return hours + '시간 전'
        } else if (disTs < 3600 && disTs >= 60) {
            let minutes = Math.floor(disTs / 60)
            return minutes + '분 전'
        } else {
            return disTs + '초 전'
        }
    }
</script>

<template>
    <div
        :class="'tv-show post-' + id + ' tv_show type-tv_show status-publish has-post-thumbnail hentry category-netflix category-u-drama tv_show_genre-234'">
        <div class="tv-show__poster">
            <div class="box-tv-channel">
                <img v-if="chanelImage" class="tv-channel" :src="chanelImage" alt="" width="83" height="31">
            </div>
            <NuxtLink :to="'/episode/' + title" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <img width="300" height="450" :src="src" class="tv-show__poster--image tv_show__poster--image" alt="" loading="lazy">
            </NuxtLink>
        </div>
        <div class="tv-show__body">
            <div class="tv-show__info">
                <div class="tv-show__info--head">
                    <div class="tv-show__meta"><span class="tv-show__meta--release-year">{{ toTimeAgo(postDate) }}</span></div>
                    <div v-if="originalTitle" class="original-title-tvshow">
                        {{ originalTitle }}
                    </div>
                    <NuxtLink :to="'/episode/' + title" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                        <span style="display:none" class="span_sea_ep_title">{{ (seasonNumber != '시즌 1' ? seasonNumber + ' - ' : '') + episodeNumber }}화</span>
                        <h3 class="masvideos-loop-tv-show__title  tv-show__title">{{ tvshowTitle }}</h3>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>