import firebase from "../plugins/firebase";
import { setDoc, doc } from "firebase/firestore";

// Test di una nuova richiesta al database
export async function getData(name, email, phone, request, privacyPolicy) {
  const today = new Date();
  const documentId = 'Request';
  const database = firebase.db;
  const docData = {
    name: name,
    email: email,
    phone: phone,
    request: request,
    privacyPolicyAccepted: privacyPolicy
  };
  await setDoc(doc(database, documentId, formatDate(today)), docData);
}

// Formatta la data corrente
function formatDate(current_datetime) {
  let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
  return formatted_date;
}
