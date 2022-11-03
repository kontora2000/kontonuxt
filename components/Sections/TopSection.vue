<template>
  <section class="top-section">
    <div class="section-inner">
      <TopAboutContacts />
      <WeDesign />
    </div>
      <FlagBlock />
  </section>
</template>



<script>
import TopAboutContacts from '~/components/TopAboutContacts.vue';
import WeDesign from '~/components/WeDesign.vue';
import FlagBlock from '~/components/FlagBlock.vue';
export default {
  name: 'TopSection',
  components: { 
    TopAboutContacts, 
    WeDesign,
    FlagBlock,
  },
}
</script>



<style scoped>
.top-section {
    margin-top: 0;
    margin-bottom: 5.6rem;
    width: 100vw;
}

.top-section a { 
    color: var(--White32);
}
.top-section a:hover {
    color: var(--White100);
}

.top-section a.link-underline-solid,
.top-section a.link-underline-dashed { 
    border-bottom-color: var(--White20);
}
.top-section a.link-underline-solid:hover,
.top-section a.link-underline-dashed:hover { 
    border-bottom-color: var(--White100);
}

.about-cont {
    line-height: 1.6rem;
    margin-top: -1px;
}

.about-cont>div:not(:last-child) {
    margin-bottom: .8rem;
}

.red-star {
    color: var(--Red100);
}

.top-section-contacts-wrapper {
  display: flex;
}

.contacts-top-section,
.social-top-section {
  position: relative;
}

.contacts-top-section {

}

.social-top-section {
  margin-right: 8rem;
}

.contacts-top-section>div:not(:last-child),
.social-top-section>div:not(:last-child) {
  margin-bottom: 1rem;
}



@media (min-width: 1340px) {}



@media (max-width: 500px) {
  .top-section {
    display: grid;
    min-height: auto;
    height: auto;
    width: 100vw;
    top: 0;
    left: 0;
    transform: none;
  }
  .top-section>.section-inner {
    flex-direction: column-reverse;
  }

  .about-cont {
    grid-column: 1/3;
    grid-row: 2/3;
    left: 0;
    margin-top: 1.6rem;
    position: relative;
    z-index: 2;
  }
  .about-cont>div:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  .top-section-contacts-wrapper {
    justify-content: flex-end;
  }

  .contacts-top-section {
    display: flex;
    grid-column: 2/3;
    grid-row: 1/2;
    margin: 2rem 0 0;
    width: calc(12rem + 1.2rem + 14rem);
  }

  .contacts-top-section>div {
    display: inline-flex;
  }
  .contacts-top-section>div:not(:last-child),
  .social-top-section>div:not(:last-child) {
      margin: 0 1.2rem 0 0;
  }

  .social-top-section {
      grid-row: 2/3;
      grid-column: 1/2;
      margin-right: 0;
      margin-top: .8rem;

      display: none;
  }
}

@media (max-width: 380px) {
    .contacts-top-section {
      width: calc(11rem + 1.2rem + 13.1rem);
    }
}

@media (max-width: 330px) {
  .contacts-top-section {
    width: 16.3rem;
    justify-content: flex-end;
  }

  .tel.contacts-top-section-inner {
    display: none;
  }
}
</style>