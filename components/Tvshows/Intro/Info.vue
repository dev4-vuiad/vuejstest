<script setup>
    const expanded = ref(false)
    const props = defineProps(['pending', 'id', 'postDate', 'postDateGmt', 'title', 'originalTitle', 'genres', 'src', 'description', 'tvshowTitle', 'tvshowSlug', 'casts'])
    let id = props.id
    let postDate = props.postDate
    let title = props.title
    let originalTitle = props.originalTitle
    let genres = props.genres || []
    let src = props.src
    let description = props.description
    let tvshowTitle = props.tvshowTitle
    let tvshowSlug = props.tvshowSlug
    let casts = props.casts || []
    let pending = props.pending

    onBeforeMount(() => {
        if (pending) {
            id = undefined
            postDate = undefined
            title = undefined
            originalTitle = undefined
            genres = []
            src = undefined
            description = undefined
            tvshowTitle = undefined
            tvshowSlug = undefined
            casts = []
        }
    })

    watch(
        () => props.pending,
        () => {
            id = props.id
            postDate = props.postDate
            title = props.title
            originalTitle = props.originalTitle
            genres = props.genres
            casts = props.casts
            src = props.src
            description = props.description
            tvshowTitle = props.tvshowTitle
            tvshowSlug = props.tvshowSlug
        }
    )

    const format = (d) => {
        d = new Date(d.replace(' ', 'T') + '.000Z')
        return d.toLocaleDateString('fr-CH')
    }

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
</script>

<template>
    <div class="vodi-single-episode__sidebar--tv-show" :postid="id">
        <div class="tv-show__poster loading-bg">
            <div class="box-tv-channel">
                <img class="tv-channel lazyload"
                    :src="src" alt="" width="68"
                    height="31"
                    :key="id"
                />
            </div>
            <a :href="'/episode/' + title" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <img width="220" height="312"
                    :src="src"
                    class="tv-show__poster--image tv_show__poster--image lazyload" alt=""
                    :key="id"
                />
            </a>
        </div>
        <div class="tv-show__body">
            <div class="tv-show__info">
                <div class="tv-show__info--head">
                    <div class="episode__meta">
                        <span class="episode__meta--release-date">{{ postDate ? format(postDate) : ' ' }}</span>
                        <div class="vodi-views-likes"></div>
                    </div>
                    <a :href="'/tv-show/' + tvshowSlug" class="masvideos-LoopEpisode-link masvideos-loop-episode__link episode__link">
                        <h1 class="episode_title entry-title">{{ title || ' ' }}</h1>
                    </a>
                    <div class="title-orginal__tvshow_single">
                        {{ originalTitle || ' ' }}
                    </div>
                    <div class="casts-list" v-if="casts && casts.length">
                        <span class="tv-show__meta--genre">
                            <template v-for="(item, idx) in casts">
                                <span v-if="idx > 0 && idx < 4">, </span>
                                <a v-if="idx < 4" :href="'/person/' + item.slug" rel="tag"><span v-html="item.name"></span></a>
                            </template>
                        </span>
                    </div>
                    <div class="episode__description modified">
                        <div v-html="description"></div>
                        <a class="maxlist-more" href="#" @click.prevent="onReadMoreClick">{{ expanded ? 'Show Less' : 'Read More' }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>