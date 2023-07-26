<script>
export default {
  data() {
    return {
      drawer: false,
      arrowZero: false,
      arrowOne: false,
      pulizie: [
        { id: 0, title: 'Uffici', route: 'uffici', icon: 'mdi-office-building' },
        { id: 1, title: 'Condomini', route: 'condomini', icon: 'mdi-warehouse' },
        { id: 2, title: 'Appartamenti', route: 'appartamenti', icon: 'mdi-greenhouse' },
        { id: 3, title: 'Negozi', route: 'negozi', icon: 'mdi-store' },
      ],
      servizi: [
        { id: 0, title: 'Giardinaggio', route: 'giardinaggio', icon: 'mdi-shovel' },
        { id: 1, title: 'Piccole manutenzioni', route: 'manutenzioni', icon: 'mdi-account-hard-hat-outline' },
        { id: 2, title: 'Piccoli traslochi', route: 'traslochi', icon: 'mdi-human-dolly' },
      ],
      menuClosed: 'mdi-menu',
      menuOpen: 'mdi-menu-open',
      badge: 'mdi-calendar-badge',
      arrowDown: 'mdi-chevron-double-down',
      arrowUp: 'mdi-chevron-double-up',
      home: 'mdi-home',
      chisiamo: 'mdi-account-hard-hat-outline',
      clean: 'mdi-spray-bottle',
      service: 'mdi-account-wrench',
      contacts: 'mdi-human-greeting-proximity',
      watch: {
        group() {
          this.drawer = false;
        }
      }
    }
  },
  methods: {
    scrollUp: function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
    routerPush(link) {
      return this.$router.push(link);
    },
    changeIcon() {
      if (this.drawer == true) {
        return this.menuOpen
      }
      return this.menuClosed
    },
    changeArrowZero() {
      if (this.arrowZero == true) {
        return this.arrowUp;
      }
      return this.arrowDown;
    },
    changeArrowOne() {
      if (this.arrowOne == true) {
        return this.arrowUp;
      }
      return this.arrowDown;
    }
  },
}
</script>

<template v-slot:header>
  <!-- APPBAR -->
  <v-app-bar :absolute='false' :flat='true' color='white' class='d-flex justify-center align-center rounded-b-xl'>

    <v-app-bar-nav-icon :flat="true" color="light-blue" v-on:click.stop="drawer = !drawer" id="disable-mb" role="button"
      aria-label="Menù" :icon="changeIcon()"></v-app-bar-nav-icon>

    <v-img v-on:click="scrollUp" src="/src/assets/puliservice.webp" width="200" height="50" class="pa-1 ma-1"
      style="cursor: pointer;" alt="Logo Puliservice srls"></v-img>

    <v-spacer></v-spacer>

    <div id="disable-dk" class="d-flex justify-start align-start">
      <v-btn class="rounded-pill mt-2 text-light-blue" :prepend-icon="home" v-on:click="routerPush('/')"><span
          class="text-black">Home</span></v-btn>
      <v-btn class="rounded-pill mt-2 text-light-blue" :prepend-icon="chisiamo" v-on:click="routerPush('chisiamo')"><span
          class="text-black">Chi siamo</span></v-btn>

      <div class=" text-center">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn class="rounded-pill mt-2 text-light-blue" :prepend-icon="clean" :append-icon="arrowDown"
              v-bind="props">
              <span class="text-black">Pulizie</span>
            </v-btn>
          </template>

          <v-list class="rounded-lg">
            <v-list-item v-for="pulizia in pulizie" :key="pulizia.id">
              <v-list-item-title><v-btn class="rounded-pill mt-2 text-light-blue" :prepend-icon="pulizia.icon"
                  variant="text" v-on:click="routerPush(pulizia.route)">
                  <span class="text-black">{{ pulizia.title }}</span>
                </v-btn></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div class=" text-center">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn class="rounded-pill mt-2 text-light-blue" :prepend-icon="service" :append-icon="arrowDown"
              v-bind="props">
              <span class="text-black">Servizi</span>
            </v-btn>
          </template>

          <v-list class="rounded-lg">
            <v-list-item v-for="servizio in servizi" :key="servizio.id">
              <v-list-item-title><v-btn class="rounded-pill mt-2 text-light-blue" :prepend-icon="servizio.icon"
                  variant="text" v-on:click="routerPush(servizio.route)"><span class="text-black">{{ servizio.title
                  }}</span></v-btn></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-btn class="rounded-pill mt-2 text-light-blue" :prepend-icon="contacts" v-on:click="routerPush('contatti')"><span
          class="text-black">Contatti</span></v-btn>

      <v-btn class='rounded-pill mt-2 text-light-blue' :prepend-icon='badge' variant="flat"
        v-on:click="routerPush('preventivo')" id="disable-btn">
        <span class="text-black">Richiedi un preventivo gratuito</span>
      </v-btn>
    </div>

  </v-app-bar>

  <!-- V-NAVIGATION-DRAWER -->
  <v-navigation-drawer temporary v-model="drawer" location="left" v-on:click.stop="drawer = !drawer"
    class="rounded-e-xl mt-5 h-50">
    <v-list nav>
      <v-tabs direction="vertical" color="light-blue">

        <div class="d-flex flex-column justify-start align-start">

          <v-btn class="rounded-pill mt-2 text-light-blue" :prepend-icon="home" variant="text"
            v-on:click="routerPush('/')"><span class="text-black">Home</span></v-btn>
          <v-btn class="rounded-pill mt-2 text-light-blue" :prepend-icon="chisiamo" variant="text"
            v-on:click="routerPush('chisiamo')"><span class="text-black">Chi siamo</span></v-btn>

          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn class="rounded-pill mt-2 text-light-blue" variant="text" :prepend-icon="clean"
                v-on:click="arrowZero = !arrowZero" :append-icon="changeArrowZero()" v-bind="props">
                <span class="text-black">Pulizie</span>
              </v-btn>
            </template>

            <v-list class="rounded-lg">
              <v-list-item v-for="pulizia in pulizie" :key="pulizia.id">
                <v-list-item-title><v-btn class="rounded-pill mt-2 text-light-blue" :prepend-icon="pulizia.icon"
                    variant="text" v-on:click="routerPush(pulizia.route)"><span class="text-black">{{
                      pulizia.title
                    }}</span></v-btn></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn class="rounded-pill mt-2 text-light-blue" variant="text" :prepend-icon="service"
                v-on:click="arrowOne = !arrowOne" :append-icon="changeArrowOne()" v-bind="props">
                <span class="text-black">Servizi</span>
              </v-btn>
            </template>

            <v-list class="rounded-lg">
              <v-list-item v-for="servizio in servizi" :key="servizio.id">
                <v-list-item-title><v-btn class="rounded-pill mt-2 text-light-blue" :prepend-icon="servizio.icon"
                    variant="text" v-on:click="routerPush(servizio.route)"><span class="text-black">{{
                      servizio.title
                    }}</span></v-btn></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn class="rounded-pill mt-2 text-light-blue" variant="text" :prepend-icon="contacts"
            v-on:click="routerPush('contatti')"><span class="text-black">Contatti</span></v-btn>

          <v-btn class='rounded-pill mt-2 text-light-blue' :prepend-icon='badge' variant="flat"
            v-on:click="routerPush('preventivo')" >
            <span class="text-black">Preventivo gratuito</span>
          </v-btn>

        </div>

      </v-tabs>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
//
</script>

<style>
/* MEDIA-DESKTOP */
@media screen and (max-width: 966px) {
  #disable-dk {
    display: none !important;
  }
}

/* MEDIA-TABLET */
@media screen and (max-width: 1200px) {
  #disable-btn {
    display: none !important;
  }
}

/* MEDIA-SMARTPHONE */
@media screen and (min-width: 967px) {
  #disable-mb {
    display: none !important;
  }
}
</style>