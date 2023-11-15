<script setup>
    const onToggleSubmenu = (event) => {
        $(event.target).parent().toggleClass('show')
    }

    const onClickMenuItem = () => {
        $(".site-header__offcanvas .navbar-toggler").trigger("click")
    }
</script>

<template>
    <div class="site-header__offcanvas">
        <button class="site-header__offcanvas--toggler navbar-toggler" data-toggle="offcanvas"><svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="13">
                <path d="M0 13L0 11.4 16 11.4 16 13 0 13ZM0 5.7L16 5.7 16 7.3 0 7.3 0 5.7ZM0 0L16 0 16 1.6 0 1.6 0 0Z">
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
                            <div class="simplebar-content" style="padding: 0px 24px; height: 100%; overflow: hidden;">
                                <div class="site_header__offcanvas-nav">
                                    <ul id="menu-main-menu" class="offcanvas-nav yamm">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page nav-item show">
                                            <a title="영화" href="/movie" @click="onClickMenuItem">
                                                <span class="dashicons fas fa-film after-menu-image-icons"></span>
                                                <span class="menu-image-title-after menu-image-title">영화</span>
                                            </a>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown nav-item show">
                                            <a title="TV" data-toggle="dropdown" class="dropdown-toggle nav-link pointer" @click="onToggleSubmenu">
                                                <span class="dashicons dashicons-laptop after-menu-image-icons"></span>
                                                <span class="menu-image-title-after menu-image-title">TV</span>
                                            </a>
                                            <ul class="dropdown-menu" role="menu">
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item show">
                                                    <a title="드라마" href="/k-drama/" class="dropdown-item show" @click="onClickMenuItem">
                                                        드라마
                                                    </a>
                                                </li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item show">
                                                    <a title="예능" href="/k-show/" class="dropdown-item show" @click="onClickMenuItem">
                                                        예능
                                                    </a>
                                                </li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item show">
                                                    <a title="시사다큐" href="/k-sisa/" class="dropdown-item show" @click="onClickMenuItem">
                                                        시사
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item show">
                                            <a title="미드" href="/u-drama/" class="nav-link show" @click="onClickMenuItem">
                                                <span class="dashicons dashicons-admin-site-alt3 after-menu-image-icons"></span>
                                                <span class="menu-image-title-after menu-image-title">미드</span>
                                            </a>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown nav-item show">
                                            <a title="OTT/Web" data-toggle="dropdown" class="dropdown-toggle nav-link pointer" @click="onToggleSubmenu">
                                                <span class="dashicons fas fa-cube after-menu-image-icons"></span>
                                                <span class="menu-image-title-after menu-image-title">OTT</span>
                                            </a>
                                            <ul class="dropdown-menu" role="menu">
                                                <li class="menu-item nav-item show">
                                                    <a title="Amazon Prime Video" href="/ott-web/amazon-prime-video/" key="k-drama" @click="onClickMenuItem">Amazon Prime Video</a>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <a title="Apple TV" href="/ott-web/apple-tv/" key="apple-tv" @click="onClickMenuItem">Apple TV</a>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <a title="Disney +" href="/ott-web/disney/" key="disney" @click="onClickMenuItem">Disney +</a>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <a title="HBO max" href="/ott-web/hbo-max/" key="hbo-max" @click="onClickMenuItem">HBO max</a>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <a title="Netflix" href="/ott-web/netflix/" key="netflix" @click="onClickMenuItem">Netflix</a>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <a title="Peacock" href="/ott-web/peacock/" key="peacock" @click="onClickMenuItem">Peacock</a>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <a title="Tving" href="/ott-web/tving/" key="tving" @click="onClickMenuItem">Tving</a>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <a title="wavve" href="/ott-web/wavve/" key="wavve" @click="onClickMenuItem">wavve</a>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <a title="watcha" href="/ott-web/watcha/" key="watcha" @click="onClickMenuItem">watcha</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="simplebar-placeholder" style="width: 224px; height: 939px;"></div>
                </div>
                <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                    <div class="simplebar-scrollbar" style="transform: translate3d(0px, 0px, 0px); visibility: hidden;">
                    </div>
                </div>
                <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                    <div class="simplebar-scrollbar" style="transform: translate3d(0px, 0px, 0px); visibility: hidden;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>