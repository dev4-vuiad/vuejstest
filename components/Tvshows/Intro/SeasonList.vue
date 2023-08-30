<script setup>
    import { ref } from 'vue'
    const props = defineProps(['data'])
    let data = props.data
    let currentSeason = ref(0)

    const toTimeAgo = (d) => {
        const now = new Date()
        let date = new Date(d.replace(' ', 'T') + '+09:00')
        let disTs = Math.ceil((now.valueOf() - date.valueOf()) / 1000)
        if (disTs >= 48 * 3600) {
            d = new Date(date.valueOf() + 3600 * 9 * 1000)
            return d.getUTCFullYear() + '-' + (d.getUTCMonth() + 1).toString().padStart(2, '0') + '-' + d.getUTCDate().toString().padStart(2, '0')
        } else if (disTs >= 24 * 3600 && disTs < 48 * 3600) {
            return '1일 전'
        } else if (disTs >= 3600 && disTs < 24 * 3600) {
            let hours = Math.floor(disTs / 3600)
            return hours + '시간 전'
        } else if (disTs < 3600 && disTs >= 60) {
            let minutes = Math.floor(disTs / 60)
            return minutes + '분 전'
        } else {
            return disTs + '초 전'
        }
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
                    <div v-for="(season, index) in data" :key="index" :class="'tab-pane' + (currentSeason == index ? ' active show' : '')">
                        <h3 class="vodi-single-episode__sidebar--seasons-episode__seson-title">
                            Episodes of {{ season.name }}
                        </h3>
                        <div class="masvideos masvideos-episodes ">
                            <div class="episodes columns-6">
                                <div class="episodes__inner">
                                    <div v-for="(episode, idx) in season.episodes" :key="idx" class="post-202016 episode type-episode status-publish hentry">
                                        <NuxtLink :to="'/episode/' + episode.title"
                                            class="masvideos-LoopEpisode-link masvideos-loop-episode__link episode__link">
                                            <span class="masvideos-loop-episode__number episode__number">{{ toTimeAgo(episode.postDate) }}</span>
                                            <h3 class="masvideos-loop-episode__title episode__title">{{ episode.title }}</h3>
                                        </NuxtLink> 
                                        <div class="title-orginal__tvshow_single"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <a class="maxlist-more list-episode-show-more" href="#" style="display: inline;" @click.prevent="">더보기</a> -->
        </div>
    </div>
</template>