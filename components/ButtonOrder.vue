<template>
    <div class="button-buy-design-wrapper">
        <a href="mailto:mail@prostokontora.ru?subject=Контора" class="button-buy-design button">Заказать дизайн</a>
      <!--<nuxt-link to="/order" class="button-buy-design button">Заказать дизайн</nuxt-link>-->
    </div>
</template>

<script>
    export default {
        name: 'ButtonOrder',
        components: { },
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
    background: transparent;
    border: 1.5px solid var(--Blue100);
    color: var(--Blue100);
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.8rem;
    letter-spacing: 0.01em;
    padding: 1.6rem 4.6rem;
    transition: all .12s ease-in-out;
}
.button-buy-design:hover {
    background: var(--Blue100);
    color: var(--White100);
    transform: none;
}
</style>