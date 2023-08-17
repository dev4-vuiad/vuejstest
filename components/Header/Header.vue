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
</template>