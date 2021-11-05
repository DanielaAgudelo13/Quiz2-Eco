var firebaseConfig = {
    apiKey: "AIzaSyCpsppyQ03DW1LNAj0YCi-_fyO_gcL7qBc",
    authDomain: "quiz2-8d2f5.firebaseapp.com",
    projectId: "quiz2-8d2f5",
    storageBucket: "quiz2-8d2f5.appspot.com",
    messagingSenderId: "176648073277",
    appId: "1:176648073277:web:2ce2095cb5889e10c2ba54",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const students = db.ref("student");
