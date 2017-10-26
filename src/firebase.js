import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyCkFedPxc786R53slB_TY7u97pPZBOJDWs",
    authDomain: "jfddl2-tutim.firebaseapp.com",
    databaseURL: "https://jfddl2-tutim.firebaseio.com",
    projectId: "jfddl2-tutim",
    storageBucket: "jfddl2-tutim.appspot.com",
    messagingSenderId: "804098636415"
};
firebase.initializeApp(config);

export const database = firebase.database
export const auth = firebase.auth

var name, email, photoUrl, uid, emailVerified;

export const user = firebase.auth().currentUser;




// firebase.database().ref('/').on('value', snapshot => {
//   console.log(snapshot.val())
// })

// firebase.auth().onAuthStateChanged(
//   user => {
//     if (user === null) {
//       console.log('user logged out')
//     } else {
//       console.log('user logged in')
//     }
//   }
// )

// firebase.auth().createUserWithEmailAndPassword(
//   'bartosz.cytrowski@gmail.com',
//   'test123'
// )

// firebase.auth().signInWithEmailAndPassword(
//   'bartosz.cytrowski@gmail.com',
//   'test123'
// )
  //.then(
//   user => {
//     console.log('sign in success')
//     firebase.auth().signOut().then(
//       () => console.log('sign out success')
//     )
//   }
// )


