
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAFEt7QW-QPBDIr5A1e0KUBgGFch4i6vn0",
    authDomain: "model-osprey-288919.firebaseapp.com",
    databaseURL: "https://model-osprey-288919.firebaseio.com",
    projectId: "model-osprey-288919",
    storageBucket: "model-osprey-288919.appspot.com",
    messagingSenderId: "537261518275",
    appId: "1:537261518275:web:64a115cacaf8eb862e6176",
    measurementId: "G-QXBG6NB5J5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
	const auth = firebase.auth();
	
	function signUp(){
		
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
		
			
		alert("Signed Up");
		
	}
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
		
			
		
		alert("Signed In");
		
	}
  
  function signOut(){
	  
	  
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
  
  
  
  
