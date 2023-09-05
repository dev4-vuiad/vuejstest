<script setup>
    const route = useRoute()
    const title = ref(route.params.title)

    definePageMeta({
        layout: 'episode',
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
        () => $fetch('https://backendnew.takitv.net/api/episode/' + title.value),
        {
            watch: [title]
        }
    )

    useHead({
        title: title.value + ' – 코코아티비 :: KOKOA.TV'
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
</script>

<template>
    <div id="content" class="site-content " tabindex="-1">
        <div class="container">
            <div class="site-content__inner">
                <div id="primary" class="content-area">
                    <div id="episode-202016" class="post-202016 episode type-episode status-publish hentry">
                        <TvshowsIntroBreadScrumb v-if="data && data.title"
                            :title="data.title"
                            :tvshowTitle="data.tvshowTitle"
                            :seasonName="data.seasonName"
                            :genre="data.genres[data.genres.length - 1]"
                        />
                        <div class="single-episode__content column">
                            <!-- ads top -->
                            <div class="ads-episode-top" style="text-align: center;margin-bottom: 10px;">
                            </div>
                            <div class="single-episode__row row">
                                <div class="single-episode__sidebar column1 single-episode-custom">
                                    <TvshowsIntroInfo v-if="data && data.id"
                                        :postDate="data.postDate"
                                        :postDateGmt="data.postDateGmt"
                                        :title="data.title"
                                        :originalTitle="data.originalTitle" 
                                        :genres="data.genres" :src="data.src"
                                        :description="data.description" 
                                        :outlink="data.outlink"
                                        :tvshowTitle="data.tvshowTitle"
                                    />
                                    <div style="margin-bottom:15px;">
                                        <a :href="data.outlink" class="a_btn_out">
                                            <button class="btn-outlink">바로보기</button>
                                        </a>
                                    </div>
                                </div>
                                <div class="single-episode-ads-box">
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
                            <div class="episode__season-tabs-wrap stretch-full-width"></div>
                            <TvshowsIntroDescriptionSection v-if="data && data.description"
                                :data="data.description" />
                        </div>
                        <TvshowsIntroSeasonList v-if="data && data.seasons" :data="data.seasons" />
                    </div>
                </div><!-- /.content-area -->
            </div><!-- /.site-content-inner -->
        </div><!-- /.container -->
    </div><!-- #content -->
</template>