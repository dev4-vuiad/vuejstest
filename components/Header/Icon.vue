<script setup>
    const onToggleSubmenu = (event) => {
        $(event.target).parent().toggleClass('show')
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
                                            <NuxtLink title="영화" to="/movie">
                                                <span class="dashicons fas fa-film after-menu-image-icons"></span>
                                                <span class="menu-image-title-after menu-image-title">영화</span>
                                            </NuxtLink>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown nav-item show">
                                            <NuxtLink title="TV" data-toggle="dropdown" class="dropdown-toggle nav-link pointer" @click="onToggleSubmenu">
                                                <span class="dashicons dashicons-laptop after-menu-image-icons"></span>
                                                <span class="menu-image-title-after menu-image-title">TV</span>
                                            </NuxtLink>
                                            <ul class="dropdown-menu" role="menu">
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item show">
                                                    <NuxtLink title="드라마" to="/k-drama/" class="dropdown-item show">
                                                        드라마
                                                    </NuxtLink>
                                                </li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item show">
                                                    <NuxtLink title="예능" to="/k-show/" class="dropdown-item show">
                                                        예능
                                                    </NuxtLink>
                                                </li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item show">
                                                    <NuxtLink title="시사다큐" to="/k-sisa/" class="dropdown-item show">
                                                        시사
                                                    </NuxtLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item show">
                                            <NuxtLink title="미드" to="/u-drama/" class="nav-link show">
                                                <span class="dashicons dashicons-admin-site-alt3 after-menu-image-icons"></span>
                                                <span class="menu-image-title-after menu-image-title">미드</span>
                                            </NuxtLink>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown nav-item show">
                                            <NuxtLink title="OTT/Web" data-toggle="dropdown" class="dropdown-toggle nav-link pointer" @click="onToggleSubmenu">
                                                <span class="dashicons fas fa-cube after-menu-image-icons"></span>
                                                <span class="menu-image-title-after menu-image-title">OTT</span>
                                            </NuxtLink>
                                            <ul class="dropdown-menu" role="menu">
                                                <li class="menu-item nav-item show">
                                                    <NuxtLink title="Amazon Prime Video" to="/ott-web/amazon-prime-video/" key="k-drama">Amazon Prime Video</NuxtLink>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <NuxtLink title="Apple TV" to="/ott-web/apple-tv/" key="apple-tv">Apple TV</NuxtLink>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <NuxtLink title="Disney +" to="/ott-web/disney/" key="disney">Disney +</NuxtLink>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <NuxtLink title="HBO max" to="/ott-web/hbo-max/" key="hbo-max">HBO max</NuxtLink>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <NuxtLink title="Netflix" to="/ott-web/netflix/" key="netflix">Netflix</NuxtLink>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <NuxtLink title="Peacock" to="/ott-web/peacock/" key="peacock">Peacock</NuxtLink>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <NuxtLink title="Tving" to="/ott-web/tving/" key="tving">Tving</NuxtLink>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <NuxtLink title="wavve" to="/ott-web/wavve/" key="wavve">wavve</NuxtLink>
                                                </li>
                                                <li class="menu-item nav-item show">
                                                    <NuxtLink title="watcha" to="/ott-web/watcha/" key="watcha">watcha</NuxtLink>
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