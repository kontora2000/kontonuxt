<template>
  <div class="player-cont">
    <picture class="player-photo">
      <img class="player-photo-img" src="img/player-1.png">
    </picture>
    <div class="player-name-cont">
      <div class="player-name">
        <a class="link-underline-solid" href="https://instagram.com/10nce" target="_blank">Олег Ермаков</a>
      </div>
      <sup class="player-job-title">{{ position }}</sup>
    </div>
  </div>
</template>

<script>


export default {
  name: 'TeamPlayer',
  props: {
    position: {
      type: String,
      default: 'Дизайнер',
      required: true,
    },
    intagramLink: {
      type: String,
      default: '',

    }
  },
  methods: {
    zoomPhoto () {
      this.
    }
  }
}
</script>
