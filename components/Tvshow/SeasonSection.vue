<script setup>
    const renderCount = ref(0)
    const props = defineProps(['data', 'src', ])
    let data = props.data
    let src = props.src
    const seasonIdx = ref(0)

    const showSeason = (idx) => {
        seasonIdx.value = idx
    }

    watch(
        [
            () => props.data,
            () => props.src
        ],
        () => {
            renderCount.value ++
            src = props.src
            data = props.data
        }
        
    )
</script>

<template>
    <div class="tv_show__season-tabs-wrap">
        <div class="masvideos-tabs">
            <ul class="nav" pos="0">
                <li v-for="(item, index) in data" :key="index" class="nav-item">
                    <a href="#" data-toggle="tab" :class="'nav-link' + (index == seasonIdx ? ' active show' : '')" @click.prevent="showSeason(index)">{{ item.name }}</a>
                </li>
            </ul>
            <div class="tab-content">
                <div v-for="(item, index) in data" :key="index" :class="'tab-pane' + (index == seasonIdx ? ' active show' : '')">
                    <div class="masvideos masvideos-episodes ">
                        <div class="episodes columns-6">
                            <div class="episodes__inner">
                                <div v-for="(episode, idx) in item.episodes" :key="idx" class="episode type-episode status-publish hentry">
                                    <div class="episode__poster loading-bg">
                                        <NuxtLink :to="'/episode/' + episode.title" class="masvideos-LoopEpisode-link masvideos-loop-episode__link episode__link">
                                            <img
                                                width="220" height="330"
                                                :src="src"
                                                class="episode__poster--image lazyload" alt="" 
                                                :key="renderCount"
                                            />
                                        </NuxtLink>
                                    </div>
                                    <div class="episode__body">
                                        <NuxtLink :to="'/episode/' + episode.title"
                                            class="masvideos-LoopEpisode-link masvideos-loop-episode__link episode__link">
                                            <span class="masvideos-loop-episode__number episode__number">{{ episode.postDateGmt.substr(0,10) }}</span>
                                            <h3 class="masvideos-loop-episode__title  episode__title">{{ episode.title }}</h3>
                                        </NuxtLink>
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