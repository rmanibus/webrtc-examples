Loïc HERMANN
juin 2015

# Démonstrateur WebRTC

Fichier serveur: wsServeur.js
Fichier client: client.html

## Installation - prérequis:
installer nodejs (plus de détails sur le site)
installer npm (gestionaire de packets nodejs)

## Installation:
```
npm install
```

créer un fichier bundle.js à l'aide de browserify pour pouvoir utiliser sdp-transform en frontend:
	"browserify -r sdp-transform -o bundle.js"

parametrer le fichier client.html (rubrique parametre).
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
