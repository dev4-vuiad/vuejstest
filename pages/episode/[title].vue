<script setup>
    const { $apiBaseUrl } = useNuxtApp()
    const route = useRoute()
    const title = route.params.title
    const isWatching = ref(false)

    definePageMeta({
        scrollToTop: true,
        pageTransition: {
            name: 'page', 
            mode: 'out-in',
            onAfterEnter: () => {
                $(document).on("click", function(e) {
                    $(".site-header__offcanvas").hasClass("toggled") && ($(".navbar-toggler").is(e.target) || 0 !== $(".navbar-toggler").has(e.target).length || $(".offcanvas-collapse").is(e.target) || 0 !== $(".offcanvas-collapse").has(e.target).length || ($(".site-header__offcanvas").removeClass("toggled"),
                    $("body").removeClass("off-canvas-active")))
                })

                //Movie sidebar filter
                $(".handheld-sidebar-toggle .sidebar-toggler").on("click", function() {
                    $(this).closest(".site-content").toggleClass("active-hh-sidebar")
                }),
                $(document).on("click", function(e) {
                    $(".site-content").hasClass("active-hh-sidebar") && ($(".handheld-sidebar-toggle").is(e.target) || 0 !== $(".handheld-sidebar-toggle").has(e.target).length || $("#secondary").is(e.target) || 0 !== $("#secondary").has(e.target).length || $(".site-content").toggleClass("active-hh-sidebar"))
                })
            }
        }
    })

    const { data, pending, status }  = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/episode/details', {
            params: {
                title: title
            }
        }),
        {
            default: () => ({
            })
        }
    )

    const { refresh }  = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/episode/details', {
            params: {
                watch: data.value.id
            }
        }).then(result => {
            if (result.watchLinks) {
                isWatching.value = true
                data.value.watchLinks = result.watchLinks
                $('.site-header, .site-footer').addClass('watching')
            } else {
                result.watchLinks = []
            }
            return result
        }),
        {
            immediate: false
        }
    )

    useHead({
        title: 'Full HD ' + title + ' 다시보기 - BMyTV.com (비마이티비) 최신 영화, 드라마, 예능, 미드를 초고화질 링크를 제공하는 무료 다시보기',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Full HD ' + title + ' 다시보기 -BMyTV.com (비마이티비) 최신 한국영화, 서양영화, 동양영화, 한국드라마, 예능, 시사, 미드, 일드 OTT (넷플릭스, 와챠, 디즈니플러스, 애플티비, 아마존 프라임 비디오, 티빙 등) | 컨텐츠를 초고화질(Full HD) 링크로 제공.'
            }
        ],
        script: [
            {
                children: 'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-SHE23J6734"),gtag("config","UA-160268616-5");'
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

    const onWatching = () => {
        if (!data.value.watchLinks) {
            refresh()
        } else if (data.value.watchLinks.length) {
            isWatching.value = true;
            $('.site-header, .site-footer').addClass('watching')
        }
    }

    const onStopWatching = () => {
        isWatching.value = false;
        $('.site-header, .site-footer').removeClass('watching')
    }

    onMounted(() => {
        if (status.value == 'error') {
            navigateTo({path: '/'})
        }
    })
</script>

<template>
    <div class="single-episode masvideos single-episode-v3 full-width dark">
        <div class="site-content page-episode" tabindex="-1">
            <div class="container">
                <div class="site-content__inner">
                    <div id="primary" class="content-area">
                        <div class="stretch-full-width">
                            <Watch :links="data.watchLinks" :isWatching="isWatching" @on-stop-watching="onStopWatching" />
                        </div>
                        <div v-if="!isWatching" class="episode status-publish hentry">
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
                                            :casts="data.casts"
                                        />
                                        <div style="margin-bottom:15px;">
                                            <button v-if="outlink && outlink.includes('t01.bmytv.com')" class="btn-outlink" @click="onWatching">바로보기</button>
                                            <a v-else :href="outlink" class="a_btn_out">
                                                <button class="btn-outlink">바로보기</button>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="single-episode-ads-box">
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
                                                <NuxtLink
                                                    :to="'/episode/' + findPrevEp(data.title, data.seasons)"
                                                    class="episode__player--prev-episode__link">
                                                    <span class="episode__player--prev-episode__label"> Previous Episode </span>
                                                </NuxtLink>
                                            </div>
                                            <div class="episode__player--next-episode" v-if="data && findNextEp(data.title, data.seasons)">
                                                <NuxtLink
                                                    :to="'/episode/' + findNextEp(data.title, data.seasons)"
                                                    class="episode__player--next-episode__link">
                                                    <span class="episode__player--next-episode__label"> Next Episode </span>
                                                </NuxtLink>
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