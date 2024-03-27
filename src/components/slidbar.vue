<template>
  <div class="card flex justify-content-center">
    <Sidebar class="bg" v-model:visible="visible">
      <div class="shadow-3 py-5 h-13rem align-content-center text-center  border-round-xl">
        <span>KKM CHAT</span>
      </div>
      <ul class="list-none p-0 mt-3 overflow-hidden">
        <li>
          <a
            v-ripple
            class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
          >
            <i class="pi pi-home mr-2"></i>
            <span class="font-medium">Home</span>
          </a>
        </li>
      </ul>
    </Sidebar>
    <Button icon="pi pi-bars " text raised @click="visible = true" />
  </div>
</template>

<script setup>
import Sidebar from "primevue/sidebar";
import { ref } from "vue";
import Button from "primevue/button";

const visible = ref(false);
</script>

<style>
.bg {
  background: #a1ffce; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #faffd1,
    #a1ffce
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #faffd1,
    #a1ffce
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
span {
  font-family: Arial, Helvetica, sans-serif;
}
.text {
  text-align-last: center;
}
</style>
