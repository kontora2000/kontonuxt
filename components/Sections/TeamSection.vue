<template>
  <section class="team-cont">
    <h1 class="mainpage-section-header">Команда</h1>
    <div class="player-cont-wrapper">
      <div class="player-cont">
        <picture class="player-photo">
          <img class="player-photo-img" src="img/player-1.png">
        </picture>
        <div class="player-name-cont">
          <div class="player-name">
            <a class="link-underline-solid" href="https://instagram.com/stasmyhero" target="_blank">Стас Ермаков</a>
          </div>
          <sup class="player-job-title">Фуллстак&hairsp;—&hairsp;разработчик</sup>
        </div>
      </div>
      <div class="player-cont">
        <picture class="player-photo">
          <img class="player-photo-img" src="img/player-1.png">
        </picture>
        <div class="player-name-cont">
          <div class="player-name">
            <a class="link-underline-solid" href="https://instagram.com/glazzzgow" target="_blank">Алина Мина</a>
          </div>
          <sup class="player-job-title">Дизайнер</sup>
        </div>
      </div>
      <div class="player-cont">
        <picture class="player-photo">
          <img class="player-photo-img" src="img/player-1.png">
        </picture>
        <div class="player-name-cont">
          <div class="player-name">
            <a class="link-underline-solid" href="https://instagram.com/greeekov" target="_blank">Артём Греков</a>
          </div>
          <sup class="player-job-title">Дизайнер</sup>
        </div>
      </div>
      <div class="player-cont">
        <picture class="player-photo">
          <img class="player-photo-img" src="img/player-1.png">
        </picture>
        <div class="player-name-cont">
          <div class="player-name">
            <a class="link-underline-solid" href="https://instagram.com/10nce" target="_blank">Олег Ермаков</a>
          </div>
          <sup class="player-job-title">Клининг-менеджер</sup>
        </div>
      </div>
    </div>
    <div class="button-vacancies-wrapper">
      <a href="vacancies.html" class="button-vacancies button">3&nbsp;вакансии</a>
    </div>
  </section>
</template>



<script>
export default {
  name: 'Team',
}
</script>



<style scoped>
.team-cont {
    margin-left: 18%;
    margin-top: 32rem;
}

.player-cont-wrapper {
    display: inline;
}

.player-cont {
    display: inline-block;
    margin-right: 2rem;
}
.player-cont:not(:first-child) {
    margin-top: 4rem;
}

.player-photo,
.player-name-cont,
.player-name,
.player-job-title {
    display: inline-block;
}

.player-photo {
    margin-right: 1.2rem;
    position: relative;
    top: -.8rem;
    vertical-align: middle;
}

.player-photo-img {
    background: var(--Black4);
    border: none;
    border-radius: 100px;
    height: 8rem;
    width: 8rem;
}

.player-name-cont {
    font-size: 5.2rem;
    line-height: 5.8rem;
}

.player-name {
    font-family: var(--font-serif);
    font-size: 5.2rem;
}
.player-cont:not(:last-child) .player-name::after {
    content: ',';
    font-size: 5.2rem;
    font-family: var(--font-serif);
    margin-left: .4rem;
}

.player-name>a {
    border-color: var(--Black16);
    color: var(--Black100);
}
.player-name>a:hover {
    border-color: var(--Blue32);
    color: var(--Blue100);
}

.player-job-title {
    color: var(--Gray100);
    margin-left: -2.8rem;
    top: -.8rem;
    position: relative;
}
.player-cont:last-child .player-job-title {
    margin-left: -1.2rem;
}

.button-vacancies-wrapper {
    display: inline-block;
}
.button-vacancies-wrapper::before {
    content: '+';
    font-size: 2.4rem;
    margin-right: .4rem;
}



@media (min-width: 1340px) {}



@media (max-width: 460px) {
  .team-cont {
      margin: 20rem .8rem 0;
  }
}
</style>
