<script>
export default {
  name: "VistaContatti",
  data() {
    return {
      tab: "Contatti",
      infos: [
        { id: 0, title: "Contatti", icon: "mdi-information-outline" },
        { id: 1, title: "Mappa", icon: "mdi-google-maps" },
      ],
    };
  },
  components: {
    GoogleCalendar,
    ContactMaps,
    ContactInfo,
    TopNav,
    Bottom,
  },
};
</script>

<template>
  <TopNav />

  <v-container fluid class="d-flex justify-center header-align-center-reverse">
    <v-sheet>
      <v-img
        max-width="800"
        max-height="500"
        src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fcontact_illustration.svg?alt=media&token=cbb26c78-2ccd-4c8b-8aa5-742ba8bfe439"
        lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fcontact_illustration.svg?alt=media&token=cbb26c78-2ccd-4c8b-8aa5-742ba8bfe439"
      ></v-img>
    </v-sheet>
    <v-sheet>
      <div class="d-flex flex-column fill-height justify-center text-white">
        <div class="text-start text-light-blue mt-5 mb-3 mr-5 ml-5">
          <h1 class="title-responsive">Contatti</h1>
        </div>
        <div class="ma-5 text-start">
          <p
            class="subtitle-responsive text-light-blue-darken-4 font-weight-bold"
          >
            I nostri riferimenti
          </p>
        </div>
      </div>
    </v-sheet>
  </v-container>

  <v-spacer />

  <v-card variant="outlined" color="white" class="mt-3">
    <v-tabs v-model="tab" grow>
      <div
        class="d-flex align-center justify-center text-black"
        style="width: 100%"
      >
        <v-tab
          v-for="info in infos"
          :key="info.id"
          :value="info.title"
          color="light-blue"
        >
          <div class="d-flex flex-column align-center">
            <v-icon :icon="info.icon"></v-icon>
            <v-spacer></v-spacer>
            <span class="text-caption font-weight-bold">{{ info.title }}</span>
          </div>
        </v-tab>
      </div>
    </v-tabs>

    <v-container class="d-flex justify-center">
      <v-card
        width="100%"
        height="400"
        class="d-flex align-center justify-space-evenly"
        color="black"
      >
        <v-img
          height="800"
          lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/backgroundDesign.webp?alt=media&token=522d525c-43d4-4f8c-9095-b8dd38142210"
          src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/backgroundDesign.webp?alt=media&token=522d525c-43d4-4f8c-9095-b8dd38142210"
          cover
        >
          <v-window v-model="tab">
            <v-window-item
              v-for="info in infos"
              :key="info.id"
              :value="info.title"
            >
              <span v-if="info.id === 0">
                <ContactInfo />
              </span>

              <span v-if="info.id === 1">
                <ContactMaps />
              </span>
            </v-window-item>
          </v-window>
        </v-img>
      </v-card>
    </v-container>
  </v-card>

  <v-spacer></v-spacer>

  <v-container>
    <GoogleCalendar />
  </v-container>

  <Bottom />
</template>

<script setup>
import GoogleCalendar from "@/components/GoogleCalendar.vue";
import ContactMaps from "@/components/ContactMaps.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
</script>
