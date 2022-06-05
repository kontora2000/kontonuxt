<template>
  <section class="clients-cont">
    <h1 class="mainpage-section-header">Клиенты</h1>
    <span class="clients-list">Interbunker Group of&nbsp;Companies, Ренессанс Страхование, Princess, Нескучный сад, Фрутшоп</span>
  </section>
</template>



<script>
export default {
  name: 'Clients'
}
</script>



<style scoped>
.clients-cont {
    margin-left: 18%;
    margin-top: 40rem;
    margin-right: 2.8rem;
}

.clients-list {
    font-family: var(--font-serif);
    font-size: 7.1rem;
    line-height: 7rem;
}



@media (min-width: 1340px) {}



@media (max-width: 460px) {
  .clients-cont {
      margin: 20rem .8rem 0;
  }

  .clients-list {
    font-size: 4rem;
    line-height: 4rem;
  }
}

@media (max-width: 330px) {
  .clients-list {
    font-size: 3.2rem;
    line-height: 3.2rem;
  }
}
</style>
