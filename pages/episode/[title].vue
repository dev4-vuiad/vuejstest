<script setup>
    const route = useRoute()
    const title = ref(route.params.title)

    useHead({
        bodyAttrs: {
            class: 'episode-template-default single single-episode postid-202016 wp-custom-logo wp-embed-responsive masvideos masvideos-page masvideos-single masvideos-js single-episode-v3 full-width dark'
        }
    });

    const { data, refresh }  = await useAsyncData(
        () => $fetch('https://backendnew.takitv.net/api/episode/' + title.value),
        {
            watch: [title]
        }
    )

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
                        let newE = seasons[newS].length - 1
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
        <div id="page" class="hfeed site">
            <Header />
            <HeaderHandHeld />
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
            <footer id="colophon" class="site-footer site__footer--v4 desktop-footer dark" role="contentinfo">
                <div class="container">
                    <div class="footer-v4-bar">
                        <div class="site-footer__logo footer-logo"><a href="https://kokoatv.net/" class="custom-logo-link"
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
</template>