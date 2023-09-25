<script setup>
    const { $apiBaseUrl, $isProdEnv } = useNuxtApp()
    const route = useRoute()
    const title = route.params.title

    definePageMeta({
        layout: 'tvshow',
        layoutTransition: {
            name: 'layout', 
            mode: 'out-in',
            onAfterEnter: () => {
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


                // Bottom slider
                let slider = $('#tv-show-related').find('.tv-shows__inner').slick({
                    "slidesToShow":5,
                    "slidesToScroll":5,
                    "dots":false,
                    "arrows":true,
                    "autoplay":false,
                    "responsive":[{"breakpoint":767,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":992,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":4}}]
                })
                $('#tv-show-related').find('button.slick-next').on('click', function() {
                    slider.slick('slickNext')
                })
                $('#tv-show-related').find('button.slick-prev').on('click', function() {
                    slider.slick('slickPrev')
                })
            }
        }
    })

    const { data, pending }  = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/tvshows/details', {
            params: {
                title: title
            }
        }),
        {
            default: () => ({
                topWeeks: Array.from(Array(5), (_, index) => ({})),
                topMonths: Array.from(Array(5), (_, index) => ({}))
            })
        }
    )

    useHead({
        title: title + ' – 코코아티비 :: KOKOA.TV',
        script: [
            {
                src: "https://scripts.kiosked.com/loader/kiosked-loader.js?site=17622",
                async: true
            }
        ]
    });

    onMounted(() => {
        let slider = $('#tv-show-related').find('.tv-shows__inner').slick({
            "slidesToShow":5,
            "slidesToScroll":5,
            "dots":false,
            "arrows":true,
            "autoplay":false,
            "responsive":[{"breakpoint":767,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":992,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":4}}]
        })
        $('#tv-show-related').find('button.slick-next').on('click', function() {
            slider.slick('slickNext')
        })
        $('#tv-show-related').find('button.slick-prev').on('click', function() {
            slider.slick('slickPrev')
        })

        // Ad ads
        // if ($isProdEnv()) {
        //     (function(s, w) {
        //         s.setAttribute("async", "async");
        //         s.setAttribute("type", "text/javascript");
        //         s.setAttribute("src", "//scripts.kiosked.com/loader/kiosked-loader.js?site=17622");
        //         w.document.body.appendChild(s);
        //     })(window.top.document.createElement("script"), window.top)
        // }
    })
    
</script>

<template>
    <div id="content" class="site-content " tabindex="-1">
        <div class="container">
            <nav class="masvideos-breadcrumb"><a href="/">Home</a><span class="delimiter"><svg
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
                    <div class="tv-show tv_show type-tv_show status-publish has-post-thumbnail hentry category-netflix category-k-drama">
                        <TvshowInfo
                            :pending="pending"
                            :id="data.id"
                            :title="data.title"
                            :originalTitle="data.originalTitle"
                            :src="data.src"
                            :description="data.description"
                        />
                        <TvshowSeasonSection :data="data.seasons" :src="data.src" :pending="pending" />
                        <TvshowRelatedSection v-if="data && data.relateds && data.relateds.length" :data="data.relateds" :title="data.title" />
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
                            <TvshowTopWeekMonth :pending="pending" :topWeeks="data.topWeeks" :topMonths="data.topMonths" />
                            <div class="widget widget_text">
                                <div class="textwidget">
                                    <div class="widget-box-ads-tvshow"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>