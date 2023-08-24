<script setup>
    const props = defineProps(['title', 'originalTitle', 'src', 'description'])
    const title = props.title
    const originalTitle = props.originalTitle
    const src = props.src
    const description = props.description
</script>

<template>
    <div class="single-tv-show tv-show column poster-column">
        <div class="tv-show__poster_head">
            <img width="220" height="330" :src="src" class="tv-show__poster--image tv_show__poster--image" alt=""
                decoding="async" loading="lazy" sizes="(max-width: 220px) 100vw, 220px">
        </div>
    </div>

    <div class="summary entry-summary">
        <h1 class="tv-show_title entry-title">{{ title }}</h1>
        <div class="tv-show__info--head">
            <div class="tv-show__meta">
                <span class="tv-show__meta--release-year">2023-08-18</span>
            </div>
            <div class="original-title-tvshow">
                {{ originalTitle }}
            </div>

            <div class="tv-show__meta--right">
                <div class="tv-show__rating-with-playlist"></div>
                <div class="tv-show__sharing vodi-sharing"></div>
            </div>
        </div>
        <div class="tv-show__info--body">
            <div class="tv-show__short-description">
                <div style="height: 78px; max-height: none;" v-html="description">
                </div>
                <a class="maxlist-more" href="#" data-readmore-toggle="rmjs-1" aria-controls="rmjs-1">더 보기</a>
            </div>
        </div>
        <div class="single-tv-show-ads ads-category-tvshow" style="text-align: center;">

        </div>
    </div>
</template>