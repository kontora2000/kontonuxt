<template>
  <main>
    <TopSection />
    <ButtonOrder />
    <Achievements />
    <!--ProjectsSection /-->
    <Clients />
    <!--ImgOnCursor /-->
    <!--Team /-->
    <Contacts />
  </main>
</template>

<script>
import TopSection from '~/components/Sections/TopSection';
import ButtonOrder from '~/components/ButtonOrder';
import Achievements from '~/components/Sections/AchSection';
import Clients from '~/components/Sections/ClientSection';
import ProjectsSection from '~/components/Sections/ProjectsSection.vue';
import Team from '~/components/Sections/TeamSection';
import Contacts from '~/components/Sections/Contacts';
import ImgOnCursor from '~/components/ImgOnCursor.vue';

export default {
  components: {
    TopSection,
    ButtonOrder,
    Achievements,
    ProjectsSection,
    Clients,
    Team,
    Contacts,
    ImgOnCursor,
  },
};
</script>
