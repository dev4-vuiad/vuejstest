<script setup>
    import { ref } from 'vue'
    const props = defineProps(['topWeeks', 'topMonths'])
    const topWeeks = props.topWeeks
    const topMonths = props.topMonths
    const tabIdx = ref(0)

    const showTab = (tab) => {
        tabIdx.value = tab
    }
</script>

<template>
    <div class="widget masvideos masvideos_tv_shows_widget masvideos-tv-shows-widget masvideos-tabs"
        style="margin-bottom: 20px; padding: 25px 20px;">
        <div class="widget-header">
            <span class="widget-title">
                <a class="a_tag_btn a_tab_active" href="#" style="margin-right: 10px;" @click.prevent="showTab(0)">Top Week</a> |
                <a class="a_tag_btn" href="#" style="margin-left: 10px;" @click.prevent="showTab(1)">Top Month</a>
            </span>
        </div>
        <div class="tab-content">
            <div id="phimbo_week" :class="'ott-tab tab-pane' + (tabIdx == 0 ? ' active' : '')">
                <div class="masvideos masvideos-tv-shows ">
                    <div class="tv-shows columns-1">
                        <div class="tv-shows__inner">
                            <div v-for="(item, index) in topWeeks" :key="index" class="tv-show post-202574 tv_show type-tv_show status-publish has-post-thumbnail hentry category-disney category-k-drama tv_show_genre-action-adventure tv_show_genre-214 tv_show_genre-218 tv_show_tag-1126">
                                <div class="tv-show__body">
                                    <NuxtLink
                                        :to="'/' + item.link" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                                        <h3 class="masvideos-loop-tv-show__title tv-show__title">{{ item.tvshowTitle }}</h3>
                                    </NuxtLink>
                                    <span class="tv-show__meta--genre">
                                        <template v-for="(genre, idx) in item.genres" :key="idx">
                                            <span v-if="idx > 0">, </span>
                                            <NuxtLink :to="'/tv-show-genre/' + genre.link" rel="tag"><span v-html="genre.name"></span></NuxtLink>
                                        </template>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: none;" class="lamtest-top">
                </div>
            </div>
            <div id="phimbo_month" :class="'ott-tab tab-pane' + (tabIdx == 1 ? ' active' : '')">
                <div class="masvideos masvideos-tv-shows ">
                    <div class="tv-shows columns-1">
                        <div class="tv-shows__inner">
                            <div v-for="(item, index) in topMonths" :key="index" class="tv-show post-202574 tv_show type-tv_show status-publish has-post-thumbnail hentry category-disney category-k-drama tv_show_genre-action-adventure tv_show_genre-214 tv_show_genre-218 tv_show_tag-1126">
                                <div class="tv-show__body">
                                    <NuxtLink
                                        :to="'/' + item.link" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                                        <h3 class="masvideos-loop-tv-show__title  tv-show__title">{{ item.tvshowTitle }}</h3>
                                    </NuxtLink>
                                    <span class="tv-show__meta--genre">
                                        <template v-for="(genre, idx) in item.genres" :key="idx">
                                            <span v-if="idx > 0">, </span>
                                            <NuxtLink :to="'/tv-show-genre/' + genre.link" rel="tag"><span v-html="genre.name"></span></NuxtLink>
                                        </template>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: none;">
                </div>
            </div>
        </div>
    </div>
</template>