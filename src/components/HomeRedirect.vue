<script>
export default {
  name: "HomeRedirect",
  data() {
    return {
      home: "mdi-home",
    };
  },

  created() {
    setTimeout(() => this.routerPush("/"), 5000);
  },

  methods: {
    routerPush(link) {
      return this.$router.push(link);
    },
  },

  components: {
    TopNav,
    BottomFooter,
  },
};
</script>

<template>
  <TopNav />

  <v-container class="bg-blue">
    <v-card class="position-relative">
      <v-img
        :width="300"
        aspect-ratio="16/9"
        cover
        src="../assets/puliservice.webp"
        class="mb-5 mt-5 ml-3"
      />
      <h4 class="ml-5">Modulo inviato correttamente</h4>
      <h6 class="ml-5">Ti risponderemo nel pi&ugrave; breve tempo possibile</h6>
      <v-banner
        class="ml-2"
        text="Stai per essere reindirizzato alla home page"
        lines="two"
        :stacked="true"
      >
        <template v-slot:actions>
          <v-btn
            class="rounded-pill mt-2 text-light-blue"
            :prepend-icon="home"
            v-on:click="routerPush('/')"
            ><span class="text-black">Home</span></v-btn
          >
        </template>
      </v-banner>
      <v-progress-linear
        indeterminate
        v-model="goHome"
        color="light-blue"
        :buffer-value="bufferValue"
      >
      </v-progress-linear>
      <span v-on:load="goHome"></span>
    </v-card>
  </v-container>

  <div class="position-relative">
    <BottomFooter />
  </div>
</template>

<script setup>
import TopNav from "./TopNav.vue";
import BottomFooter from "./BottomFooter.vue";
</script>
