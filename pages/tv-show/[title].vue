<script setup>
    const route = useRoute();
    let title = route.params.title
    const { data } = await useFetch('https://backendnew.takitv.net/api/tvshows/' + title)
    console.log(data.value)
</script>

<template>
    <body
        class="tv_show-template-default single single-tv_show postid-203734 wp-custom-logo wp-embed-responsive masvideos masvideos-page masvideos-single masvideos-js single-tv_show-v1 full-width dark ">
        <div id="page" class="hfeed site">
            <header id="site-header" class="site-header header-v1 desktop-header stick-this light" role="banner" style="">
                <div class="container-fluid">
                    <div class="site-header__inner">
                        <div class="site-header__right">
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
                                                        style="padding: 0px 24px; height: 100%; overflow: hidden;">
                                                        <div class="site_header__offcanvas-nav">
                                                            <ul id="menu-main-menu" class="offcanvas-nav yamm">
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    id="menu-item-8092"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8092 nav-item show">
                                                                    <a title="영화" href="/movie/"
                                                                        class="nav-link show"><span
                                                                            class="dashicons fas fa-film after-menu-image-icons"></span><span
                                                                            class="menu-image-title-after menu-image-title">영화</span></a>
                                                                </li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    id="menu-item-161947"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-161947 nav-item show">
                                                                    <a title="TV" href="#" data-toggle="dropdown"
                                                                        aria-haspopup="true" aria-expanded="false"
                                                                        class="dropdown-toggle nav-link"><span
                                                                            class="dashicons dashicons-laptop after-menu-image-icons"></span><span
                                                                            class="menu-image-title-after menu-image-title">TV</span></a>
                                                                    <ul class="dropdown-menu" role="menu">
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            id="menu-item-8093"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category current-tv_show-ancestor current-menu-parent current-tv_show-parent active menu-item-8093 nav-item show">
                                                                            <a title="드라마"
                                                                                href="/k-drama/"
                                                                                class="dropdown-item show">드라마</a>
                                                                        </li>
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            id="menu-item-8094"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8094 nav-item show">
                                                                            <a title="예능" href="/k-show/"
                                                                                class="dropdown-item show">예능</a>
                                                                        </li>
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            id="menu-item-8095"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8095 nav-item show">
                                                                            <a title="시사다큐"
                                                                                href="/k-sisa/"
                                                                                class="dropdown-item show">시사</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    id="menu-item-118282"
                                                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-118282 nav-item show">
                                                                    <a title="미드" href="/u-drama/"
                                                                        class="nav-link show"><span
                                                                            class="dashicons fas fa-flag-usa after-menu-image-icons"></span><span
                                                                            class="menu-image-title-after menu-image-title">미드</span></a>
                                                                </li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    id="menu-item-8098"
                                                                    class="menu-item menu-item-type-taxonomy menu-item-object-category current-tv_show-ancestor menu-item-8098 nav-item show">
                                                                    <a title="OTT/Web" href="/ott-web/"
                                                                        class="nav-link show"><span
                                                                            class="dashicons fas fa-cube after-menu-image-icons"></span><span
                                                                            class="menu-image-title-after menu-image-title">OTT</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="simplebar-placeholder" style="width: 224px; height: 939px;"></div>
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
                                        class="custom-logo" alt="코코아티비 :: KOKOA.TV" decoding="async" fetchpriority="high"
                                        srcset="https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo.png 653w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-300x70.png 300w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-24x6.png 24w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-36x8.png 36w, https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo-48x11.png 48w"
                                        sizes="(max-width: 653px) 100vw, 653px"></a></div>
                            <div class="site_header__primary-nav">
                                <ul id="menu-main-menu-1" class="nav yamm">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8092"><a
                                            title="영화" href="/movie/"><span
                                                class="dashicons fas fa-film after-menu-image-icons"></span><span
                                                class="menu-image-title-after menu-image-title">영화</span></a></li>
                                    <li
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-161947">
                                        <a href="/tv-shows/"><span
                                                class="dashicons dashicons-laptop after-menu-image-icons"></span><span
                                                class="menu-image-title-after menu-image-title">TV</span></a>
                                        <ul class="sub-menu">
                                            <li
                                                class="menu-item menu-item-type-taxonomy menu-item-object-category current-tv_show-ancestor current-menu-parent current-tv_show-parent menu-item-8093">
                                                <a title="드라마" href="/k-drama/">드라마</a>
                                            </li>
                                            <li
                                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8094">
                                                <a title="예능" href="/k-show/">예능</a>
                                            </li>
                                            <li
                                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8095">
                                                <a title="시사다큐" href="/k-sisa/">시사</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-118282">
                                        <a href="/u-drama/"><span
                                                class="dashicons fas fa-flag-usa after-menu-image-icons"></span><span
                                                class="menu-image-title-after menu-image-title">미드</span></a>
                                    </li>
                                    <li
                                        class="menu-item menu-item-type-taxonomy menu-item-object-category current-tv_show-ancestor menu-item-8098">
                                        <a title="OTT/Web" href="/ott-web/"><span
                                                class="dashicons fas fa-cube after-menu-image-icons"></span><span
                                                class="menu-image-title-after menu-image-title">OTT</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div><!-- /.site-header__right -->
                        <div class="site-header__left">
                            <div class="site-header__search">
                                <form role="search" method="get"
                                    class="search-form masvideos-search masvideos-search-tv_show"
                                    action="/">
                                    <label class="screen-reader-text" for="masvideos-search-field-0">Search for:</label>
                                    <input type="search" id="masvideos-search-field-0"
                                        class="search-field ui-autocomplete-input" placeholder="Search …" value="" name="s"
                                        autocomplete="off">
                                    <button type="submit" class="search-submit"><svg xmlns="http://www.w3.org/2000/svg"
                                            width="18" height="18">
                                            <path
                                                d="M7 0C11-0.1 13.4 2.1 14.6 4.9 15.5 7.1 14.9 9.8 13.9 11.4 13.7 11.7 13.6 12 13.3 12.2 13.4 12.5 14.2 13.1 14.4 13.4 15.4 14.3 16.3 15.2 17.2 16.1 17.5 16.4 18.2 16.9 18 17.5 17.9 17.6 17.9 17.7 17.8 17.8 17.2 18.3 16.7 17.8 16.4 17.4 15.4 16.4 14.3 15.4 13.3 14.3 13 14.1 12.8 13.8 12.5 13.6 12.4 13.5 12.3 13.3 12.2 13.3 12 13.4 11.5 13.8 11.3 14 10.7 14.4 9.9 14.6 9.2 14.8 8.9 14.9 8.6 14.9 8.3 14.9 8 15 7.4 15.1 7.1 15 6.3 14.8 5.6 14.8 4.9 14.5 2.7 13.6 1.1 12.1 0.4 9.7 0 8.7-0.2 7.1 0.2 6 0.3 5.3 0.5 4.6 0.9 4 1.8 2.4 3 1.3 4.7 0.5 5.2 0.3 5.7 0.2 6.3 0.1 6.5 0 6.8 0.1 7 0ZM7.3 1.5C7.1 1.6 6.8 1.5 6.7 1.5 6.2 1.6 5.8 1.7 5.4 1.9 3.7 2.5 2.6 3.7 1.9 5.4 1.7 5.8 1.7 6.2 1.6 6.6 1.4 7.4 1.6 8.5 1.8 9.1 2.4 11.1 3.5 12.3 5.3 13 5.9 13.3 6.6 13.5 7.5 13.5 7.7 13.5 7.9 13.5 8.1 13.5 8.6 13.4 9.1 13.3 9.6 13.1 11.2 12.5 12.4 11.4 13.1 9.8 13.6 8.5 13.6 6.6 13.1 5.3 12.2 3.1 10.4 1.5 7.3 1.5Z">
                                            </path>
                                        </svg><span class="screen-reader-text">Search</span></button>
                                    <!-- <input type="hidden" name="post_type" value="" /> -->

                                </form>
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
                                    <li><a href="/my-account/">Sign in</a></li>
                                    <li><a href="/my-account/">Register</a></li>
                                </ul>
                            </div>
                        </div><!-- /.site-header__left -->
                    </div>
                </div>
            </header><!-- #site-header -->

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
                                                                        class="nav-link show"><span
                                                                            class="dashicons fas fa-film after-menu-image-icons"></span><span
                                                                            class="menu-image-title-after menu-image-title">영화</span></a>
                                                                </li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-161947 nav-item show">
                                                                    <a title="TV" href="#" data-toggle="dropdown"
                                                                        aria-haspopup="true" aria-expanded="false"
                                                                        class="dropdown-toggle nav-link"><span
                                                                            class="dashicons dashicons-laptop after-menu-image-icons"></span><span
                                                                            class="menu-image-title-after menu-image-title">TV</span></a>
                                                                    <ul class="dropdown-menu" role="menu">
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category current-tv_show-ancestor current-menu-parent current-tv_show-parent active menu-item-8093 nav-item show">
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
                                                                        class="nav-link show"><span
                                                                            class="dashicons fas fa-flag-usa after-menu-image-icons"></span><span
                                                                            class="menu-image-title-after menu-image-title">미드</span></a>
                                                                </li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    class="menu-item menu-item-type-taxonomy menu-item-object-category current-tv_show-ancestor menu-item-8098 nav-item show">
                                                                    <a title="OTT/Web" href="/ott-web/"
                                                                        class="nav-link show"><span
                                                                            class="dashicons fas fa-cube after-menu-image-icons"></span><span
                                                                            class="menu-image-title-after menu-image-title">OTT</span></a>
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
                                        class="custom-logo" alt="코코아티비 :: KOKOA.TV" decoding="async"
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
                                                    class="search-field ui-autocomplete-input" placeholder="Search …"
                                                    value="" name="s" autocomplete="off">
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
                                    <li><a href="/my-account/">Sign in</a></li>
                                    <li><a href="/my-account/">Register</a></li>
                                </ul>
                            </div>
                        </div><!-- /.site-header__right -->
                    </div>
                </div>
            </header>
            <div id="content" class="site-content " tabindex="-1">

                <div class="container">
                    <nav class="masvideos-breadcrumb"><a href="https://kokoatv.net">Home</a><span class="delimiter"><svg
                                width="4px" height="7px">
                                <path fill-rule="evenodd"
                                    d="M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z">
                                </path>
                            </svg></span><a
                            href="/tv-show-genre/%eb%93%9c%eb%9d%bc%eb%a7%88/">드라마</a><span
                            class="delimiter"><svg width="4px" height="7px">
                                <path fill-rule="evenodd"
                                    d="M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z">
                                </path>
                            </svg></span>마스크걸</nav>
                    <div class="site-content__inner">
                        <div id="primary" class="content-area">
                            <div id="tv-show-203734"
                                class="tv-show post-203734 tv_show type-tv_show status-publish has-post-thumbnail hentry category-netflix category-k-drama tv_show_genre-214">
                                <TvshowInfo v-if="data"
                                    :title="data.title"
                                    :originalTitle="data.originalTitle"
                                    :src="data.src"
                                    :description="data.description"
                                />
                                <TvshowSeasonSection v-if="data && data.seasons" :data="data.seasons" :src="data.src" />
                                <TvshowRelatedSection v-if="data && data.relateds.length" :data="data.relateds" :title="data.title" />
                                <div class="masvideos-tabs tv-show-tabs">
                                    <ul class="nav" pos="0">
                                        <li class="nav-item">
                                            <a href="#tab-64e6fc8d00f54description" data-toggle="tab"
                                                class="nav-link active show">
                                                Description </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#tab-64e6fc8d00f54reviews" data-toggle="tab" class="nav-link">
                                                Review </a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div id="tab-64e6fc8d00f54description" class="tab-pane active show">
                                            <div class="tv-show__description" style="margin-top: 22px;">

                                            </div>
                                        </div>
                                        <div id="tab-64e6fc8d00f54reviews" class="tab-pane">
                                            <div id="reviews" class="masvideos-Reviews">

                                                <div id="review_form_wrapper">
                                                    <div id="review_form">
                                                        <div id="respond" class="comment-respond">
                                                            <span id="reply-title" class="comment-reply-title">Be the first
                                                                to review “마스크걸” <small><a rel="nofollow"
                                                                        id="cancel-comment-reply-link"
                                                                        href="/tv-show/%eb%a7%88%ec%8a%a4%ed%81%ac%ea%b1%b8/?season-position=0#respond"
                                                                        style="display:none;">Cancel
                                                                        reply</a></small></span>
                                                            <form action="/wp-comments-post.php"
                                                                method="post" id="commentform" class="comment-form"
                                                                novalidate="">
                                                                <p class="comment-notes"><span id="email-notes">Your email
                                                                        address will not be published.</span> <span
                                                                        class="required-field-message">Required fields are
                                                                        marked <span class="required">*</span></span></p>
                                                                <div class="comment-form-rating"><label for="rating">Your
                                                                        rating</label>
                                                                    <p class="stars"><span><a class="star-1"
                                                                                href="#">1</a><a class="star-2"
                                                                                href="#">2</a><a class="star-3"
                                                                                href="#">3</a><a class="star-4"
                                                                                href="#">4</a><a class="star-5"
                                                                                href="#">5</a><a class="star-6"
                                                                                href="#">6</a><a class="star-7"
                                                                                href="#">7</a><a class="star-8"
                                                                                href="#">8</a><a class="star-9"
                                                                                href="#">9</a><a class="star-10"
                                                                                href="#">10</a></span></p><select
                                                                        name="rating" id="rating" required=""
                                                                        style="display: none;">
                                                                        <option value="">Rate…</option>
                                                                        <option value="10">10</option>
                                                                        <option value="9">9</option>
                                                                        <option value="8">8</option>
                                                                        <option value="7">7</option>
                                                                        <option value="6">6</option>
                                                                        <option value="5">5</option>
                                                                        <option value="4">4</option>
                                                                        <option value="3">3</option>
                                                                        <option value="2">2</option>
                                                                        <option value="1">1</option>
                                                                    </select>
                                                                </div>
                                                                <p class="comment-form-comment"><label for="comment">Your
                                                                        review&nbsp;<span
                                                                            class="required">*</span></label><textarea
                                                                        id="comment" name="comment" cols="45" rows="8"
                                                                        required=""></textarea></p>
                                                                <p class="comment-form-author"><label
                                                                        for="author">Name&nbsp;<span
                                                                            class="required">*</span></label> <input
                                                                        id="author" name="author" type="text" value=""
                                                                        size="30" required=""></p>
                                                                <p class="comment-form-email"><label
                                                                        for="email">Email&nbsp;<span
                                                                            class="required">*</span></label> <input
                                                                        id="email" name="email" type="email" value=""
                                                                        size="30" required=""></p>
                                                                <p class="comment-form-cookies-consent"><input
                                                                        id="wp-comment-cookies-consent"
                                                                        name="wp-comment-cookies-consent" type="checkbox"
                                                                        value="yes"> <label
                                                                        for="wp-comment-cookies-consent">Save my name,
                                                                        email, and website in this browser for the next time
                                                                        I comment.</label></p>
                                                                <p class="form-submit"><input name="submit" type="submit"
                                                                        id="submit" class="submit" value="Submit"> <input
                                                                        type="hidden" name="comment_post_ID" value="203734"
                                                                        id="comment_post_ID">
                                                                    <input type="hidden" name="comment_parent"
                                                                        id="comment_parent" value="0">
                                                                </p>
                                                            </form>
                                                        </div><!-- #respond -->
                                                    </div>
                                                </div>

                                                <div id="comments">

                                                    <p class="masvideos-noreviews">There are no reviews yet.</p>

                                                </div>

                                                <div class="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- add sidebar single tv_show -->
                            <div class="single_tv_show__sidebar tv-show-sidebar column">
                                <div class="widget-area-inner">
                                    <TvshowTopWeekMonth v-if="data && data.topWeeks && data.topMonths"
                                        :topWeeks="data.topWeeks"
                                        :topMonths="data.topMonths"
                                    />
                                    <div class="widget widget_text">
                                        <div class="textwidget">
                                            <div class="widget-box-ads-tvshow"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div><!-- /.content-area -->
                    </div><!-- /.site-content-inner -->

                </div><!-- /.container -->
            </div><!-- #content -->
            <footer id="colophon" class="site-footer site__footer--v4 desktop-footer dark" role="contentinfo">
                <div class="container">

                    <div class="footer-v4-bar">
                        <div class="site-footer__logo footer-logo"><a href="/" class="custom-logo-link"
                                rel="home"><img width="653" height="152"
                                    src="https://image002.modooup.com/wp-content/uploads/2023/03/cropped-kokoatv_logo.png"
                                    class="custom-logo" alt="코코아티비 :: KOKOA.TV" decoding="async"
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
            hidden="hidden">Notifications</p>
    <div id="a11y-speak-assertive" class="a11y-speak-region"
        style="position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"
        aria-live="assertive" aria-relevant="additions text" aria-atomic="true"></div>
    <div id="a11y-speak-polite" class="a11y-speak-region"
        style="position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"
        aria-live="polite" aria-relevant="additions text" aria-atomic="true"></div><a id="scrollUp" href="#top"
        style="position: fixed; z-index: 1001; display: none;"><i class="fas fa-angle-up"></i></a>
    <ul id="ui-id-1" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" unselectable="on"
        style="display: none;"></ul>
    <div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></div>
    <ul id="ui-id-2" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" unselectable="on"
        style="display: none;"></ul>
    <div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></div>
</body></template>