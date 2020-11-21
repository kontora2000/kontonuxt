<template>
    <section class="achievements-cont">
        <div class="achiev-item">
            <div class="achiev-digit">8</div>
            <div class="achiev-text">лет офигенной<br />работы</div>
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
    </section>
</template>



<script>
export default {
  name: 'Achivments'
}
</script>



<style scoped>
.achievements-cont {
    margin-left: 18%;
    margin-top: 28rem;
    min-height: 40vh;
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
</style>
