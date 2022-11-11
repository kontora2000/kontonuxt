<template>
    <div class="button-buy-design-wrapper">
        <a href="mailto:mail@prostokontora.ru?subject=Контора" class="button-buy-design button">Заказать&nbsp;дизайн</a>
      <!--<nuxt-link to="/order" class="button-buy-design button">Заказать дизайн</nuxt-link>-->
    </div>
</template>

<script>
    export default {
        name: 'ButtonOrder',
    }
</script>

<style scoped>
.button-buy-design-wrapper {
    float: right;
    position: sticky;
    position: -webkit-sticky;
    top: 1.7rem;
    right: 2.8rem;
    z-index: 9;
}
.button-buy-design {
    background: var(--Gray16);
    color: var(--Black100);
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.8rem;
    letter-spacing: 0;
    padding: 1.6rem 4.6rem;
    transition: all .16s cubic-bezier(0.4, 0.4, 0.28, 1.2);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}
.button-buy-design:hover {
    background: var(--Black80);
    color: var(--White100);
    transform: none;
}

@media (min-width: 1600px) {
    .button-buy-design-wrapper {
        right: calc((100% - 1600px) / 2);
    }
}

@media (max-width: 500px) {
    .button-buy-design-wrapper {
        justify-content: space-between;
        height: 8rem;
        padding: 1.2rem .8rem;
        position: fixed;
        top: auto;
        bottom: 0;
        right: 0;
        width: 100vw;
    }
}
</style>