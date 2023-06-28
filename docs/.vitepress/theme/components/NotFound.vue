<script setup lang="ts">
import { withBase } from 'vitepress';

const root = '/';
</script>

<template>
  <main>
    <div class="wrapper">
      <div class="container">
        <h1 class="title">404 PAGINA NIET GEVONDEN</h1>
        <div class="divider" />
        <blockquote class="quote">
          These are not pages you are looking for
        </blockquote>
        <div class="action">
          <a class="link" :href="withBase(root)" aria-label="Naar de homepage">
            Naar de homepage
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
