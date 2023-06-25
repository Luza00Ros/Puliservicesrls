<script>
export default {
    data() {
        return {
            slides: [
                { id: 0, name: 'Vileda Professional', img: "/src/assets/vileda.webp", link: 'https://www.vileda-professional.it/' },
                { id: 1, name: 'Marbec', img: "/src/assets/marbec.webp", link: 'https://www.marbec.it/' },
                { id: 2, name: 'Sutter Professional', img: "/src/assets/sutter.webp", link: 'https://www.sutterprofessional.it/' },
            ],
            services: [
                { id: 0, type: 'Servizi', title: 'pulizie di condomini', description: 'Esplora i servizi offerti su Potenza e provincia dalla nostra ditta di pulizie.', location: '/pulizieTraslochi', img: "/src/assets/pulizieCondomini.webp" },
                { id: 1, type: 'Servizi', title: 'pulizie di uffici', description: 'Trova i servizi offerti dalla nostra ditta di pulizie a Potenza e provincia.', location: '/pulizieUffici', img: "/src/assets/pulizieUffici.webp" },
                { id: 2, type: 'Servizi', title: 'pulizie professionali', description: 'Qui tutti i servizi di pulizie professionali a Potenza e provincia.', location: '/pulizieProfessionali', img: "/src/assets/pulizieProfessionali.jpg" },
            ],
            overviews: [
                { id: 0, title: 'PULIZIE DI APPARTAMENTI', img: 'mdi-home', text: "Il nostro servizio di pulizie di appartamenti è progettato per offrire un'esperienza di pulizia completa e di alta qualità per garantire un ambiente pulito e confortevole nella tua casa. Che tu sia un proprietario di un appartamento che desidera preparare lo spazio per i nuovi inquilini o un inquilino che cerca di mantenere l'appartamento pulito e ordinato, siamo qui per aiutarti." },
                { id: 1, title: 'PULIZIE DI UFFICI', img: 'mdi-office-building', text: "Il nostro servizio di pulizie per uffici è stato appositamente progettato per fornire un ambiente pulito, igienico e professionale nel tuo spazio lavorativo. Comprendiamo l'importanza di un ufficio ordinato e pulito non solo per l'immagine aziendale, ma anche per la produttività e il benessere dei dipendenti. La nostra squadra di esperti è pronta ad offrirti una gamma completa di servizi di pulizia personalizzati per soddisfare le tue esigenze specifiche." },
                { id: 2, title: 'PRODOTTI CERTIFICATI', img: 'mdi-certificate', text: "I nostri prodotti certificati sono progettati per offrire la massima qualità, sicurezza e conformità ai più alti standard del settore. Ci impegniamo ad usare solo prodotti che abbiano superato rigorosi controlli di qualità e che soddisfino le normative e le certificazioni applicabili." },
                { id: 3, title: 'TRASLOCHI ACCURATI', img: 'mdi-truck', text: "Il nostro servizio di traslochi è progettato per offrire un'esperienza senza stress e affidabile durante il processo di spostamento della tua residenza o azienda. Siamo qui per rendere il tuo trasloco il più agevole possibile, fornendo un supporto completo e professionale per soddisfare le tue esigenze specifiche." },
                { id: 4, title: 'PERSONALE QUALIFICATO', img: 'mdi-hand-okay', text: "Il nostro personale qualificato è il cuore della nostra impresa e rappresenta la nostra forza trainante per fornire un servizio eccellente ai nostri clienti. Abbiamo una rigorosa politica di selezione e formazione per garantire che il nostro team sia altamente competente, affidabile e professionale. " },
                { id: 5, title: 'CALENDARIO DEDICATO', img: 'mdi-calendar-account', text: "Il nostro servizio di gestione delle prenotazioni in calendario è progettato per semplificare e ottimizzare il processo di programmazione e pianificazione delle attività. Sia che tu sia un professionista autonomo, un'azienda o un'organizzazione, offriamo un sistema completo e user-friendly per gestire le tue prenotazioni in modo efficiente." }
            ],
        }
    },
    methods: {
        routerPush(link) {
            return this.$router.push(link);
        },
    }
}
</script>

<template>
    <!-- PARALLAX -->

    <v-parallax src="/src/assets/cleaning.webp" alt="Immagine in background">
        <div class="d-flex flex-column fill-height justify-center text-center align-center text-white">
            <div class=" text-h2 text-center font-weight-bold mb-3" id="title-responsive2"
                style="padding-left: 15%; padding-right: 15%;">
                Impresa di pulizia a Potenza e provincia
            </div>
            <div class="font-weight-thin ma-3 text-center text-h3" id="subtitle-responsive2"
                style="padding-left: 15%; padding-right: 15%;">
                Specialisti in pulizie di condomini, uffici pubblici e privati a Potenza e in tutta la provincia
            </div>
            <v-btn prepend-icon="mdi-calendar-badge" rounded="xl" color="white" variant="tonal" v-on:click="this.$router.push('/preventivo')"
                class="d-flex text-center align-center mb-5" size="large">
                <b>Preventivo gratuito</b>
            </v-btn>
        </div>
    </v-parallax>

    <!-- CAROUSEL -->

    <v-carousel cycle height="100" hide-delimiters :show-arrows="false">
        <v-carousel-item v-for="slide in slides" :key="slide.id" cover>
            <v-sheet color="light-blue" height="100%">
                <div class="d-flex fill-height justify-center d-flex text-center align-center">
                    <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link" class="h-50"> <v-img :src='slide.img' alt="Marchi da noi utilizzati"/></a>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>

    <!--STORYTELLING-->

    <v-container class="mt-5">
        <v-row class="d-flex justify-center align-center ml-1 flex-wrap">

            <v-col class="text-start" cols="auto" md="8" sm="12">
                <p class="text-light-blue">20 anni di esperienza nel settore</p>
                <div class="text-h1" id="title-responsive1">La nostra storia</div>
                <p style="font-size: 20px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel assumenda sunt, inventore laudantium
                    accusamus
                    natus.</p>
                <br>
                <p style="font-size: 20px;">
                    Veritatis, accusamus, omnis dolorum ipsum reprehenderit maxime accusantium perspiciatis,
                    dignissimos
                    earum voluptas sapiente assumenda distinctio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita facere vitae repellendus, minima
                    rerum ea optio iste laborum iusto consectetur exercitationem voluptas incidunt libero iure, ullam
                    corporis totam quis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
                <p style="font-size: 20px;">
                    <br>
                    Error corporis voluptatum ipsam, minima ad sint officia nesciunt a eligendi reiciendis facilis ex
                    voluptas ducimus maxime dolor dolores accusamus cupiditate est!
                </p>
            </v-col>

            <v-col class="d-flex justify-center" cols="auto" md="4" sm="12">
                <v-img src="/src/assets/puliservice_logo.svg" height="100%"></v-img>
            </v-col>

        </v-row>
    </v-container>

    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <!-- OVERVIEW -->

    <v-container class="mt-3">
        <p class="text-center text-light-blue">Professionalità, discrezione e personale altamente qualificato</p>
        <div class="text-center text-h1" id="title-responsive0">Specialisti della pulizia</div>
    </v-container>

    <div class="d-flex justify-space-evenly align-center flex-wrap">
        <v-row no-gutters>

            <v-col v-for="overview in overviews" :key="overview.id" style="margin-left: 100px; margin-right: 100px;">
                <v-card class="mx-auto mt-5 mb-5 text-h5" width="400" :prepend-icon="overview.img" variant="overline"
                    max-width="600" color="light-blue" style="padding-left: 4%; padding-right: 4%;">
                    <template v-slot:title>
                        {{ overview.title }}
                    </template>

                    <v-card-text>
                        <span style="color: black; font-size: 20px;">{{ overview.text }}</span>
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>
    </div>

    <v-divider></v-divider>

    <!-- CALL TO ACTION -->
    <v-parallax src="/src/assets/callToActionBg.webp">
        <div class="d-flex flex-column fill-height justify-center text-center align-center text-white">
            <div class=" text-h2 text-center font-weight-bold mb-3 mt-5" id="title-responsive2"
                style="padding-left: 15%; padding-right: 15%;">
                Richiedi subito il tuo preventivo gratuito e scopri i nostri servizi di qualit&agrave;!
            </div>
            <div class="ma-3 text-center" id="subtitle-responsive2"
                style="padding-left: 15%; padding-right: 15%; font-size: 20px;">
                Contattaci oggi stesso per richiedere il tuo preventivo personalizzato senza impegno. Il nostro team sarà lieto di valutare le tue esigenze specifiche e fornirti una stima accurata dei costi. Non perdere l'opportunità di usufruire dei nostri servizi di alta qualità a prezzi competitivi.
            </div>
                <v-btn prepend-icon="mdi-calendar-badge" rounded="xl" color="white" variant="tonal" v-on:click="this.$router.push('/preventivo')"
                class="d-flex text-center align-center mb-5 mt-5" size="large">
                <span><b>Preventivo gratuito</b></span>
            </v-btn>
        </div>
    </v-parallax>

    <v-spacer></v-spacer>
    <v-divider></v-divider>

    <!--SERVICES-->

    <v-container class="mt-3">
        <p class="text-center text-light-blue">Servizi professionali e personale altamente qualificato</p>
        <div class="text-center text-h1" id="title-responsive0">I nostri servizi</div>
    </v-container>

    <div class="d-flex justify-space-evently align-center flex-wrap">
        <v-card v-for="service in services" :key="service.id" class="mx-auto mt-5 mb-5" max-width="600" color="light-blue">
            <v-img :src="service.img" height="300px" width="600px" cover rounded="xl"></v-img>
            <v-card-item>
                <div>
                    <div class="text-overline mb-1">
                        <span style="font-size: 14px;"> {{ service.type }} </span>
                    </div>
                    <div class="font-weight-bold text-h6 mb-1">
                        <span class="text-h6"> {{ service.title.toUpperCase() }} </span>
                    </div>
                    <div class="text-caption font-weight-bold">
                        <span style="font-size: 14px;">{{ service.description }} </span>
                    </div>
                </div>
            </v-card-item>

            <v-card-actions>
                <v-btn append-icon="mdi-arrow-right-thin" v-on:click="$event => routerPush(service.location)" rounded="xl" color="white" variant="tonal"
                    class="mr-5 pa-2 align-center" size="large">
                    <span style="padding-left: 5px;"><b>Vai al servizio</b></span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
    
</template>

<style>
@media screen and (max-width: 966px) {
    #title-responsive0 {
        font-size: 3em !important;
        line-height: normal;
    }

    #title-responsive1 {
        font-size: 3em !important;
        line-height: normal;
    }

    #title-responsive2 {
        font-size: 3em !important;
        text-align: start !important;
    }

    #subtitle-responsive2 {
        font-size: 25px !important;
        text-align: start !important;
    }
}
</style>