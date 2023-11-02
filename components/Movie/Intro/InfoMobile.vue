<script setup>
    const expanded = ref(false)
    const emit = defineEmits(['onWatching'])
    const props = defineProps(['pending', 'id', 'year', 'duration', 'title', 'originalTitle', 'genres', 'src', 'description', 'outlink', 'casts'])
    let id = props.id
    let casts = props.casts || []
    let year = props.year
    let duration = props.duration
    let title = props.title
    let originalTitle = props.originalTitle
    let genres = props.genres
    let src = props.src
    let description = props.description
    let outlink = props.outlink
    let pending = props.pending

    onBeforeMount(() => {
        if (pending) {
            id = undefined
            casts = []
            year = undefined
            duration = undefined
            title = undefined
            originalTitle = undefined
            genres = undefined
            src = undefined
            description = undefined
            outlink = undefined
        }
    })

    watch(
        [
            () => props.pending
        ],
        () => {
            id = props.id
            casts = props.casts
            year = props.year
            duration = props.duration
            title = props.title
            originalTitle = props.originalTitle
            genres = props.genres
            src = props.src
            description = props.description
            outlink = props.outlink
        }
    )

    const onReadMoreClick = (event) => {
        expanded.value = !expanded.value
        let ele = $(event.target), h
        if (expanded.value) {
            let div = ele.parent().clone()
            div.children('div').css('max-height', 'fit-content')
            div.css('display', 'none').appendTo(ele.parent().parent())
            h = div.height()
            div.remove()
        } else {
            h = 50
        }
        ele.prev().css('max-height', h + 'px')
    }

    const onWatching = () => {
        emit('onWatching')
    }
</script>

<template>
    <div class="single-movie__sidebar column ">
        <div class="summary entry-summary">
            <div class="single-movie__sidebar--head-info">
                <div class="movie__poster loading-bg">
                    <img width="300" height="450"
                        :src="src"
                        class="movie__poster--image lazyload" alt="" decoding="async"
                        sizes="(max-width: 300px) 100vw, 300px"
                        :key="id"
                    />
                </div>
                <div class="movie__body">
                    <h3 class="masvideos-loop-movie__title  movie__title">{{ title || ' ' }}</h3>
                    <div class="original-title__single">
                        {{ originalTitle || ' ' }} 
                    </div>
                    <div v-if="year" class="movie__meta">
                        <span v-if="year" class="movie__meta--release-year">{{ year }}</span>
                        <span v-if="duration" class="movie__meta--movie-run-time">{{ duration }}</span>
                        <span class="movie__meta--genre">
                            <template v-for="(genre, idx) in genres" :key="idx">
                                <span v-if="idx > 0">, </span>
                                <a :href="'/movie-genre/' + genre.slug" rel="tag"><span v-html="genre.name"></span></a>
                            </template>
                        </span>
                    </div>
                    <div class="casts-list">
                        <span class="tv-show__meta--genre">
                            <template v-for="(item, idx) in casts">
                                <span v-if="idx > 0 && idx < 4">, </span>
                                <NuxtLink v-if="idx < 4" :to="'/person/' + item.slug" rel="tag"><span v-html="item.name"></span></NuxtLink>
                            </template>
                            <span v-if="casts.length > 4"> ...</span>
                        </span>
                    </div>
                </div>
            </div>
            <div style="margin-bottom:15px; display:none">
                <a :href="outlink" class="a_btn_out">
                    <button class="btn-outlink">바로보기</button>
                </a>
            </div>
            <div class="movie__description">
                <div v-html="description"></div>
                <a v-if="description && description.trim().length" class="maxlist-more" href="#" @click.event="onReadMoreClick">{{ expanded ? 'Show Less' : 'Read More' }}</a>
            </div>
            <div class="movie__sharing vodi-sharing"></div>
            <div class="movie__info--head"></div>
        </div>
    </div>
</template>