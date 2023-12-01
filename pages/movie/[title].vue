<script setup>
    const { $apiBaseUrl } = useNuxtApp()
    const route = useRoute()
    const title = route.params.title
    const { isMobile } = useDevice()
    const isWatching = ref(false)
    const startedWatch = ref(false)

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
        () => $fetch($apiBaseUrl() + '/movies/details', {
            params: {
                slug: title
            }
        }).then(result => {
            if (!process.server && result.title) {
                document.title = 'Full HD ' + result.title + ' 다시보기 - BMyTV.com (비마이티비) 최신 영화, 드라마, 예능, 미드를 초고화질 링크를 제공하는 무료 다시보기'
            }
            return result
        }),
        {
            default: () => ({
                genres: [],
                relateds: Array.from(Array(isMobile ? 6 : 8), (_, index) => ({}))
            })
        }
    )

    const { refresh, pending: pendingLinks }  = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/outlink', {
            params: {
                postId: data.value.id
            }
        }).then(result => {
            if (result.watchLinks) {
                data.value.watchLinks = result.watchLinks
                if (startedWatch.value) {
                    $('#__nuxt').find('>div').addClass('modal-open')
                    setTimeout(() => {
                        isWatching.value = true;
                    }, 600)
                }
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
                content: 'Full HD ' + title + ' 다시보기 - BMyTV.com (비마이티비) 최신 한국영화, 서양영화, 동양영화, 한국드라마, 예능, 시사, 미드, 일드 OTT (넷플릭스, 와챠, 디즈니플러스, 애플티비, 아마존 프라임 비디오, 티빙 등) | 컨텐츠를 초고화질(Full HD) 링크로 제공.'
            }
        ],
        script: [
            {
                children: 'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-SHE23J6734"),gtag("config","UA-160268616-5");',
                body: true
            }
        ]
    });

    const onWatching = () => {
        startedWatch.value = true
        if (!data.value.watchLinks) {
            if (!pending && !pendingLinks) {
                refresh()
            }
        } else if (data.value.watchLinks.length) {
            $('#__nuxt').find('>div').addClass('modal-open')
            setTimeout(() => {
                isWatching.value = true;
            }, 600)
        }
    }

    const onStopWatching = () => {
        isWatching.value = false;
        $('#__nuxt').find('>div').removeClass('modal-open')
    }

    watch(
        () => data.value.id,
        () => {
            refresh()
        }
    )

    onMounted(() => {
        if (status.value == 'error') {
            navigateTo({path: '/'})
        }
        if (!window.firstPageLoad) {
            window.firstPageLoad = true
            refresh()
        }
    })

</script>
<template>
    <div class="movie-template-default single-movie masvideos single-movie-v2 full-width dark">
        <div class="site-content " tabindex="-1">
            <div class="container">
                <div class="site-content__inner">
                    <div id="primary" class="content-area">
                        <div class="movie type-movie status-publish has-post-thumbnail hentry">
                            <div class="single-movie__player-container stretch-full-width">
                                <div v-if="!isWatching" class="single-movie__player-container--inner container">
                                    <MovieBreadScrumb :title="data.title" :pending="pending" />
                                    <div class="ads-movie-top"></div>
                                    <div class="single-movie__row row">
                                        <MovieIntroInfoMobile v-if="isMobile"
                                            :pending = "pending"
                                            :id="data.id"
                                            :year="data.year"
                                            :duration="data.duration"
                                            :title="data.title"
                                            :originalTitle="data.originalTitle"
                                            :genres="data.genres"
                                            :src="data.src"
                                            :description="data.description"
                                            :outlink="data.outlink"
                                            :casts="data.casts"
                                            @on-watching="onWatching"
                                        />
                                        <MovieIntroInfo v-if="!isMobile"
                                            :pending = "pending"
                                            :id="data.id"
                                            :year="data.year"
                                            :duration="data.duration"
                                            :title="data.title"
                                            :originalTitle="data.originalTitle"
                                            :genres="data.genres"
                                            :src="data.src"
                                            :description="data.description"
                                            :outlink="data.outlink"
                                            :casts="data.casts"
                                            @on-watching="onWatching"
                                        />
                                        <div class="single-movie-ads-box">
                                            <div class="kokoads Movie_Post_Top_336_280"></div>
                                            <div class="ads-box-child">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="kokoads Movie_Post_Middle_728_90"></div>
                                    <center>
                                        <div class="home-movie-section-aside-header"></div>
                                    </center>
                                </div>
                            </div>
                            <section class="movie__related" v-if="!isWatching">
                                <div class="movie__related--inner">
                                    <h2 class="movie__related--title">관련 컨텐츠</h2>
                                    <MovieIntroRelatedList :data="data.relateds" :isMobile="isMobile" :pending="pending" />
                                    <div class="kokoads Movie_Post_Bottom_728_90"></div>
                                </div>
                            </section>
                            <div style="text-align: center;margin-top: 10px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WatchModal :links="data.watchLinks" :isWatching="isWatching" @on-stop-watching="onStopWatching" />
    </div>
</template>