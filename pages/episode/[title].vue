<script setup>
    const { $apiBaseUrl } = useNuxtApp()
    const route = useRoute()
    const title = route.params.title

    const { data: watchLinks } = await useFetch('/api/outlink/' + title);
    const { data, pending, status } = useAsyncData(
        () => $fetch($apiBaseUrl() + '/episode/details', {
            params: {
                title: title
            }
        }).then(result => {
            if (!process.server && result.title) {
                document.title = result.title + ' – 코코아티비 :: KOKOATV.NET'
            }
            return result
        }),
        {
            default: () => ({})
        }
    )

    const { refresh } = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/episode/details', {
            params: {
                watch: data.value.id
            }
        }).then(result => {
            if (result.watchLinks) {
                data.value.watchLinks = result.watchLinks
            }
            return result
        }),
        {
            immediate: false
        }
    )

    const { refresh: refreshCountView } = useAsyncData(
        () => $fetch($apiBaseUrl() + '/episode/details', {
            params: {
                countViewId: data.value.id
            }
        }),
        {
            immediate: false
        }
    )

    useHead({
        title: (data && data.value.title && data.value.title.length ? data.value.title : title) + ' 코코아티비 :: KOKOATV.NET',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: title + ' - 최신 한국드라마,미드, 예능,시사 스트리밍 다시보기 사이트 : 코코아티비 :: KOKOATV.NET 에서 무료로 즐기세요, 넷플릭스, 와차, 디즈니 플러스등 각종 OTT 컨텐츠를 감상하실 수 있습니다.'
            }
        ]
    });

    const findNextEp = (title, seasons) => {
        for (let s in seasons) {
            for (let e in seasons[s].episodes) {
                if (title == seasons[s].episodes[e].title) {
                    if (s == 0 && e == 0) {
                        return null
                    }
                    else if (e > 0) {
                        return seasons[s].episodes[e * 1 - 1].title
                    } else {
                        let newS = s * 1 - 1
                        let newE = seasons[newS].episodes.length - 1
                        return seasons[newS].episodes[newE].title
                    }
                    return null
                }
            }
        }
        return null
    }

    const findPrevEp = (title, seasons) => {
        for (let s in seasons) {
            for (let e in seasons[s].episodes) {
                if (title == seasons[s].episodes[e].title) {
                    if (s == seasons.length - 1 && e == seasons[s].episodes.length - 1) {
                        return null
                    }
                    else if (e < seasons[s].episodes.length - 1) {
                        return seasons[s].episodes[e * 1 + 1].title
                    } else {
                        seasons[s * 1 + 1].episodes[0].title
                    }
                    return null
                }
            }
        }

        return null
    }

    onMounted(() => {
        if (status.value == 'error') {
            navigateTo({path: '/'})
        }
        if (!watchLinks.length && data.value.id) {
            refresh()
        }
        refreshCountView()
    })
</script>

<template>
    <div class="single-episode masvideos single-episode-v3 full-width dark">
        <div class="site-content page-episode" tabindex="-1">
            <div class="container">
                <div class="site-content__inner">
                    <div id="primary" class="content-area">
                        <div class="stretch-full-width">
                            <Watch :links="watchLinks" v-if="watchLinks.length" />
                        </div>
                        <div v-if="!watchLinks.length" class="episode status-publish hentry">
                            <TvshowsIntroBreadScrumb
                                :pending="pending"
                                :title="data.title"
                                :tvshowTitle="data.tvshowTitle"
                                :tvshowSlug="data.tvshowSlug"
                                :seasonName="data.seasonName"
                            />
                            <div class="single-episode__content column">
                                <!-- ads top -->
                                <div class="ads-episode-top"></div>
                                <div class="single-episode__row row">
                                    <div class="single-episode__sidebar column1 single-episode-custom">
                                        <TvshowsIntroInfo 
                                            :pending="pending" 
                                            :id="data.id"
                                            :postDate="data.postDate"
                                            :postDateGmt="data.postDateGmt"
                                            :title="data.title"
                                            :originalTitle="data.originalTitle" 
                                            :genres="data.genres" :src="data.src"
                                            :description="data.description" 
                                            :outlink="data.outlink"
                                            :tvshowTitle="data.tvshowTitle"
                                            :tvshowSlug="data.tvshowSlug"
                                            :casts="data.casts"
                                        />
                                        <form v-if="!data.outlink || !data.outlink.includes('https://') || data.outlink.includes('https://kokoatv.net')" method="POST" :action="'/episode/' + title" style="margin-bottom:15px;">
                                            <input v-if="data && data.watchLinks" type="hidden" name="watchLinks" :value="data.watchLinks" />
                                            <input type="hidden" name="slug" :value="title" />
                                            <input type="submit" class="btn-outlink" name="submit" value="바로보기" />
                                        </form>
                                        <div v-else style="margin-bottom:15px;">
                                            <a :href="data.outlink" class="a_btn_out">
                                                <button class="btn-outlink">바로보기</button>
                                            </a>
                                        </div>
                                        
                                    </div>
                                    <div class="single-episode-ads-box ads-responsive-height">
                                        <div class="kokoads TV_Post_Top_336_280"></div>
                                        <div class="ads-box-child">
                                        </div>
                                    </div>
                                </div>
                                <div class="episode__head">
                                </div>
                                <div class="summary entry-summary episode__summary">
                                    <div class="episode__title-with-nav">
                                        <div class="episode__player--arrows">
                                            <div class="episode__player--prev-episode" v-if="data && findPrevEp(data.title, data.seasons)">
                                                <a
                                                    :href="'/episode/' + findPrevEp(data.title, data.seasons)"
                                                    class="episode__player--prev-episode__link">
                                                    <span class="episode__player--prev-episode__label"> Previous Episode </span>
                                                </a>
                                            </div>
                                            <div class="episode__player--next-episode" v-if="data && findNextEp(data.title, data.seasons)">
                                                <a
                                                    :href="'/episode/' + findNextEp(data.title, data.seasons)"
                                                    class="episode__player--next-episode__link">
                                                    <span class="episode__player--next-episode__label"> Next Episode </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="kokoads TV_Post_Middle_728_90"></div>
                                <div class="episode__season-tabs-wrap stretch-full-width"></div>
                                <TvshowsIntroDescriptionSection :data="data.description" :id="data.id" :pending="pending" />
                            </div>
                            <TvshowsIntroSeasonList :data="data.seasons" :pending="pending" :id="data.id" :seasonName="data.seasonName" />
                        </div>
                        <div class="kokoads TV_Post_Bottom_728_90"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>