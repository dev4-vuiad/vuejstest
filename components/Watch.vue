<script setup>
    import { nextTick } from 'vue';
    import { onBeforeRouteLeave } from 'vue-router';
    const emit = defineEmits(['onStopWatching'])
    const props = defineProps(['isWatching', 'links'])
    let links = props.links || []
    let linkIdx = 0
    const link = ref('')
    const playerW = ref(null)
    const playerH = ref(null)

    watch(
        () => props.isWatching,
        () => {
            links = props.links
            if (links && links.length) {
                // sort links order: HQ Plus, Hydrax
                links = links.sort((a,b) => {
                    if (a.includes('videojs.vidground.com')) {
                        return -1
                    } else if (a.includes('short.ink') && !b.includes('videojs.vidground.com')) {
                        return -1
                    }
                    return 0
                })
            }
            link.value = links[linkIdx]
            if (props.isWatching) {
                setTimeout(function() {
                    removeAds()
                    putAds()
                    setPlayerSize()
                }, 50)
            }
        }
    )

    const getLinkName = (l) => {
        if (l.includes('videojs.vidground.com')) {
            return 'HQ Plus'
        } else if (l.includes('short.ink')) {
            return 'Hydrax'
        } else {
            return 'Asia'
        }
    }

    const onStopWatching = () => {
        removeAds()
        emit('onStopWatching')
    }

    const playback = (idx) => {
        linkIdx = idx
        link.value = links[linkIdx]
        setTimeout(function() {
            setPlayerSize()
        }, 200)
    }

    onBeforeRouteLeave((to, from, next) => {
        if(props.isWatching) {
            next(false);
            onStopWatching()
        } else {
            next();
        }
    })

    onMounted(() => {
        window.addEventListener('resize', setPlayerSize());
    })

    onBeforeUnmount(() => {
        removeAds()
        window.removeEventListener('resize', setPlayerSize());
        emit('onStopWatching')
    })

    const setPlayerSize = () => {
        playerW.value = $("#video_content").width();
        if ( playerW.value > 500 ) {
            playerW.value *= 0.8;
        }

        playerH.value = playerW.value / 1.7;
        if ( playerH.value < 260 ) {
            playerH.value = 260;
        }
        nextTick()
    }

    const putAds = () => {
        const adsHtml = '<div class=ads-box-s><div class=ads-top><div class="home-section home-movie-section-aside-header"></div></div><div class=ads-middle><div class=ads-left><div class=ads-box-child></div></div><div class=ads-right><div class=single-tv-show-ads></div></div></div><div class=ads-bottom><section class="home-section home-ads-bt-feature ads-footer"><div class="kskdCustomElement"></div></section></div></div>'
        $('.watch-container').append(adsHtml)
    }

    const removeAds = () => {
        $('.watch-container .ads-box-s').remove()
    }
</script>

<template>
    <div class="watch-container" v-if="isWatching">
        <div class="video-container">
            <div id="video_content">
                <iframe :src="link" width="100%" height="550" frameborder="0" scrolling="no" :key="link" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" :style="'background-color: #000' + (playerW && playerH ? ';width:' + playerW + 'px !important;height:' + playerH + 'px !important' : '')" ></iframe>
            </div>
            <div class="backlink-btn">
                <button class="btn btn-back" @click="onStopWatching"><i class="fas fa-arrow-left"></i> 돌아가기</button>
                <div class="flex-btn-hq">
                    <button v-for="(link, idx) in links" :class="'btn btn-play' + (idx == linkIdx ? ' active' : '')" @click="playback(idx)"><i class="fas fa-play"></i> {{ getLinkName(link) }}</button>
                </div>
            </div>
        </div>
    </div>
</template>