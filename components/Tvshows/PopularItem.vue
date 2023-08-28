<script setup>
    import { onBeforeUpdate } from 'vue'
    const props = defineProps(['id', 'link', 'postDateGmt', 'tvshowTitle', 'src', 'episodeNumber', 'seasonNumber', 'chanelImage'])
    let id = props.id
    let postDateGmt = props.postDateGmt
    let tvshowTitle = props.tvshowTitle
    let src = props.src
    let episodeNumber = props.episodeNumber
    let seasonNumber = props.seasonNumber
    let chanelImage = props.chanelImage

    onBeforeUpdate(() => {
        postDateGmt = props.postDateGmt
        title = props.title
        tvshowTitle = props.tvshowTitle
        src = props.src
        episodeNumber = props.episodeNumber
        seasonNumber = props.seasonNumber
        chanelImage = props.chanelImage
    })

    const toTimeAgo = (d) => {
        const now = new Date()
        let date = new Date(d.replace(' ', 'T') + '.000Z')
        let disTs = Math.floor((now.valueOf() - date.valueOf()) / 1000)
        if (disTs > 48 * 3600) {
            return d.substr(0,10)
            // d = new Date(d.valueOf() + 3600 * 9 * 1000)
            // let month = d.getMonth() + 1;
            // if (month < 10) {
            //     month = '0' + month
            // }
            // let date = d.getDate();
            // if (date < 10) {
            //     date = '0' + mondateth
            // }
            // return d.getFullYear() + '-' + month + '-' + date
        } else if (disTs < 24 * 3600) {
            let hours = Math.floor(disTs / 3600)
            return hours + ' 시간 전'
        } else {
            return '1일 전'
        }
    }
</script>

<template>
    <div :class="'tv-show post-' + id + ' tv_show type-tv_show status-publish has-post-thumbnail hentry category-disney category-k-drama tv_show_genre-action-adventure tv_show_genre-214 tv_show_genre-218 tv_show_tag-1126'">
        <div class="tv-show__poster">
            <div class="box-tv-channel">
                <img :src="chanelImage" alt="" width="62" height="31" class="tv-channel">
            </div>
            <NuxtLink :to="'/' + link" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <img width="600" height="900"
                :src="src"
                class="tv-show__poster--image tv_show__poster--image" alt="" loading="lazy"
                sizes="(max-width: 600px) 100vw, 600px">
            </NuxtLink>
        </div>
        <div class="tv-show__body">
            <span class="tv-show__meta--release-year">{{ toTimeAgo(postDateGmt) }}</span>
            <NuxtLink :to="'/' + link" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <span style="display:none;" class="span_sea_ep_title">{{ (seasonNumber > 1 ? '시즌 ' + seasonNumber + ' - ' : '') + episodeNumber }}화</span>
                <h3 class="masvideos-loop-tv-show__title tv-show__title">{{ tvshowTitle }}</h3>
            </NuxtLink>
        </div>
    </div>
</template>