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

    onMounted(() => {
        var w = $("#video_content").width();
        if( w > 500 ){
            w = w*0.8;
            $("#div_content_button").css("width",w);
        }else $("#div_content_button").css("width","auto");

        var h = w/1.7;
        if( h < 260 ){
            h = 260;
        }
        $("#video_player").attr("style","width:"+w+"px !important;height:"+h+"px !important;");
        $(window).resize(function(){
            var wr = $("#video_content").width();
            if( wr > 500 ){
                wr = wr*0.8;
                $("#div_content_button").css("width",wr);
            }else $("#div_content_button").css("width","auto");

            var hr = wr/1.7; 
            if( hr < 260 ){
                hr = 260;
            }
            $("#video_player").attr("style","width:"+wr+"px !important;height:"+hr+"px !important;");
        });
    })

    onBeforeUnmount(() => {
        emit('onStopWatching')
    })
</script>

<style scoped>
.backlink-btn {
    display: flex;
    justify-content: space-between;
}

.ads-middle {
    display: flex;
    flex-direction: row;
}

center{
    margin: 5px 0;
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

.backlink-btn .btn-play i{
        color: #000000 !important; 
}

.ads-top,.ads-bottom,.ads-middle {
    display: flex;
    justify-content: center;
}

button.btn.btn-play.active {
    background: #B6BBCA;
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

    #playVideoUl iframe{
        height: 260px;
    }
}
</style>

<template>
    <div class="container" v-if="isWatching">
        <div class="video-ads">
            <div class="video">
                <div class="video_content">
                    <div id="playVideoUl">
                        <iframe :src="link" class="test" width="100%" height="550" frameborder="0" scrolling="no" :key="linkIdx"
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
            <div id="ads_box_S">
                <div class="ads-top">
                    <center>
                        <div class="home-section home-movie-section-aside-header">
                        </div>
                    </center>
                     
                </div>
                <div class="ads-middle">
                    <div class="ads-left">
                        <center><div class="ads-box-child"></div></center>
                    </div>
                    <div class="ads-right">
                        <center><div class="single-tv-show-ads"></div></center>
                    </div>
                </div>
                <div class="ads-bottom">
                    <center>
                        <div class="home-section home-ads-bt-feature">
                            <div></div>
                                       
                        </div>
                    </center>
                </div>
            </div>
        </div>
    </div>
</template>