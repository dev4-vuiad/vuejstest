<script setup>
    const { $apiBaseUrl } = useNuxtApp()
    const route = useRoute()
    const title = route.params.title

    const { isMobile } = useDevice()

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

    const { data, pending }  = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/movies/details', {
            params: {
                slug: title
            }
        }),
        {
            default: () => ({
                genres: [],
                relateds: Array.from(Array(isMobile ? 6 : 8), (_, index) => ({}))
            })
        }
    )

    useHead({
        title: title + ' – 코코아티비 :: KOKOA.TV',
        script: [
            {
                children: 'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-NL156SRJ6P"),gtag("config","UA-160268616-2");'
            }
        ]
    });

</script>
<template>
    <div class="movie-template-default single-movie masvideos single-movie-v2 full-width dark">
        <div class="site-content " tabindex="-1">
            <div class="container">
                <div class="site-content__inner">
                    <div id="primary" class="content-area">
                        <div class="movie type-movie status-publish has-post-thumbnail hentry">
                            <div class="single-movie__player-container stretch-full-width">
                                <div class="single-movie__player-container--inner container">
                                    <MovieBreadScrumb :genre="data.genres.length ? data.genres[data.genres.length - 1] : undefined" :title="data.title" :pending="pending" />
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
                                        />
                                        <div class="single-movie-ads-box">
                                            <div class="ads-box-child">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="center"></div>
                                </div>
                            </div>
                            <section class="movie__related">
                                <div class="movie__related--inner">
                                    <h2 class="movie__related--title">관련 컨텐츠</h2>
                                    <MovieIntroRelatedList :data="data.relateds" :isMobile="isMobile" :pending="pending" />
                                </div>
                            </section>
                            <div style="text-align: center;margin-top: 10px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>