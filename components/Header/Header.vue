<script setup>
    import { onMounted } from 'vue'
    onMounted(() => {
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

        // setTimeout(() => {
        //     (function(s, w) {
        //         s.setAttribute("async", "async");
        //         s.setAttribute("type", "text/javascript");
        //         s.setAttribute("src", "//scripts.kiosked.com/loader/kiosked-loader.js?site=17622");
        //         w.document.body.appendChild(s);
        //     })(window.top.document.createElement("script"), window.top)
        // }, 500)
        if('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').then(function(registration) {
                //work
            }).catch(function(error) {
                console.log('Error service worker:', error);
            });

            window.addEventListener('beforeinstallprompt', function(e) {
                const pwaAppInstallBtn = document.querySelector('#install-button');
                pwaAppInstallBtn.addEventListener('click', (e) => {
                    console.log("abc: ");
                    if (beforeInstallPrompt) beforeInstallPrompt.prompt();
                });

            });
        } else {
            console.log('serviceWorker not in navigator');
        }

        // var beforeInstallPrompt = null;

        // window.addEventListener("beforeinstallprompt", eventHandler, errorHandler);

        // function eventHandler(event) {
        //     beforeInstallPrompt = event;
        //     console.log("event: " + event);
        // }

        // function errorHandler(event) {
        //     console.log("error: " + event);
        // }
        // const pwaAppInstallBtn = document.querySelector('#install-button');
        // pwaAppInstallBtn.addEventListener('click', (e) => {
        //     console.log("abc: ");
        //     if (beforeInstallPrompt) beforeInstallPrompt.prompt();
        // });

        // console.log('load');
        // let deferredPrompt = null;

        // window.addEventListener('beforeinstallprompt', (e) => {
        //     // Prevent the mini-infobar from appearing on mobile
        //     e.preventDefault();
        //     // Stash the event so it can be triggered later.
        //     deferredPrompt = e;
        // });

        // const pwaAppInstallBtn = document.querySelector('#install-button');
        // const installDiv = document.querySelector('#install-app');
        
        // pwaAppInstallBtn.addEventListener('click', (e) => {
        //     alert('click');
        //     e.preventDefault();
            
        //     if (deferredPrompt !== null) {
        //         deferredPrompt.prompt();
        //         const { outcome } = deferredPrompt.userChoice;
        //         if (outcome === 'accepted') {
        //             deferredPrompt = null;
        //         }
        //     } else {
        //         console.log("deferred prompt is null [Website cannot be installed]")
        //     }
        // });

        // window.addEventListener('click', () => {
        //     console.log('aaa');
        //     installDiv.style.display = 'none';
        // });

        
    })
</script>
<template>
    <header id="site-header" class="site-header header-v1 desktop-header stick-this light" role="banner" style="">
        <div class="container-fluid">
            <div class="site-header__inner">
                <HeaderLeft />
                <HeaderRight />
            </div>
        </div>
    </header>
    <div id="install-app" style="display:block">
        <div id="install-banner">
            <img src="https://image002.modooup.com/wp-content/uploads/2023/03/ms-icon-310x310-1-36x36.png" alt="icon bmytv" />
            <div class="info">
                <p class="header">Install BMYTV APP</p>
                <p class="content">bmytv.com</p>
            </div>
            <button id="install-button">  
                Install
            </button>
        </div>
    </div>
</template>