<script setup>
    import { ref } from 'vue'
    const props = defineProps(['data'])
    let data = props.data
    let showTabIdx = ref(0)
</script>

<template>
    <div class="masvideos-tabs episode-tabs">
        <ul class="nav" pos="0">
            <li class="nav-item">
                <a data-toggle="tab" :class="'nav-link' + (showTabIdx == 0 ? '  active show' : '')" @click.prevent="showTabIdx = 0">
                    Description </a>
            </li>
            <li class="nav-item">
                <a href="#" data-toggle="tab" :class="'nav-link' + (showTabIdx == 1 ? '  active show' : '')" @click.prevent="showTabIdx = 1">
                    Review </a>
            </li>
        </ul>
        <div class="tab-content">
            <div :class="'tab-pane' + (showTabIdx == 0 ? '  active show' : '')">
                <div class="episode__description">
                    <div v-html="data"></div>
                </div>
            </div>
            <div :class="'tab-pane' + (showTabIdx == 1 ? '  active show' : '')">
                <div id="reviews" class="masvideos-Reviews">
                    <div id="review_form_wrapper">
                        <div id="review_form">
                            <div id="respond" class="comment-respond">
                                <span id="reply-title" class="comment-reply-title">Be the
                                    first to review “요즘 육아 금쪽같은 내새끼 158화” <small><a rel="nofollow"
                                            id="cancel-comment-reply-link"
                                            href="/episode/%ec%9a%94%ec%a6%98-%ec%9c%a1%ec%95%84-%ea%b8%88%ec%aa%bd%ea%b0%99%ec%9d%80-%eb%82%b4%ec%83%88%eb%81%bc-158%ed%99%94/#respond"
                                            style="display:none;">Cancel
                                            reply</a></small></span>
                                <form action="https://kokoatv.net/wp-comments-post.php" method="post" id="commentform"
                                    class="comment-form" novalidate="">
                                    <p class="comment-notes"><span id="email-notes">Your
                                            email address will not be published.</span>
                                        <span class="required-field-message">Required fields
                                            are marked <span class="required">*</span></span>
                                    </p>
                                    <p class="comment-form-comment"><label for="comment">Your review&nbsp;<span
                                                class="required">*</span></label><textarea id="comment" name="comment"
                                            cols="45" rows="8" required=""></textarea></p>
                                    <p class="comment-form-author"><label for="author">Name&nbsp;<span
                                                class="required">*</span></label> <input id="author" name="author"
                                            type="text" value="" size="30" required=""></p>
                                    <p class="comment-form-email"><label for="email">Email&nbsp;<span
                                                class="required">*</span></label> <input id="email" name="email"
                                            type="email" value="" size="30" required=""></p>
                                    <p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent"
                                            name="wp-comment-cookies-consent" type="checkbox" value="yes"> <label
                                            for="wp-comment-cookies-consent">Save my name,
                                            email, and website in this browser for the next
                                            time I comment.</label></p>
                                    <p class="form-submit"><input name="submit" type="submit" id="submit" class="submit"
                                            value="Submit"> <input type="hidden" name="comment_post_ID" value="202016"
                                            id="comment_post_ID">
                                        <input type="hidden" name="comment_parent" id="comment_parent" value="0">
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
</template>