<script setup>
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const router = useRouter();
const drawer = ref(false);
const arrowZero = ref(false);
const arrowOne = ref(false);

const toggleArrowZero = () => {
  return arrowZero.value = !arrowZero.value;
}

const toggleArrowOne = () => {
  return arrowOne.value = !arrowOne.value;
}

const handleClickOutside = (e) => {
  if (!e.target.closest('.v-btn')) {
    arrowZero.value = false;
    arrowOne.value = false;
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
});

const changeIcon = () => {
  return drawer.value ? 'mdi-menu-open' : 'mdi-menu';
}

const contacts = reactive([
  {
    id: 0,
    title: "Telefono",
    icon: "mdi-cellphone",
    rel: "tel:+393484231742",
    text: "348 42 31 742",
  },
  {
    id: 1,
    title: "E-Mail",
    icon: "mdi-email",
    rel: "mailto:adv.puliservicesrls@gmail.com",
    text: "adv.puliservicesrls@gmail.com",
  },
  {
    id: 2,
    title: "Indirizzo",
    icon: "mdi-routes",
    rel: "https://www.google.com/maps/place/Puliservice+di+Rosati+Luciana+S.r.l.s/@40.6452666,15.795948,13.83z/data=!4m6!3m5!1s0x1338e3f913de7987:0x8cd71f33b2e9ab4e!8m2!3d40.641837!4d15.802794!16s%2Fg%2F11kpsn4z6d?entry=tts&shorturl=1",
    text: "Piazzale Budapest 9, 85100, PZ",
  },
]);

const pulizie = reactive([
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
]);

const servizi = reactive([
  {
    id: 0,
    title: "Giardinaggio",
    route: "giardinaggio",
    icon: "mdi-shovel",
  },
  {
    id: 1,
    title: "Manutenzione",
    route: "manutenzioni",
    icon: "mdi-account-hard-hat-outline",
  },
  {
    id: 2,
    title: "Facchinaggio",
    route: "traslochi",
    icon: "mdi-human-dolly",
  },
]);

const routerPush = (link) => {
  return router.push(link);
}

const onTop = setTimeout(() => {
  window.scrollTo(-100, -100);
}, 0);
</script>

<template>
  <v-app-bar color="white" class="rounded-b-xl" flat>

    <template v-slot:extension>
      <div class="d-flex flex-row align-center justify-center w-100">
        <v-btn v-for="contact in contacts" :key="contact.id" :prepend-icon="contact.icon" class="text-light-blue text-caption mr-2" density="compact" size="large"
          rounded="xl" variant="text" role="link" :href="contact.rel" target="_blank"><span
            class="text-black">{{ contact.title }}</span></v-btn>
      </div>
    </template>

    <template v-slot:append>
      <v-app-bar-nav-icon color="light-blue" @click.stop="drawer = !drawer" id="disable-mb" role="button"
        aria-label="Menù" :icon="changeIcon()" flat>
      </v-app-bar-nav-icon>
    </template>

    <v-img @click="routerPush('/')"
      src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/puliservice.webp?alt=media&token=04c81343-8274-465a-bc6c-674bf499c46a"
      lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/puliservice.webp?alt=media&token=04c81343-8274-465a-bc6c-674bf499c46a"
      max-width="200" height="100" class="ml-5 pa-1 ma-1" style="cursor: pointer !important;" alt="Logo Puliservice srls">
    </v-img>


    <v-spacer></v-spacer>

    <div id="disable-dk" class="d-flex justify-start align-start">
      <v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1" prepend-icon="mdi-home"
        @click="routerPush('/')"><span class="text-black">Home</span></v-btn>
      <v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1" prepend-icon="mdi-human-greeting"
        @click="routerPush('chisiamo')"><span class="text-black">Chi siamo</span></v-btn>

      <div class="text-center">
        <v-menu open-on-click>
          <template v-slot:activator="{ props }">
            <v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1" prepend-icon="mdi-spray-bottle"
              @click="toggleArrowZero" :append-icon="arrowZero ? 'mdi-chevron-double-up' : 'mdi-chevron-double-down'"
              v-bind="props">
              <span class="text-black">Pulizie</span>
            </v-btn>
          </template>

          <v-list class="rounded-lg">
            <v-list-item v-for="pulizia in pulizie" :key="pulizia.id">
              <v-list-item-title><v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1"
                  :prepend-icon="pulizia.icon" variant="text" @click="routerPush(pulizia.route)">
                  <span class="text-black">{{ pulizia.title }}</span>
                </v-btn></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div class="text-center">
        <v-menu open-on-click>
          <template v-slot:activator="{ props }">
            <v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1" prepend-icon="mdi-account-wrench"
              @click="toggleArrowOne" :append-icon="arrowOne ? 'mdi-chevron-double-up' : 'mdi-chevron-double-down'"
              v-bind="props">
              <span class="text-black">Servizi</span>
            </v-btn>
          </template>

          <v-list class="rounded-lg">
            <v-list-item v-for="servizio in servizi" :key="servizio.id">
              <v-list-item-title><v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1"
                  :prepend-icon="servizio.icon" variant="text" @:click="routerPush(servizio.route)"><span
                    class="text-black">{{ servizio.title
                    }}</span></v-btn></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1" prepend-icon="mdi-human-greeting-proximity"
        @click="routerPush('contatti')"><span class="text-black">Contatti</span></v-btn>

      <v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1" prepend-icon="mdi-calendar-badge" variant="flat"
        @click="routerPush('preventivo')" id="disable-btn">
        <span class="text-black">Richiedi un preventivo gratuito</span>
      </v-btn>
    </div>
  </v-app-bar>

  <v-navigation-drawer temporary v-model="drawer" location="right" @click.stop="drawer = !drawer"
    class="rounded-s-xl mt-1 h-75 w-auto bg-white" aria-label="menu">
    <span @load="onTop"></span>

    <v-list nav aria-label="menu-item">
      <v-tabs direction="vertical">
        <div class="d-flex flex-column justify-start align-end">
          <v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1" size="large" density="compact"
            prepend-icon="mdi-home" variant="text" @click="routerPush('/')"><span class="text-black">Home</span></v-btn>

          <v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1" size="large" density="compact"
            prepend-icon="mdi-human-greeting" variant="text" @click="routerPush('chisiamo')"><span class="text-black">Chi
              siamo</span></v-btn>

          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1" size="large" density="compact"
                variant="text" prepend-icon="mdi-spray-bottle" @click="toggleArrowZero"
                :append-icon="arrowZero ? 'mdi-chevron-double-up' : 'mdi-chevron-double-down'" v-bind="props">
                <span class="text-black">Pulizie</span>
              </v-btn>
            </template>

            <v-list class="rounded-lg bg-white">
              <v-list-item v-for="pulizia in pulizie" :key="pulizia.id">
                <v-list-item-title class="d-flex flex-column">
                  <v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1" size="large" density="compact"
                    :prepend-icon="pulizia.icon" variant="text" stacked @click="routerPush(pulizia.route)">
                    <span class="text-black">{{ pulizia.title }}</span>
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1" size="large" density="compact"
                variant="text" prepend-icon="mdi-account-wrench" @click.stop="toggleArrowOne"
                :append-icon="arrowOne ? 'mdi-chevron-double-up' : 'mdi-chevron-double-down'" v-bind="props">
                <span class="text-black">Servizi</span>
              </v-btn>
            </template>

            <v-list class="rounded-lg bg-white">
              <v-list-item v-for="servizio in servizi" :key="servizio.id">
                <v-list-item-title class="d-flex flex-column">
                  <v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1" size="large" density="compact"
                    :prepend-icon="servizio.icon" variant="text" stacked @click="routerPush(servizio.route)">
                    <span class="text-black">{{ servizio.title }}</span>
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn class="rounded-pill mt-2 mb-5 text-light-blue text-subtitle-1" size="large" density="compact"
            variant="text" prepend-icon="mdi-human-greeting-proximity" @click="routerPush('contatti')"><span
              class="text-black">Contatti</span></v-btn>

          <hr style="padding-right: 100%; border-color: #29B6F6;" />

          <v-btn class="rounded-pill mt-5 text-light-blue text-subtitle-1" size="large" density="compact"
            prepend-icon="mdi-calendar-badge" variant="text" @click="routerPush('preventivo')">
            <span class="text-black">Preventivo</span>
          </v-btn>

          <v-btn class="rounded-pill mt-2 text-light-blue text-subtitle-1" size="large" density="compact"
            prepend-icon="mdi-laptop-account" variant="text" role="link"
            href="https://calendar.app.google/TnEMSnYqn94RzMvT6" target="_blank">
            <span class="text-black">Consulenza</span>
          </v-btn>
        </div>
      </v-tabs>
    </v-list>
</v-navigation-drawer></template>
