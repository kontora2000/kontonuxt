<template>
  <main>
    <Flag-section />
    <Top-section />
    <We-design />
    <Achievements />
    <ProjectsSection />
    <Clients />
    <Team />
    <Contacts />
  </main>
</template>

<script>
import Header from '~/components/Header';
import FlagSection from '~/components/Sections/FlagSection';
import TopSection from '~/components/Sections/TopSection';
import WeDesign from '~/components/Sections/DesSection';
import Achievements from '~/components/Sections/AchSection';
import Clients from '~/components/Sections/ClientSection';
import ProjectsSection from '~/components/Sections/ProjectsSection.vue';
import Team from '~/components/Sections/TeamSection';
import Contacts from '~/components/Sections/Contacts';
import Footer from '~/components/Footer';

export default {
  components: {
    FlagSection,
    TopSection,
    WeDesign,
    Achievements,
    ProjectsSection,
    Clients,
    Team,
    Contacts,
    Footer,
  },
};
</script>
