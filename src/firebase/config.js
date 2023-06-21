import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCzago5rplumnh-wzzBidwHCCag8-M1kG4',
  authDomain: 'mymoney-2af6f.firebaseapp.com',
  projectId: 'mymoney-2af6f',
  storageBucket: 'mymoney-2af6f.appspot.com',
  messagingSenderId: '560576129100',
  appId: '1:560576129100:web:23e446a4339bb18c656ce9',
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
