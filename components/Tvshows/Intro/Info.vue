<script setup>
    const expanded = ref(false)
    const props = defineProps(['pending', 'id', 'postDate', 'postDateGmt', 'title', 'originalTitle', 'genres', 'src', 'description', 'tvshowTitle', 'casting'])
    let id = props.id
    let postDate = props.postDate
    let title = props.title
    let originalTitle = props.originalTitle
    let genres = props.genres || []
    let src = props.src
    let description = props.description
    let tvshowTitle = props.tvshowTitle
    let casting = props.casting || []
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
            casting = []
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
            casting = props.casting
            src = props.src
            description = props.description
            tvshowTitle = props.tvshowTitle
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
                    <a :href="'/tv-show/' + tvshowTitle" class="masvideos-LoopEpisode-link masvideos-loop-episode__link episode__link">
                        <h1 class="episode_title entry-title">{{ title || ' ' }}</h1>
                    </a>
                    <div class="title-orginal__tvshow_single">
                        {{ originalTitle || ' ' }}
                    </div>
                    <span class="tv-show__meta--genre casting">
                        <template v-if="casting.length">
                            <NuxtLink :to="'/person/' + casting[0].link" rel="tag"><span v-html="casting[0].name"></span></NuxtLink>
                        </template>
                        <template v-for="(item, idx) in genres" :key="idx">
                            <span>, </span>
                            <NuxtLink v-if="idx < 3" :to="'/tv-show-genre/' + item.link" rel="tag"><span v-html="item.name"></span></NuxtLink>
                        </template>
                        <span v-if="(casting.length ? 1 : 0) + genres.length > 4"> ...</span>
                    </span>
                    <div class="episode__description modified">
                        <div v-html="description"></div>
                        <a class="maxlist-more" href="#" @click.prevent="onReadMoreClick">{{ expanded ? 'Show Less' : 'Read More' }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>