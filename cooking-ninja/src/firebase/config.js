import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDCeOytuIxNGchrGq4CrZq4cpohiIX9uYg",
  authDomain: "testing-123-c16fc.firebaseapp.com",
  projectId: "testing-123-c16fc",
  storageBucket: "testing-123-c16fc.appspot.com",
  messagingSenderId: "934001709223",
  appId: "1:934001709223:web:e36d27896426d6ebb30b82",
  measurementId: "G-5TQT44T2V9"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }