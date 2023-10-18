<script setup>
const props = defineProps(['pending', 'links'])
let links = props.links || []

watch(
    () => props.pending,
    () => {
        links = props.links
    }
)
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
    <div class="container" v-if="links && links.length">
        <div class="video-ads">
            <div class="video">
                <div class="video_content">
                    <div id="playVideoUl">
                        <iframe :src="links[0] + '?ref=kokoatv.net'" class="test" width="100%" height="430" frameborder="0" scrolling="no"
                            type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true"
                            name="video_player" id="video_player"></iframe>
                    </div>
                </div>
                <div class="backlink-btn">
                    <a href=""><button class="btn btn-back"><i class="fas fa-arrow-left"></i> 돌아가기</button></a>
                    <div class="flex-btn-hq">
                        <button class="btn btn-play btn-hqplus "> <i class="fas fa-play"></i> Hqplus</button>
                        <button class="btn btn-play btn-hydrax "> <i class="fas fa-play"></i> Hydrax</button>
                        <button class="btn btn-play btn-asia"> <i class="fas fa-play"></i> Asia</button>
                    </div>
                </div>
            </div>
            <div id="ads_box_S"></div>
        </div>
    </div>
</template>