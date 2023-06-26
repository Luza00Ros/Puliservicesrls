<script>
export default {
    data() {
        return {
            backIcon : 'mdi-arrow-left',
        }
    },
    methods: {
        isDesktop: function() {
            const screenSize = screen.width;
            if (screenSize > 966) {
                return true;
            }
        },

        goHome: function() {
            this.$router.push('/');
        },
        scrollUp: function () {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        },
    }
}
</script>

<template>
    <v-app-bar :absolute='false' :flat='true' color='white' class='d-flex justify-center align-center rounded-b-xl'>
        <span v-if="isDesktop()">
            <v-btn v-on:click="goHome" :prepend-icon="backIcon" rounded="xl" color="light-blue" variant="flat" class="text-center ml-2">Torna alla home</v-btn>
        </span>
        <span v-else>
            <v-btn v-on:click="goHome" :icon="backIcon" rounded="xl" color="light-blue" density="compact" variant="flat" class="text-center ml-2"></v-btn>
        </span>
        <v-img v-on:click="scrollUp" src="/src/assets/puliservice.webp" width="200" height="50" class="pa-1 ma-1" style="cursor: pointer;" alt="Logo Puliservice srls"></v-img>
    </v-app-bar>
</template>

<script setup>
//
</script>
