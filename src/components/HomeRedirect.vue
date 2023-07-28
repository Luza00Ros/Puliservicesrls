<script>
export default {

  data() {
    return {
      home: 'mdi-home',
      fullLogo: 'src/assets/puliservice.webp',
    }
  },

  created() {
    setTimeout(() => this.$router.push('/'), 5000);
  },

  methods: {
    routerPush(link) {
      return this.$router.push(link);
    },
  }

}
</script>

<template>
  <v-container>
    <v-img :width="300" aspect-ratio="16/9" cover :src="fullLogo" class="mb-5 mt-5"/>
    <h4>Modulo inviato correttamente</h4>
    <h6>Ti risponderemo nel pi&ugrave; breve tempo possibile</h6>
    <v-banner text="Stai per essere reindirizzato alla home page" lines="two" :stacked="true">
      <template v-slot:actions>
        <v-btn class="rounded-pill mt-2 text-light-blue" :prepend-icon="home" v-on:click="routerPush('/')"><span
            class="text-black">Home</span></v-btn>
      </template>
    </v-banner>
    <v-progress-linear indeterminate v-model="goHome" color="light-blue" :buffer-value="bufferValue">
    </v-progress-linear>
    <span v-on:load="goHome"></span>
  </v-container>
</template>
