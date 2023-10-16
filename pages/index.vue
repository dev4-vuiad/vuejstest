<script setup>
    const { $apiBaseUrl } = useNuxtApp()

    definePageMeta({
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

                ///////////////
                const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
                    prevBtn.addEventListener('click', embla.scrollPrev, false);
                    nextBtn.addEventListener('click', embla.scrollNext, false);
                };
                const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
                    return () => {
                        if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
                        else prevBtn.setAttribute('disabled', 'disabled');
                        if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
                        else nextBtn.setAttribute('disabled', 'disabled');
                    };
                };
                EmblaCarousel.defaultOptions = { loop: true };
                const wrap = document.querySelector('.embla');
                const viewPort = wrap.querySelector('.embla__viewport');
                const prevBtn = wrap.querySelector('.embla__button--prev');
                const nextBtn = wrap.querySelector('.embla__button--next');
                const embla = EmblaCarousel(viewPort, { dragFree: true, containScroll: 'trimSnaps', align: 0.08, skipSnaps: true });
                const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);
                setupPrevNextBtns(prevBtn, nextBtn, embla);
                embla.on('select', disablePrevAndNextBtns);
                embla.on('init', disablePrevAndNextBtns);
                jQuery(document).ready(function () {
                    var wr = jQuery('.embla__slide__inner').width();
                    if (wr < 220) {
                        jQuery('.embla__slide__img').each(function () {
                            jQuery(this).css('width', wr);
                        });
                    }
                    jQuery(window).resize(function () {
                        var wr = jQuery('.embla__slide__inner').width();
                        if (wr < 220) {
                            jQuery('.embla__slide__img').each(function () {
                                jQuery(this).css('width', wr);
                            });
                        }
                    });
                });
                const setupPrevNextBtns1 = (prevBtn1, nextBtn1, embla1) => {
                    prevBtn1.addEventListener('click', embla1.scrollPrev, false);
                    nextBtn1.addEventListener('click', embla1.scrollNext, false);
                };
                const disablePrevNextBtns1 = (prevBtn1, nextBtn1, embla1) => {
                    return () => {
                        if (embla1.canScrollPrev()) prevBtn1.removeAttribute('disabled');
                        else prevBtn1.setAttribute('disabled', 'disabled');
                        if (embla1.canScrollNext()) nextBtn1.removeAttribute('disabled');
                        else nextBtn1.setAttribute('disabled', 'disabled');
                    };
                };
                EmblaCarousel.defaultOptions = { loop: true };
                const wrap1 = document.querySelector('.embla1');
                const viewPort1 = wrap1.querySelector('.embla__viewport1');
                const prevBtn1 = wrap1.querySelector('.embla__button--prev1');
                const nextBtn1 = wrap1.querySelector('.embla__button--next1');
                const embla1 = EmblaCarousel(viewPort1, { dragFree: true, containScroll: 'trimSnaps', align: 0.08, skipSnaps: true });
                const disablePrevAndNextBtns1 = disablePrevNextBtns1(prevBtn1, nextBtn1, embla1);
                setupPrevNextBtns1(prevBtn1, nextBtn1, embla1);
                embla1.on('select', disablePrevAndNextBtns1);
                embla1.on('init', disablePrevAndNextBtns1);
                jQuery(document).ready(function () {
                    var wr = jQuery('.embla__slide__inner1').width();
                    if (wr < 220) {
                        jQuery('.embla__slide__img1').each(function () {
                            jQuery(this).css('width', wr);
                        });
                    }
                    jQuery(window).resize(function () {
                        var wr = jQuery('.embla__slide__inner1').width();
                        if (wr < 220) {
                            jQuery('.embla__slide__img1').each(function () {
                                jQuery(this).css('width', wr);
                            });
                        }
                    });
                });


                // Bottom slider
                let slider = $('#section-movies-carousel-aside-header-64d3194c4e219').find('.slick-track').slick({
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    infinite: false,
                    responsive: [{"breakpoint":768,"settings":{"slidesToShow":2,"slidesToScroll":1}},{"breakpoint":992,"settings":{"slidesToShow":3,"slidesToScroll":1}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":1}}]
                })
                $('#section-movies-carousel-aside-header-64d3194c4e219').find('button.slick-next').on('click', function() {
                    slider.slick('slickNext')
                })
                $('#section-movies-carousel-aside-header-64d3194c4e219').find('button.slick-prev').on('click', function() {
                    slider.slick('slickPrev')
                })
            }   
        }
    })

    useRouteCache((helper) => {
        helper.setMaxAge(43600).setCacheable();
    })

    const defaultData = {
        sliders: Array.from(Array(10), (_, index) => ({})),
        otts: {
            ottChanels: Array.from(Array(6), (_, index) => ({})),
            ottSliders: Array.from(Array(10), (_, index) => ({})),
            ottTitle: ''
        },
        tvshows: {
            categories: {
                items: {
                    'tv-show': Array.from(Array(12), (_, index) => ({})),

                },
                menu: Array.from(Array(5), (_, index) => ({}))
            },
            title: ''
        },
        movies: {
            items: Array.from(Array(12), (_, index) => ({})),
            title: ''
        },
        moviesCarousel: Array.from(Array(8), (_, index) => ({})),
        movieNewests: {
            topWeeks: Array.from(Array(5), (_, index) => ({})),
            movieNewests: Array.from(Array(8), (_, index) => ({}))
        }
    }
    const { data, pending }  = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/homepage'),
        {
            default: () => defaultData
        }
    )

    useHead({
        title: '코코아티비 :: KOKOA.TV &#8211; 최신영화,드라마,예능 무료 다시보기사이트 :: 코코아티비',
        script: [
            {
                children: 'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-NL156SRJ6P"),gtag("config","UA-160268616-2");'
            }
        ]
    });
</script>

<template>
    <div class="home">
        <div class="site-content" tabindex="-1">
            <div class="container">
                <div class="site-content__inner">
                    <div id="primary" v-if="data" class="content-area">
                        <main id="main" class="site-main" role="main">
                            <article class="page type-page status-publish hentry">
                                <div class="page__content">
                                    <section id="section-home-slider-custom-64d31949b2fcb"
                                            class="home-section more-dark">
                                        <HomeSlider v-if="data" :data="data.sliders" />
                                    </section>
                                    <section class="home-section ads-top">
                                        <div class="kskdCustomElement"></div>
                                        <div class="kskdDiv kskdCls"></div>
                                    </section>
                                    <section id="section-home-slider-custom-ott-64d31949c9733"
                                        class="home-section home-slider-custom-ott">
                                        <div class="bg_opacity"></div>
                                        <HomeOot :pending="pending" 
                                            :title="data.otts.ottTitle"
                                            :sliders="data.otts.ottSliders"
                                        />
                                    </section>
                                    <section
                                        class="home-section home-tv-show-section-aside-header has-section-header has-bg-color dark less-dark">
                                        <div class="container">
                                            <HomeTvshow v-if="data && data.tvshows" :title="data.tvshows.title" :menu="data.tvshows.categories.menu" :items="data.tvshows.categories.items" />
                                        </div>
                                    </section>
                                    <section class="home-section home-movie-section-aside-header has-bg-color dark more-dark">
                                        <div class="container">
                                            <HomeMovie v-if="data && data.movies" :data="data.movies.items" :title="data.movies.title" />
                                        </div>
                                    </section>
                                    <div class="kskdDiv kskdCls">
                                        <div class="kskdDiv"></div>
                                    </div>
                                    <section class="home-section home-ads-bt-feature ads-bottom"></section>
                                    <section id="section-movies-carousel-aside-header-64d3194c4e219"
                                        class="home-section section-movies-carousel-aside-header has-section-header has-bg-color light header-right">
                                        <div class="container">
                                            <HomeMovieCarousel v-if="data && data.moviesCarousel" :data="data.moviesCarousel" />
                                        </div>
                                    </section>
                                    <section id="section-movies-list-64d3194c644bd"
                                        class="home-section section-movies-list">
                                        <div class="container">
                                            <div class="section-movies-list__inner">
                                                <HomeMovieTopWeek v-if="data && data.movieNewests && data.movieNewests.topWeeks" :data="data.movieNewests.topWeeks" />
                                                <HomeNewestMovie v-if="data && data.movieNewests && data.movieNewests.movieNewests" :data="data.movieNewests.movieNewests"  />
                                            </div>
                                        </div>
                                    </section>
                                    <section class="home-section home-ads-bt-feature ads-footer">
                                        <div class="kskdCustomElement"></div>
                                    </section>
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>