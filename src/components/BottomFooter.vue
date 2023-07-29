<script>
export default {
    data() {
        return {
            links: [
                { id: 0, title: 'Facebook', img: 'mdi-facebook', link: "https://www.facebook.com/impresadipulizieLucianaRosati/" },
                { id: 1, title: 'Google Maps', img: 'mdi-google-maps', link: "https://goo.gl/maps/DD7JXHidro1wLhvz7" },
            ],
            legals: [
                { id: 0, title: 'Privacy Policy', link: '' },
                { id: 1, title: 'Cookie Policy', link: '' },
                { id: 2, title: 'Credits', link: '' },
            ],
            contacts: [
                { id: 0, title: "Indirizzo", ref: "https://goo.gl/maps/DD7JXHidro1wLhvz7", value: "Piazzale Budapest 9, 85100, PZ", img: 'mdi-routes' },
                { id: 1, title: "Telefono", ref: "tel:09711778000", value: '0971 177 8000', img: 'mdi-phone' },
                { id: 2, title: "Cellulare", ref: "tel:+393484231742", value: '348 42 31 742', img: 'mdi-cellphone' },
                { id: 3, title: "Mail", ref: "mailto:adv.puliservicesrls@gmail.com", value: 'adv.puliservicesrls@gmail.com', img: 'mdi-email-outline' }
            ],
            faqs: [
                {id: 0, request: '', answer: ''},
                {id: 1, request: '', answer: ''},
                {id: 2, request: '', answer: ''},
                {id: 3, request: '', answer: ''},
            ]
        }
    }
}
</script>

<template>
    <v-footer class="bg-light-blue color-white text-center d-flex flex-column flex-wrap">

        <div>
            <v-btn v-for="link in links" :key="link.id" :prepend-icon="link.img" :href="link.link" variant="text"
                role="link" target="_blank" rounded="xl">{{ link.title }}</v-btn>
        </div>

        <div>
            <v-btn v-for="contact in contacts" :key="contact.id" :href="contact.ref" variant="text" role="link" :prepend-icon="contact.img" rounded="xl">{{ contact.value }}</v-btn>
        </div>

        <v-divider></v-divider>

        <div>
            <v-btn v-for="legal in legals" :key="legal.id" :prepend-icon="legal.img" :href="legal.link" variant="text"
                role="link" target="_blank" rounded="xl" color="white">
                {{ legal.title }}
            </v-btn>
        </div>

        <v-divider></v-divider>

        <div>
            {{ new Date().getFullYear() }} — <strong> Puliservice srls &copy;</strong>
        </div>

    </v-footer>
</template>
