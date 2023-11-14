<script>
export default {
  name: "PageNotFound",
  data() {
    return {
      backgroundImage:
        "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/pageNotFound_Background.webp?alt=media&token=b965aa58-1329-44b0-89d0-2868e553af47",
      logo: "/src/assets/puliservice_logo.svg",
    };
  },
  methods: {
    goHome: function () {
      return this.$router.push("/");
    },
  },
  components: {
    TopNav,
    Bottom,
  },
};
</script>

<template>
  <TopNav />
  <v-container fluid>
    <v-parallax :src="backgroundImage" height="100%" width="100%" scale="5">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white"
      >
        <div class="text-h3 font-weight-thin mb-4 text-center">
          Oops, questa pagina non è stata trovata!
        </div>

        <v-btn
          v-on:click="goHome()"
          role="link"
          rounded="xl"
          color="white"
          variant="tonal"
          class="mr-5 pa-5 d-flex text-center align-center"
        >
          <span style="padding-left: 5px"><b>Torna alla Home</b></span>
        </v-btn>
      </div>
    </v-parallax>
  </v-container>
  <Bottom />
</template>

<script setup>
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter";
</script>
