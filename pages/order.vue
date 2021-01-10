<template>
  <main>
    <section class="page-cont-partnership page-cont">
      <NuxtLink to="/" class="link-close-page">
        <svg class="icon-svg icon-close-svg">
            <use xlink:href="sprite.svg#icon-close"></use>
        </svg>
      </NuxtLink>

      <h1 class="page-section-header">Заказ разработки</h1>

      <form class="form-order">
                <div class="switcher-cont">
                    <input class="switcher-cont-radio" type="radio" data-type="typical-format" name="duration-1" value="typical-format" id="typical-format">
                    <label for="typical-format"><span class="link-underline-dotted">Стандартный <br>формат&nbsp;работы</span></label>
                    <input class="switcher-cont-radio" type="radio" data-type="express-design-format" name="duration-1" value="express-design-format" id="express-design-format" checked="">
                    <label for="express-design-format"><span class="icon-lightning-wrapper"><svg class="icon-lightning-svg icon-svg"><use xlink:href="sprite.svg#icon-lightning"></use></svg></span><span class="link-underline-dotted">Без согласований</span></label>
                    <div class="switcher-wrapper"><div class="switcher-switch"></div></div>
                </div>
                <div class="order-project-type-tabs">
                    <p>За&nbsp;счёт отсутствия согласований мы&nbsp;сократили время разработки и&nbsp;смогли поставить фиксированную стоимость услуги:</p>
                    <div class="radio-buttons-cont">
                        <input id="radio-branding" name="express-design" type="radio" value="Брендинг">
                        <label for="radio-branding">Брендинг<span class="font-small">5&nbsp;дней / 99 000&nbsp;₽</span></label>

                        <input id="radio-site-promo" name="express-design" type="radio" value="Промо-сайт">
                        <label for="radio-site-promo">Промо – сайт<span class="font-small">5&nbsp;дней / 99 000&nbsp;₽</span></label>

                        <input id="radio-site-portfolio" name="express-design" type="radio" value="Сайт-портфолио">
                        <label for="radio-site-portfolio">Сайт – портфолио<span class="font-small">10&nbsp;дней / 179 000&nbsp;₽</span></label>

                        <input id="radio-3d-ills" name="express-design" type="radio" value="3D иллюстрации">
                        <label for="radio-3d-ills">3D иллюстрации<span class="font-small">3&nbsp;дня / 49 000&nbsp;₽</span></label>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="text" required="">
                    <label data-placeholder="Название компании"></label>
                </div>
                <div class="input-wrapper">
                    <textarea rows="1" required=""></textarea>
                    <label data-placeholder="Коротко о проекте"></label>
                </div>
                <div class="input-wrapper">
                    <input type="text" required="">
                    <label data-placeholder="Контактный имейл или мессенджер, или телефон"></label>
                </div>
                <div class="input-wrapper">
                    <input type="text" required="">
                    <label data-placeholder="Ваше имя"></label>
                </div>
                <button class="order-form-button-send" disabled="disabled">Заказать</button>
            </form>
    </section>
  </main>
</template>



<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  name: 'Order',
  components: {
    Header,
    Footer
  },
}
</script>



<style scoped>
.form-order {
    margin-top: 7.2rem;
}

.switcher-cont {
    align-items: center;
    display: grid;
    justify-content: left;
    margin-bottom: 7.2rem;
    overflow: hidden;
}

.switcher-cont > * {
    display: inline-block;
    vertical-align: middle;
}

.switcher-cont-radio[data-type="typical-format"],
.switcher-cont-radio[data-type="typical-format"] + label  {
    grid-column: 1/2;
    grid-row: 1/1;
}

.switcher-cont-radio[data-type="express-design-format"],
.switcher-cont-radio[data-type="express-design-format"] + label {
    grid-column: 3/4;
    grid-row: 1/1;
}

.switcher-cont > input[type="radio"] + label,
.switcher-cont > input[type="radio"]:checked + label {
    background-color: transparent;
    border: none;
    float: none;
    font-size: 2.8rem;
    line-height: 3.2rem;
    margin: 0;
    padding: 0 0 .4rem 0;
    position: relative;
    text-align: left;
    z-index: 2;
}
.switcher-cont > input[type="radio"] + label > span {
    border-bottom-color: var(--Gray32);
    border-bottom-width: 1.5px;
    color: var(--Gray100);
    transition: all .175s ease-in-out;
}
.switcher-cont > input[type="radio"]:hover + label > span {
    border-bottom-color: var(--Black32);
    color: var(--Black100);
}
.switcher-cont > input[type="radio"]:checked + label > span {
    border-bottom-color: transparent;
    color: var(--Blue100);
}

.switcher-wrapper {
    background: linear-gradient(293.78deg, #F5F5F5 58.44%, #EAEAEA 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF), #F5F5F5;
    border-radius: 100px;
    grid-column: 2/3;
    grid-row: 1/1;
    height: 6.4rem;
    margin: 0 2rem;
    padding: .3rem;
    position: relative;
    width: 12.4rem;
}

.switcher-switch {
    background: radial-gradient(64.66% 64.66% at 31.03% 28.45%, #0088FF 1.18%, #0055FF 100%);
    border-radius: 100px;
    height: 5.8rem;
    position: absolute;
    transition: all .175s ease-in-out;
    width: 5.8rem;
    box-shadow: 1px 1px 3px rgba(0, 51, 153, 0.56),
                inset 4px 4px 16px rgba(255, 255, 255, 0.32),
                inset -6px -8px 16px rgba(0, 34, 68, 0.12);
}

input[data-type="express-design-format"]:checked ~ .switcher-wrapper .switcher-switch {
    transform: translateX(100%);
}

input[data-type="typical-format"]:checked ~ .switcher-wrapper .switcher-switch {
    transform: translateX(0);
}

.icon-lightning-wrapper {
    display: inline-block;
    height: 4rem;
    margin-right: .8rem;
    vertical-align: middle;
    width: 3.2rem;
}

.icon-lightning-svg {
    display: block;
    height: 4rem;
    margin: 0 auto;
    width: 2.3rem;
}
.switcher-cont > input[type="radio"] + label .icon-lightning-svg > use {
    fill: var(--Gray100);
    transition: fill .175s ease-in-out;
}
.switcher-cont > input[type="radio"] + label:hover .icon-lightning-svg > use {
    fill: var(--Black100);
}
.switcher-cont > input[type="radio"]:checked + label .icon-lightning-svg > use {
    fill: var(--Blue100);
}

.order-project-type-tabs {
    max-width: 80rem;
}

.radio-buttons-cont {
    margin: 3.2rem 0 5.6rem;
    overflow: hidden;
}

.form-order .input-wrapper {
    max-width: 52rem;
}
</style>