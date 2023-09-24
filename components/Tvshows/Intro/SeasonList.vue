<script setup>
    import { reactive } from 'vue'
    const { $toTimeAgo } = useNuxtApp()
    const props = defineProps(['data', 'pending'])
    let pending = props.pending
    let data = props.data
    let currentSeason = ref(0)
    const state = reactive({
        showIdx: setShowIdx(data)
    })

    onBeforeMount(() => {
        if (pending) {
            data = undefined
        }
    })

    watch(
        () => props.pending,
        () => {
            data = props.data
            state.showIdx = setShowIdx(data)
        }
    )

    function setShowIdx(data) {
        let results = {}
        for (let k in data) {
            results[k] = 10
        }

        return results
    }
</script>


<template>
    <div class="single-episode__sidebar column1 sidebar_episode ">
        <div class="vodi-single-episode__sidebar--seasons-episode custom-sidebar-ep">
            <h3 class="vodi-single-episode__sidebar--seasons-episode__season-title">
                Seasons </h3>
            <div class="masvideos-tabs">
                <ul class="nav" pos="0" v-if="data">
                    <li v-for="(season, index) in data" :index="index" class="nav-item">
                        <a href="#" data-toggle="tab" :class="'nav-link' + (currentSeason == index ? ' active show' : '')" @click.prevent="currentSeason = index">
                            <h3 class="season-title">{{ season.name }}</h3>
                            <span v-if="season.episodes" class="episodes-count">{{ season.episodes.length }}</span>
                        </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div v-for="(season, index) in data" :class="'tab-pane' + (currentSeason == index ? ' active show' : '')">
                        <h3 class="vodi-single-episode__sidebar--seasons-episode__seson-title">
                            Episodes of {{ season.name }}
                        </h3>
                        <div class="masvideos masvideos-episodes ">
                            <div class="episodes columns-6">
                                <div class="episodes__inner">
                                    <template v-for="(episode, idx) in season.episodes" :key="idx">
                                        <div v-if="idx < state.showIdx[index]" class="episode type-episode status-publish hentry">
                                            <NuxtLink :to="'/episode/' + encodeURIComponent(episode.title)"
                                                class="masvideos-LoopEpisode-link masvideos-loop-episode__link episode__link">
                                                <span class="masvideos-loop-episode__number episode__number">{{ $toTimeAgo(episode.postDate) }}</span>
                                                <h3 class="masvideos-loop-episode__title episode__title">{{ episode.title }}</h3>
                                            </NuxtLink> 
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a v-if="data && state.showIdx[currentSeason] < data[currentSeason].episodes.length" class="maxlist-more list-episode-show-more" href="#" style="display: inline;" @click.prevent="state.showIdx[currentSeason] += 10">더보기</a>
        </div>
    </div>
</template>