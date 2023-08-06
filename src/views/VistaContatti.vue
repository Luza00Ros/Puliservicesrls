<script>
export default {
  data() {
    return {
      tab: 'Contatti',
      arraydiOggetti: [
      { id: 0, title: 'Contatti', icon: 'mdi-information-outline' },
        { id: 1, title: 'Mappa', icon: 'mdi-google-maps' }
      ],
    }
  },
}
</script>

<template>
  <TopNav />

  <v-card variant="outlined" color="white" class="mt-3">
    <v-card-title class="text-start d-flex justify-start py-6 text-black">
      <h1 class="font-weight-bold text-h2 title-responsive">
        Contatti
      </h1>
    </v-card-title>

    <v-card-text class="text-start justify-center text-light-blue">
      <h3 class="subtitle-responsive">I nostri riferimenti</h3>
    </v-card-text>

    <v-tabs v-model="tab" grow>

      <div class="d-flex align-center justify-center text-black" style="width: 100%;">
        <v-tab v-for="oggetti in arraydiOggetti" :key="oggetti.id" :value="oggetti.title" color="light-blue">
          <div class="d-flex flex-column align-center">
            <v-icon :icon="oggetti.icon"></v-icon>
            <v-spacer></v-spacer>
            <span class="text-caption font-weight-bold">{{ oggetti.title }}</span>
          </div>
        </v-tab>
      </div>

    </v-tabs>

    <v-container class="d-flex justify-center">
      <v-card width="800" height="400" class="d-flex align-center justify-space-evenly" color="black">
        <v-img height="800" src="../assets/backgroundDesign.webp" cover>
          <v-window v-model="tab">
            <v-window-item v-for="oggetti in arraydiOggetti" :key="oggetti.id" :value="oggetti.title">

              <span v-if="oggetti.id === 0">
                <ContactInfo />
              </span>

              <span v-if="oggetti.id === 1">
                <ContactMaps />
              </span>

            </v-window-item>
          </v-window>
        </v-img>
      </v-card>
    </v-container>

  </v-card>

  <Bottom />
</template>

<style scoped>
@media screen and (max-width: 966px) {

  .title-responsive {
    font-size: 3em !important;
    text-align: start;
    line-height: normal;
  }
  .subtitle-responsive {
    font-size: 2em !important;
    text-align: start;
    line-height: 10px !important;
  }
}
</style>

<script setup>
import ContactMaps from '@/components/ContactMaps.vue';
import ContactInfo from '@/components/ContactInfo.vue';
import TopNav from '@/components/TopNav.vue';
import Bottom from '@/components/BottomFooter.vue'
</script>
