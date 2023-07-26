// Components
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDwDSok1-KwoikpE9ae1ERX72uis0CwCA",
  authDomain: "puliservicesrls-4246e.firebaseapp.com",
  projectId: "puliservicesrls-4246e",
  storageBucket: "puliservicesrls-4246e.appspot.com",
  messagingSenderId: "526752361518",
  appId: "1:526752361518:web:dbe822ea617dd7827303bf",
  measurementId: "G-6LT023J95R"
};

const FIREBASE_CAPTCHA_CODE = '6LfMSgMnAAAAAEygEVsRmIcS9FMMbAszuuosic_I';

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Inizialize Analytics
const analytics = getAnalytics(firebase);

const appCheck = initializeAppCheck(firebase, {
  provider: new ReCaptchaV3Provider(FIREBASE_CAPTCHA_CODE),
  isTokenAutoRefreshEnabled: true
});

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(firebase).use(analytics).use(appCheck).mount('#app')
