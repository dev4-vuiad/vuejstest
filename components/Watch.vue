<script setup>
    const emit = defineEmits(['onStopWatching'])
    const props = defineProps(['isWatching', 'links'])
    let links = props.links || []
    let linkIdx = 0
    const link = ref('')

    watch(
        () => props.isWatching,
        () => {
            links = props.links
            link.value = links[linkIdx]
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
        emit('onStopWatching')
    }

    const playback = (idx) => {
        linkIdx = idx
        link.value = links[linkIdx]
    }
</script>

<style scoped>
.backlink-btn {
    display: flex;
    justify-content: space-between;
}

button.btn.btn-back {
    background: none;
    padding: 0;
    font-size: 18px;
    color: #fff;
}

.flex-btn-hq button.btn.btn-play {
    margin: 0 20px;
    border-radius: 20px;
}

.flex-btn-hq button.btn.btn-play {
    margin: 0 20px;
    border-radius: 20px;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 14px;
    width: 125px;
}

.flex-btn-hq {
    width: 100%;
    text-align: center;
}

@media(max-width: 768px) {
    .container {
        width: 100%;
        max-width: 100%;
        padding: 0;
    }

    .backlink-btn {

        padding: 0 20px;
    }

    .flex-btn-hq button.btn.btn-play {
        margin: 0 2px;
        border-radius: 20px;
        font-weight: 500;
        text-transform: capitalize;
        font-size: 0.5rem;
        width: 70px;
        padding: 5px 10px;
    }

}

@media(max-width: 768px) {
    .flex-btn-hq button.btn.btn-play {
        margin: 0 2px;
        border-radius: 20px;
        font-weight: 500;
        text-transform: capitalize;
        font-size: 0.5rem;
        width: 70px;
        padding: 5px 10px;
    }
}
</style>

<template>
    <div class="container" v-if="isWatching">
        <div class="video-ads">
            <div class="video">
                <div class="video_content">
                    <div id="playVideoUl">
                        <iframe :src="link" class="test" width="100%" height="430" frameborder="0" scrolling="no" :key="linkIdx"
                            type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true"
                            name="video_player" id="video_player"></iframe>
                    </div>
                </div>
                <div class="backlink-btn">
                    <button class="btn btn-back" @click="onStopWatching"><i class="fas fa-arrow-left"></i> 돌아가기</button>
                    <div class="flex-btn-hq">
                        <button v-for="(link, idx) in links" :class="'btn btn-play' + (idx == linkIdx ? ' active' : '')" @click="playback(idx)"><i class="fas fa-play"></i> {{ getLinkName(link) }}</button>
                    </div>
                </div>
            </div>
            <div id="ads_box_S"></div>
        </div>
    </div>
</template>