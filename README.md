# Angular : rendu n°2
Repository où déposer le projet n°2 Angular

### Nom[^1] :

### Prénom[^2] : 

## A faire[^3]
- [ ] Suivre le cours jusqu'à la page 180
- [ ] Intégrer toolbar et navbar du rendu n°1
- [ ] Identification par **login/password**
  - ajouter un tableau de login/password/role (avec rôle qui est soit **user** soit **admin**) dans le service d'authentification
  - modifier le code pour avoir `isLogged()` **ET** `isAdmin()` au lieu de juste `isAdmin()`
- [ ] Au lieu du slider `LogIn`, ajouter un bouton connecter (avec une *mat-icon* adaptée) qui amène à un composant avec un formulaire de connexion
- [ ] Gestion des droits :
  - L'admin peut éditer et effacer les assignment
  - Le user peut voir le détail des assignment
  - Si on n'est pas logué on ne peut ni voir le détail, ni éditer


[^1]: à remplir
[^2]: à remplir
[^3]: vous pouvez cocher les tâches qui ont été faites en utilisant la syntaxe `[x]` dans le markdown

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