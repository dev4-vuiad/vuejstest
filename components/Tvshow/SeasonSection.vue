<script setup>
    import { ref } from 'vue'
    const props = defineProps(['data', 'src', ])
    const data = props.data
    const src = props.src
    const season = ref(0)
</script>

<template>
    <div class="tv_show__season-tabs-wrap">
        <div class="masvideos-tabs">
            <ul v-for="(item, index) in data" :key="index" class="nav" pos="0">
                <li class="nav-item">
                    <a href="#" data-toggle="tab" :class="'nav-link' + (index == season ? ' active show' : '')">{{ item.name }}</a>
                </li>
            </ul>
            <div class="tab-content">
                <div v-for="(item, index) in data" :key="index" :class="'tab-pane' + (index == season ? ' active show' : '')">
                    <div class="masvideos masvideos-episodes ">
                        <div class="episodes columns-6">
                            <div class="episodes__inner">
                                <div v-for="(episode, idx) in item.episodes" :key="idx" class="post-203741 episode type-episode status-publish hentry">
                                    <div class="episode__poster">
                                        <a
                                            :href="'/episode/' + episode.title"
                                            class="masvideos-LoopEpisode-link masvideos-loop-episode__link episode__link"><img
                                                width="220" height="330"
                                                :src="src"
                                                class="episode__poster--image" alt="" loading="lazy">
                                        </a>
                                    </div>
                                    <div class="episode__body">
                                        <a :href="'/episode/' + episode.title"
                                            class="masvideos-LoopEpisode-link masvideos-loop-episode__link episode__link">
                                            <span class="masvideos-loop-episode__number episode__number">{{ episode.postDateGmt.substr(0,10) }}</span>
                                            <h3 class="masvideos-loop-episode__title  episode__title">{{ episode.title }}</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>