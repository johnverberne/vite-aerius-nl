<script setup lang="ts">
defineProps<{
  breadcumtitle?: string  
}>()
</script>

<template>
  <div class="title-bar">
    <div class="wrapper">
      <div class="container">
        <p class="title-text"><a href="/home.html">Home</a> > {{ breadcumtitle }}</p>
      </div>
    </div>
  </div>
</template>
