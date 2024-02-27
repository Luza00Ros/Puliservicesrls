<script setup>
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import emailjs from "emailjs-com";
import firebase from "../plugins/firebase";
import { setDoc, doc } from "firebase/firestore";

const router = useRouter();
const checkbox = ref(false);
const documentId = ref("Request");
const name = ref("");
const email = ref("");
const phone = ref("");
const request = ref("");
const today = ref(new Date());
const serviceID = ref("service_aebs294");
const templateID = ref("preventivo");
const userID = ref("NeJd-ufoJ2ewLG9eJ");

const firstNameRules = reactive([
  (value) => (value || "").length <= 50 || "Max 50 caratteri",
  (value) =>
    !!value ||
    "Inerisci il tuo nome e cognome o la Ragione Sociale della tua azienda",
]);
const rules = reactive([
  (value) =>
    !!value ||
    "Inserisci un indirizzo mail valido al quale potrai essere ricontattato",
  (value) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value) || "E-mail non valida";
  },
]);
const charset = reactive([
  (value) => (value || "").length <= 250 || "Max 250 caratteri",
  (value) =>
    !!value || "Compila questo campo per richiedere un preventivo",
]);
const select = reactive({ state: "Potenza", abbr: "PZ" });
const items = reactive([
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
]);
const isCheck = reactive([(value) => !!value || "Questo campo è obligatorio"]);
const phoneRules = reactive([
  (value) =>
    (value?.length > 9 &&
      /^(?:(?:\+|00)39)?\s?[37]\d{2}[-\s]?\d{6,7}$/.test(value)) ||
    "Inserisci un numero di telefono valido",
]);
// Aggiunge la nuova richiesta al database
const addRequest = async () => {
  const database = firebase.db;

  const docData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    select: select.state,
    request: request.value,
    privacyPolicyAccepted: checkbox.value,
  };

  await setDoc(
    doc(database, documentId.value, formatDate(today.value)),
    docData);
  onRedirect(
    name.value,
    email.value,
    phone.value,
    request.value,
    checkbox.value,
  );
}

// Fomatta la data
const formatDate = (current_datetime) => {
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
}

// Notifica via email la nuova richiesta di preventivo (Emailjs)
const sendEmail = async () => {
  try {
    await emailjs.sendForm(
      serviceID.value,
      templateID.value,
      "form",
      userID.value,
      {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: request.value,
      },
    );
  } catch (error) {
    console.error("Errore durante l'invio dell'e-mail: ", error);
  }
}

// Convalido i dati prima di reindirizzare l'utente
const onRedirect = (name, email, phone, request, checkbox) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneCheck = /^(?:(?:\+|00)39)?\s?[37]\d{2}[-\s]?\d{6,7}$/;
  if (
    name != "" &&
    name.length < 50 &&
    email != "" &&
    regex.test(email) &&
    phone != "" &&
    phoneCheck.test(phone) &&
    request != "" &&
    checkbox != false
  ) {
    sendEmail();
    return router.push("redirect");
  }
}

</script>

<template>
  <TopNav />

  <v-container fluid class="d-flex justify-center header-align-center-reverse">
      <v-img min-width="300" max-width="800" max-height="500"
        lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fpreventive_illustration.svg?alt=media&token=15a85eea-344d-46b3-9747-b3cd8d5fbe5a"
        src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fpreventive_illustration.svg?alt=media&token=15a85eea-344d-46b3-9747-b3cd8d5fbe5a"></v-img>
      <div class="d-flex flex-column fill-height justify-center text-white">
        <div class="text-start mt-5 mb-3 mr-5 ml-5 text-light-blue">
          <h1 class="title-responsive">
            Richiedi subito il tuo preventivo gratuito
          </h1>
        </div>
        <div class="ma-5 text-start">
          <p class="subtitle-responsive font-weight-bold text-light-blue-darken-4">
            Compila i campi sottostanti indicando la tua richiesta. Saremo lieti
            di ricontattarti per offrirti la nostra migliore proposta
          </p>
        </div>
      </div>
  </v-container>

  <v-container>
    <div class="ml-3 mr-3 mt-3 mb-3">
      <v-form fast-fail @submit.prevent name="contact" method="POST" ref="form" class="mt-5 mb-5">
        <v-text-field :rules="firstNameRules" density="compact" variant="underlined" prepend-inner-icon="mdi-account"
          label="Nome o Azienda" color="light-blue" counter clearable aria-required="true" type="text" name="name"
          v-model="name" bg-color="transparent" class="mt-5 mb-5" autofocus>
        </v-text-field>

        <v-text-field :rules="rules" density="compact" prepend-inner-icon="mdi-email" label="E-mail" variant="underlined"
          color="light-blue" class="mt-5 mb-5" clearable type="email" name="email" v-model="email">
        </v-text-field>

        <v-text-field type="tel" label="Telefono" :rules="phoneRules" name="phone" class="mt-5 mb-5"
          prepend-inner-icon="mdi-cellphone" density="compact" variant="underlined" color="light-blue" v-model="phone"
          clearable>
        </v-text-field>

        <v-select prepend-inner-icon="mdi-map-marker" color="light-blue" v-model="select"
          :hint="`${select.state}, ${select.abbr}`" :items="items" item-title="state" item-value="abbr" label="Provincia"
          persistent-hint return-object single-line variant="underlined" class="mt-5 mb-5" type="text" name="city">
        </v-select>

        <v-textarea color="light-blue" variant="underlined" label="Inserisci qui la tua richiesta"
          prepend-inner-icon="mdi-text" :rules="charset" counter clearable class="mt-5 mb-5" type="text" name="request"
          v-model="request">
        </v-textarea>
        <v-checkbox v-model="checkbox" :rules="isCheck" color="light-blue">
          <template v-slot:label>
            <div>
              Acconsento al trattamento dei dati come specificato
              nell'informativa
              <v-tooltip location="bottom" class="mt-5 mb-5">
                <template v-slot:activator="{ props }">
                  <a class="text-decoration-none text-light-blue" target="_blank"
                    href="https://www.iubenda.com/privacy-policy/57879019" v-bind="props" @click.stop>
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
          <v-btn append-icon="mdi-arrow-right" type="submit" v-on:click="addRequest()" size="large" density="compact"
            name="invia" color="light-blue" rounded="xl" variant="outlined"
            class="mt-5 mb-5 font-weight-medium text-subtitle-1">Invia la richiesta</v-btn>
        </div>
      </v-form>
    </div>
  </v-container>

  <Bottom />
</template>
