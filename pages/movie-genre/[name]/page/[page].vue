<script setup>
    import { onBeforeUpdate } from 'vue';
    const route = useRoute();
    const page = route.params.page

    let genre = route.params.name
    let genres = (route.query.filter_genre || '').split(',').filter(v => v.length)
    let year = route.query.year_filter || ''
    let orderBy = route.query.orderby || 'date'

    const { pending, data } = await useFetch('https://backend.takitv.net/api/movies', {
        query: {
            genre: genre,
            year: year,
            orderby: orderBy,
            page: page
        }
    })

    onBeforeUpdate(() => {
        genres = (route.query.filter_genre || '').split(',').filter(v => v.length)
        year = route.query.year_filter || ''
        if (!pending.value) {
            useFetch('https://backend.takitv.net/api/movies', {
                query: {
                    genre: genres.join(','),
                    year: year,
                    page : page
                },
                onResponse({ request, response }) {
                    data = response._data
                }
            })
        }
    });

    const onChangeOrderBy = (event) => {
        let val = event.target.value
        const url = new URL(window.location.href);
        url.searchParams.set('orderby', val);
        url.pathname = '/movie'
        window.location.href = url.toString()
    }
</script>

<template>
    <body
        class="archive post-type-archive post-type-archive-movie wp-custom-logo wp-embed-responsive masvideos masvideos-page masvideos-archive masvideos-js  sidebar-left dark">
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
                                                                    <a title="영화" href="https://kokoatv.net/movie/"
                                                                        class="nav-link show">영화</a></li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    id="menu-item-161947"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-161947 nav-item show">
                                                                    <a title="TV" href="#" data-toggle="dropdown"
                                                                        aria-haspopup="true" aria-expanded="false"
                                                                        class="dropdown-toggle nav-link">TV</a>
                                                                    <ul class="dropdown-menu" role="menu">
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            id="menu-item-8093"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8093 nav-item show">
                                                                            <a title="드라마"
                                                                                href="https://kokoatv.net/k-drama/"
                                                                                class="dropdown-item show">드라마</a></li>
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            id="menu-item-8094"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8094 nav-item show">
                                                                            <a title="예능" href="https://kokoatv.net/k-show/"
                                                                                class="dropdown-item show">예능</a></li>
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            id="menu-item-8095"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8095 nav-item show">
                                                                            <a title="시사다큐"
                                                                                href="https://kokoatv.net/k-sisa/"
                                                                                class="dropdown-item show">시사</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    id="menu-item-118282"
                                                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-118282 nav-item show">
                                                                    <a title="미드" href="https://kokoatv.net/u-drama/"
                                                                        class="nav-link show">미드</a></li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    id="menu-item-8098"
                                                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8098 nav-item show">
                                                                    <a title="OTT/Web" href="https://kokoatv.net/ott-web/"
                                                                        class="nav-link show">OTT</a></li>
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
                            <Header />
                        </div><!-- /.site-header__right -->
                        <HeaderRight />
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
                                                                    <a title="영화" href="https://kokoatv.net/movie/"
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
                                                                                href="https://kokoatv.net/k-drama/"
                                                                                class="dropdown-item show">드라마</a></li>
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8094 nav-item show">
                                                                            <a title="예능" href="https://kokoatv.net/k-show/"
                                                                                class="dropdown-item show">예능</a></li>
                                                                        <li itemscope="itemscope"
                                                                            itemtype="https://www.schema.org/SiteNavigationElement"
                                                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8095 nav-item show">
                                                                            <a title="시사다큐"
                                                                                href="https://kokoatv.net/k-sisa/"
                                                                                class="dropdown-item show">시사</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-118282 nav-item show">
                                                                    <a title="미드" href="https://kokoatv.net/u-drama/"
                                                                        class="nav-link show">미드</a></li>
                                                                <li itemscope="itemscope"
                                                                    itemtype="https://www.schema.org/SiteNavigationElement"
                                                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8098 nav-item show">
                                                                    <a title="OTT/Web" href="https://kokoatv.net/ott-web/"
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
                            <div class="site-header__logo"><a href="https://kokoatv.net/" class="custom-logo-link"
                                    rel="home"><img width="653" height="152"
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
                                                action="https://kokoatv.net/">
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
                                <a href="https://kokoatv.net/my-account/" class="site-header__user-account--link"
                                    data-toggle="dropdown">
                                    <svg width="32px" height="32px">
                                        <image x="0px" y="0px" width="32px" height="32px"
                                            xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACB1BMVEW7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu3t7eys7KztLO4uLi6u7q0tbSxsrG2t7awsrC7vLu8vLy1trW8vby1tbWysrK6urq3uLe5urm9vr24ubitrq2wsbCsrazV1dXs7Oz29vb39/fw8PDe3t6vsK/v7+/////5+vnLy8urrKuxsbHGx8aur67k5OT4+Pizs7P9/f3R0tGurq7Oz87j4+OsrqzU1NTo6OiusK7+/v7k5eT4+fjGyMa7u7v6+vrMzMyrq6u+vr7Ky8ri4uLt7e3u7u7m5+bT1NOwsLC+v77Q0NDe397f39/T09O/v7/FxsX5+fn09PS9vb37+/v09fTNzs3g4ODh4uHX2Nf8/PzY2djIyMjIycjU1dTl5uXx8fHm5ubV1tVi3+TsAAAAUnRSTlMADleWxOHwxphZESftmiuDiBvN0iAq8TAW9xzX340dI5ymCPj9VV+lydDl5/P05srRnqdjCvr+EKCqipTd5Pb7IfI31NmLkAQvojIVn+PLoWIYYNJBTgAAAAFiS0dEca8HXOIAAAAHdElNRQfjBQECDwMxTbKCAAACG0lEQVQ4y21T90PTQBQ+RKpY3FisExcuEHEvFPdeXLikJLnakjbVgjESSEutqIiKIo66R90L/SNtbzTp+H66e9/37r17A4ACqqZUT63xeGqmTa+dAcrhra7rhEIXQl2iFPDMnFXKz0bdoqzIBIosdqM5RfTceYKKZRdwUJhf7/AL6iD35lAU6Gvg/ELfJe4eCgd62FGT/IuYYDGkPI5E9RASYiK9anAJyw8yFx1evhLv7buKYwoJqMCleX4ZUskVG+iaSXC936ICFS3PCRoHyItKUOw1OQZtYsMDKwBYuUqgEaxEgTeTQxFiE1dXgTWdlFdxyhGYN9LM2gQaJVoB46aLN4ctWg19LVjH/nDrtltwJ42IFa4HG8JUMFLpBTm8ETSHeA53K+SAmkELE8jWqMPfY7/ICzYFWHfcdbhv40KIVok3Z+RBH6XHHj7ivYWbQZvOL+N6+vHEk6fPnoejCh8dfQuo5SHkjB158fLV6zdvg3aGj4e6FWzbTkqtida74SQN8T4xGBM0UuodOwHYlW+WZosT7jok1HROgfXduW7WI1HRoviDWYT4eEzLtdubH4g98GOmZ8wsQVY2NLiXjtQ+Q/pkliE+ZLTzod/fb1bA5wMdfKwbDn4p57/6DzmL0XH42/diOvXjiLdot47+TLgkqdFfx46XLOeJtpbffyaT2Wxy8u8//8lTFfb7dNOZ1rMeX/u58xcuOtb/keQ/CDzeyUsAAAAASUVORK5CYII=">
                                        </image>
                                    </svg> </a>
                                <ul class="dropdown-menu sub-menu">
                                    <li><a href="https://kokoatv.net/my-account/" data-toggle="modal"
                                            data-target="#modal-register-login">로그인</a></li>
                                    <li><a href="https://kokoatv.net/my-account/" data-toggle="modal"
                                            data-target="#modal-register-login">회원가입</a></li>
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
                            </svg></span>영화</nav>
                    <div class="site-content__inner">
                        <div id="primary" class="content-area"> <!-- ads movies top -->
                            <div class="ads-achive-movies-top" style="text-align: center;">
                            </div>
                            <div id="feature-cate-page" style="display:block; margin-bottom: 10px;">
                                <header class="page-header" style="margin-bottom:15px;">
                                    <h1 class="page-title">실시간 영화 인기컨텐츠</h1>
                                </header>
                                <div class="masvideos masvideos-movies vodi-archive-wrapper" data-view="grid">
                                    <div class="movies columns-6">
                                        <div class="movies__inner">
                                            <MoviePopularItem v-if="data" v-for="(item, index) in data.data.populars" :key="index" :link="item.link" :year="item.year" :title="item.title" :genres="item.genres" :src="item.src" />
                                        </div>
                                    </div>
                                </div>
                                <center style="margin-top:10px;margin-bottom:10px;" class="ads_cate_top"></center>
                            </div>
                            <header class="page-header">
                                <h1 class="page-title">영화</h1>
                            </header>
                            <div class="vodi-control-bar">
                                <div class="vodi-control-bar__left">
                                </div>
                                <div class="vodi-control-bar__right">
                                    <div class="movies-ordering">
                                        <div class="handheld-sidebar-toggle"><button class="btn sidebar-toggler"
                                                type="button"><i class="fas fa-sliders-h"></i><span>Filters</span></button>
                                        </div><svg class="svg-icon svg-icon__sort" aria-hidden="true" role="img"
                                            focusable="false" width="17px" height="14px">
                                            <path fill-rule="evenodd"
                                                d="M4.034,-0.001 C4.248,0.009 4.401,0.071 4.578,0.113 C4.699,0.294 4.899,0.408 4.967,0.644 C4.967,1.606 4.967,2.568 4.967,3.529 C4.967,5.972 4.967,8.414 4.967,10.856 C4.980,10.856 4.993,10.856 5.006,10.856 C5.641,10.224 6.276,9.591 6.911,8.958 C7.041,8.873 7.329,8.745 7.572,8.806 C7.930,8.896 8.016,9.121 8.233,9.337 C8.293,10.165 7.817,10.389 7.377,10.818 C6.639,11.539 5.900,12.260 5.161,12.982 C4.928,13.209 4.395,13.909 4.073,13.969 C3.952,13.787 3.760,13.663 3.606,13.513 C3.270,13.184 2.933,12.855 2.596,12.526 C2.052,11.982 1.507,11.438 0.963,10.894 C0.717,10.666 0.471,10.438 0.224,10.211 C0.148,10.110 0.119,9.993 0.030,9.907 C0.015,9.698 -0.048,9.491 0.069,9.337 C0.171,8.957 0.746,8.634 1.235,8.882 C1.922,9.540 2.609,10.198 3.296,10.856 C3.296,7.465 3.296,4.073 3.296,0.682 C3.358,0.600 3.351,0.467 3.412,0.379 C3.511,0.235 3.714,0.158 3.840,0.037 C3.938,0.035 3.984,0.034 4.034,-0.001 ZM12.781,0.037 C12.820,0.037 12.859,0.037 12.898,0.037 C13.999,1.125 15.101,2.214 16.202,3.302 C16.427,3.522 17.287,4.153 16.902,4.668 C16.828,4.945 16.613,4.994 16.435,5.162 C16.280,5.174 16.124,5.187 15.969,5.200 C15.631,5.108 15.447,4.842 15.230,4.630 C14.712,4.137 14.193,3.643 13.675,3.150 C13.675,6.553 13.675,9.958 13.675,13.362 C13.514,13.560 13.485,13.804 13.209,13.893 C13.076,14.007 12.700,14.044 12.548,13.931 C11.760,13.719 12.004,12.233 12.004,11.273 C12.004,8.566 12.004,5.858 12.004,3.150 C11.991,3.150 11.978,3.150 11.965,3.150 C11.676,3.589 10.996,4.095 10.604,4.479 C10.404,4.673 10.198,4.996 9.943,5.124 C9.784,5.204 9.589,5.200 9.360,5.200 C9.238,5.102 9.043,5.080 8.932,4.972 C8.848,4.890 8.822,4.751 8.738,4.668 C8.699,3.730 9.312,3.462 9.827,2.960 C10.811,1.986 11.796,1.011 12.781,0.037 Z">
                                            </path>
                                        </svg>
                                        <form method="get">
                                            <select name="orderby" @change="onChangeOrderBy" class="orderby">
                                                <option value="titleAsc" v-bind:selected="orderBy == 'titleAsc'">A 부터 Z</option>
                                                <option value="titleDesc" v-bind:selected="orderBy == 'titleDesc'">Z 부터 A</option>
                                                <option value="date" v-bind:selected="orderBy == 'date'">시간순</option>
                                                <option value="menuOrder" v-bind:selected="orderBy == 'menuOrder'">Menu Order</option>
                                                <option value="rating" v-bind:selected="orderBy == 'rating'">별점순</option>
                                            </select>
                                            <input type="hidden" name="paged" value="1">
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="vodi-archive-wrapper" data-view="grid">
                                <div class="movies columns-6">
                                    <div class="movies__inner">
                                        <MovieItem v-if="data" v-for="(item, index) in data.data.movies" :key="index" :link="item.link" :year="item.year" :title="item.title" :originalTitle="item.originalTitle" :genres="item.genres" :src="item.src" />
                                    </div>
                            </div>
                        </div>
                        <Pagination v-if="data" :base="'/movie-genre/' + genre" :total="data.total" :perPage="data.perPage" :currentPage="page" 
                            :year="year" :genres="genres" :orderBy="orderBy"
                        />
                        <center></center>
                    </div><!-- /.content-area -->
                    <div id="secondary" class="widget-area sidebar-area movie-sidebar sidebar-custom-movie"
                        role="complementary">
                        <div class="widget-area-inner">
                            <div id="text-4" class="widget widget_text">
                                <div class="textwidget">
                                </div>
                            </div>
                            <MovieSidebarPopularContents v-if="data" title="주간 영화 인기컨텐츠" :data="data.data.top5" />
                            <div class="widget widget_vodi_movies_filter">
                                <div id="masvideos_movies_filter_widget-1"
                                    class="widget masvideos widget_layered_nav masvideos-movies-filter-widget">
                                    <div class="widget-header"><span class="widget-title">장르</span></div>
                                    <MovieSidebarType :base="'/movie-genre/' + genre" :selected="genres" :year="year" :page="page" :exclude="genre" />
                                </div>
                                <MovieSidebarListYear :base="'/movie-genre/' + genre" :selected="year" :genres="genres" :page="page" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
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
                                                    type="hidden" name="_wp_http_referer" value="/movie/"> <button
                                                    type="submit" class="masvideos-Button button" name="register"
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
                                                    name="_wp_http_referer" value="/movie/"> <button type="submit"
                                                    class="masvideos-Button button" name="login"
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
                                                    href="https://kokoatv.net/wp-login.php?action=lostpassword">비밀번호찾기</a>
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
</body></template>