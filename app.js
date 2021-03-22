// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCieBXEHxGVko4YN_cDjfCEohsIH9x78oo",
    authDomain: "authentication-87e19.firebaseapp.com",
    projectId: "authentication-87e19",
    storageBucket: "authentication-87e19.appspot.com",
    messagingSenderId: "144337947772",
    appId: "1:144337947772:web:0b60e5e2603893ccd24df9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function SignUp(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
}

function Login(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
  
}

function logOut(){
    auth.signOut();
    alert("logged Out");
}

auth.onAuthStateChanged(function(user) {		
    if(user) {        
        var email = user.email;
        alert("Active User " + email);
        
        //Take user to a different or home page is signed in  

    } else {
        
        alert("No Active User");
        //no user is signed in
    }    
});
