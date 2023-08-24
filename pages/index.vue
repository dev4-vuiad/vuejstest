<script setup>
    import { onMounted } from 'vue'

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
    <body class="home page-template-default page page-id-7782 wp-custom-logo wp-embed-responsive masvideos-js  full-width">
        <div id="page" class="hfeed site">
            <Header />
            <header class="handheld-header site-header handheld-stick-this light">
                <div class="container-fluid">
                    <div class="site-header__inner">
                        <div class="site-header__left">
                            <div class="site-header__offcanvas">
                                <button class="site-header__offcanvas--toggler navbar-toggler" data-toggle="offcanvas"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="13">
                                        <path
                                            d="M0 13L0 11.4 16 11.4 16 13 0 13ZM0 5.7L16 5.7 16 7.3 0 7.3 0 5.7ZM0 0L16 0 16 1.6 0 1.6 0 0Z">
                                        </path>
                                    </svg></button>
                                <div class="offcanvas-drawer">
                                    <div class="offcanvas-collapse" data-simplebar="init">
                                        <div class="simplebar-wrapper" style="margin: 0px -24px;">
                                            <div class="simplebar-height-auto-observer-wrapper">
                                                <div class="simplebar-height-auto-observer"></div>
                                            </div>
                                            <div class="simplebar-mask">
                                                <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                                    <div class="simplebar-content"
                                                        style="padding: 0px 24px; height: auto; overflow: hidden;">
                                                        <div class="site_header__offcanvas-nav">
                                                            <ul id="menu-main-menu-2" class="offcanvas-nav yamm">
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8092 nav-item show">
                                                                    <a title="영화" href="/movie/"
                                                                        class="nav-link show">영화</a></li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-161947 nav-item show">
                                                                    <a title="TV" href="#" data-toggle="dropdown"
                                                                        aria-haspopup="true" aria-expanded="false"
                                                                        class="dropdown-toggle nav-link">TV</a>
                                                                    <ul class="dropdown-menu" role="menu">
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8093 nav-item show">
                                                                            <a title="드라마"
                                                                                href="/k-drama/"
                                                                                class="dropdown-item show">드라마</a></li>
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8094 nav-item show">
                                                                            <a title="예능" href="/k-show/"
                                                                                class="dropdown-item show">예능</a></li>
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8095 nav-item show">
                                                                            <a title="시사다큐"
                                                                                href="/k-sisa/"
                                                                                class="dropdown-item show">시사</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-118282 nav-item show">
                                                                    <a title="미드" href="/u-drama/"
                                                                        class="nav-link show">미드</a></li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8098 nav-item show">
                                                                    <a title="OTT/Web" href="/ott-web/"
                                                                        class="nav-link show">OTT</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="simplebar-placeholder" style="width: 0px; height: 0px;"></div>
                                        </div>
                                        <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                                            <div class="simplebar-scrollbar"
                                                style="transform: translate3d(0px, 0px, 0px); visibility: hidden;"></div>
                                        </div>
                                        <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                                            <div class="simplebar-scrollbar"
                                                style="transform: translate3d(0px, 0px, 0px); visibility: hidden;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="site-header__logo"><a href="/" class="custom-logo-link"
                                    rel="home" aria-current="page"><img width="653" height="152"
                                        src="https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo.png"
                                        class="custom-logo" alt="코코아티비 :: KOKOA.TV"
                                        srcset="https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo.png 653w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-300x70.png 300w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-24x6.png 24w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-36x8.png 36w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-48x11.png 48w"
                                        sizes="(max-width: 653px) 100vw, 653px"></a></div>
                        </div><!-- /.site-header__left -->
                        <div class="site-header__right">
                            <div class="site-header__search">
                                <div class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                                            <path
                                                d="M7 0C11-0.1 13.4 2.1 14.6 4.9 15.5 7.1 14.9 9.8 13.9 11.4 13.7 11.7 13.6 12 13.3 12.2 13.4 12.5 14.2 13.1 14.4 13.4 15.4 14.3 16.3 15.2 17.2 16.1 17.5 16.4 18.2 16.9 18 17.5 17.9 17.6 17.9 17.7 17.8 17.8 17.2 18.3 16.7 17.8 16.4 17.4 15.4 16.4 14.3 15.4 13.3 14.3 13 14.1 12.8 13.8 12.5 13.6 12.4 13.5 12.3 13.3 12.2 13.3 12 13.4 11.5 13.8 11.3 14 10.7 14.4 9.9 14.6 9.2 14.8 8.9 14.9 8.6 14.9 8.3 14.9 8 15 7.4 15.1 7.1 15 6.3 14.8 5.6 14.8 4.9 14.5 2.7 13.6 1.1 12.1 0.4 9.7 0 8.7-0.2 7.1 0.2 6 0.3 5.3 0.5 4.6 0.9 4 1.8 2.4 3 1.3 4.7 0.5 5.2 0.3 5.7 0.2 6.3 0.1 6.5 0 6.8 0.1 7 0ZM7.3 1.5C7.1 1.6 6.8 1.5 6.7 1.5 6.2 1.6 5.8 1.7 5.4 1.9 3.7 2.5 2.6 3.7 1.9 5.4 1.7 5.8 1.7 6.2 1.6 6.6 1.4 7.4 1.6 8.5 1.8 9.1 2.4 11.1 3.5 12.3 5.3 13 5.9 13.3 6.6 13.5 7.5 13.5 7.7 13.5 7.9 13.5 8.1 13.5 8.6 13.4 9.1 13.3 9.6 13.1 11.2 12.5 12.4 11.4 13.1 9.8 13.6 8.5 13.6 6.6 13.1 5.3 12.2 3.1 10.4 1.5 7.3 1.5Z">
                                            </path>
                                        </svg></a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <form role="search" method="get"
                                                class="search-form masvideos-search masvideos-search-tv_show"
                                                action="/">
                                                <label class="screen-reader-text" for="masvideos-search-field-1">Search
                                                    for:</label>
                                                <input type="search" id="masvideos-search-field-1"
                                                    class="search-field ui-autocomplete-input" placeholder="검색 ..." value=""
                                                    name="s" autocomplete="off">
                                                <button type="submit" class="search-submit"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                                                        <path
                                                            d="M7 0C11-0.1 13.4 2.1 14.6 4.9 15.5 7.1 14.9 9.8 13.9 11.4 13.7 11.7 13.6 12 13.3 12.2 13.4 12.5 14.2 13.1 14.4 13.4 15.4 14.3 16.3 15.2 17.2 16.1 17.5 16.4 18.2 16.9 18 17.5 17.9 17.6 17.9 17.7 17.8 17.8 17.2 18.3 16.7 17.8 16.4 17.4 15.4 16.4 14.3 15.4 13.3 14.3 13 14.1 12.8 13.8 12.5 13.6 12.4 13.5 12.3 13.3 12.2 13.3 12 13.4 11.5 13.8 11.3 14 10.7 14.4 9.9 14.6 9.2 14.8 8.9 14.9 8.6 14.9 8.3 14.9 8 15 7.4 15.1 7.1 15 6.3 14.8 5.6 14.8 4.9 14.5 2.7 13.6 1.1 12.1 0.4 9.7 0 8.7-0.2 7.1 0.2 6 0.3 5.3 0.5 4.6 0.9 4 1.8 2.4 3 1.3 4.7 0.5 5.2 0.3 5.7 0.2 6.3 0.1 6.5 0 6.8 0.1 7 0ZM7.3 1.5C7.1 1.6 6.8 1.5 6.7 1.5 6.2 1.6 5.8 1.7 5.4 1.9 3.7 2.5 2.6 3.7 1.9 5.4 1.7 5.8 1.7 6.2 1.6 6.6 1.4 7.4 1.6 8.5 1.8 9.1 2.4 11.1 3.5 12.3 5.3 13 5.9 13.3 6.6 13.5 7.5 13.5 7.7 13.5 7.9 13.5 8.1 13.5 8.6 13.4 9.1 13.3 9.6 13.1 11.2 12.5 12.4 11.4 13.1 9.8 13.6 8.5 13.6 6.6 13.1 5.3 12.2 3.1 10.4 1.5 7.3 1.5Z">
                                                        </path>
                                                    </svg><span class="screen-reader-text">Search</span></button>
                                                <!-- <input type="hidden" name="post_type" value="" /> -->
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="site-header__user-account dropdown">
                                <a href="/my-account/" class="site-header__user-account--link"
                                    data-toggle="dropdown">
                                    <svg width="32px" height="32px">
                                        <image x="0px" y="0px" width="32px" height="32px"
                                            xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACB1BMVEW7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu3t7eys7KztLO4uLi6u7q0tbSxsrG2t7awsrC7vLu8vLy1trW8vby1tbWysrK6urq3uLe5urm9vr24ubitrq2wsbCsrazV1dXs7Oz29vb39/fw8PDe3t6vsK/v7+/////5+vnLy8urrKuxsbHGx8aur67k5OT4+Pizs7P9/f3R0tGurq7Oz87j4+OsrqzU1NTo6OiusK7+/v7k5eT4+fjGyMa7u7v6+vrMzMyrq6u+vr7Ky8ri4uLt7e3u7u7m5+bT1NOwsLC+v77Q0NDe397f39/T09O/v7/FxsX5+fn09PS9vb37+/v09fTNzs3g4ODh4uHX2Nf8/PzY2djIyMjIycjU1dTl5uXx8fHm5ubV1tVi3+TsAAAAUnRSTlMADleWxOHwxphZESftmiuDiBvN0iAq8TAW9xzX340dI5ymCPj9VV+lydDl5/P05srRnqdjCvr+EKCqipTd5Pb7IfI31NmLkAQvojIVn+PLoWIYYNJBTgAAAAFiS0dEca8HXOIAAAAHdElNRQfjBQECDwMxTbKCAAACG0lEQVQ4y21T90PTQBQ+RKpY3FisExcuEHEvFPdeXLikJLnakjbVgjESSEutqIiKIo66R90L/SNtbzTp+H66e9/37r17A4ACqqZUT63xeGqmTa+dAcrhra7rhEIXQl2iFPDMnFXKz0bdoqzIBIosdqM5RfTceYKKZRdwUJhf7/AL6iD35lAU6Gvg/ELfJe4eCgd62FGT/IuYYDGkPI5E9RASYiK9anAJyw8yFx1evhLv7buKYwoJqMCleX4ZUskVG+iaSXC936ICFS3PCRoHyItKUOw1OQZtYsMDKwBYuUqgEaxEgTeTQxFiE1dXgTWdlFdxyhGYN9LM2gQaJVoB46aLN4ctWg19LVjH/nDrtltwJ42IFa4HG8JUMFLpBTm8ETSHeA53K+SAmkELE8jWqMPfY7/ICzYFWHfcdbhv40KIVok3Z+RBH6XHHj7ivYWbQZvOL+N6+vHEk6fPnoejCh8dfQuo5SHkjB158fLV6zdvg3aGj4e6FWzbTkqtida74SQN8T4xGBM0UuodOwHYlW+WZosT7jok1HROgfXduW7WI1HRoviDWYT4eEzLtdubH4g98GOmZ8wsQVY2NLiXjtQ+Q/pkliE+ZLTzod/fb1bA5wMdfKwbDn4p57/6DzmL0XH42/diOvXjiLdot47+TLgkqdFfx46XLOeJtpbffyaT2Wxy8u8//8lTFfb7dNOZ1rMeX/u58xcuOtb/keQ/CDzeyUsAAAAASUVORK5CYII=">
                                        </image>
                                    </svg> </a>
                                <ul class="dropdown-menu sub-menu">
                                    <li><a href="/my-account/" data-toggle="modal"
                                            data-target="#modal-register-login">로그인</a></li>
                                    <li><a href="/my-account/" data-toggle="modal"
                                            data-target="#modal-register-login">회원가입</a></li>
                                </ul>
                            </div>
                        </div><!-- /.site-header__right -->
                    </div>
                </div>
            </header>
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
</body></template>