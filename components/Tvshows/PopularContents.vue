<script setup>
    const props = defineProps(['data', 'title'])
    let data = props.data
    const title = props.title

    onBeforeUpdate(() => {
        data = props.data
    })
</script>

<template>
    <div class="widget-area-inner">
        <div class="kskdDiv ksdkCls"></div>
        <div id="masvideos_tv_shows_widget-1" class="widget masvideos masvideos_tv_shows_widget masvideos-tv-shows-widget">
            <div class="widget-header"><span class="widget-title">{{ title }}</span></div>
            <div class="masvideos masvideos-tv-shows ">
                <div class="tv-shows columns-1">
                    <div class="tv-shows__inner">
                        <div v-for="(item, index) in data" :key="index"
                            class="tv-show tv_show type-tv_show status-publish has-post-thumbnail hentry category-jtbc category-k-drama">
                            <div class="tv-show__body">
                                <span class="tv-show__meta--release-year">{{ item.postDate ? item.postDate.substr(0, 10) : '' }}</span>
                                <NuxtLink :to="'/episode/' + item.slug" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                                    <span style="display:none" class="span_sea_ep_title">16화</span>
                                    <h3 class="masvideos-loop-tv-show__title  tv-show__title">{{ item.tvshowTitle }}</h3>
                                </NuxtLink>
                                <span class="tv-show__meta--genre">
                                    <template v-for="(genre, idx) in item.genres">
                                        <span v-if="idx > 0">, </span>
                                        <NuxtLink :to="'/tv-show-genre/' + genre.slug" rel="tag"><span v-html="genre.name"></span></NuxtLink>
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