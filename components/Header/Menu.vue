<template>
    <div class="site_header__primary-nav">
        <ul id="menu-main-menu-1" class="nav yamm">
            <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <NuxtLink title="영화" to="/movie">
                    <span class="dashicons fas fa-film after-menu-image-icons"></span>
                    <span class="menu-image-title-after menu-image-title">영화</span>
                </NuxtLink>
            </li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                <NuxtLink to="/tv-shows/" key="tv-shows">
                    <span class="dashicons dashicons-laptop after-menu-image-icons"></span>
                    <span class="menu-image-title-after menu-image-title">TV</span>
                </NuxtLink>
                <ul class="sub-menu">
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <NuxtLink title="드라마" to="/k-drama/" key="k-drama">드라마</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <NuxtLink title="예능" to="/k-show/" key="k-show">예능</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <NuxtLink title="시사다큐" to="/k-sisa/" key="k-sisa">시사</NuxtLink>
                    </li>
                </ul>
            </li>
            <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                <NuxtLink to="/u-drama/" key="u-drama">
                    <span class="dashicons dashicons-laptop after-menu-image-icons icon-hide"></span>
                    <span class="menu-image-title-after menu-image-title">미드</span>
                </NuxtLink>
            </li>
            <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
                <NuxtLink title="OTT/Web" to="/ott-web/" key="ott-web">
                    <span class="dashicons fas fa-cube after-menu-image-icons"></span>
                    <span class="menu-image-title-after menu-image-title">OTT</span>
                </NuxtLink>
                <ul class="sub-menu">
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <NuxtLink title="Amazon Prime Video" to="/ott-web/amazon-prime-video/" key="k-drama">Amazon Prime Video</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <NuxtLink title="Apple TV" to="/ott-web/apple-tv/" key="apple-tv">Apple TV</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <NuxtLink title="Disney +" to="/ott-web/disney/" key="disney">Disney +</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <NuxtLink title="HBO max" to="/ott-web/hbo-max/" key="hbo-max">HBO max</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <NuxtLink title="Netflix" to="/ott-web/netflix/" key="netflix">Netflix</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <NuxtLink title="Peacock" to="/ott-web/peacock/" key="peacock">Peacock</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <NuxtLink title="Tving" to="/ott-web/tving/" key="tving">Tving</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <NuxtLink title="wavve" to="/ott-web/wavve/" key="wavve">wavve</NuxtLink>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <NuxtLink title="watcha" to="/ott-web/watcha/" key="watcha">watcha</NuxtLink>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>