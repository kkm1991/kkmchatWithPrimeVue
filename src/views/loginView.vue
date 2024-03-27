<template>
  <div class="card mt-8 px-5">
    <div class="flex flex-column md:flex-row">
      <div
        class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5"
      >
        <div
          class="flex flex-wrap justify-content-center align-items-center gap-2"
        >
          <label class="w-8rem">Username</label>
          <InputText id="username" type="text" class="w-20rem" />
        </div>
        <div
          class="flex flex-wrap justify-content-center align-items-center gap-2"
        >
          <label class="w-8rem">Password</label>
          <InputText id="password" type="password" class="w-20rem" />
        </div>
        <div
          class="flex flex-wrap justify-content-center align-items-center gap-2"
        >
          <Button
            label="Sing in"
            icon="pi pi-user"
            class="w-10rem mx-auto my-3"
          ></Button>
        </div>
      </div>
      <div class="w-full md:w-2">
        <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
        <Divider layout="horizontal" class="flex md:hidden" align="center"
          ><b>OR</b></Divider
        >
      </div>

      <div
        class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5"
      >
        <div
          class="flex flex-wrap justify-content-center align-items-center gap-2"
        >
          <label class="w-8rem">User Name</label>
          <InputText id="username" type="text" class="w-20rem" />
        </div>
        <div
          class="flex flex-wrap justify-content-center align-items-center gap-2"
        >
          <label class="w-8rem">Email</label>
          <InputText id="username" type="email" class="w-20rem" />
        </div>
        <div
          class="flex flex-wrap justify-content-center align-items-center gap-2"
        >
          <label class="w-8rem">Password</label>
          <InputText id="password" type="password" class="w-20rem" />
        </div>
        <div
          class="flex flex-wrap justify-content-center align-items-center gap-2"
        >
          <label class="w-8rem">Confirm Password</label>
          <InputText id="password" type="password" class="w-20rem" />
        </div>
        <div
          class="flex flex-wrap justify-content-center align-items-center gap-2 mt-3"
        >
        <label class="w-8rem">Gender</label>
          <FloatLabel class="w-full md:w-20rem">
            <Dropdown
              v-model="selectedGender"
              inputId="dd-city"
              :options="genders"
              optionLabel="name"
              class="w-full"
            />
            <label for="dd-city">Select a gender</label>
          </FloatLabel>
        </div>

        <div
          class="flex flex-wrap justify-content-center align-items-center gap-2"
        >
          <Button
            label="Sign Up"
            icon="pi pi-user"
            class="w-10rem mx-auto my-3"
          ></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import Divider from "primevue/divider";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import FloatLabel from 'primevue/floatlabel'
import { ref } from "vue";

const selectedGender=ref()
const genders=ref([
    {name:'Male',code:'M'},
    {name:'Female',code:'F'}
])

</script>

<style lang="scss" scoped></style>
