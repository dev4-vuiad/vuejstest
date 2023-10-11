<script setup>
    const { $apiBaseUrl } = useNuxtApp()
    const route = useRoute()
    const title = route.params.title

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

    useHead({
        title: title + ' – 코코아티비 :: KOKOA.TV'
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
    <div class="single-episode masvideos single-episode-v3 full-width dark">
        <div class="site-content page-episode" tabindex="-1">
            <div class="container">
                <div class="site-content__inner">
                    <div id="primary" class="content-area">
                        <div class="episode status-publish hentry">
                            <TvshowsIntroBreadScrumb 
                                :pending="pending"
                                :title="data.title"
                                :tvshowTitle="data.tvshowTitle"
                                :tvshowSlug="data.tvshowSlug"
                                :seasonName="data.seasonName"
                                :genre="data && data.genres ? data.genres[data.genres.length - 1] : null"
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
                                <TvshowsIntroDescriptionSection :data="data.description" :id="data.id" :pending="pending" />
                            </div>
                            <TvshowsIntroSeasonList :data="data.seasons" :pending="pending" :id="data.id" :seasonName="data.seasonName" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>