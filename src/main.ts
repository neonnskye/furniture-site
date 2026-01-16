import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN28Ib30DX62QTW9XEt43Rq05heEGUM08",
  authDomain: "furniture-site-82a36.firebaseapp.com",
  projectId: "furniture-site-82a36",
  storageBucket: "furniture-site-82a36.firebasestorage.app",
  messagingSenderId: "574233233632",
  appId: "1:574233233632:web:03761fc51b52d1d8cfa885",
  measurementId: "G-DHGWF723L2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);