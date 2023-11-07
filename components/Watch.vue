<script setup>
    import { onBeforeRouteLeave } from 'vue-router';
    const emit = defineEmits(['onStopWatching'])
    const props = defineProps(['isWatching', 'links'])
    let links = props.links || []
    let linkIdx = 0
    const link = ref('')

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
                    setPlayerSize()
                    removeAds()
                    putAds()
                }, 200)
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
        $(window).resize(function(){
            setPlayerSize()
        });
    })

    onBeforeUnmount(() => {
        removeAds()
        emit('onStopWatching')
    })

    const setPlayerSize = () => {
        let w = $("#video_content").width();
        if ( w > 500 ) {
            w = w*0.8;
        }

        let h = w/1.7;
        if ( h < 260 ) {
            h = 260;
        }

        $("#player").attr("style","width:"+w+"px !important;height:"+h+"px !important;");
    }

    const putAds = () => {
        const adsHtml = '<div class=ads-box-s><div class=ads-top><div class="home-section home-movie-section-aside-header"></div></div><div class=ads-middle><div class=ads-left><div class=ads-box-child></div></div><div class=ads-right><div class=single-tv-show-ads></div></div></div><div class=ads-bottom><div class="home-ads-bt-feature home-section"></div></div></div>'
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
                <iframe :src="link" width="100%" height="550" frameborder="0" scrolling="no" :key="linkIdx" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" id="player"></iframe>
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