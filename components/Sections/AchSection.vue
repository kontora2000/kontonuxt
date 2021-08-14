<template>
    <section class="achievements-cont">
        <div class="achiev-items-wrapper">
            <div class="achiev-item">
                <div class="achiev-digit">3</div>
                <div class="achiev-text">года офигенной<br />работы</div>
            </div>
            <div class="achiev-item">
                <div class="achiev-digit">100</div>
                <div class="achiev-text">реализованных<br />проектов</div>
            </div>
            <div class="achiev-item">
                <div class="achiev-digit">4</div>
                <div class="achiev-text">человека<br />в&nbsp;команде</div>
            </div>
            <div class="achiev-item">
                <div class="achiev-digit">7</div>
                <div class="achiev-text">лет<br />в&nbsp;Тибете</div>
            </div>
        </div>
        <div class="achiev-about-wrapper">
            <h4 class="achiev-about-item">Работаем с&nbsp;2017. Имеем большой опыт разработки сайтов и&nbsp;приложений для&nbsp;СМИ и&nbsp;онлайн&thinsp;–&thinsp;коммерции</h4>
            <div class="achiev-about-item">Кек</div>
        </div>
    </section>
</template>



<script>
export default {
  name: 'Achievements'
}
</script>



<style scoped>
.achievements-cont {
    margin-left: 18%;
    margin-top: 28rem;
    min-height: 64vh;
}

.achiev-item {
    display: inline-flex;
}
.achiev-item:not(:last-child) {
    margin-right: 8.8rem;
}

.achiev-digit {
    font-weight: 300;
    font-size: 13.2rem;
    display: inline-block;
    line-height: 10.65rem;
    vertical-align: top;
}

.achiev-item:nth-child(2) .achiev-digit:after {
    content: '+';
    font-weight: 260;
    margin: .8rem 0 0 -1.3rem;
    position: absolute;
}

.achiev-text {
    color: var(--Gray100);
    display: inline-block;
    mix-blend-mode: difference;
    vertical-align: top;
}

.achiev-about-wrapper {
    margin-top: 7.2rem;
}

.achiev-about-item {
    display: inline-flex;
    flex-direction: column;
}
.achiev-about-item:nth-child(1) {
    margin-right: 4rem;
    max-width: 52rem;
}
.achiev-about-item:nth-child(2) {
    font-size: 2rem;
    line-height: 2.8rem;
}
</style>
