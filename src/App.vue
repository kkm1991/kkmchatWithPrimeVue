
<template  >
  <!-- <header>
   
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <div class="container">
    <slidbar v-if="store.loginstatus" /> 
  </div>
    <div class="content">
      <RouterView  />
    </div>
  

 
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import slidbar from '../src/components/slidbar.vue'
import Button from 'primevue/button';
import {ref } from 'vue';
import { useCounterStore } from './stores/counter';
const store=useCounterStore()
</script>

<style>
  .container {
  display: flex;
}

.sidebar {
  flex: 0 0 auto; /* Keeps sidebar fixed width */
}

.content {
  flex: 1; /* Allows content to take remaining space */
}
</style>



