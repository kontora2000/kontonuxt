<template>
  <section class="team-cont">
    <h1 class="mainpage-section-header">
      Команда
    </h1>
    <div class="player-cont-wrapper">
      <team-player image="/img/player-1.jpg" instagram-profile="stasmyhero" position="Программист"
      >Стас Ермаков</team-player>
      <team-player image="/img/player-1.jpg" instagram-profile="glazzzgow" position="Дизайнер"
      >Алина Мина</team-player>
      <team-player image="/img/player-1.jpg" instagram-profile="greeekov" position="Дизайнер"
      >Артём Греков</team-player>
      <team-player image="/img/player-1.jpg" instagram-profile="10nce" position="Клининг-менеджер"
      >Олег Ермаков</team-player>
    </div>
    <div class="button-vacancies-wrapper">
      <NuxtLink to="/job" class="button-vacancies button">+&nbsp;3&nbsp;вакансии</NuxtLink>
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
  top: -0.8rem;
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
  content: ",";
  font-size: 5.2rem;
  font-family: var(--font-serif);
  margin-left: 0.4rem;
}

.player-name > a {
  border-color: var(--Black16);
  color: var(--Black100);
}
.player-name > a:hover {
  border-color: var(--Blue32);
  color: var(--Blue100);
}

.player-job-title {
  color: var(--Gray100);
  margin-left: -2.8rem;
  top: -0.8rem;
  position: relative;
}
.player-cont:last-child .player-job-title {
  margin-left: -1.2rem;
}

.button-vacancies-wrapper {
  display: inline-block;
}

.button-vacancies {
  padding: 2.4rem 2rem 2.4rem 1.8rem;
}

@media (min-width: 1340px) {
}

@media (max-width: 460px) {
  .team-cont {
    margin: 20rem 0.8rem 0;
  }

  .player-cont {
    display: block;
    margin-top: 3.2rem;
    margin-right: 0;
  }

  .player-cont:not(:first-child) {
    margin-top: 3.2rem;
  }

  .player-photo {
    top: -1.2rem;
    vertical-align: middle;
  }

  .player-name-cont {
    font-size: 2.8rem;
    line-height: 2.8rem;
  }

  .player-name {
    font-size: 2.8rem;
    line-height: 2.8rem;
  }

  .player-cont:not(:last-child) .player-name::after {
    display: none;
  }

  .player-job-title {
    display: block;
    font-size: 1.4rem;
    margin-left: 0;
    margin-top: .8rem;
    top: 0;
    vertical-align: text-bottom;
  }
  .player-cont:last-child .player-job-title {
    margin-left: 0;
  }

  .button-vacancies-wrapper {
    margin-top: 2rem;
  }
}
</style>
