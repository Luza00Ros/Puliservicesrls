<script>
import emailjs from "emailjs-com";
export default {
  name: "RichiestaPreventivo",
  data() {
    return {
      firstNameRules: [
        (value) => (value || "").length <= 50 || "Max 50 caratteri",
        (value) =>
          !!value ||
          "Inerisci il tuo nome e cognome o la Ragione Sociale della tua azienda",
      ],
      rules: [
        (value) =>
          !!value ||
          "Inserisci un indirizzo mail valido al quale potrai essere ricontattato",
        (value) => (value || "").length <= 50 || "Max 50 caratteri",
        (value) => {
          const regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regex.test(value) || "E-mail non valida";
        },
      ],
      charset: [
        (value) => (value || "").length <= 250 || "Max 250 caratteri",
        (value) =>
          !!value || "Compila questo campo per richiedere un preventivo",
      ],
      select: { state: "Potenza", abbr: "PZ" },
      items: [
        { id: 0, state: "Abriola", abbr: "PZ" },
        { id: 1, state: "Anzi", abbr: "PZ" },
        { id: 2, state: "Avigliano", abbr: "PZ" },
        { id: 3, state: "Baragiano", abbr: "PZ" },
        { id: 4, state: "Brienza", abbr: "PZ" },
        { id: 5, state: "Cancellara", abbr: "PZ" },
        { id: 6, state: "Castelluccio Inferiore", abbr: "PZ" },
        { id: 7, state: "Castelluccio Superiore", abbr: "PZ" },
        { id: 8, state: "Corleto Perticara", abbr: "PZ" },
        { id: 9, state: "Grumento Nova", abbr: "PZ" },
        { id: 10, state: "Maratea", abbr: "PZ" },
        { id: 11, state: "Marsico Nuovo", abbr: "PZ" },
        { id: 12, state: "Marsicovetere", abbr: "PZ" },
        { id: 13, state: "Moliterno", abbr: "PZ" },
        { id: 14, state: "Palazzo San Gervasio", abbr: "PZ" },
        { id: 15, state: "Paterno", abbr: "PZ" },
        { id: 16, state: "Picerno", abbr: "PZ" },
        { id: 17, state: "Pietragalla", abbr: "PZ" },
        { id: 18, state: "Pignola", abbr: "PZ" },
        { id: 19, state: "Potenza", abbr: "PZ" },
        { id: 20, state: "Ruoti", abbr: "PZ" },
        { id: 21, state: "Sant'Angelo le Fratte", abbr: "PZ" },
        { id: 22, state: "Sant'Arcangelo", abbr: "PZ" },
        { id: 23, state: "Sarconi", abbr: "PZ" },
        { id: 24, state: "Sasso di Castalda", abbr: "PZ" },
        { id: 25, state: "Striano di Lucania", abbr: "PZ" },
        { id: 26, state: "Senise", abbr: "PZ" },
        { id: 27, state: "Tito", abbr: "PZ" },
        { id: 28, state: "Tolve", abbr: "PZ" },
        { id: 29, state: "Tramutola", abbr: "PZ" },
        { id: 30, state: "Trecchina", abbr: "PZ" },
        { id: 31, state: "Trivigno", abbr: "PZ" },
        { id: 32, state: "Vaglio Basilicata", abbr: "PZ" },
        { id: 33, state: "Vietri di Potenza", abbr: "PZ" },
        { id: 34, state: "Viggianello", abbr: "PZ" },
        { id: 35, state: "Viggiano", abbr: "PZ" },
      ],
      checkbox: false,
      isCheck: [(value) => !!value || "Questo campo è obligatorio"],
      phoneRules: [
        (value) =>
          (value?.length > 9 && /[0-9-]+/.test(value)) ||
          "Inserisci un numero di telefono valido",
      ],
      documentId: "Request",
      name: "",
      email: "",
      city: "",
      phone: "",
      request: "",
      today: new Date(),
      serviceID: "service_ug7ho6h",
      templateID: "preventivo",
      userID: "NeJd-ufoJ2ewLG9eJ",
    };
  },
  methods: {
    // Aggiunge la nuova richiesta al database
    addRequest: async function () {
      const database = firebase.db;
      const docData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        select: this.select.state,
        request: this.request,
        privacyPolicyAccepted: this.checkbox,
      };
      await setDoc(
        doc(database, this.documentId, this.formatDate(this.today)),
        docData,
      );
      this.onRedirect(
        this.name,
        this.email,
        this.phone,
        this.request,
        this.checkbox,
      );
    },

    // Fomatta la data
    formatDate: function (current_datetime) {
      let formatted_date =
        current_datetime.getFullYear() +
        "-" +
        (current_datetime.getMonth() + 1) +
        "-" +
        current_datetime.getDate() +
        " " +
        current_datetime.getHours() +
        ":" +
        current_datetime.getMinutes() +
        ":" +
        current_datetime.getSeconds();
      return formatted_date;
    },

    // Convalido i dati prima di reindirizzare l'utente
    onRedirect: function (name, email, phone, request, checkbox) {
      if (
        name != "" &&
        email != "" &&
        phone != "" &&
        request != "" &&
        checkbox != false
      ) {
        this.sendEmail();
        return this.$router.push("redirect");
      }
    },

    // Notifica via email la nuova richiesta di preventivo (Emailjs)
    sendEmail() {
      emailjs.sendForm(this.serviceID, this.templateID, "form", this.userID, {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.request,
      });
    },
  },
  components: {
    TopNav,
    Bottom,
  },
};
</script>

<template>
  <TopNav />

  <v-container fluid class="d-flex justify-center header-align-center-reverse">
    <v-sheet>
      <v-img
        max-width="800"
        max-height="500"
        lazy-src="../assets/illustration/preventive_illustration.svg"
        src="../assets/illustration/preventive_illustration.svg"
      ></v-img>
    </v-sheet>
    <v-sheet>
      <div class="d-flex flex-column fill-height justify-center text-white">
        <div class="text-start mt-5 mb-3 mr-5 ml-5 text-light-blue">
          <h1 class="title-responsive">
            Richiedi subito il tuo preventivo gratuito
          </h1>
        </div>
        <div class="ma-5 text-start">
          <p
            class="subtitle-responsive font-weight-bold text-light-blue-darken-4"
          >
            Compila i campi sottostanti indicando la tua richiesta. Saremo lieti
            di ricontattarti per offrirti la nostra migliore proposta
          </p>
        </div>
      </div>
    </v-sheet>
  </v-container>

  <v-container>
    <div class="ml-3 mr-3 mt-3 mb-3">
      <v-form
        fast-fail
        @submit.prevent
        name="contact"
        method="POST"
        ref="form"
        class="mt-5 mb-5"
      >
        <v-text-field
          :rules="firstNameRules"
          density="compact"
          variant="underlined"
          prepend-inner-icon="mdi-account"
          label="Nome o Azienda"
          color="light-blue"
          counter
          clearable
          aria-required="true"
          type="text"
          name="name"
          v-model="name"
          bg-color="transparent"
          class="mt-5 mb-5"
          autofocus
        >
        </v-text-field>

        <v-text-field
          :rules="rules"
          density="compact"
          prepend-inner-icon="mdi-email"
          label="E-mail"
          variant="underlined"
          color="light-blue"
          class="mt-5 mb-5"
          clearable
          type="email"
          name="email"
          v-model="email"
        >
        </v-text-field>

        <v-text-field
          type="tel"
          label="Telefono"
          :rules="phoneRules"
          name="phone"
          class="mt-5 mb-5"
          prepend-inner-icon="mdi-cellphone"
          density="compact"
          variant="underlined"
          color="light-blue"
          v-model="phone"
          clearable
        >
        </v-text-field>

        <v-select
          prepend-inner-icon="mdi-map-marker"
          color="light-blue"
          v-model="select"
          :hint="`${select.state}, ${select.abbr}`"
          :items="items"
          item-title="state"
          item-value="abbr"
          label="Provincia"
          persistent-hint
          return-object
          single-line
          variant="underlined"
          class="mt-5 mb-5"
          type="text"
          name="city"
        >
        </v-select>

        <v-textarea
          color="light-blue"
          variant="underlined"
          label="Inserisci qui la tua richiesta"
          prepend-inner-icon="mdi-text"
          :rules="charset"
          counter
          clearable
          class="mt-5 mb-5"
          type="text"
          name="request"
          v-model="request"
        >
        </v-textarea>
        <v-checkbox v-model="checkbox" :rules="isCheck" color="light-blue">
          <template v-slot:label>
            <div>
              Acconsento al trattamento dei dati come specificato
              nell'informativa
              <v-tooltip location="bottom" class="mt-5 mb-5">
                <template v-slot:activator="{ props }">
                  <a
                    class="text-decoration-none text-light-blue"
                    target="_blank"
                    href="https://vuetifyjs.com"
                    v-bind="props"
                    @click.stop
                  >
                    Privacy Policy
                  </a>
                </template>
                Consulta l'informativa Privacy Policy
              </v-tooltip>
            </div>
          </template>
        </v-checkbox>

        <v-spacer></v-spacer>

        <div id="mobile-button-right">
          <v-btn
            type="submit"
            v-on:click="addRequest()"
            name="invia"
            color="light-blue"
            rounded="xl"
            variant="outlined"
            class="mt-5 mb-5 font-weight-medium"
            >Invia la richiesta</v-btn
          >
        </div>
      </v-form>
    </div>
  </v-container>

  <Bottom />
</template>

<script setup>
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
import firebase from "../plugins/firebase.js";
import { setDoc, doc } from "firebase/firestore";
//RICORDA DI INSERIRE RECAPTCHA V3
</script>
