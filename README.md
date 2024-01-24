# Angular : rendu n°2

Repository où déposer le projet n°2 Angular

## A faire
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

## PIERSON Quentin
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

## Fonctionnalités ajoutées
- Au moins 1000 assignments dans la base de données.
- Formulaire de login/password et bouton de connexion dans la toolbar. Une fois loggué, le formulaire disparait et seul un bouton de déconnexion apparait.
- Les utilisateurs autorisés peuvent modifier et ajouter des assignments. Les administrateurs peuvent également supprimer des assignments. Les utilisateurs non connectés peuvent uniquement consulter les assignments.
- Liste de login/passwords valides codée en dur dans le service d'authentification.
- Ajout de la propriété "Auteur" au modèle des Assignments, qui sera l'utilisateur connecté lors de la création de l'assignment.
- Système de tri des assignments par date de rendu et date de création, ainsi qu'une barre de recherche pour rechercher le titre de l'assignment ou l'auteur.
- Utilisation d'un formulaire de type Stepper pour l'ajout d'Assignments.
- Ajout de messages de notification avec SnackBar Material.

Note: La fonctionnalité de Tableau de Bord Analytique de assignments créés par utilisateur avec un graphique n'est pas possible car le système de récupération des données n'est pas encore mis en place.
