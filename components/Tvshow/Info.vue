<script setup>
    const renderCount = ref(0)
    const props = defineProps(['id', 'title', 'originalTitle', 'src', 'description'])
    let id = props.id
    let title = props.title
    let originalTitle = props.originalTitle
    let src = props.src
    let description = props.description

    watch(
        () => props.id,
        () => {
            renderCount.value ++
            id = props.id
            title = props.title
            originalTitle = props.originalTitle
            src = props.src
            description = props.description
        }
    )

    const onReadMoreClick = (event) => {
        let ele = $(event.target)
        ele.prev().toggleClass('expanded')
        ele.text(ele.prev().hasClass('expanded') ? 'Show Less' : 'Read More')
    }
</script>

<template>
    <div class="single-tv-show tv-show column poster-column" :postid="id">
        <div class="tv-show__poster_head loading-bg">
            <img width="220" height="330" :src="src" class="tv-show__poster--image tv_show__poster--image lazyload" alt=""
                decoding="async" sizes="(max-width: 220px) 100vw, 220px" :key="renderCount"
            />
        </div>
    </div>

    <div class="summary entry-summary">
        <h1 class="tv-show_title entry-title">{{ title || ' ' }}</h1>
        <div class="tv-show__info--head">
            <div class="tv-show__meta">
                <span class="tv-show__meta--release-year">2023-08-18</span>
            </div>
            <div class="original-title-tvshow">
                {{ originalTitle || ' ' }}
            </div>

            <div class="tv-show__meta--right">
                <div class="tv-show__rating-with-playlist"></div>
                <div class="tv-show__sharing vodi-sharing"></div>
            </div>
        </div>
        <div class="tv-show__info--body">
            <div class="tv-show__short-description modified">
                <div v-html="description"></div>
                <a class="maxlist-more" href="#" @click.prevent="onReadMoreClick">Read More</a>
            </div>
        </div>
        <div class="single-tvs-show-ads">
            <div class="ads-box-child"></div>
        </div>
    </div>
</template>