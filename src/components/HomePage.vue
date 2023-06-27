<script>
export default {
    data() {
        return {
            slides: [
                { id: 0, name: 'Vileda Professional', link: 'https://www.vileda-professional.it/' },
                { id: 1, name: 'Marbec', link: 'https://www.marbec.it/' },
                { id: 2, name: 'Sutter Professional', link: 'https://www.sutterprofessional.it/' },
            ],
            overviews: [
                { id: 0, title: 'Pulizie di appartamenti', img: 'mdi-home', text: "Il nostro servizio di pulizie di appartamenti è progettato per offrire un'esperienza di pulizia completa e di alta qualità per garantire un ambiente pulito e confortevole nella tua casa. Che tu sia un proprietario di un appartamento che desidera preparare lo spazio per i nuovi inquilini o un inquilino che cerca di mantenere l'appartamento pulito e ordinato, siamo qui per aiutarti." },
                { id: 1, title: 'Pulizie di uffici', img: 'mdi-office-building', text: "Il nostro servizio di pulizie per uffici è stato appositamente progettato per fornire un ambiente pulito, igienico e professionale nel tuo spazio lavorativo. Comprendiamo l'importanza di un ufficio ordinato e pulito non solo per l'immagine aziendale, ma anche per la produttività e il benessere dei dipendenti. La nostra squadra di esperti è pronta ad offrirti una gamma completa di servizi di pulizia personalizzati per soddisfare le tue esigenze specifiche." },
                { id: 2, title: 'Prodotti certificati', img: 'mdi-certificate', text: "I nostri prodotti certificati sono progettati per offrire la massima qualità, sicurezza e conformità ai più alti standard del settore. Ci impegniamo ad usare solo prodotti che abbiano superato rigorosi controlli di qualità e che soddisfino le normative e le certificazioni applicabili." },
                { id: 3, title: 'Traslochi accurati', img: 'mdi-truck', text: "Il nostro servizio di traslochi è progettato per offrire un'esperienza senza stress e affidabile durante il processo di spostamento della tua residenza o azienda. Siamo qui per rendere il tuo trasloco il più agevole possibile, fornendo un supporto completo e professionale per soddisfare le tue esigenze specifiche." },
                { id: 4, title: 'Personale qualificato', img: 'mdi-hand-okay', text: "Il nostro personale qualificato è il cuore della nostra impresa e rappresenta la nostra forza trainante per fornire un servizio eccellente ai nostri clienti. Abbiamo una rigorosa politica di selezione e formazione per garantire che il nostro team sia altamente competente, affidabile e professionale. " },
                { id: 5, title: 'Calendario dedicato', img: 'mdi-calendar-account', text: "Il nostro servizio di gestione delle prenotazioni in calendario è progettato per semplificare e ottimizzare il processo di programmazione e pianificazione delle attività. Sia che tu sia un professionista autonomo, un'azienda o un'organizzazione, offriamo un sistema completo e user-friendly per gestire le tue prenotazioni in modo efficiente." }
            ],
            services: [
                { id: 0, type: 'Privati', title: 'Pulizie di condomini', description: 'Soluzione completa per mantenere gli spazi comuni dei condomini puliti, ordinati e accoglienti', page: '/pulizieTraslochi' },
                { id: 1, type: 'Uffici', title: 'Pulizie di uffici', description: 'Il nostro servizio di pulizie di uffici è progettato per mantenere i tuoi spazi di lavoro impeccabili, organizzati e piacevoli', page: '/pulizieUffici' },
                { id: 2, type: 'Aziende e negozi', title: 'Pulizie professionali', description: 'Con il nostro servizio di pulizia professionale per aziende e negozi, puoi contare su standard elevati e un attenzione impeccabile ai dettagli', page: '/pulizieProfessionali' },
                { id: 3, type: 'Privati', title: 'Traslochi', description: 'Il nostro servizio di traslochi offre soluzioni complete e affidabili per rendere il tuo trasferimento senza stress', page: '/traslochi' }
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
    <!-- INTRO -->

    <v-parallax src="/src/assets/cleaning.webp" height="600" alt="Immagine in background">
        <div class="d-flex flex-column fill-height justify-center text-white">
            <div class="text-center mt-5 mb-3 mr-5 ml-5">
                <h1 class="title-responsive">Impresa di pulizie a Potenza e provincia</h1>
            </div>
            <div class="ma-5 text-center">
                <p class="subtitle-responsive font-weight-bold">Specialisti in pulizie di condomini, uffici pubblici e
                    privati a Potenza e provincia</p>
            </div>
            <div class="mb-5 mt-5 ml-2 text-center button-responsive">
                <v-btn prepend-icon="mdi-calendar-badge" rounded="xl" color="white" variant="fill"
                    v-on:click="this.$router.push('/preventivo')" size="large">
                    <b>Preventivo gratuito</b>
                </v-btn>
            </div>
        </div>
    </v-parallax>

    <!-- CAROUSEL -->

    <v-carousel cycle height="100" hide-delimiters :show-arrows="false">
        <v-carousel-item v-for="slide in slides" :key="slide.id" cover>
            <v-sheet color="light-blue" height="100%">
                <div class="d-flex fill-height justify-center d-flex text-center align-center">
                    <template v-if="slide.id == 0">
                        <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link"
                            class="h-50"> <v-img src='/src/assets/vileda.webp' alt="Marchi da noi utilizzati" /></a>
                    </template>
                    <template v-if="slide.id == 1">
                        <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link"
                            class="h-50"> <v-img src='/src/assets/marbec.webp' alt="Marchi da noi utilizzati" /></a>
                    </template>
                    <template v-if="slide.id == 2">
                        <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link"
                            class="h-50"> <v-img src='/src/assets/sutter.webp' alt="Marchi da noi utilizzati" /></a>
                    </template>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>

    <!-- STORY -->

    <v-container class="mt-5">
        <v-row class="d-flex justify-center align-center flex-wrap">

            <v-col class="text-start" cols="auto" md="8" sm="12">
                <h1 class="title-responsive">Background</h1>
                <h2 class="subtitle-responsive text-light-blue">20 anni di esperienza nel settore</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel assumenda sunt, inventore laudantium
                    accusamus
                    natus.</p>
                <v-spacer></v-spacer>
                <p>
                    Veritatis, accusamus, omnis dolorum ipsum reprehenderit maxime accusantium perspiciatis,
                    dignissimos
                    earum voluptas sapiente assumenda distinctio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita facere vitae repellendus, minima
                    rerum ea optio iste laborum iusto consectetur exercitationem voluptas incidunt libero iure, ullam
                    corporis totam quis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
                <v-spacer></v-spacer>
                <p>
                    Error corporis voluptatum ipsam, minima ad sint officia nesciunt a eligendi reiciendis facilis ex
                    voluptas ducimus maxime dolor dolores accusamus cupiditate est!
                </p>
            </v-col>

            <v-col class="d-flex justify-center" cols="auto" md="4" sm="12">
                <v-img src="/src/assets/puliservice_logo.svg" width="100%" max-width="300px" aspect-ratio="16/9"
                    cover></v-img>
            </v-col>

        </v-row>
    </v-container>

    <v-spacer></v-spacer>

    <!-- OVERVIEW -->

    <v-container class="mt-3">
        <h1 class="text-start title-responsive">Specialisti della pulizia</h1>
        <h2 class="text-start text-light-blue subtitle-responsive">Professionalità, discrezione e personale altamente
            qualificato</h2>
    </v-container>

    <v-container>
        <v-row no-gutters>

            <v-col v-for="overview in overviews" :key="overview.id"
                class="mr-1 ml-1 d-flex justify-space-evenly align-center">
                <v-card class="mx-auto mt-5 mb-5 ml-5 mr-5 text-h5" width="400" :prepend-icon="overview.img"
                    variant="overline" min-width="400px" color="light-blue" id="icon-color">
                    <template v-slot:title>
                        <span class="light-blue-lighten-1"> {{ overview.title.toUpperCase() }} </span>
                    </template>

                    <v-card-text class="ml-5 mr-5">
                        <p class="text-black">{{ overview.text }}</p>
                    </v-card-text>

                </v-card>
            </v-col>

        </v-row>
    </v-container>

    <!-- CALL TO ACTION -->

    <v-parallax src="/src/assets/callToActionBg.webp" height="600" alt="Chiamata all'azione richiesta preventivo">
        <div class="d-flex flex-column fill-height justify-center text-white">
            <div class="text-center mt-5 mb-3 mr-5 ml-5">
                <h1 class="title-responsive text-light-blue-darken-4">Scopri i nostri servizi di qualit&agrave;</h1>
            </div>
            <div class="ma-3 ma-5 text-center">
                <p class="subtitle-responsive font-weight-bold text-light-blue-lighten-5">Il nostro team sarà
                    lieto di valutare le tue esigenze specifiche e fornirti una stima accurata dei costi.</p>
            </div>
            <div class="button-responsive mb-5 mt-5 ml-2 text-center">
                <v-btn prepend-icon="mdi-calendar-badge" rounded="xl" color="light-blue-darken-4" variant="fill"
                    v-on:click="this.$router.push('/preventivo')" size="large">
                    <b>Preventivo gratuito</b>
                </v-btn>
            </div>
        </div>
    </v-parallax>

    <v-spacer></v-spacer>

    <!--SERVICES-->

    <v-container class="mt-5">
        <h1 class="title-responsive text-start text-light-blue">I nostri servizi</h1>
        <h2 class="subtitle-responsive text-start">Servizi professionali e personale altamente qualificato</h2>
    </v-container>

    <v-container class="d-flex justify-space-evently align-center flex-wrap">
        <v-card class="mx-auto mt-5 mb-5" max-width="600" color="light-blue" v-for="service in services" :key="service.id">
            <span v-if="service.id == 0">
                <v-img src="/src/assets/pulizieCondomini.webp" height="300px" width="600px" cover rounded="xl"></v-img>
            </span>
            <span v-if="service.id == 1">
                <v-img src="/src/assets/pulizieUffici.webp" height="300px" width="600px" cover rounded="xl"></v-img>
            </span>
            <span v-if="service.id == 2">
                <v-img src="/src/assets/pulizieProfessionali.jpg" height="300px" width="600px" cover rounded="xl"></v-img>
            </span>
            <span v-if="service.id == 3">
                <v-img src="/src/assets/pulizieCondomini.webp" height="300px" width="600px" cover rounded="xl"></v-img>
            </span>

            <v-card-item>
                <h6 class="light-blue-lighten-5"> {{ service.type }} </h6>
                <h5 class="text-light-blue-darken-4"> {{ service.title }} </h5>
                <p class="light-blue-lighten-5"> {{ service.description }} </p>
            </v-card-item>

            <v-card-actions>
                <v-btn append-icon="mdi-arrow-right-thin" v-on:click="$event => routerPush(service.page)" rounded="xl"
                    color="light-blue-darken-4" variant="fill" class="pl-3">
                    <b>Vai al servizio</b>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>

    <v-spacer></v-spacer>

    <!-- VALUES -->

    <v-container class="mt-3">
        <h1 class="title-responsive">I nostri valori</h1>
        <h2 class="subtitle-responsive text-light-blue">Il fondamento del nostro lavoro</h2>
    </v-container>

    <v-container class="d-flex justify-center align-center flex-wrap">
        <p>
            <b>&#x2022; Qualità</b>: Siamo fermamente impegnati a offrire <span class="text-light-blue">servizi di pulizia
                di alta qualità</span>. Ci sforziamo di superare le aspettative dei nostri clienti, garantendo
            risultati impeccabili e prestazioni di livello superiore. La qualità è per noi un impegno costante e una
            priorità assoluta.
            <br><br>
            <b>&#x2022; Affidabilità</b>: La nostra reputazione si basa sulla <span class="text-light-blue">fiducia e
                sull'affidabilità</span>. Siamo sempre
            puntuali e
            rispettiamo gli impegni presi con i nostri clienti. La puntualità, la professionalità e la coerenza sono
            i pilastri su cui costruiamo rapporti di lunga durata con i nostri clienti.
            <br><br>
            <b>&#x2022; Etica</b>: Agiamo sempre in modo etico e responsabile. Siamo guidati dai principi dell'integrità,
            dell'onestà e della trasparenza in tutte le nostre interazioni e operazioni. Rispettiamo la privacy dei
            nostri clienti e <span class="text-light-blue">trattiamo le informazioni sensibili con la massima
                riservatezza</span>.
            <br><br>
            <b>&#x2022; Teamwork</b>: Il nostro successo dipende dalla forza del nostro team. Favoriamo un ambiente di
            lavoro
            collaborativo, in cui <span class="text-light-blue">ogni membro del team viene valorizzato</span> e incoraggiato
            a contribuire con le proprie
            competenze e prospettive. Siamo un'impresa che <span class="text-light-blue">crede nel valore delle
                persone</span> e nel potere del lavoro di
            squadra.
            <br><br>
            <b>&#x2022; Responsabilità sociale</b>: Siamo consapevoli del nostro ruolo nella società e dell'impatto che le
            nostre
            attività possono avere sull'ambiente e sulla comunità. Ci impegniamo a operare in modo sostenibile,
            utilizzando <span class="text-light-blue">prodotti eco-friendly</span> e adottando pratiche che riducano <span
                class="text-light-blue">l'impatto ambientale</span>. Sosteniamo
            anche iniziative e cause sociali che contribuiscono al benessere della comunità.
            <br><br>
            Siamo <b>orgogliosi dei nostri valori</b> e lavoriamo instancabilmente per mantenerli vivi in ogni aspetto del
            nostro lavoro.
        </p>
    </v-container>

    <v-spacer></v-spacer>

    <!-- WORKS PLAYER //DA IMPLEMENTARE -->

    <v-spacer></v-spacer>

    <!-- MISSION -->

    <v-container class="mt-3">
        <h1 class="title-responsive">La nostra mission</h1>
        <h2 class="subtitle-responsive text-light-blue">Servizi di pulizia professionale e di alta qualità</h2>
    </v-container>

    <v-container class="d-flex justify-center align-center flex-wrap mb-5">
        <p>
            Attraverso un <span class="text-light-blue">approccio orientato al cliente</span>, ci dedichiamo a comprendere
            le specifiche esigenze e le preferenze di ogni singolo cliente, al fine di offrire <span
                class="text-light-blue">soluzioni personalizzate</span> e risultati eccezionali. <br> La nostra mission si
            basa sui seguenti <b>principi fondamentali</b>:
            <br><br>
            <b>&#x2022; Eccellenza</b>: Miriamo all'eccellenza in tutto ciò che facciamo, impegnandoci a offrire <span
                class="text-light-blue">servizi di pulizia impeccabili</span> e <span class="text-light-blue">risultati di
                qualità superiore</span>.
            <br><br>
            <b>&#x2022; Affidabilità</b>: Siamo un <span class="text-light-blue">team affidabile e responsabile</span>,
            rispettando sempre gli impegni presi con i nostri clienti. Puntualità, professionalità e dedizione sono valori
            chiave per noi.
            <br><br>
            <b>&#x2022; Personalizzazione</b>: Ogni cliente è unico, pertanto adottiamo un <span
                class="text-light-blue">approccio personalizzato</span>, ascoltando attentamente le esigenze e le preferenze
            di ciascuno per fornire servizi su misura che soddisfino le sue specifiche necessità.
            <br><br>
            <b>&#x2022; Sostenibilità</b>: Siamo impegnati a svolgere il nostro lavoro in modo responsabile dal punto di
            vista ambientale, utilizzando <span class="text-light-blue">prodotti eco-friendly</span> e adottando <span
                class="text-light-blue">pratiche sostenibili</span> per ridurre l'impatto ambientale delle nostre attività.
            <br><br>
            <b>&#x2022; Soddisfazione del cliente</b>: La soddisfazione dei nostri clienti è la nostra priorità assoluta. Ci
            impegniamo a superare le aspettative dei nostri clienti, offrendo un <span class="text-light-blue">servizio di
                pulizia di qualità superiore</span> e garantendo la loro piena soddisfazione.
            <br><br>
            La nostra mission è guidata da una <b>passione per l'eccellenza</b> e un impegno costante nell'offrire
            <b>servizi di pulizia professionali</b> che lascino un'impronta positiva nei luoghi che serviamo. Siamo
            determinati a diventare il <b>partner di fiducia</b> per le esigenze di pulizia dei nostri clienti, offrendo
            <b>risultati impeccabili</b> e creando ambienti puliti, sani e piacevoli in cui vivere e lavorare.
        </p>
    </v-container>
</template>

<style>
#icon-color i.v-icon.v-icon {
    color: #039BE5;
}

@media screen and (max-width: 966px) {

    .title-responsive {
        font-size: 3em !important;
        text-align: start;
        line-height: normal;
    }

    .subtitle-responsive {
        font-size: 2em !important;
        text-align: start;
    }

    .button-responsive {
        display: flex;
        text-align: start;
        align-items: start;
        justify-items: start;
    }
}
</style>