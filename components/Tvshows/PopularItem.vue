<script setup>

    const props = defineProps(['link', 'year', 'title', 'src', 'totalEpisode', 'chanelImage'])
    const link = props.link
    const year = props.year
    const title = props.title
    const src = props.src
    const totalEpisode = '9화'
    const chanelImage = 'https://image002.modooup.com/wp-content/uploads/2022/05/disney.png'
</script>

<template>
    <div class="tv-show post-202574 tv_show type-tv_show status-publish has-post-thumbnail hentry category-disney category-k-drama tv_show_genre-action-adventure tv_show_genre-214 tv_show_genre-218 tv_show_tag-1126">
        <div class="tv-show__poster">
            <div class="box-tv-channel">
                <img :src="chanelImage" alt="" width="62" height="31" class="tv-channel">
            </div>
            <a :href="'/episode/' + title + '-' + totalEpisode" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <img width="600" height="900"
                :src="src"
                class="tv-show__poster--image tv_show__poster--image" alt="" loading="lazy"
                sizes="(max-width: 600px) 100vw, 600px">
            </a>
        </div>
        <div class="tv-show__body">
            <span class="tv-show__meta--release-year">{{ year }}</span>
            <a :href="'/episode/' + title + '-' + totalEpisode" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <span style="display:none;" class="span_sea_ep_title">{{ totalEpisode }}</span>
                <h3 class="masvideos-loop-tv-show__title tv-show__title">{{ title }}</h3>
            </a>
        </div>
    </div>
</template>