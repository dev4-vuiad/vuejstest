<script setup>
    const props = defineProps(['data', 'title'])
    const data = props.data
    const title = props.title

    const toKRTime = (d) => {
        let date = new Date(d.replace(' ', 'T') + '.000Z')
        d = new Date(date.valueOf() + 3600 * 9 * 1000)
        return d.getUTCFullYear() + '-' + (d.getUTCMonth() + 1).toString().padStart(2, '0') + '-' + d.getUTCDate().toString().padStart(2, '0')
    }
</script>

<template>
    <div class="widget-area-inner">
        <div id="masvideos_tv_shows_widget-1" class="widget masvideos masvideos_tv_shows_widget masvideos-tv-shows-widget">
            <div class="widget-header"><span class="widget-title">{{ title }}</span></div>
            <div class="masvideos masvideos-tv-shows ">
                <div class="tv-shows columns-1">
                    <div class="tv-shows__inner">
                        <div v-for="(item, index) in data" :key="index"
                            class="tv-show post-197303 tv_show type-tv_show status-publish has-post-thumbnail hentry category-jtbc category-k-drama tv_show_genre-214 tv_show_genre-213 tv_show_tag-1086">
                            <div class="tv-show__body">
                                <span class="tv-show__meta--release-year">{{ toKRTime(item.postDateGmt) }}</span>
                                <NuxtLink :to="'/' + item.link" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                                    <span style="display:none" class="span_sea_ep_title">16화</span>
                                    <h3 class="masvideos-loop-tv-show__title  tv-show__title">{{ item.tvshowTitle }}</h3>
                                </NuxtLink>
                                <span class="tv-show__meta--genre">
                                    <template v-for="(genre, idx) in item.genres">
                                        <span v-if="idx > 0">, </span>
                                        <NuxtLink :to="'/tv-show-genre/' + genre.name" rel="tag" v-html="genre.name"></NuxtLink>
                                    </template>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>