<template>
  <main>
    <Flag-section />
    <Top-section />
    <We-design />
    <Achievements />
    <Works />
    <Clients />
    <Team />
    <Contacts />
  </main>
</template>

<script>
import Header from '~/components/Header'
import FlagSection from '~/components/Sections/FlagSection'
import TopSection from '~/components/Sections/TopSection'
import WeDesign from '~/components/Sections/DesSection'
import Achievements from '~/components/Sections/AchSection'
import Clients from '~/components/Sections/ClientSection'
import Team from '~/components/Sections/TeamSection'
import Works from '~/components/Sections/Works'
import Contacts from '~/components/Sections/Contacts'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    FlagSection,
    TopSection,
    WeDesign,
    Achievements,
    Works,
    Clients,
    Team,
    Contacts,
    Footer
  },
}
</script>
