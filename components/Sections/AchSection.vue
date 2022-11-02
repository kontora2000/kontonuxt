<template>
    <section class="achievements-cont">
        <div class="section-inner">
            <div class="achiev-items-wrapper">
                <div class="achiev-item">
                    <div class="achiev-digit">10</div>
                    <div class="achiev-text">лет опыта<br />в&nbsp;дизайне <br />и&nbsp;разработке</div>
                </div>
                <div class="achiev-item">
                    <div class="achiev-digit">100</div>
                    <div class="achiev-text">реализованных<br />проектов</div>
                </div>
                <div class="achiev-item">
                    <div class="achiev-digit">5</div>
                    <div class="achiev-text">человек<br />в&nbsp;команде</div>
                </div>
                <div class="achiev-item">
                    <div class="achiev-digit">7</div>
                    <div class="achiev-text">лет<br />в&nbsp;Тибете</div>
                </div>
            </div>
            <div class="achiev-about-wrapper">
                <h4 class="achiev-about-item">Специализируемся на сайтах и&nbsp;приложениях для&nbsp;СМИ и&nbsp;онлайн&hairsp;–&hairsp;коммерции.</h4>
                <p class="achiev-about-item">Проводим предпроектные исследования и изучаем ваш опыт. С помощью дизайна в первую очередь решаем бизнес-задачи, разрабатываем. И можем подключиться к процессу на любом этапе.</p>
            </div>
        </div>
    </section>
</template>



<script>
export default {
  name: 'Achievements'
}
</script>



<style scoped>
.achievements-cont {}

.achiev-items-wrapper {
    position: relative;
}

.achiev-item {
    display: inline-flex;
}
.achiev-item:not(:last-child) {
    margin-right: 7.6rem;
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
    color: var(--Black100);
    display: inline-block;
    mix-blend-mode: difference;
    vertical-align: top;
}

.achiev-about-wrapper {
    display: flex;
    justify-content: space-between;
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
    margin: .35rem 0 0;
    max-width: calc(100% - 56rem);
    vertical-align: top;
}

@media (max-width: 500px) {
    .achievements-cont {
        margin-top: 24rem;
    }

    .achiev-items-wrapper {
        display: grid;
        grid-row-gap: 4rem;
    }

    .achiev-item:not(:last-child) {
        margin-right: 0;
    }

    .achiev-item:first-child {
        grid-column: 1/2;
        grid-row: 1/2;
    }
    .achiev-item:nth-child(2) {
        grid-column: 1/3;
        grid-row: 2/3;
    }

    .achiev-item:nth-child(3) {
        grid-column: 2/3;
        grid-row: 1/2;
    }

    .achiev-item:last-child {
        display: none;
    }

    .achiev-digit {
        font-size: 11rem;
        line-height: 9.2rem;
    }

    .achiev-about-wrapper {
        flex-direction: column;
        margin-top: 6rem;
    }

    .achiev-about-item:nth-child(1) {
        margin-right: 0;
        max-width: 100%;
    }

    .achiev-about-item:nth-child(2) {
        margin-top: 2.4rem;
        max-width: 100%;
    }
}

@media (max-width: 330px) {
    .achievements-cont {
        margin-top: 16rem;
    }
    .achiev-digit {
        font-size: 9.6rem;
        line-height: 8rem;
    }

    .achiev-about-wrapper {
        margin-top: 4rem;
    }

    .achiev-about-item:nth-child(2) {
        font-size: 1.6rem;
        line-height: 2rem;
        margin-top: 2rem;
    }
}
</style>
