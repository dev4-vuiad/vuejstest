<script setup>
    import { onBeforeUpdate } from 'vue'
    const props = defineProps(['data'])
    let data = props.data

    onBeforeUpdate(() => {
        data = props.data
    })
</script>
<template>
    <div class="single-episode__sidebar column1 sidebar_episode ">
        <div class="vodi-single-episode__sidebar--seasons-episode custom-sidebar-ep">
            <h3 class="vodi-single-episode__sidebar--seasons-episode__season-title">
                Seasons </h3>
            <div class="masvideos-tabs">
                <ul class="nav" pos="0" v-if="data">
                    <li v-for="(season, index) in data" :index="index" class="nav-item">
                        <a href="#tab-64de55f679e3c0" data-toggle="tab" class="nav-link active show">
                            <h3 class="season-title">시즌 {{ index + 1 }}</h3>
                            <span v-if="season.episodes" class="episodes-count">{{ season.episodes.length }}</span>
                        </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div id="tab-64de55f679e3c0" class="tab-pane active show">
                        <h3 class="vodi-single-episode__sidebar--seasons-episode__season-title">
                            Episodes of 시즌 {{ index + 1 }}
                        </h3>
                        <div v-for="(season, index) in data" :key="index" class="masvideos masvideos-episodes ">
                            <div class="episodes columns-6">
                                <div class="episodes__inner">
                                    <div v-for="(episode, idx) in season.episodes" :key="idx" class="post-202016 episode type-episode status-publish hentry">
                                        <a :href="'/episode/' + episode.title"
                                            class="masvideos-LoopEpisode-link masvideos-loop-episode__link episode__link">
                                            <span class="masvideos-loop-episode__number episode__number">{{ episode.post_date_gmt.substr(0,10) }}</span>
                                            <h3 class="masvideos-loop-episode__title episode__title">{{ episode.title }}</h3>
                                        </a> 
                                        <div class="title-orginal__tvshow_single"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <a class="maxlist-more list-episode-show-more" href="javascript:show_read_more_list_ep_single(this);"
                data-readmore-toggle="rmjs-1" aria-controls="rmjs-1" style="display: inline;">더
                보기</a>
        </div>
    </div>
</template>