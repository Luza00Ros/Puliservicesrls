<script>
export default {
    data() {
        return {
            model: 'Home',
            drawer: false,
            navItems: [
                { id: 0, title: 'Home', number: 'one', icon: 'mdi-home' },
                { id: 1, title: 'Chi siamo', number: 'two', icon: 'mdi-account-box' },
                { id: 2, title: 'Pulizie', number: 'three', icon: 'mdi-spray-bottle' },
                { id: 3, title: 'Giardinaggio', number: 'four', icon: 'mdi-shovel' },
                { id: 4, title: 'Servizi', number: 'five', icon: 'mdi-account-wrench' },
                { id: 5, title: 'Contatti', number: 'six', icon: 'mdi-account-box' },
            ],
            menuClosed: 'mdi-menu',
            menuOpen: 'mdi-menu-open',
            badge: 'mdi-calendar-badge',
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
    },
}
</script>

<template v-slot:header>
    <!-- APPBAR -->
    <v-app-bar :absolute='false' :flat='true' color='white' class='d-flex justify-center align-center rounded-b-xl'>

        <v-app-bar-nav-icon variant="text" :flat="true" color="light-blue" v-on:click.stop="drawer = !drawer"
            id="disable-mb" role="button" aria-label="Menù"></v-app-bar-nav-icon>

        <v-img v-on:click="scrollUp" src="/src/assets/puliservice.webp" width="200" height="50" class="pa-1 ma-1"
            style="cursor: pointer;" alt="Logo Puliservice srls"></v-img>

        <v-spacer></v-spacer>

        <v-tabs v-on:click='scrollUp' v-model='model' align-tabs='center' color='light-blue' id="disable-dk">

            <v-tab v-for="item in navItems" :id="item.id" :value='item.number' class='rounded-xl mt-2' density='compact'>
                {{ item.title }}
            </v-tab>

        </v-tabs>

        <v-btn style="color: rgb(74,193,246)" class='rounded-pill mt-2' size="large" density='compact' large
            :prepend-icon='badge' variant="fill" v-on:click="routerPush('preventivo')" role="link"
            id="disable-btn">
            <span style="color: black;">Richiedi un preventivo gratuito</span>
        </v-btn>

    </v-app-bar>

    <!-- V-NAVIGATION-DRAWER -->
    <v-navigation-drawer temporary v-model="drawer" location="left" v-on:click.stop="drawer = !drawer"
        class="rounded-e-xl mt-5 h-50">
        <v-list nav>
            <v-tabs v-model="model" direction="vertical" color="light-blue">
                <div>
                    <v-tab v-for="item in navItems" :key="item.id" class="d-flex flex-row rounded-xl" density="compact"
                        :prepend-icon="item.icon">
                        {{ item.title }}
                    </v-tab>
                </div>

                <v-divider></v-divider>

                <div class="mt-5">
                    [Che ci mettiamo qui?]
                </div>
            </v-tabs>
        </v-list>
    </v-navigation-drawer>

    <!-- ROUTING -->
    <v-window v-model='model'>

        <v-window-item value='one'>
            <HomePage />
        </v-window-item>

        <v-window-item value='two'>
            <ChiSiamo />
        </v-window-item>

        <v-window-item value='three'>
            <Pulizie />
        </v-window-item>

        <v-window-item value='four'>
            <Giardinaggio />
        </v-window-item>

        <v-window-item value='five'>
            <Servizi />
        </v-window-item>

        <v-window-item value='six'>
            <Contatti />
        </v-window-item>

    </v-window>
</template>

<script setup>
import HomePage from '@/components/HomePage.vue';
import ChiSiamo from '@/views/ChiSiamo.vue'
import Pulizie from '@/views/Pulizie.vue'
import Giardinaggio from '@/views/Giardinaggio.vue';
import Servizi from '@/views/Servizi.vue';
import Contatti from '@/views/Contatti.vue';
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