const firebaseConfig = {
    apiKey: "AIzaSyAOZEpNxh-gxv76v0Z9sxvfX6U7O0Kl1-g",
    authDomain: "e-learning-88b42.firebaseapp.com",
    projectId: "e-learning-88b42",
    storageBucket: "e-learning-88b42.appspot.com",
    messagingSenderId: "126699648294",
    appId: "1:126699648294:web:f6d44b185a6daa126dbde7"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
