<script setup>
    const route = useRoute();
    let title = route.params.title
    let { pending, data } = await useFetch('http://38.54.125.46/api/movies?title=' + title)

    const lastGenre = (genres) => {
        return genres[genres.length - 1]
    }

    const getMovieFromData = (data) => {
        if (data && data.data && data.data.items && data.data.items[0]) {
            return data.data.items[0]
        }
        
        return null
    }

</script>
<template>
    <body
        class="movie-template-default single single-movie postid-202135 wp-custom-logo wp-embed-responsive masvideos masvideos-page masvideos-single masvideos-js single-movie-v2 full-width dark ">
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
                                                                        class="nav-link show">영화</a>
                                                                </li>
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
                                                                                class="dropdown-item show">드라마</a>
                                                                        </li>
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8094 nav-item show">
                                                                            <a title="예능" href="/k-show/"
                                                                                class="dropdown-item show">예능</a>
                                                                        </li>
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8095 nav-item show">
                                                                            <a title="시사다큐"
                                                                                href="/k-sisa/"
                                                                                class="dropdown-item show">시사</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-118282 nav-item show">
                                                                    <a title="미드" href="/u-drama/"
                                                                        class="nav-link show">미드</a>
                                                                </li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8098 nav-item show">
                                                                    <a title="OTT/Web" href="/ott-web/"
                                                                        class="nav-link show">OTT</a>
                                                                </li>
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
                                    rel="home"><img width="653" height="152"
                                        src="https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo.png"
                                        class="custom-logo" alt="코코아티비 :: KOKOA.TV"
                                        srcset="https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo.png 653w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-300x70.png 300w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-24x6.png 24w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-36x8.png 36w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-48x11.png 48w"
                                        sizes="(max-width: 653px) 100vw, 653px"></a></div>
                        </div>
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
                        </div>
                    </div>
                </div>
            </header>
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
                                                :movieRunTime="data.data.items[0].movieRunTime"
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
            <footer id="colophon" class="site-footer site__footer--v4 desktop-footer dark" role="contentinfo">
                <div class="container">
                    <div class="footer-v4-bar">
                        <div class="site-footer__logo footer-logo"><a href="/" class="custom-logo-link"
                                rel="home"><img width="653" height="152"
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
                                            class="social-media-item__title">Facebook</span></a>
                                </li>
                                <li
                                    class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4995">
                                    <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                                class="fas fa-circle fa-stack-2x"></i><i
                                                class="fab fa-twitter social-media-item__icon fa-stack-1x fa-inverse"
                                                aria-hidden="true"></i> </span><span
                                            class="social-media-item__title">Twitter</span></a>
                                </li>
                                <li
                                    class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4996">
                                    <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                                class="fas fa-circle fa-stack-2x"></i><i
                                                class="fab fa-google-plus-g social-media-item__icon fa-stack-1x fa-inverse"
                                                aria-hidden="true"></i> </span><span
                                            class="social-media-item__title">Google+</span></a>
                                </li>
                                <li
                                    class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4997">
                                    <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                                class="fas fa-circle fa-stack-2x"></i><i
                                                class="fas fa-globe social-media-item__icon fa-stack-1x fa-inverse"
                                                aria-hidden="true"></i> </span><span
                                            class="social-media-item__title">Vimeo</span></a>
                                </li>
                                <li
                                    class="menu-item menu-item-type-custom menu-item-object-custom social-media-item social-media-item-4998">
                                    <a title="						" href="#" class="footer-social-icon"><span class="fa-stack"><i
                                                class="fas fa-circle fa-stack-2x"></i><i
                                                class="fas fa-rss social-media-item__icon fa-stack-1x fa-inverse"
                                                aria-hidden="true"></i> </span><span
                                            class="social-media-item__title">RSS</span></a>
                                </li>
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
        </div><!-- #page -->
        <div class="modal-register-login-wrapper">
            <div class="modal fade modal-register-login" id="modal-register-login" tabindex="-1" role="dialog"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="masvideos">
                                <div class="masvideos-notices-wrapper"></div>
                                <div class="masvideos-register-login">
                                    <div class="masvideos-register">
                                        <div class="masvideos-register__inner">
                                            <h2>회원가입</h2>
                                            <form method="post" class="masvideos-form masvideos-form-register register">
                                                <p
                                                    class="masvideos-form-row masvideos-form-row--wide form-row form-row-wide">
                                                    <label for="reg_email">이메일&nbsp;<span class="required">*</span></label>
                                                    <input type="email"
                                                        class="masvideos-Input masvideos-Input--text input-text"
                                                        name="email" id="reg_email" autocomplete="email" value="">
                                                </p>
                                                <p class="masvideos-FormRow form-row">
                                                    <input type="hidden" id="masvideos-register-nonce"
                                                        name="masvideos-register-nonce" value="700ba13235"><input
                                                        type="hidden" name="_wp_http_referer"
                                                        value="/movie/%ec%96%b4-%ed%95%98%ec%9d%b4%ec%96%b4-%eb%a1%9c/">
                                                    <button type="submit" class="masvideos-Button button" name="register"
                                                        value="회원가입">회원가입</button>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="masvideos-login">
                                        <div class="masvideos-login__inner">
                                            <h2>Login</h2>
                                            <form class="masvideos-form masvideos-form-login login" method="post">
                                                <p
                                                    class="masvideos-form-row masvideos-form-row--wide form-row form-row-wide">
                                                    <label for="username">아이디/이메일&nbsp;<span
                                                            class="required">*</span></label>
                                                    <input type="text"
                                                        class="masvideos-Input masvideos-Input--text input-text"
                                                        name="username" id="username" autocomplete="username" value="">
                                                </p>
                                                <p
                                                    class="masvideos-form-row masvideos-form-row--wide form-row form-row-wide">
                                                    <label for="password">비밀번호&nbsp;<span class="required">*</span></label>
                                                    <input class="masvideos-Input masvideos-Input--text input-text"
                                                        type="password" name="password" id="password"
                                                        autocomplete="current-password">
                                                </p>
                                                <p class="form-row">
                                                    <input type="hidden" id="masvideos-login-nonce"
                                                        name="masvideos-login-nonce" value="85e044ef1c"><input type="hidden"
                                                        name="_wp_http_referer"
                                                        value="/movie/%ec%96%b4-%ed%95%98%ec%9d%b4%ec%96%b4-%eb%a1%9c/">
                                                    <button type="submit" class="masvideos-Button button" name="login"
                                                        value="로그인">로그인</button>
                                                    <label
                                                        class="masvideos-form__label masvideos-form__label-for-checkbox inline">
                                                        <input class="masvideos-form__input masvideos-form__input-checkbox"
                                                            name="rememberme" type="checkbox" id="rememberme"
                                                            value="forever"> <span>아이디 기억하기</span>
                                                    </label>
                                                </p>
                                                <p class="masvideos-LostPassword lost_password">
                                                    <a
                                                        href="/wp-login.php?action=lostpassword">비밀번호찾기</a>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div> <a class="close-button" data-dismiss="modal" aria-label="Close"><i
                                    class="la la-close"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="pswp__bg"></div>
            <div class="pswp__scroll-wrap">
                <div class="pswp__container">
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                </div>
                <div class="pswp__ui pswp__ui--hidden">
                    <div class="pswp__top-bar">
                        <div class="pswp__counter"></div>
                        <button class="pswp__button pswp__button--close" aria-label="Close (Esc)"></button>
                        <button class="pswp__button pswp__button--share" aria-label="Share"></button>
                        <button class="pswp__button pswp__button--fs" aria-label="Toggle fullscreen"></button>
                        <button class="pswp__button pswp__button--zoom" aria-label="Zoom in/out"></button>
                        <div class="pswp__preloader">
                            <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div class="pswp__share-tooltip"></div>
                    </div>
                    <button class="pswp__button pswp__button--arrow--left" aria-label="Previous (arrow left)"></button>
                    <button class="pswp__button pswp__button--arrow--right" aria-label="Next (arrow right)"></button>
                    <div class="pswp__caption">
                        <div class="pswp__caption__center"></div>
                    </div>
                </div>
            </div>
        </div>

        <p id="a11y-speak-intro-text" class="a11y-speak-intro-text"
            style="position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"
            hidden="hidden">알림</p>
    <div id="a11y-speak-assertive" class="a11y-speak-region"
        style="position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"
        aria-live="assertive" aria-relevant="additions text" aria-atomic="true"></div>
    <div id="a11y-speak-polite" class="a11y-speak-region"
        style="position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"
        aria-live="polite" aria-relevant="additions text" aria-atomic="true"></div><a id="scrollUp" href="#top"
        style="display: none; position: fixed; z-index: 1001;"><i class="fas fa-angle-up"></i></a>
    <ul id="ui-id-1" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" unselectable="on"
        style="display: none;"></ul>
    <div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></div>
    <ul id="ui-id-2" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" unselectable="on"
        style="display: none;"></ul>
    <div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></div>
</body>
</template>