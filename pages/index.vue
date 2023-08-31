<script setup>
    import { onMounted } from 'vue'

    useHead({
        bodyAttrs: {
            class: 'home page-template-default page wp-custom-logo wp-embed-responsive masvideos-js full-width'
        }
    });

    let { data } = await useFetch('https://backendnew.takitv.net/api/homepage')

    onMounted(() => {
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
    })
</script>

<template>
    <div>
        <Head>
            <Title>코코아티비 :: KOKOA.TV &#8211; 최신영화,드라마,예능 무료 다시보기사이트 :: 코코아티비</Title>
         </Head>
    </div>
    <div id="page" class="hfeed site">
        <Header />
        <HeaderHandHeld />
        <div id="content" class="site-content " tabindex="-1">
            <div class="container">
                <div class="site-content__inner">
                    <div id="primary" class="content-area">
                        <main id="main" class="site-main" role="main">
                            <article id="post-7782" class="post-7782 page type-page status-publish hentry">
                                <div class="page__content">
                                    <section id="section-home-slider-custom-64d31949b2fcb"
                                        class="home-section more-dark">
                                        <div class="container">
                                            <header class="home-section__header">
                                                <h2 class="home-section__title slider-title">추천 컨텐츠</h2>
                                                <div class="home-section__action"></div>
                                            </header>
                                        </div>
                                        <HomeSlider v-if="data && data.sliders" :data="data.sliders" />
                                    </section>
                                    <section class="home-section  ads-top"
                                        style="background-color:#2E3037;padding-top: 10px; padding-bottom: 10px;text-align: center;">
                                        <div class="kskdCustomElement" style=" margin: 0 auto; padding: 0 15px;"></div>
                                    </section>
                                    <section id="section-home-slider-custom-ott-64d31949c9733"
                                        class="home-section home-slider-custom-ott">
                                        <div class="bg_opacity"></div>
                                        <HomeOot v-if="data && data.otts" 
                                            :channels="data.otts.ottChanels"
                                            :title="data.otts.ottTitle"
                                            :sliders="data.otts.ottSliders"
                                        />
                                    </section>
                                    <section
                                        class="home-section home-tv-show-section-aside-header has-section-header has-bg-color dark less-dark">
                                        <div class="container">
                                            <HomeTvshow v-if="data && data.tvshows" :title="data.tvshows.title" :data="data.tvshows.categories" />
                                        </div>
                                    </section>
                                <section
                                    class="home-section home-movie-section-aside-header has-bg-color dark more-dark"
                                    style="padding-bottom: 13px; padding-top: 35px; ">
                                    <div class="container">
                                        <HomeMovie v-if="data && data.movies" :data="data.movies.items" :title="data.movies.title" />
                                    </div>
                                </section>
                                <section class="home-section home-ads-bt-feature ads-bottom"
                                    style="background-color:#1B212D;padding: 25px 0px;text-align: center;">
                                </section>
                                <section id="section-movies-carousel-aside-header-64d3194c4e219"
                                    class="home-section section-movies-carousel-aside-header has-section-header has-bg-color light header-right"
                                    style="padding-bottom: 11px; ">
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
                                <!-- add ads  home-section home-ads-bt-feature1 ads-footer Kiosked -->
                                <section class="home-section home-ads-bt-feature ads-footer"
                                    style="background-color:#2E3037;padding: 10px 0px;text-align: center;min-height: 135px">
                                    <!-- <div class="kskdCustomElement" style=" margin: 0 auto; padding: 0 15px;"></div> -->
                                </section>
                                <p></p>
                            </div><!-- .entry-content -->
                        </article><!-- #post-## -->
                    </main><!-- #main -->
                </div><!-- #primary -->
            </div><!-- /.site-content-inner -->
        </div><!-- /.container -->
    </div><!-- #content -->
        <footer id="colophon" class="site-footer site__footer--v4 desktop-footer dark" role="contentinfo">
            <div class="container">
                <div class="footer-v4-bar">
                    <div class="site-footer__logo footer-logo"><a href="/" class="custom-logo-link"
                            rel="home" aria-current="page"><img width="653" height="152"
                                src="https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo.png"
                                class="custom-logo" alt="코코아티비 :: KOKOA.TV"
                                srcset="https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo.png 653w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-300x70.png 300w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-24x6.png 24w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-36x8.png 36w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-48x11.png 48w"
                                sizes="(max-width: 653px) 100vw, 653px"></a></div>
                    <div class="site-footer__social-icons footer-social-icons">
                        <ul id="menu-footer-social-menu" class="social-icons">
                            <li
                                class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4994">
                                <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                            class="fas fa-circle fa-stack-2x"></i><i
                                            class="fab fa-facebook-f social-media-item__icon fa-stack-1x fa-inverse"
                                            aria-hidden="true"></i> </span><span
                                        class="social-media-item__title">Facebook</span></a></li>
                            <li
                                class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4995">
                                <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                            class="fas fa-circle fa-stack-2x"></i><i
                                            class="fab fa-twitter social-media-item__icon fa-stack-1x fa-inverse"
                                            aria-hidden="true"></i> </span><span
                                        class="social-media-item__title">Twitter</span></a></li>
                            <li
                                class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4996">
                                <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                            class="fas fa-circle fa-stack-2x"></i><i
                                            class="fab fa-google-plus-g social-media-item__icon fa-stack-1x fa-inverse"
                                            aria-hidden="true"></i> </span><span
                                        class="social-media-item__title">Google+</span></a></li>
                            <li
                                class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4997">
                                <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                            class="fas fa-circle fa-stack-2x"></i><i
                                            class="fas fa-globe social-media-item__icon fa-stack-1x fa-inverse"
                                            aria-hidden="true"></i> </span><span
                                        class="social-media-item__title">Vimeo</span></a></li>
                            <li
                                class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4998">
                                <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                            class="fas fa-circle fa-stack-2x"></i><i
                                            class="fas fa-rss social-media-item__icon fa-stack-1x fa-inverse"
                                            aria-hidden="true"></i> </span><span
                                        class="social-media-item__title">RSS</span></a></li>
                        </ul>
                    </div>
                </div><!-- /.footer-v4-bar -->
                <div class="site-footer__info site-info">
                    Copyright © 2022, kokoatv.net. All Rights Reserved </div><!-- .site-info -->
            </div><!-- .container -->
        </footer><!-- #colophon -->
        <footer class="site-footer handheld-footer dark">
            <div class="container">
                <div class="site-footer__info site-info">
                    Copyright © 2022, kokoatv.net. All Rights Reserved </div><!-- .site-info -->
            </div><!-- /.container -->
        </footer>
    </div>
</template>