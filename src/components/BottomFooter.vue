<script>
export default {
  name: "BottomFooter",
  data() {
    return {
      data: false,
      legals: [
        {
          id: 0,
          title: "Privacy Policy",
          link: "https://www.iubenda.com/privacy-policy/57879019",
        },
        {
          id: 1,
          title: "Cookie Policy",
          link: "https://www.iubenda.com/privacy-policy/57879019/cookie-policy",
        },
        { id: 2, title: "Credits", link: "https://github.com/Dino-996" },
      ],
      contacts: [
        {
          id: 0,
          ref: "tel:+393484231742",
          value: "348 42 31 742",
          img: "mdi-cellphone",
        },
        {
          id: 1,
          ref: "mailto:adv.puliservicesrls@gmail.com",
          value: "adv.puliservicesrls@gmail.com",
          img: "mdi-email-outline",
        },
        {
          id: 2,
          ref: "https://goo.gl/maps/DD7JXHidro1wLhvz7",
          value: "Piazzale Budapest 9, 85100, PZ",
          img: "mdi-routes",
        },
      ],
      faqs: [
        {
          id: 0,
          request: "Da quanto tempo operate nel settore delle pulizie?",
          answer: "Offriamo servizi di pulizie professionali da più di 20 anni",
        },
        {
          id: 1,
          request:
            "Se stipulo un contratto per il servizio di pulizia i detergenti e le attrezzature li fornite voi?",
          answer:
            "Sì, la nostra impresa di pulizie fornisce prodotti di pulizie professionali e le attrezzature necessarie",
        },

        {
          id: 2,
          request:
            "Se stipulo un contratto annuale per il servizio di pulizia durante i mesi estivi quando l'azienda è chiusa venite lo stesso a pulire i locali? ",
          answer:
            "Se il contratto stipulato non prevede le pulizie nel periodo estivo il servizio sarà sospeso, in caso contrario la pulizia sarà effettuata regolarmente",
        },
        {
          id: 3,
          request: "Prevedete una durata minima contrattuale?",
          answer:
            "No, concordiamo con te la durata del contratto secondo le tue necessità",
        },

        {
          id: 4,
          request: "Offrite servizi di pronto intervento?",
          answer: "Si, puoi contattarci al numero 348 42 31 742",
        },

        {
          id: 5,
          request: "Offrite preventivi gratuiti?",
          answer:
            "Si, certamente, pui richiedere il tuo preventivo gratuito nella sezione 'contatti'",
        },

        {
          id: 6,
          request: "Dove offrite i vostri servizi di pulizia?",
          answer:
            "Principalmente lavoriamo su Potenza, ma svolgiamo anche lavori part-time nei dintorni di Potenza. Contattaci subito per un preventivo gratuito e senza impegno!",
        },
        {
          id: 7,
          request: "Quali metodi di pagamento accettate?",
          answer: "Accettiamo pagamenti tramite bonifico bancario",
        },
      ],
    };
  },
  methods: {
    routerPush: function (param) {
      this.$router.push(param);
    },
  },
};
</script>

<template>
  <v-container
    id="responsive-aligment"
    fluid
    class="d-flex flex-row flex-wrap align-start justify-space-evenly bg-light-blue-darken-4"
  >
    <v-sheet class="ma-2 pa-2 bg-light-blue-darken-4">
      <v-img
        src="../assets/puliservice_logo.svg"
        width="65"
        height="65"
      ></v-img>
    </v-sheet>

    <v-sheet class="ma-2 pa-2 bg-light-blue-darken-4">
      <div class="font-weight-bold text-light-blue">Contatti</div>
      <div
        class="d-flex align-center"
        v-for="contact in contacts"
        :key="contact.id"
      >
        <v-icon :icon="contact.img" size="x-small"></v-icon>
        <a id="link" :href="contact.ref" class="ml-1">{{ contact.value }}</a>
      </div>
    </v-sheet>

    <v-sheet class="ma-2 pa-2 bg-light-blue-darken-4">
      <div class="font-weight-bold text-light-blue">Informativa Privacy</div>
      <div v-for="legal in legals" :key="legal.id">
        <a id="link" target="_blank" :href="legal.link">{{ legal.title }}</a>
      </div>
    </v-sheet>

    <v-sheet class="ma-2 pa-2 bg-light-blue-darken-4">
      <div class="d-flex flex-column align-center">
        <div class="d-flex flex-row">
          <v-btn
            icon="mdi-facebook"
            color="light-blue"
            size="small"
            role="link"
            href="https://www.facebook.com/impresadipulizieLucianaRosati/"
            target="_blank"
            class="ma-2 pa-2"
          ></v-btn>
          <v-btn
            icon="mdi-google-maps"
            color="light-blue"
            size="small"
            role="link"
            href="https://goo.gl/maps/DD7JXHidro1wLhvz7"
            target="_blank"
            class="ma-2 pa-2"
          ></v-btn>
        </div>
      </div>

      <div>
        <v-btn
          rounded="xl"
          variant="outlined"
          color="white"
          prepend-icon="mdi-human-greeting-proximity"
          size="small"
          v-on:click="routerPush('contatti')"
          >Scopri di pi&ugrave;</v-btn
        >
      </div>
    </v-sheet>

    <v-sheet class="ma-2 pa-2 bg-light-blue-darken-4">
      <div class="font-weight-bold text-light-blue">Domande frequenti</div>

      <div>
        <v-expansion-panels variant="accordion">
          <v-expansion-panel
            color="light-blue"
            v-for="faq in faqs"
            :key="faq.id"
            :title="faq.request"
            :text="faq.answer"
          >
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-sheet>
  </v-container>

  <div class="px-4 py-2 bg-light-blue text-center w-100">
    &copy; {{ new Date().getFullYear() }}
    <strong>Puliservice Srls di Luciana Rosati</strong> | Sede legale: Piazzale
    Budapest 9, 85100, PZ | P.IVA: 02082240769 | URI: PZ | REA: 205849
  </div>
</template>
