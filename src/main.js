// Components
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7sOv5hN1bj2B25lkoEowRMfZREVMTNwQ",
  authDomain: "impresa-di-pulizie.firebaseapp.com",
  projectId: "impresa-di-pulizie",
  storageBucket: "impresa-di-pulizie.appspot.com",
  messagingSenderId: "487930114231",
  appId: "1:487930114231:web:84dc5f47db77fb5e835d32"
};

const FIREBASE_CAPTCHA_CODE = '6LfMSgMnAAAAAEygEVsRmIcS9FMMbAszuuosic_I';

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

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

app.use(firebase).use(appCheck).mount('#app')
