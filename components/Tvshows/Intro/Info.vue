<script setup>
    const props = defineProps(['postDateGmt', 'title', 'originalTitle', 'genres', 'src', 'description', 'outlink'])
    const postDateGmt = props.postDateGmt
    const title = props.title
    const originalTitle = props.originalTitle
    const genres = props.genres
    const src = props.src
    const description = props.description
    const outlink = props.outlink

    const format = (d) => {
        d = new Date(d.replace(' ', 'T') + '.000Z')
        return d.toLocaleDateString('fr-CH')
    }

    const onReadMoreClick = (event) => {
        let ele = $(event.target)
        ele.prev().toggleClass('expanded')
        ele.text(ele.prev().hasClass('expanded') ? 'Show Less' : 'Read More')
    }
</script>

<style scoped>
    .episode__description > div {
        height: auto;
        transition: max-height 600ms ease-in-out;
        overflow: hidden;
        max-height: 47px;
    }
    .episode__description > div.expanded {
        max-height: 200px;
    }
</style>

<template>
    <div class="vodi-single-episode__sidebar--tv-show">
        <div class="tv-show__poster">
            <div class="box-tv-channel">
                <img class="tv-channel"
                    :src="src" alt="" width="68"
                    height="31">
            </div>
            <a :href="outlink" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <span style="display:none"
                    class="span_sea_ep_title">158화</span>
                    <img width="220" height="312"
                    :src="src"
                    class="tv-show__poster--image tv_show__poster--image" alt="" decoding="async" loading="lazy"></a>
        </div>
        <div class="tv-show__body">
            <div class="tv-show__info">
                <div class="tv-show__info--head">
                    <span class="tv-show__meta--genre">
                        <template v-for="(genre, idx) in genres" :key="idx">
                            <span v-if="idx > 0">, </span>
                            <a :href="'/tv-show-genre/' + genre.link" rel="tag">{{ genre.name }}</a>
                        </template>
                    </span>
                    <div class="episode__meta">
                        <span class="episode__meta--release-date">Added: {{ format(postDateGmt) }}</span>
                        <div class="vodi-views-likes"></div>
                    </div><a
                        href="https://kokoatv.net/tv-show/%ec%9a%94%ec%a6%98-%ec%9c%a1%ec%95%84-%ea%b8%88%ec%aa%bd%ea%b0%99%ec%9d%80-%eb%82%b4%ec%83%88%eb%81%bc-1/"
                        class="masvideos-LoopEpisode-link masvideos-loop-episode__link episode__link">
                        <h1 class="episode_title entry-title">{{ title }}</h1>
                    </a>
                    <div class="title-orginal__tvshow_single">
                        {{ originalTitle }}
                    </div>
                    <div class="episode__description">
                        <div v-html="description"></div>
                        <a class="maxlist-more" href="#" @click.prevent="onReadMoreClick">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>