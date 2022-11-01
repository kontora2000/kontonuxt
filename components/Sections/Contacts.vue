<template>
    <section class="big-contacts-cont">
        <h1 class="mainpage-section-header">Если захотели <br class="only-desktop"/>связаться с&nbsp;нами&nbsp;:)</h1>
        <div class="big-contacts-inner">
            <div class="tel-email-wrapper">
                <a class="link-tel" href="tel:+79886881488">+7&nbsp;988&nbsp;668-14-88</a>
                <a class="link-email link-underline-solid" href="mailto:mail@prostokontora.ru">mail@prostokontora.ru</a>
            </div>
            <div class="social-links-wrapper">
                <div class="social-link-wrapper">
                    <a class="social-link" href="https://t.me/kontoragram">
                        <svg class="icon-svg icon-telegram-svg">
                            <use xlink:href="sprite.svg#icon-telegram" />
                        </svg>
                    </a>
                </div>
                <div class="social-link-wrapper">
                    <a class="social-link" href="https://wa.me/79886681488">
                        <svg class="icon-svg icon-whatsapp-svg">
                            <use xlink:href="sprite.svg#icon-whatsapp" />
                        </svg>
                    </a>
                </div>
                <div class="social-link-wrapper">
                    <a class="social-link" href="https://instagram.com/kontoragram">
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
    margin-top: 20rem;
    margin-left: 18%;
}

.big-contacts-cont>.mainpage-section-header::after {
    display: none;
}

.big-contacts-inner {
    margin-top: 12rem;
    display: flex;
}

.big-contacts-inner .tel-email-wrapper {
    display: flex;
    font-size: 2.8rem;
    line-height: 3.6rem;
}

.big-contacts-inner .link-tel {
    color: var(--Black100);
    letter-spacing: -.03em;
}
.big-contacts-inner .link-tel:hover {
    color: var(--Blue100);
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



@media (max-width: 460px) {
    .big-contacts-cont {
        margin-left: .8rem;
    }

    .big-contacts-inner {
        flex-direction: column;
        margin-top: 5.2rem;
    }

    .big-contacts-inner .tel-email-wrapper {
        flex-direction: column;
    }
    .big-contacts-inner .link-tel{
        margin-bottom: .8rem;
    }

    .big-contacts-inner .link-tel,
    .big-contacts-inner .link-email.link-underline-solid {
        width: fit-content;
    }

    .big-contacts-inner .link-email.link-underline-solid {
        margin-left: 0;
    }

    .big-contacts-inner .social-links-wrapper {
        margin-left: 0;
        margin-top: 4.8rem;
    }
}

@media (max-width: 330px) {
    .big-contacts-cont {
        min-height: 64vh;
    }

    .big-contacts-inner .tel-email-wrapper {
        font-size: 2rem;
        line-height: 2.4rem;
    }
}
</style>