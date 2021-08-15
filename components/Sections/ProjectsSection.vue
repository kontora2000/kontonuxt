<template>
  <section class="works-cont">
    <div class="works-wrapper">
      <h1 class="mainpage-section-header">
        Сделали
        <sup class="mainpage-section-header-sup section-header-sup">
          недавно разработанные
          <br>решения
          <span class="mainpage-section-header-sup-span">*</span>
        </sup>
      </h1>

      <div class="work-cont work-cont-half">
        <div class="work-pic-cont" />
        <div class="work-name-cont">
          <div class="work-name">
            Сайт региональных новостей «КЧР Дэйли»
          </div>
          <div class="work-site-link-cont">
            <a class="work-site-link" href="https://09daily.ru" target="_blank">
              <span class="link-underline-solid">09daily.ru</span>
            </a>
          </div>
        </div>
      </div>

      <div class="work-cont work-cont-half">
        <div class="work-pic-cont" />
        <div class="work-name-cont">
          <div class="work-name">
            Принт для баллонов «Просто Г—А—За»
          </div>
        </div>
      </div>

      <div class="work-cont work-cont-half">
        <div class="work-pic-cont" />
        <div class="work-name-cont">
          <div class="work-name">
            Сайт студии мебели «Princess»
          </div>
          <div class="work-site-link-cont">
            <a class="work-site-link" href="https://princess.furniture" target="_blank">
              <span class="link-underline-solid">princess.furniture</span>
            </a>
          </div>
        </div>
      </div>

      <div class="work-cont work-cont-half">
        <div class="work-pic-cont" />
        <div class="work-name-cont">
          <div class="work-name">
            Сайт региональных новостей «Эльбрус.пресс»
          </div>
          <div class="work-site-link-cont">
            <a class="work-site-link" href="https://elbrus.press" target="_blank">
              <span class="link-underline-solid">elbrus.press</span>
            </a>
          </div>
        </div>
      </div>

      <div class="work-cont work-cont-half">
        <div class="work-pic-cont">
          <video
            src="works/princess/instagram-stories-new-year-2020/princess-instagram-stories-new-year-2020.mp4"
            autoplay
            loop
            style="border-radius: 40px; margin-left: 1.6rem; width: calc(100% - 3.2rem);"
          />
        </div>
        <div class="work-name-cont">
          <div class="work-name">
            Новогодняя анимация для&nbsp;инстаграма студии «Princess»
          </div>
          <div class="work-site-link-cont">
            <a class="work-site-link" href="https://instagram.com/princess_mebel" target="_blank">
              <span class="link-underline-solid">@princess_mebel</span>
            </a>
          </div>
        </div>
      </div>

      <div class="work-cont work-cont-full">
        <div
          class="work-pic-cont"
          style="background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 233, 244, .2) 20%, rgba(255, 233, 244, .2) 80%, rgba(255, 255, 255, 0)); overflow-x: hidden;"
        >
          <picture class="work-pic">
            <img
              src="works/princess/logo/princess-logo.png"
              style="height: 32rem; margin-top: 6rem;"
            >
          </picture>
        </div>
        <div class="work-name-cont">
          <div class="work-name">
            Логотип студии эксклюзивной мебели «Princess»
          </div>
        </div>
      </div>

      <div class="work-cont work-cont-half">
        <div class="work-pic-cont">
          <picture
            class="work-pic"
            style="height: 60vh; display: block; width: 100%; overflow: hidden;"
          >
            <img
              class="work-pic-img"
              style="width: calc(100% - 3.2rem); height: auto; margin-left: 1.6rem;"
              src="works/prostogaz/website/prostogaz-website.png"
            >
          </picture>
        </div>
        <div class="work-name-cont">
          <div class="work-name">
            Сайт «Просто Г—А—За»
          </div>
          <div class="work-site-link-cont">
            <a class="work-site-link" href="https://prostogaz.com" target="_blank">
              <span class="link-underline-solid">prostogaz.com</span>
            </a>
          </div>
        </div>
      </div>

      <div class="work-cont work-cont-half-high">
        <div class="work-pic-cont" />
        <div class="work-name-cont">
          <div class="work-name">
            Сайт «Нескучного сада»
          </div>
          <div class="work-site-link-cont">
            <a class="work-site-link" href="https://n-sad.com" target="_blank">
              <span class="link-underline-solid">n-sad.com</span>
            </a>
          </div>
        </div>
      </div>

      <div class="work-cont work-cont-half">
        <div class="work-pic-cont" />
        <div class="work-name-cont">
          <div class="work-name">
            Сайт газеты «День республики»
          </div>
          <div class="work-site-link-cont">
            <a class="work-site-link" href="https://denresp.ru" target="_blank">
              <span class="link-underline-solid">denresp.ru</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <template v-if="projects">
      <ProjectItem
        v-for="(project, index) in projects"
     
        :key="project.slug"
        :project="project" 
        :index="index"
      />
      <div class="button-showmore-wrapper">
        <button class="button-showmore">
          Ещё работы
        </button>
      </div>
    </template>
  </section>
</template>

<script>
import ProjectItem from '../Project/ProjectItem.vue';

export default {
  name: 'ProjectSection',
  components: {
    ProjectItem, 
  },
  computed: {
    projects () {
      return this?.$store?.state?.projects?.projects;
    },
  },
  async mounted () {
    try {
      await this.$store.dispatch('projects/bindProjectsRef');
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style scoped>
.works-wrapper {
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fill, 60vh);
    grid-column-gap: 4rem;
    grid-row-gap: 10rem;
}

.works-wrapper>.mainpage-section-header {
    margin-left: 36%;
    margin-top: 24rem;
}

.works-wrapper .mainpage-section-header::after {
    margin: 3.2rem 0 0 1.2rem;
    position: absolute;
    top: auto;
    width: 10%;
}

.work-cont {
    grid-row: span 1;
    margin-top: 8rem;
}

.work-cont-half {
    grid-column: span 1;
    max-width: calc((100vw - 4rem) / 2);
}

.work-cont-half-high {
    grid-column: span 1;
    grid-row: span 2;
}
.work-cont-half-high .work-pic-cont {
    min-height: calc(120vh + 12rem);
}

.work-cont-full {
    grid-column: span 2;
}

.work-pic-cont {
    background: #f5f5f5; /* удалить при релизе */
    min-height: 60vh;
    width: 100%
}

.work-pic {
    display: block;
    height: inherit;
    width: inherit;
    max-width: 100%;
}

.work-pic-img {
    display: block;
    height: inherit;
    width: inherit;
}

.work-name-cont {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    line-height: 2.8rem;
    margin: 1.2rem 0 0 2.8rem;
    width: calc(100% - 5.6rem);
}

.work-name {
    
}

.work-site-link-cont {
    margin-left: 4rem;
}

.work-site-link {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: .02em;
    white-space: nowrap;
    text-transform: uppercase;
}

.work-site-link::after {
    background-image: url("data:image/svg+xml,%3Csvg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.6378 1.07747C9.91381 1.39856 9.15482 1.65 8.58297 1.65H2.40719V0L12.4072 0V10H10.7572V3.82495C10.7572 3.17837 10.9541 2.61792 11.3369 1.80361C10.8759 2.55933 10.5549 3.02175 10.083 3.49095L1.99877 11.5751L0.832031 10.4084L8.82172 2.41875C9.28593 1.8864 9.9264 1.45522 10.6378 1.07747Z' fill='#0055ff'/%3E%3C/svg%3E");
    content: '';
    display: inline-block;
    height: 1.2rem;
    margin-left: .3rem;
    position: relative;
    top: .1rem;
    transition: transform .1s ease-in-out;
    width: 1.3rem;
}
.work-site-link:hover::after {
    transform: translateX(2px) translateY(-2px);
}

.work-site-link>.link-underline-solid {
    border-bottom-color: var(--Blue32);
}

.button-showmore-wrapper {
    margin-top: 6.4rem;
}

.button-showmore {
    background: var(--Blue100);
    color: var(--White100);
    display: block;
    margin: 3.2rem auto 0;
    padding: 3.2rem 13.2rem;
}

@media (min-width: 1340px) {}

@media (max-width: 460px) {
  .works-wrapper {
      grid-column-gap: 0;
      grid-template-columns: 100%;
  }

  .works-wrapper > .mainpage-section-header {
      margin-left: 0.8rem;
      margin-top: 0;
  }

  .work-cont-half,
  .work-cont-full {
      grid-column: span 1;
      max-width: 100% !important;
  }

  .work-name-cont {
      display: block;
      margin-left: .8rem;
      width: calc(100% - 1.6rem);
  }

  .work-site-link-cont {
      margin: .4rem 0 0;
  }

  .button-showmore {
      padding: 2.8rem 8.8rem;
  }
}
</style>
