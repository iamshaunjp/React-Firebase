import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDCeOytuIxNGchrGq4CrZq4cpohiIX9uYg",
  authDomain: "testing-123-c16fc.firebaseapp.com",
  projectId: "testing-123-c16fc",
  storageBucket: "testing-123-c16fc.appspot.com",
  messagingSenderId: "934001709223",
  appId: "1:934001709223:web:3a1ce8022d26e440b30b82",
  measurementId: "G-3L5DFDF70R"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }