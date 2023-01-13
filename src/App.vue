<script setup lang="ts">

import About from './pages/about/About.vue';
import Header from './components/Header.vue';
import CarerTimeline from './pages/carer/CarerTimeline.vue';
import Previewer from './pages/previewer/Previewer.vue';

</script>

<template>
  <div class="flex flex-col w-screen  overflow-x-hidden overflow-y-auto bg-ll-bg text-ll-text">
    <Header class="z-40"></Header>
    <About></About>
    <CarerTimeline></CarerTimeline>
    <Previewer></Previewer>
  </div>
</template>

<script lang="ts">
export default {
  components: { Header, CarerTimeline, Previewer }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
