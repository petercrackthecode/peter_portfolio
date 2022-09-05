// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAFIx6yMOPYFdqQAMUnOJAfV7qBreD-XJo',
  authDomain: 'landing-page-df7cb.firebaseapp.com',
  databaseURL: 'https://landing-page-df7cb-default-rtdb.firebaseio.com',
  projectId: 'landing-page-df7cb',
  storageBucket: 'landing-page-df7cb.appspot.com',
  messagingSenderId: '110659189700',
  appId: '1:110659189700:web:e3456d7040f0ac81358291',
  measurementId: 'G-EMZSK2RJ75',
}

// Initialize Firebase
let app
let analytics

if (typeof window !== 'undefined' && !app) {
  app = initializeApp(firebaseConfig)
  analytics = getAnalytics(app)
}

export default app
