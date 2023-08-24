<script setup>
    const props = defineProps(['data', 'title'])
    const data = props.data
    const title = props.title
</script>

<template>
    <section class="tv-show-related">
        <h2 class="tv-show-related__title">You may also like after: {{ title }}</h2>
        <div class="tv-show-related__carousel">
            <div class="tv-show-related__carousel--inner" data-ride="vodi-slick-carousel" data-wrap=".tv-shows__inner"
                data-slick="{&quot;slidesToShow&quot;:5,&quot;slidesToScroll&quot;:5,&quot;dots&quot;:false,&quot;arrows&quot;:true,&quot;autoplay&quot;:false,&quot;responsive&quot;:[{&quot;breakpoint&quot;:767,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesToScroll&quot;:2}},{&quot;breakpoint&quot;:992,&quot;settings&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesToScroll&quot;:3}},{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{&quot;slidesToShow&quot;:4,&quot;slidesToScroll&quot;:4}}]}">
                <div class="masvideos masvideos-tv-shows">
                    <div class="tv-shows columns-5">
                        <div class="tv-shows__inner slick-initialized slick-slider"><button
                                class="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>
                            <div class="slick-list draggable">
                                <div class="slick-track" style="opacity: 1; width: 5000px; transform: translate3d(-1000px, 0px, 0px);">
                                    <div v-for="(item, index) in data" :key="index" class="slick-slide slick-cloned" data-slick-index="-5" id="" aria-hidden="true" tabindex="-1" style="width: 200px;">
                                        <div>
                                            <div class="tv-show post-8289 tv_show type-tv_show status-publish has-post-thumbnail hentry category-mbc category-wavve category-k-drama tv_show_genre-214 tv_show_genre-218"
                                                style="width: 100%; display: inline-block;">
                                                <div class="tv-show__poster">
                                                    <div class="box-tv-channel">
                                                        <img class="tv-channel"
                                                            :src="item.chanelImage"
                                                            alt="" width="68" height="31"></div><a
                                                        :href="item.link"
                                                        class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"
                                                        tabindex="-1"><img width="220" height="314"
                                                            :src="item.src"
                                                            class="tv-show__poster--image tv_show__poster--image" alt=""
                                                            decoding="async" loading="lazy"></a>
                                                </div>
                                                <div class="tv-show__body">
                                                    <div class="tv-show__info">
                                                        <div class="tv-show__info--head">
                                                            <div class="tv-show__meta"><span
                                                                    class="tv-show__meta--release-year">{{ item.year }}</span>
                                                            </div>
                                                            <div class="original-title-tvshow"> {{ item.originalTitle }} </div>
                                                            <a
                                                                :href="item.link"
                                                                class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"
                                                                tabindex="-1"><span class="span_sea_ep_title"
                                                                    style="display: none;">시즌 2 - 16화</span>
                                                                <h3 class="masvideos-loop-tv-show__title tv-show__title">{{ item.title }}</h3>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><button class="slick-next slick-arrow" aria-label="Next" type="button">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>