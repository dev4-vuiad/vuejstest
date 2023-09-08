<script setup>

    const props = defineProps(['data', 'title'])
    const data = props.data
    const title = props.title

</script>

<template>
    <section class="tv-show-related" id="tv-show-related">
        <h2 class="tv-show-related__title">You may also like after: {{ title }}</h2>
        <div class="tv-show-related__carousel">
            <div class="tv-show-related__carousel--inner">
                <div class="masvideos masvideos-tv-shows">
                    <div class="tv-shows columns-5">
                        <div class="tv-shows__inner">
                            <div v-for="(item, index) in data" :key="index" class="tv-show tv_show type-tv_show status-publish has-post-thumbnail hentry category-sbs category-wavve category-k-drama">
                                <div class="tv-show__poster">
                                    <div class="box-tv-channel">
                                        <img class="tv-channel" :src="item.chanelImage" alt="" width="68" height="31">
                                    </div>
                                    <NuxtLink :to="'/' + item.link" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link" tabindex="-1"><img width="220" height="314"
                                    :src="item.src"
                                    class="tv-show__poster--image tv_show__poster--image" alt=""
                                    decoding="async" loading="lazy">
                                    </NuxtLink>
                                </div>
                                <div class="tv-show__body">
                                    <div class="tv-show__info">
                                        <div class="tv-show__info--head">
                                            <div class="tv-show__meta"><span
                                                    class="tv-show__meta--release-year">{{ item.year }}</span>
                                            </div>
                                            <div class="original-title-tvshow"> {{ item.originalTitle }} </div>
                                            <NuxtLink :to="'/' + item.link"
                                                class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"
                                                tabindex="-1">
                                                <h3 class="masvideos-loop-tv-show__title tv-show__title">{{ item.tvshowTitle }}</h3>
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
    </section>
</template>