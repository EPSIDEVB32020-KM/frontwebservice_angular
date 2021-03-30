# frontwebservice_angular
##### The front webpage of our project in angular

## Les prérequis
#### Lancer le projet eureka server qui est le repository registry
#### Lancer le gatewaywebservice qui est rattaché au registry, le repository nommé gatewayservice sur intelliJ
#### Lancer le projet webservicejpa qui est le repository webservicejpa pour l'utilisation du webservice en JPA(Java Persistence Api) sur intelliJ
#### Sur côté front avant on a utilisé le frontwebservice(repository supprimé) mais après au final on a utiliser le frontwebservice_angular(repository) sur côte front qui utilise angular

## Les fonctionnalités présent dans ce front angular
#### Ajout du rooting des composants afin de construire une barre de navigation
#### Ajout des configurations de proxy dans le fichier proxy.conf.json afin d'accéder au données de l'api JPA
#### Ajout de l'utilisation de l'api(Pour le moment y a que la méthode GET  de tous les vehicules et personnes avec  leur location qui marche)
#### Ajout de 2 way Data binding grâce aux FormControl sur le formulaire de la page Personnes et affichage des valeurs en temp réel

## Les lancements du projet
#### Après avoir installer les prérequis il faut entrer dans le repertoire du projet front ou vous l'avez mis
#### Lancer les commandes suivantes dans l'invite de commande(le proxy.conf.json ici va inclure les conf entrer dans le proxy->utilisation de l'api):
##### ng serve --proxy-config proxy.conf.json

