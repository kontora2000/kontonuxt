<template>
    <section class="big-contacts-cont">
        <h1 class="mainpage-section-header">Если захотели <br class="only-desktop"/>с&nbsp;нами связаться&nbsp;:)</h1>
        <div class="big-contacts-inner">
            <div class="tel-email-wrapper">
                <span>+7&nbsp;988&nbsp;668-14-88</span>
                <a class="link-email link-underline-solid" href="mailto:mail@kontora.cc">mail@kontora.cc</a>
            </div>
            <div class="social-links-wrapper">
                <div class="social-link-wrapper">
                    <a class="social-link" href="#">
                        <svg class="icon-svg icon-telegram-svg">
                            <use xlink:href="sprite.svg#icon-telegram" />
                        </svg>
                    </a>
                </div>
                <div class="social-link-wrapper">
                    <a class="social-link" href="#">
                        <svg class="icon-svg icon-whatsapp-svg">
                            <use xlink:href="sprite.svg#icon-whatsapp" />
                        </svg>
                    </a>
                </div>
                <div class="social-link-wrapper">
                    <a class="social-link" href="#">
                        <svg class="icon-svg icon-instagram-svg">
                            <use xlink:href="sprite.svg#icon-instagram" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'BigContacts'
}
</script>

<style scoped>
    .big-contacts-cont {
        margin-top: 32rem;
        margin-left: 18%;
    }

    .big-contacts-cont>.mainpage-section-header::after {
        display: none;
    }

    .big-contacts-inner {
        margin-top: 16rem;
        display: flex;
    }

    .big-contacts-inner .tel-email-wrapper {
        display: flex;
        font-size: 2.8rem;
        line-height: 3.6rem;
    }

    .big-contacts-inner .link-email.link-underline-solid {
        border-bottom-width: 2px;
        border-bottom-color: var(--Black16);
        color: var(--Black100);
        letter-spacing: -.02em;
        margin-left: 4rem;
    }
    .big-contacts-inner .link-email.link-underline-solid:hover {
        border-bottom-color: var(--Blue16);
        color: var(--Blue100);
    }

    .big-contacts-inner .social-links-wrapper {
        display: flex;
        margin-left: 12.6rem;
    }

    .big-contacts-inner .social-link-wrapper:not(:last-child) {
        height: 4.4rem;
        width: 4.4rem;
    }
    .big-contacts-inner .social-link-wrapper:not(:last-child) {
        margin-right: 3.2rem;
    }

    .big-contacts-inner .social-link {
        display: block;
    }

    .big-contacts-inner .social-link .icon-svg>use {
        fill: var(--Black100);
        transition: fill .174s ease-in-out;
    }
    .big-contacts-inner .social-link:hover .icon-svg>use {
        fill: var(--Blue100);
    }



    @media (min-width: 1340px) {}



    @media (max-width: 460px) {}
</style>