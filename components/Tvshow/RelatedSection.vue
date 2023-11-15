<script setup>
    const renderCount = ref(0)
    const props = defineProps(['data', 'title'])
    let data = props.data
    let title = props.title

    watch(
        [
            () => props.data
        ],
        () => {
            renderCount.value ++
            title = props.title
            data = props.data
        }
        
    )

    onMounted(() => {
        let slider = $('#tv-show-related').find('.tv-shows__inner').slick({
            "slidesToShow":5,
            "slidesToScroll":5,
            "dots":false,
            "arrows":true,
            "autoplay":false,
            "responsive":[{"breakpoint":767,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":992,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":4}}]
        })
        $('#tv-show-related').find('button.slick-next').on('click', function() {
            slider.slick('slickNext')
        })
        $('#tv-show-related').find('button.slick-prev').on('click', function() {
            slider.slick('slickPrev')
        })
    })

</script>

<template>
    <section class="tv-show-related" id="tv-show-related">
        <h2 class="tv-show-related__title" v-if="data && data.length">You may also like after: {{ title }}</h2>
        <div class="tv-show-related__carousel">
            <div class="tv-show-related__carousel--inner">
                <div class="masvideos masvideos-tv-shows">
                    <div class="tv-shows columns-5">
                        <div class="tv-shows__inner">
                            <div v-for="(item, index) in data" :key="index" class="tv-show tv_show type-tv_show status-publish has-post-thumbnail hentry category-sbs category-wavve category-k-drama">
                                <div class="tv-show__poster loading-bg">
                                    <div class="box-tv-channel">
                                        <img class="tv-channel lazyload" :src="item.chanelImage" alt="" width="68" height="31" :key="renderCount" />
                                    </div>
                                    <a :href="'/episode/' + item.slug" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link" tabindex="-1">
                                        <img width="220" height="314"
                                            :src="item.src"
                                            class="tv-show__poster--image tv_show__poster--image lazyload" alt=""
                                            decoding="async"
                                            :key="renderCount"
                                        >
                                    </a>
                                </div>
                                <div class="tv-show__body">
                                    <div class="tv-show__info">
                                        <div class="tv-show__info--head">
                                            <div class="tv-show__meta"><span
                                                    class="tv-show__meta--release-year">{{ item.year }}</span>
                                            </div>
                                            <div class="original-title-tvshow"> {{ item.originalTitle }} </div>
                                            <a :href="'/episode/' + item.slug"
                                                class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"
                                                tabindex="-1">
                                                <h3 class="masvideos-loop-tv-show__title tv-show__title">{{ item.tvshowTitle }}</h3>
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
    </section>
</template>