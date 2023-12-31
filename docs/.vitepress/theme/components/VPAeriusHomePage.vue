<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { withBase, useData } from 'vitepress';
const { Layout } = DefaultTheme;
const { theme } = useData();

export interface Product {
  product: string
  logo: string
  logoAlt: string
  description: string
  link: string
  linktext: string
}

export interface Link {
  description: string
  link: string
  date: string
}

defineProps<{
  title?: string
  middleTitle?: string
  products?: Product[]
  middleText?: string
  productsTitle?: string
  downloadsTitle?: string
  mostDownloads?: Link[]
  seeAlso?: Link[]
  otherSubjects?: Link[]
  service?: Link[]
  about?: Link[]
}>()
</script>

<template>
  <div class="title-bar">
    <div class="wrapper">
      <div class="container">
        <p class="title-text">{{ title }}</p>
      </div>
    </div>
  </div>

  <section class="home-logo section" />

  <main>
    <div class="wrapper">
      <div class="article content">
        <Layout></Layout>
      </div>
    </div>
  </main>

  <main class="products">
    <div class="wrapper">
      <div class="container">
       <div class="products-title">{{ productsTitle }}</div>
        <div class="products-row">
          <div class="product-item" v-for="product in products">
            <div class="product-item-wrapper">
              <div class="product-item-img">
                <img :src=withBase(product.logo) :alt=product.logoAlt>
              </div>
              <div class="product-item-content">
                <p class="product-description-font">
                  {{ product.description }}
                  <br/><br/>
                  <a :href=product.link class="text-primary">{{ product.linktext }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <main class="middle">
    <div class="wrapper">
      <div class="container">
        <div class="row justify-content-center">
          <div class="text-col">
            <p class="middle-title">{{ middleTitle }}</p>
            <p class="middle-text" v-html="middleText"></p>
          </div>
        </div>
      </div>
    </div>
  </main>

  <div class="middle-image"></div>

  <main class="most-downloads">
    <div class="wrapper">
      <div class="container">
        <div class="most-downloads-header">{{ downloadsTitle }}</div>
        <div class="most-downloads-row" v-for="item in mostDownloads">
          <div class="most-downloads-column">
            <a :href=item.link target="_blank">{{ item.description }}</a>
          </div>
          <div class="most-downloads-column">
            {{ item.date }}
          </div>
        </div>
      </div>
    </div>
  </main>  

  <main>
    <div class="wrapper" >
      <div class="container">
        <div class="row justify-content-center">
          <div class="most-downloads-column">
            <h3 class="middle-title">Zie ook</h3>
            <div v-for="item in seeAlso">
              <a :href=item.link target="_blank">{{ item.description }}</a>
            </div>
          </div>
          <div class="most-downloads-column">
            <h3 class="middle-title">Overige onderwerpen</h3>
            <div v-for="item in otherSubjects">
              <a :href=item.link target="_blank">{{ item.description }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
