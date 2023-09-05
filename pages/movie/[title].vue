<script setup>
    const route = useRoute()
    const title = ref(route.params.title)

    definePageMeta({
        layout: 'movie',
        layoutTransition: {
            onAppear: () => {
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

    const { data }  = await useAsyncData(
        () => $fetch('https://backendnew.takitv.net/api/movies', {
            params: {
                title: title.value
            }
        }),
        {
            watch: [title]
        }
    )

    useHead({
        title: title + ' – 코코아티비 :: KOKOA.TV'
    });

    const lastGenre = (genres) => {
        return genres[genres.length - 1]
    }

</script>
<template>
    <div id="content" class="site-content " tabindex="-1">
        <div class="container">
            <div class="site-content__inner">
                <div id="primary" class="content-area">
                    <div id="movie-202135"
                        class="post-202135 movie type-movie status-publish has-post-thumbnail hentry movie_genre-230 movie_genre-238 movie_genre-wmovie">
                        <div class="single-movie__player-container stretch-full-width">
                            <div class="single-movie__player-container--inner container">
                                <MovieBreadScrumb v-if="data && data.data && data.data.items.length && data.data.items[0].genres.length" :genre="lastGenre(data.data.items[0].genres)" :title="data.data.items[0].title" />
                                <div class="ads-movie-top" style="text-align: center;margin-bottom: 10px;">
                                </div>
                                <div class="single-movie__row row">
                                    <MovieIntroInfo v-if="data && data.data && data.data.items && data.data.items[0]"
                                        :year="data.data.items[0].year"
                                        :duration="data.data.items[0].duration"
                                        :title="data.data.items[0].title"
                                        :originalTitle="data.data.items[0].originalTitle"
                                        :genres="data.data.items[0].genres"
                                        :src="data.data.items[0].src"
                                        :description="data.data.items[0].description"
                                        :outlink="data.data.items[0].outlink"
                                    />
                                    <div class="single-movie-ads-box">
                                        <div class="ads-box-child">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section class="movie__related">
                            <div class="movie__related--inner">
                                <h2 class="movie__related--title">관련 컨텐츠</h2>
                                <MovieIntroRelatedList v-if="data && data.data && data.data.items && data.data.items[0]" :data="data.data.items[0].relateds" />
                            </div>
                        </section>
                        <div style="text-align: center;margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>