
<script setup>

    const props = defineProps(['postDateGmt', 'title', 'originalTitle', 'episodeNumber', 'seasonNumber', 'src', 'chanelImage'])
    const postDateGmt = props.postDateGmt
    const title = props.title
    const episodeNumber = props.episodeNumber
    const seasonNumber = props.seasonNumber
    const originalTitle = props.originalTitle
    const src = props.src
    const chanelImage = props.chanelImage

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
    <div
        class="tv-show post-203100 tv_show type-tv_show status-publish has-post-thumbnail hentry category-netflix category-u-drama tv_show_genre-234">
        <div class="tv-show__poster">
            <div class="box-tv-channel">
                <img v-if="chanelImage" class="tv-channel" :src="chanelImage" alt="" width="83" height="31">
            </div>
            <a :href="'/episode/' + title" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <img width="300" height="450" :src="src" class="tv-show__poster--image tv_show__poster--image" alt="" loading="lazy">
            </a>
        </div>
        <div class="tv-show__body">
            <div class="tv-show__info">
                <div class="tv-show__info--head">
                    <div class="tv-show__meta"><span class="tv-show__meta--release-year">{{ toTimeAgo(postDateGmt) }}</span></div>
                    <div v-if="originalTitle" class="original-title-tvshow">
                        {{ originalTitle }}
                    </div>
                    <a :href="'/episode/' + title" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                        <span style="display:none" class="span_sea_ep_title">{{ (seasonNumber > 1 ? '시즌 ' + seasonNumber + ' - ' : '') + episodeNumber }}화</span>
                        <h3 class="masvideos-loop-tv-show__title  tv-show__title">{{ title }}</h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>