
<script setup>

    const props = defineProps(['year', 'title', 'titleEn', 'totalEpisode', 'src', 'chanelImage'])
    const year = props.year
    const title = props.title
    const totalEpisode = props.totalEpisode
    const titleEn = props.titleEn
    const src = props.src
    const chanelImage = props.chanelImage
</script>

<template>
    <div
        class="tv-show post-203100 tv_show type-tv_show status-publish has-post-thumbnail hentry category-netflix category-u-drama tv_show_genre-234">
        <div class="tv-show__poster">
            <div class="box-tv-channel">
                <img v-if="chanelImage" class="tv-channel" :src="chanelImage" alt="" width="83" height="31">
            </div>
            <a :href="'/episode/' + title + '-' + totalEpisode" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <img width="300" height="450" :src="src" class="tv-show__poster--image tv_show__poster--image" alt="" loading="lazy">
            </a>
        </div>
        <div class="tv-show__body">
            <div class="tv-show__info">
                <div class="tv-show__info--head">
                    <div class="tv-show__meta"><span class="tv-show__meta--release-year">{{ year }}</span></div>
                    <div class="original-title-tvshow">
                        {{ titleEn }}
                    </div>
                    <a :href="'/episode/' + title + totalEpisode" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                        <span style="display:none" class="span_sea_ep_title">{{ totalEpisode }}</span>
                        <h3 class="masvideos-loop-tv-show__title  tv-show__title">{{ title }}</h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>