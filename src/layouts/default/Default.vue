<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  name: "Default",
  components: {
    DefaultView,
  },
};
</script>

<template>
  <v-app>
    <DefaultView />
  </v-app>
</template>

<script setup>
import DefaultView from "./View.vue";
</script>
