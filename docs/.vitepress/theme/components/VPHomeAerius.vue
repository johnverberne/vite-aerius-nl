<script setup lang="ts">
//import { useData } from '../composables/data'
import { useData } from 'vitepress'
import VPHero from './VPAerius.vue'


const { frontmatter: fm } = useData()
</script>

<template>
  <VPAerius
    v-if="fm.aerius"
    class="VPHomeAerius"
    :breadcumtitle="fm.aerius.name"
    :name="fm.aerius.name"
    :text="fm.aerius.text"
    :tagline="fm.aerius.tagline"
    :image="fm.aerius.image"
    :actions="fm.aerius.actions"
  >
    <template #home-aerius-info><slot name="home-aerius-info" /></template>
    <template #home-aerius-image><slot name="home-aerius-image" /></template>
  </VPAerius>
</template>