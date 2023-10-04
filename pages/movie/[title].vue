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
                //animated drop down submenu
                $(".site_header__primary-nav .menu-item, .site_header__secondary-nav .menu-item, .site_header__secondary-nav-v3 .menu-item, .site_header__navbar-primary .menu-item").on("mouseenter", function() {
                    var e = $(this)
                    , t = e.parents(".site_header__primary-nav, .site_header__secondary-nav, .site_header__secondary-nav-v3, .site_header__navbar-primary")
                    , a = e.parents(".vodi-animate-dropdown");
                    if (0 < t.length && (a = t),
                    e.hasClass("menu-item-has-children"))
                        a.hasClass("animated-dropdown") || setTimeout(function() {
                            a.addClass("animated-dropdown")
                        }, 200);
                    else if (a.hasClass("animated-dropdown")) {
                        e.parents(".menu-item-has-children").length <= 0 && a.removeClass("animated-dropdown")
                    }
                })

                //Sidebar menu
                $(".site-header__offcanvas .navbar-toggler").on("click", function() {
                    0 < $(this).parents(".stuck").length && $("html, body").animate({
                        scrollTop: $("body")
                    }, 0),
                    $(this).closest(".site-header__offcanvas").toggleClass("toggled"),
                    $("body").toggleClass("off-canvas-active")
                })
                
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
                title: title
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
        title: title + ' – 코코아티비 :: KOKOA.TV'
    });

</script>
<template>
    <div class="movie-template-default single-movie masvideos single-movie-v2 full-width dark">
        <div class="site-content " tabindex="-1">
            <div class="container">
                <div class="site-content__inner">
                    <div id="primary" class="content-area">
                        <div class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-wmovie">
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