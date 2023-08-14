
<script setup>

    const props = defineProps(['id', 'year', 'title', 'titleEn', 'ep', 'thumbnail', 'tvChannel'])
    const id = props.id
    const year = props.year
    const title = props.title
    const ep = props.ep
    const titleEn = props.titleEn
    const thumbnail = props.thumbnail
    const tvChannel = props.tvChannel
</script>

<template>
    <div
        class="tv-show post-203100 tv_show type-tv_show status-publish has-post-thumbnail hentry category-netflix category-u-drama tv_show_genre-234">
        <div class="tv-show__poster">
            <div class="box-tv-channel">
                <img class="tv-channel" :src="tvChannel" alt="" width="83" height="31">
            </div>
            <NuxtLink :to="{path: 'episode/' + id}" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <img width="300" height="450" :src="thumbnail.src" class="tv-show__poster--image tv_show__poster--image" alt="" loading="lazy" :srcset="thumbnail.srcset">
            </NuxtLink>
        </div>
        <div class="tv-show__body">
            <div class="tv-show__info">
                <div class="tv-show__info--head">
                    <div class="tv-show__meta"><span class="tv-show__meta--release-year">{{ year }}</span></div>
                    <div class="original-title-tvshow">
                        {{ titleEn }}
                    </div>
                    <NuxtLink :to="{path: 'episode/' + id}" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                        <span style="display:none" class="span_sea_ep_title">{{ ep }}</span>
                        <h3 class="masvideos-loop-tv-show__title  tv-show__title">{{ title }}</h3>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>