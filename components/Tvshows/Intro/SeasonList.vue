<script setup>
    import { reactive } from 'vue'
    const { $toTimeAgo, $getEpTitle } = useNuxtApp()
    const props = defineProps(['data', 'pending', 'id', 'seasonName'])
    let pending = props.pending
    let data = props.data
    let id = props.id
    let seasonName = props.seasonName
    let seasonIdx = data && data.length ? data.findIndex(v => v.name === seasonName) : 0;
    const currentSeason = ref(seasonIdx == -1 ? 0 : seasonIdx)
    const state = reactive({
        showRangeIdx: setShowRangeIdx(data, id, seasonIdx)
    })

    onBeforeMount(() => {
        if (pending) {
            data = undefined
            currentSeason.value = 0
            id = undefined
        }
    })

    watch(
        () => props.pending,
        () => {
            seasonName = props.seasonName
            id = props.id
            data = props.data
            let seasonIdx = data && data.length ? data.findIndex(v => v.name === seasonName) : 0;
            currentSeason.value = seasonIdx == -1 ? 0 : seasonIdx
            state.showRangeIdx = setShowRangeIdx(data, id, seasonIdx)
        }
    )

    function setShowRangeIdx(data, id, seasonIdx) {
        let results = {}
        for (let k in data) {
            if (seasonIdx == k) {
                let idxFound = data[k].episodes.findIndex(v => v.id == id)
                if (idxFound < 0) { //not found
                    results[k] = [0, 7]
                } else {
                    results[k] = [Math.max(0, idxFound - 3), idxFound + 4];
                }
            } else {
                results[k] = [0, 7]
            }
        }

        return results
    }

    const sortEpisodes = (episodes) => {
        const sorted = episodes.map(episode => {
            let m = episode.title.match(/[0-9.]+화/)
            if (m && m.length) {
                episode.order = parseFloat(m[m.length - 1].replace('화'))
            }
            return episode
        }).sort((epA, epB) => {
            return epA.order && epB.order ? epB.order - epA.order : 0
        })
        return sorted;
    }
</script>


<template>
    <div class="single-episode__sidebar column1 sidebar_episode ">
        <div class="vodi-single-episode__sidebar--seasons-episode custom-sidebar-ep">
            <h3 class="vodi-single-episode__sidebar--seasons-episode__season-title"> Seasons </h3>
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
                        <a v-if="data && state.showRangeIdx[currentSeason][0] > 0" class="maxlist-less list-episode-show-more" href="#" style="display: inline;" @click.prevent="state.showRangeIdx[currentSeason][0] -= 10">더보기</a>
                        <div class="masvideos masvideos-episodes ">
                            <div class="episodes columns-6">
                                <div class="episodes__inner">
                                    <template v-for="(episode, idx) in sortEpisodes(season.episodes)">
                                        <div v-if="idx >= state.showRangeIdx[index][0] && idx < state.showRangeIdx[index][1]" :class="'episode status-publish hentry' + (id == episode.id ? ' active' : '')" :postid="episode.id">
                                            <a :href="'/episode/' + episode.slug"
                                                class="masvideos-LoopEpisode-link masvideos-loop-episode__link episode__link">
                                                <span class="masvideos-loop-episode__number episode__number">{{ $toTimeAgo(episode.postDate) }}</span>
                                                <h3 class="masvideos-loop-episode__title episode__title">{{ $getEpTitle(episode.title) }}</h3>
                                            </a> 
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a v-if="data && state.showRangeIdx[currentSeason][1] < data[currentSeason].episodes.length" class="maxlist-more list-episode-show-more" href="#" style="display: inline;" @click.prevent="state.showRangeIdx[currentSeason][1] += 10">더보기</a>
            <div class="kskdDiv kskdCls"></div>
        </div>
        <div class="kokoads TV_Post_Sidebar_Bottom_336_280"></div>
    </div>
</template>