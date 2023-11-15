<template>
    <div class="site_header__primary-nav">
        <ul id="menu-main-menu-1" class="nav yamm">
            <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a title="영화" href="/movie">
                    <span class="dashicons fas fa-film after-menu-image-icons"></span>
                    <span class="menu-image-title-after menu-image-title">영화</span>
                </a>
            </li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                <a href="/tv-shows/" key="tv-shows">
                    <span class="dashicons dashicons-laptop after-menu-image-icons"></span>
                    <span class="menu-image-title-after menu-image-title">TV</span>
                </a>
                <ul class="sub-menu">
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <a title="드라마" href="/k-drama/" key="k-drama">드라마</a>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <a title="예능" href="/k-show/" key="k-show">예능</a>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <a title="시사다큐" href="/k-sisa/" key="k-sisa">시사</a>
                    </li>
                </ul>
            </li>
            <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a href="/u-drama/" key="u-drama">
                    <span class="dashicons dashicons-admin-site-alt3 after-menu-image-icons"></span>
                    <span class="menu-image-title-after menu-image-title">미드</span>
                </a>
            </li>
            <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
                <a title="OTT/Web" href="/ott-web/" key="ott-web">
                    <span class="dashicons fas fa-cube after-menu-image-icons"></span>
                    <span class="menu-image-title-after menu-image-title">OTT</span>
                </a>
                <ul class="sub-menu">
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <a title="Amazon Prime Video" href="/ott-web/amazon-prime-video/" key="k-drama">Amazon Prime Video</a>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <a title="Apple TV" href="/ott-web/apple-tv/" key="apple-tv">Apple TV</a>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <a title="Disney +" href="/ott-web/disney/" key="disney">Disney +</a>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <a title="HBO max" href="/ott-web/hbo-max/" key="hbo-max">HBO max</a>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <a title="Netflix" href="/ott-web/netflix/" key="netflix">Netflix</a>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <a title="Peacock" href="/ott-web/peacock/" key="peacock">Peacock</a>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <a title="Tving" href="/ott-web/tving/" key="tving">Tving</a>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <a title="wavve" href="/ott-web/wavve/" key="wavve">wavve</a>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <a title="watcha" href="/ott-web/watcha/" key="watcha">watcha</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>