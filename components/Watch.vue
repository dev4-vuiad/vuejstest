<script setup>
    const props = defineProps(['links'])
    let links = props.links
    let linkIdx = 0
    const link = ref(links[linkIdx])
    const playerW = ref(null)
    const playerH = ref(null)

    const getLinkName = (l) => {
        if (l.includes('videojs.vidground.com')) {
            return 'HQ Plus'
        } else if (l.includes('short.ink')) {
            return 'Hydrax'
        } else {
            return 'Asia'
        }
    }

    const playback = (idx) => {
        linkIdx = idx
        link.value = links[linkIdx]
        setTimeout(function() {
            setPlayerSize()
        }, 200)
    }

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

    onMounted(() => {
        $('.site-header, .site-footer').addClass('watching')
        window.addEventListener('resize', setPlayerSize());
        setTimeout(function() {
            setPlayerSize()
        }, 200)
    })
</script>

<template>
    <div class="watch-container">
        <div class="video-container">
            <div id="video_content">
                <iframe :src="link" width="100%" height="550" frameborder="0" scrolling="no" :key="link" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" :style="'background-color: #000' + (playerW && playerH ? ';width:' + playerW + 'px !important;height:' + playerH + 'px !important' : '')" ></iframe>
            </div>
            <div class="backlink-btn">
                <a :href="useRoute().path"><button class="btn btn-back"><i class="fas fa-arrow-left"></i> 돌아가기</button></a>
                <div class="flex-btn-hq">
                    <button v-for="(link, idx) in links" :class="'btn btn-play' + (idx == linkIdx ? ' active' : '')" @click="playback(idx)"><i class="fas fa-play"></i> {{ getLinkName(link) }}</button>
                </div>
            </div>
        </div>
        <div class="ads-box-s">
            <div class="ads-top">
                <div class="home-section home-movie-section-aside-header"></div>
            </div>
            <div class="ads-middle">
                <div class="ads-left">
                    <div class="ads-box-child"></div>
                </div>
                <div class="ads-right">
                    <div class="single-tv-show-ads"></div>
                </div>
            </div>
            <div class="ads-bottom">
                <section class="home-section home-ads-bt-feature ads-footer">
                    <div class="kskdCustomElement"></div>
                </section>
            </div>
        </div>
    </div>
</template>