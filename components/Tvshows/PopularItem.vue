<script setup>
    import { onBeforeUpdate } from 'vue'
    const props = defineProps(['link', 'postDateGmt', 'title', 'src', 'episodeNumber', 'seasonNumber', 'chanelImage'])
    let postDateGmt = props.postDateGmt
    let title = props.title
    let src = props.src
    let episodeNumber = props.episodeNumber
    let seasonNumber = props.seasonNumber
    let chanelImage = props.chanelImage

    onBeforeUpdate(() => {
        postDateGmt = props.postDateGmt
        title = props.title
        src = props.src
        episodeNumber = props.episodeNumber
        seasonNumber = props.seasonNumber
        chanelImage = props.chanelImage
    })

    const toTimeAgo = (d) => {
        const now = new Date()
        d = new Date(d.replace(' ', 'T') + '.000Z')
        let disTs = Math.floor((now.valueOf() - d.valueOf()) / 1000)
        if (disTs > 48 * 3600) {
            return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        } else if (disTs < 24 * 3600) {
            let hours = Math.floor(disTs / 3600)
            return hours + ' 시간 전'
        } 
        else {
            let hours = Math.floor(disTs / 3600)
            return hours + '1일 전'
        }
    }
</script>

<template>
    <div class="tv-show post-202574 tv_show type-tv_show status-publish has-post-thumbnail hentry category-disney category-k-drama tv_show_genre-action-adventure tv_show_genre-214 tv_show_genre-218 tv_show_tag-1126">
        <div class="tv-show__poster">
            <div class="box-tv-channel">
                <img :src="chanelImage" alt="" width="62" height="31" class="tv-channel">
            </div>
            <a :href="'/episode/' + title" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <img width="600" height="900"
                :src="src"
                class="tv-show__poster--image tv_show__poster--image" alt="" loading="lazy"
                sizes="(max-width: 600px) 100vw, 600px">
            </a>
        </div>
        <div class="tv-show__body">
            <span class="tv-show__meta--release-year">{{ toTimeAgo(postDateGmt) }}</span>
            <a :href="'/episode/' + title" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <span style="display:none;" class="span_sea_ep_title">{{ (seasonNumber > 1 ? '시즌 ' + seasonNumber + ' - ' : '') + episodeNumber }}화</span>
                <h3 class="masvideos-loop-tv-show__title tv-show__title">{{ title }}</h3>
            </a>
        </div>
    </div>
</template>