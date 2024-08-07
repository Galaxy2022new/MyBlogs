<script setup>
import DefaultTheme from 'vitepress/theme'

const {Layout} = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <div class="title">aside-outline-before</div>
    </template>
    <template #doc-before>
      <div class="title">doc-before</div>
    </template>
  </Layout>
</template>

<style scoped>
.title {
  color: red;
}
</style>
