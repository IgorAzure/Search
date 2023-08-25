import firebase from 'firebase';
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAu205qmnWwjja8zgucCLHKJfi8HSmMNi0",
  authDomain: "bibrioteca-cleiton.firebaseapp.com",
  projectId: "bibrioteca-cleiton",
  storageBucket: "bibrioteca-cleiton.appspot.com",
  messagingSenderId: "973779544374",
  appId: "1:973779544374:web:4529ee860400f5c6176b97"
};

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()