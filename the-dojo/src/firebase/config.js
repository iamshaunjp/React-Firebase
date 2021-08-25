import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDXBeEYHuAA42LMCkxhdsOoYdMO2n7tgos",
  authDomain: "udemy-files-dojo.firebaseapp.com",
  projectId: "udemy-files-dojo",
  storageBucket: "udemy-files-dojo.appspot.com",
  messagingSenderId: "244633033606",
  appId: "1:244633033606:web:aa1833bda9c7906227ea07"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }