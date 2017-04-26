Loïc HERMANN
juin 2015

# Démonstrateur WebRTC

Ce script vous permettra de tester differents paramètres pour le webRTC. vous pourrez par example forcer un codec audio ou vidéo à être utilisé.


Fichier serveur: wsServeur.js
Fichier client: client.html

## Installation - prérequis:
installer nodejs (plus de détails sur le site)
installer npm (gestionaire de packets nodejs)

## Installation:

```
npm install
```

pour mettre à jour sdp-transform en frontend (optionel, le fichier bundle.js est déja présent):

```
"browserify -r sdp-transform -o public/bundle.js"
```
## Parametres

parametrer le fichier client.html (rubrique parametre).

```javascript

		/*CONFIGURATION*/
	

	/*debug*/
			
		DEBUG_SEND = true;
		DEBUG_RECEIVE = true;
		DEBUG_LEVEL = 10; // 0 min - 10 max


	/*codecs*/


		codecAudio = "auto"; //soit auto, soit par nom: G722, opus ... soit par son code (numérique). 
		/*
		choix auto: auto
		Chrome: 
			opus (111),
			ISAC (/16000 code 103 et /32000 code 104)
			G722 (9), PCMU (0), PCMA (8),
			CN (/32000 code 106, /16000 code 105 et /8000 code 13),
			telephone-event (126) 

		Firefox:
			opus (109) 
			G722 (9),
			PCMU (0),
			PCMA (8)

		*/

		codecVideo = "H264"; 

		/*
		choix auto: auto
		Chrome: 
			VP8 (100),
			red (116),
			ulpfec (117),
			rtx (96),

		Firefox:
			VP8 (120),
			H264 (126),
			H264 (97)

		*/

		//Pour une Liste plus ou moins exhaustive des codecs, RDV dans les captures SDP Firefox et Chrome (à remettre à jour de temps à autre)

	/*peerConnexion*/

		configuration = {
	   	 	iceServers: [
				{urls: "stun:23.21.150.121"},
				{urls: "stun:stun.l.google.com:19302"},
				{urls: "turn:numb.viagenie.ca", credential: "webrtcdemo", username: "louis%40mozilla.com"}
	    		]
		};
		
		options = {

		};

	/*GetUserMedia*/

		mediaOptions = { 	
			"audio": true, 
			"video": true 
		};	

	/*CreateOffer*/
	
		/*Si la communication doit être à sens unique, mettre à false*/
		constraints = {
			offerToReceiveAudio: false,
			offerToReceiveVideo: false
		};
		
		/*--------------------------------------------------*/
```

la variable server_port doit corespondre au port indiqué dans le fichier serveur (1234 en ce moment)

## run:
```
npm start
```
rendez vous ensuite sur <ipduserveur>:<portduserveur>/client.html
(ouvrir 2 fenêtres en oubliant pas d'afficher la console, cliquer sur call ..)


PS:
Pour mettre a jour nodejs:
	sudo npm cache clean -f
	sudo npm install -g n
	sudo n stable
