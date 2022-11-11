<template>
  <section class="team-cont">
    <div class="section-inner">
      <h1 class="mainpage-section-header">Команда</h1>
      <div class="player-cont-wrapper">
        <team-player image="/img/player-1.jpg" instagram-profile="stasmyhero" position="Бэкенд-разраб"
        >Стас Ермаков</team-player>
        <team-player image="/img/player-1.jpg" instagram-profile="glazzzgow" position="Дизайнер"
        >Алина Мина</team-player>
        <team-player image="/img/player-1.jpg" instagram-profile="greeekov" position="Арт-директор"
        >Артём Греков</team-player>
        <team-player image="/img/player-1.jpg" instagram-profile="10nce" position="Фронтенд-разраб"
        >Олег Ермаков</team-player>
      </div>
      <div class="button-vacancies-wrapper">
        <NuxtLink to="/job" class="button-vacancies button">+&nbsp;1&nbsp;вакансия</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import TeamPlayer from '../TeamPlayer.vue';
export default {
  name: 'Team',
  components: { TeamPlayer, },
};
</script>

<style>
.team-cont { }

.player-cont-wrapper {
  display: inline;
}

.button-vacancies-wrapper {
  display: inline-block;
}

.button-vacancies {
  padding-left: 1.8rem;
  padding-right: 2rem;
}

@media (min-width: 1340px) {
}

@media (max-width: 500px) {
  .team-cont {
    margin: 20rem 0.8rem 0;
  }

  .button-vacancies-wrapper {
    margin-top: 2rem;
  }
}
</style>
