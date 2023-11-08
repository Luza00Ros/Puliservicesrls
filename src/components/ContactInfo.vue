<script>
export default {
  name: "ContactInfo",

  data() {
    return {
      mapsLink:
        "https://www.google.com/maps/place/Puliservice+di+Rosati+Luciana+S.r.l.s/@40.6452666,15.795948,13z/data=!4m6!3m5!1s0x1338e3f913de7987:0x8cd71f33b2e9ab4e!8m2!3d40.6437119!4d15.7885202!16s%2Fg%2F11kpsn4z6d?entry=ttu",
      facebookLink: "https://www.facebook.com/impresadipulizieLucianaRosati/",
      contacts: [
        {
          id: 0,
          title: "Telefono",
          icon: "mdi-phone",
          value: "tel:+393484231742",
          text: "348 42 31 742",
          color: "light-blue-darken-4",
        },
        {
          id: 1,
          title: "Email",
          icon: "mdi-email-arrow-right",
          value: "mailto:adv.puliservicesrls@gmail.com",
          text: "adv.puliservicesrls@gmail.com",
          color: "light-blue-darken-4",
        },
        {
          id: 2,
          title: "Indirizzo",
          icon: "mdi-routes",
          value:
            "https://www.google.com/maps/place/Puliservice+di+Rosati+Luciana+S.r.l.s/@40.6452666,15.795948,13.83z/data=!4m6!3m5!1s0x1338e3f913de7987:0x8cd71f33b2e9ab4e!8m2!3d40.641837!4d15.802794!16s%2Fg%2F11kpsn4z6d?entry=tts&shorturl=1",
          text: "Piazzale Budapest 9, 85100, PZ",
          color: "light-blue-darken-4",
        },
      ],
    };
  },
  methods: {
    pushLink: function (param) {
      this.$router.push(param);
    },
  },
  components: {
    ContactForm,
  },
};
</script>

<template>
  <v-container
    fluid
    height="400"
    class="d-flex flex-column flex-wrap align-start bg-transparent"
  >
    <v-sheet class="bg-transparent">
      <div class="mb-2">
        <h6 class="text-light-blue-darken-4">Informazioni di contatto</h6>
      </div>
      <v-timeline side="end">
        <v-timeline-item
          fill-dot
          v-for="item in contacts"
          :key="item.id"
          :icon="item.icon"
          :dot-color="item.color"
          size="x-small"
        >
          <div class="font-weight-normal text-start">
            <strong>{{ item.title }}</strong>
          </div>
          <div>
            <a class="contact-link" target="_blank" :href="item.value">{{
              item.text
            }}</a>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-sheet>

    <v-sheet class="ma-1 mt-5 pa-1 bg-transparent">
      <div id="social" class="d-flex flex-row">
        <div class="mr-5 mt-3 mar">
          <v-btn
            size="x-small"
            icon="mdi-facebook"
            color="light-blue-darken-4"
            role="link"
            :href="facebookLink"
            target="_blank"
          ></v-btn>
        </div>
        <div class="mr-5 mt-3 mar">
          <v-btn
            size="x-small"
            icon="mdi-google-maps"
            color="light-blue-darken-4"
            role="link"
            :href="mapsLink"
            target="_blank"
          ></v-btn>
        </div>
        <div class="mr-5 mt-3 mar">
          <ContactForm />
        </div>
      </div>
    </v-sheet>
  </v-container>
</template>

<script setup>
import ContactForm from "./ContactForm.vue";
</script>
