// TODO: Substitua o seguinte pela configuração de projeto do Firebase do seu aplicativo
var firebaseConfig = {
    // ...
  };
  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase with a default Firebase project
firebase.initializeApp(firebaseConfig);

// Initialize Firebase with a second Firebase project
var otherProject = firebase.initializeApp(otherProjectFirebaseConfig, "other");

console.log(firebase.app().name);  // "[DEFAULT]"
console.log(otherProject.name);    // "otherProject"

// Use the shorthand notation to access the default project's Firebase services
var defaultStorage = firebase.storage();
var defaultFirestore = firebase.firestore();

// Use the otherProject variable to access the second project's Firebase services
var otherStorage = otherProject.storage();
var otherFirestore = otherProject.firestore();