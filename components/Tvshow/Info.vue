<script setup>
    const props = defineProps(['title', 'originalTitle', 'src', 'description'])
    const title = props.title
    const originalTitle = props.originalTitle
    const src = props.src
    const description = props.description

    const onReadMoreClick = (event) => {
        let ele = $(event.target)
        ele.prev().toggleClass('expanded')
        ele.text(ele.prev().hasClass('expanded') ? 'Show Less' : 'Read More')
    }
</script>

<style scoped>
    .tv-show__short-description > div {
        height: auto;
        transition: max-height 600ms ease-in-out;
        overflow: hidden;
        max-height: 47px;

    }
    .tv-show__short-description > div.expanded {
        max-height: 200px;
    }
</style>

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
                <div v-html="description"></div>
                <a class="maxlist-more" href="#" @click.prevent="onReadMoreClick">Read More</a>
            </div>
        </div>
        <div class="single-tvs-show-ads">
            <div class="ads-box-child"></div>
        </div>
    </div>
</template>