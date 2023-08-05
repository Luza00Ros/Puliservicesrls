// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

/*import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";*/
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

/*const FIREBASE_CAPTCHA_CODE = '6LfMSgMnAAAAAEygEVsRmIcS9FMMbAszuuosic_I';*/

// Inizialize Firebase
const app = initializeApp(firebaseConfig);

// Inizialize Analytics
const analytics = getAnalytics(app);

// Inizialize Firestore Database
const db = getFirestore(app);

// Inizialize ReCaptchaV3
/*
const appCheck = initializeAppCheck(firebase, {
  provider: new ReCaptchaV3Provider(FIREBASE_CAPTCHA_CODE),
  isTokenAutoRefreshEnabled: true
});
*/

// Export
export default {
  db,
  app,
  analytics
  //appCheck
}
