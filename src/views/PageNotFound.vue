<script setup>
import { useRouter } from 'vue-router';
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter";

const router = useRouter();

const routerPush = () => {
  return router.push("/");
}
</script>

<template>
  <TopNav />
  <v-card class="mx-auto" height="334" elevation="0" color="transparent" image="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/pageNotFound_Background.webp?alt=media&token=b965aa58-1329-44b0-89d0-2868e553af47">

    <v-card-title class="text-wrap text-white mt-10">
     <span class="text-h3"> Oops, questa pagina non è stata trovata!</span>
    </v-card-title>

    <v-card-actions class="d-flex justify-center">
        <v-btn @click="routerPush" prepend-icon="mdi-home" role="link" size="large" density="compact" rounded="xl"
        color="light-blue" variant="text" class="text-subtitle-1 font-weight-bold">
        <span class="text-white">Torna alla home</span>
      </v-btn>
    </v-card-actions>

  </v-card>
  <Bottom />
</template>
