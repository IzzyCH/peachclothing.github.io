importScripts('https://www.gstatic.com/firebasejs/7.2.0/firebase-app.js');
ImportScripts('https://www.gstatic.com/firebasejs/7.2.0/firebase-messaging.js');


var firebaseConfig = {
    apiKey: "AIzaSyAFEt7QW-QPBDIr5A1e0KUBgGFch4i6vn0",
    authDomain: "model-osprey-288919.firebaseapp.com",
    databaseURL: "https://model-osprey-288919.firebaseio.com",
    projectId: "model-osprey-288919",
    storageBucket: "model-osprey-288919.appspot.com",
    messagingSenderId: "537261518275",
    appId: "1:537261518275:web:de5b1fcce66a85c82e6176",
    measurementId: "G-W4RRW06628"


firebase.initializeApp({
	messagingSenderId: "537261518275"	
})
const iniMessaging = firebase.messaging()

	messaging.setBackgroundMessagingHandler(function(payload){
		
		console.log(payload)
		
	});