<script setup>
    const route = useRoute()
    const title = ref(route.params.title)

    useHead({
        bodyAttrs: {
            class: 'tv_show-template-default single single-tv_show postid-203734 wp-custom-logo wp-embed-responsive masvideos masvideos-page masvideos-single masvideos-js single-tv_show-v1 full-width dark'
        }
    });

    const { data, refresh }  = await useAsyncData(
        () => $fetch('https://backendnew.takitv.net/api/tvshows/' + title.value),
        {
            watch: [title]
        }
    )
    
</script>

<template>
        <div id="page" class="hfeed site">
            <Header />
            <HeaderHandHeld />
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
</template>