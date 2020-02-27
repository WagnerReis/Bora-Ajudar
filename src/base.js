import Rebase from 're-base'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyDT8Ol8hBROuzetiv6tcjWId0nnSqh5w6Y',
    authDomain: 'bora-ajudar-d4233.firebaseapp.com',
    databaseURL: 'https://bora-ajudar-d4233.firebaseio.com',
    projectId: 'bora-ajudar-d4233',
    storageBucket: 'bora-ajudar-d4233.appspot.com',
    messagingSenderId: '1042288684185',
    appId: '1:1042288684185:web:392794bbea3e6f5960dc08'
}

const app = firebase.initializeApp(firebaseConfig)
const base = Rebase.createClass(app.database())
export const auth = firebase.auth()
export default base