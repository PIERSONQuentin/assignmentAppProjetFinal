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
  
## Problèmes connus 
- la création d'un nouveau devoir ne s'effectue pas car les données ne sont pas persistante a cause de l'utilisation de routerLink
