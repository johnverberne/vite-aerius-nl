<script setup lang="ts">
defineProps<{
  breadcumtitle?: string  
}>()
</script>

<template>
  <div class="title-bar">
    <div class="wrapper">
      <div class="container">
        <div class="container title-bar">
          <h3 class="title-text"><a href="/home.html">Home</a> > <strong>{{ breadcumtitle }}</strong></h3>
        </div>
      </div>
    </div>
  </div>
</template>
