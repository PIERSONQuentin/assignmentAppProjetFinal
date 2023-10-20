[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/CC0AgZ2W)
# PIERSON Quentin
# AssignmentApp
Tp 1 sur angular pour réaliser une liste de devoirs, un formulaire d'ajout de devoirs, d'une toolbar et d'une sidebar.
## Modifications 
- opérations effecutés jusqu'au transparent 116.
- mise en place de la toolbar avec :
    - icone en forme de maison qui servira plus tard à revenir à la page d'accueil.
    - icone de connexion qui servira plus tard à s'identifier.
    - icone de menu hamburger permettant d'afficher et de retirer la sidebar.
- mise en place de la sidebar avec :
    - un lien "Liste des devoirs"
    - un  lien "Ajout d'un devoir"
    - un lien "Modification d'un devoir"
    - un lien "Suppression d'un devoir"
    - un lien "Génération de données de test"
- mise en place de routerLink avec le routing module pour les pages :
    - Liste des devoirs
    - Ajout d'un devoir
    - accueil (renvoie sur la racine pour l'instant)

## TP4
- mise en place de la communication entre composants.
- mise en place du paramétrage d'url avec paramètres.
- mise en place d'une interface pour modifier un devoir.
- mise en place de la possibilité de supprimer un devoir.
- séparation des différents composant par pages
- mise en place d'une interface de connexion. 
    - mise en place d'une sécurité sur la saisie pour obliger la saisie dans les champs de connexion. 
    - mise en place d'une alerte dans le cas où les identifiants sont incorrects. 
- mise en place d'une gestion de droit avec accès aux options de modification et suppression si admn. 
    - identifiants admin : 
        - username : admin
        - password : admin123
    - identifiant utilisateur : 
        - username : user
        - password : user123
- modification de la toolbar pour implémenter le routage de la page "auth" quand on clique sur le bouton de connexion. 
- mise en place d'un bouton de déconnexion qui apparait uniquement lorsque l'utilisateur est connecté (le bouton de connexion est caché lorsque connecté). 
- mise en place du bloquage des fonctionnalités de suppression et modification lorsque l'utilisateur ne possède pas le rôle admin. 

