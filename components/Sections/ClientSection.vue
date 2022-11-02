<template>
  <section class="clients-cont">
    <div class="section-inner">
      <h1 class="mainpage-section-header">Клиенты</h1>
      <span class="clients-list">Interbunker, FinFort, Zvonok.com, Princess, Ренессанс Страхование, АКБшка.рф, Нескучный сад, Фрутшоп</span>
    </div>
  </section>
</template>



<script>
export default {
  name: 'Clients'
}
</script>



<style scoped>
.clients-cont { }

.clients-list {
    font-family: var(--font-serif);
    font-size: 7.1rem;
    line-height: 7rem;
}



@media (min-width: 1340px) {}



@media (max-width: 500px) {
  .clients-cont {
      margin: 20rem 0 0;
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
