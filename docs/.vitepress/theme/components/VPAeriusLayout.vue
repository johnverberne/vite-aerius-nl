<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import VPAeriusBreadCrum from "./VPAeriusBreadCrum.vue";
import VPAeriusHomePage from "./VPAeriusHomePage.vue";
import VPAeriusFooter from "./VPAeriusFooter.vue";
import NotFound from "./NotFound.vue";
import Piwik from "./VPAeriusPiwik.vue";

const { frontmatter: fm } = useData();
const { Layout } = DefaultTheme;
const { page } = useData();
</script>

<template>
  <!--header-->
  <div class="logo-wrapper">
    <img src="/rijksoverheid.svg" alt="Logo Rijksoverheid" />
  </div>

  <!-- remove debug page types -->
  <a href="home.html">Home</a> | <a href="downloads.html">Downloads</a> | <a href="toegankelijkheidsverklaring.html">Toegankelijkheidsverklaring</a> | <a href="404">404</a>

  <div v-if="page.isNotFound">
    <VPAeriusBreadCrum
        :breadcumtitle='"pagina niet gevonden"' />
    <NotFound />
  </div>

  <div v-else>
    <!--home page-->
    <div v-if="fm.layout == 'home'">
      <VPAeriusHomePage v-if="fm.home"
        :title="fm.home.title"
        :productsTitle="fm.home.productsTitle"
        :products="fm.home.products"
        :middleTitle="fm.home.middleTitle"
        :middleText="fm.home.middleText"
        :downloadsTitle="fm.home.downloadsTitle" 
        :mostDownloads="fm.home.mostDownloads"
        :seeAlso="fm.home.seeAlso"
        :otherSubjects="fm.home.otherSubjects"
        :service="fm.home.service"
        :about="fm.home.about"
        />
    </div>

    <!-- other pages -->
    <div v-else>
      <VPAeriusBreadCrum v-if="fm.aerius"
        :breadcumtitle="fm.aerius.breadcumtitle" />
      <main>
        <div class="wrapper" >
          <div class="container">
            <Layout></Layout>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!-- footer -->
  <VPAeriusFooter />
</template>

<Piwik />
