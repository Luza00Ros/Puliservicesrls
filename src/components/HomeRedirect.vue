<script setup>
import { useRouter } from "vue-router";
import TopNav from "./TopNav.vue";
import BottomFooter from "./BottomFooter.vue";

const router = useRouter();

const timeOut = () => {
  setTimeout(() => router.push('/'), 5000);
}

timeOut();
</script>

<template>
  <TopNav />

  <v-container>
    <v-card elevation="0">

      <template v-slot:title>
        <div class="text-light-blue">
          Modulo inviato correttamente
        </div>
      </template>

      <template v-slot:subtitle>
        <div class="text-light-blue-darken-4">
          Ti risponderemo nel pi&ugrave; breve tempo possibile
        </div>
      </template>

      <template v-slot:text>
        <div class="text-subtitle-2">
          Stai per essere reindirizzato alla home page
        </div>
      </template>

      <template v-slot:image>
        <v-img width="100" height="50" aspect-ratio="16/9" cover
          src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/puliservice.webp?alt=media&token=04c81343-8274-465a-bc6c-674bf499c46a"
          lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/puliservice.webp?alt=media&token=04c81343-8274-465a-bc6c-674bf499c46a"
          class="mb-10 mt-10 ml-10 mr-10" />
      </template>

      <v-progress-linear indeterminate color="light-blue"></v-progress-linear>
      <span @load="timeOut"></span>
    </v-card>
  </v-container>

  <div class="position-relative">
    <BottomFooter />
  </div>
</template>
