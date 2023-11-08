<script>
export default {
  name: "TopNav",
  data() {
    return {
      drawer: false,
      arrowZero: false,
      arrowOne: false,
      calendarReference: "https://calendar.app.google/TnEMSnYqn94RzMvT6",
      pulizie: [
        {
          id: 0,
          title: "Uffici",
          route: "uffici",
          icon: "mdi-office-building",
        },
        {
          id: 1,
          title: "Condomini",
          route: "condomini",
          icon: "mdi-warehouse",
        },
        {
          id: 2,
          title: "Appartamenti",
          route: "appartamenti",
          icon: "mdi-greenhouse",
        },
        { id: 3, title: "Negozi", route: "negozi", icon: "mdi-store" },
      ],
      servizi: [
        {
          id: 0,
          title: "Giardinaggio",
          route: "giardinaggio",
          icon: "mdi-shovel",
        },
        {
          id: 1,
          title: "Manutenzione generale",
          route: "manutenzioni",
          icon: "mdi-account-hard-hat-outline",
        },
        {
          id: 2,
          title: "Facchinaggio",
          route: "traslochi",
          icon: "mdi-human-dolly",
        },
      ],
      menuClosed: "mdi-menu",
      menuOpen: "mdi-menu-open",
      badge: "mdi-calendar-badge",
      advice: "mdi-laptop-account",
      arrowDown: "mdi-chevron-double-down",
      arrowUp: "mdi-chevron-double-up",
      home: "mdi-home",
      chisiamo: "mdi-human-greeting",
      clean: "mdi-spray-bottle",
      service: "mdi-account-wrench",
      contacts: "mdi-human-greeting-proximity",
      watch: {
        group() {
          this.drawer = false;
        },
      },
    };
  },
  methods: {
    scrollUp: function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    routerPush(link) {
      return this.$router.push(link);
    },
    changeIcon() {
      if (this.drawer == true) {
        return this.menuOpen;
      }
      return this.menuClosed;
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
    },
  },
};
</script>

<template v-slot:header>
  <v-app-bar
    :absolute="false"
    :flat="true"
    color="white"
    class="d-flex justify-center align-center rounded-b-xl"
  >
    <v-img
      v-on:click="scrollUp"
      src="/src/assets/puliservice.webp"
      width="200"
      height="50"
      class="pa-1 ma-1"
      style="cursor: pointer"
      alt="Logo Puliservice srls"
    ></v-img>

    <v-app-bar-nav-icon
      :flat="true"
      color="light-blue"
      v-on:click.stop="drawer = !drawer"
      id="disable-mb"
      role="button"
      aria-label="Menù"
      :icon="changeIcon()"
      class="ml-5"
    ></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <div id="disable-dk" class="d-flex justify-start align-start">
      <v-btn
        class="rounded-pill mt-2 text-light-blue"
        :prepend-icon="home"
        v-on:click="routerPush('/')"
        ><span class="text-black">Home</span></v-btn
      >
      <v-btn
        class="rounded-pill mt-2 text-light-blue"
        :prepend-icon="chisiamo"
        v-on:click="routerPush('chisiamo')"
        ><span class="text-black">Chi siamo</span></v-btn
      >

      <div class="text-center">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn
              class="rounded-pill mt-2 text-light-blue"
              :prepend-icon="clean"
              :append-icon="arrowDown"
              v-bind="props"
            >
              <span class="text-black">Pulizie</span>
            </v-btn>
          </template>

          <v-list class="rounded-lg">
            <v-list-item v-for="pulizia in pulizie" :key="pulizia.id">
              <v-list-item-title
                ><v-btn
                  class="rounded-pill mt-2 text-light-blue"
                  :prepend-icon="pulizia.icon"
                  variant="text"
                  v-on:click="routerPush(pulizia.route)"
                >
                  <span class="text-black">{{ pulizia.title }}</span>
                </v-btn></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div class="text-center">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn
              class="rounded-pill mt-2 text-light-blue"
              :prepend-icon="service"
              :append-icon="arrowDown"
              v-bind="props"
            >
              <span class="text-black">Servizi</span>
            </v-btn>
          </template>

          <v-list class="rounded-lg">
            <v-list-item v-for="servizio in servizi" :key="servizio.id">
              <v-list-item-title
                ><v-btn
                  class="rounded-pill mt-2 text-light-blue"
                  :prepend-icon="servizio.icon"
                  variant="text"
                  v-on:click="routerPush(servizio.route)"
                  ><span class="text-black">{{ servizio.title }}</span></v-btn
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-btn
        class="rounded-pill mt-2 text-light-blue"
        :prepend-icon="contacts"
        v-on:click="routerPush('contatti')"
        ><span class="text-black">Contatti</span></v-btn
      >

      <v-btn
        class="rounded-pill mt-2 text-light-blue"
        :prepend-icon="badge"
        variant="flat"
        v-on:click="routerPush('preventivo')"
        id="disable-btn"
      >
        <span class="text-black">Richiedi un preventivo gratuito</span>
      </v-btn>
    </div>
  </v-app-bar>

  <v-navigation-drawer
    temporary
    v-model="drawer"
    location="right"
    v-on:click.stop="drawer = !drawer"
    class="rounded-s-xl mt-1 h-50 bg-white"
    aria-label="menu"
  >
    <span v-on:load="onTop"></span>

    <v-list nav aria-label="menu-item">
      <!-- background color -->
      <v-tabs direction="vertical">
        <div class="d-flex flex-column justify-start align-end">
          <v-btn
            class="rounded-pill mt-2 text-light-blue"
            :prepend-icon="home"
            variant="text"
            v-on:click="routerPush('/')"
            ><span class="text-black">Home</span></v-btn
          >

          <v-btn
            class="rounded-pill mt-2 text-light-blue"
            :prepend-icon="chisiamo"
            variant="text"
            v-on:click="routerPush('chisiamo')"
            ><span class="text-black">Chi siamo</span></v-btn
          >

          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn
                class="rounded-pill mt-2 text-light-blue"
                variant="text"
                :prepend-icon="clean"
                v-on:click="arrowZero = !arrowZero"
                :append-icon="changeArrowZero()"
                v-bind="props"
              >
                <span class="text-black">Pulizie</span>
              </v-btn>
            </template>

            <v-list class="rounded-lg bg-white">
              <v-list-item v-for="pulizia in pulizie" :key="pulizia.id">
                <v-list-item-title class="d-flex flex-column">
                  <v-btn
                    class="rounded-pill mt-2 text-light-blue"
                    :prepend-icon="pulizia.icon"
                    variant="text"
                    stacked
                    v-on:click="routerPush(pulizia.route)"
                  >
                    <span class="text-black">{{ pulizia.title }}</span>
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn
                class="rounded-pill mt-2 text-light-blue"
                variant="text"
                :prepend-icon="service"
                v-on:click="arrowOne = !arrowOne"
                :append-icon="changeArrowOne()"
                v-bind="props"
              >
                <span class="text-black">Servizi</span>
              </v-btn>
            </template>

            <v-list class="rounded-lg bg-white">
              <v-list-item v-for="servizio in servizi" :key="servizio.id">
                <v-list-item-title class="d-flex flex-column">
                  <v-btn
                    class="rounded-pill mt-2 text-light-blue"
                    :prepend-icon="servizio.icon"
                    variant="text"
                    stacked
                    v-on:click="routerPush(servizio.route)"
                  >
                    <span class="text-black">{{ servizio.title }}</span>
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            class="rounded-pill mt-2 mb-5 text-light-blue"
            variant="text"
            :prepend-icon="contacts"
            v-on:click="routerPush('contatti')"
            ><span class="text-black">Contatti</span></v-btn
          >

          <hr style="padding-right: 100%" />

          <v-btn
            class="rounded-pill mt-5 text-light-blue"
            :prepend-icon="badge"
            variant="text"
            v-on:click="routerPush('preventivo')"
          >
            <span class="text-black">Preventivo gratuito</span>
          </v-btn>

          <v-btn
            class="rounded-pill mt-2 text-light-blue"
            :prepend-icon="advice"
            variant="text"
            role="link"
            :href="calendarReference"
            target="_blank"
          >
            <span class="text-black">Consulenza gratuita</span>
          </v-btn>
        </div>
      </v-tabs>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const onTop = setTimeout(() => {
  window.scrollTo(-100, -100);
}, 0);
</script>
