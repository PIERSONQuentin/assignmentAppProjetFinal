# Angular projet final

Membres : 
PIERSON Quentin
VASSEUR Matthéo

## Pour démarrer 

1. Assurez-vous d'avoir Node.js installé sur votre machine. Vous pouvez le télécharger depuis [https://nodejs.org](https://nodejs.org).

2. Clonez ce dépôt sur votre machine en utilisant la commande suivante :
    ```
    git clone PIERSONQuentin/assignmentAppProjetFinal.git
    ```

3. Accédez au répertoire du projet :
    ```
    cd assignmentAppProjetFinal-main
    ```

4. Installez les dépendances du projet en exécutant la commande suivante :
    ```
    npm install
    ```

5. Lancez l'application en utilisant la commande suivante :
    ```
    ng serve
    ```

6. Ouvrez votre navigateur et accédez à l'URL suivante : [http://localhost:4200](http://localhost:4200)

7. Vous devriez maintenant voir l'application Angular fonctionner sur votre machine.

8. Récupérez le projet backend à partir de la branche "backend" et suivez les étapes.

9. Une fois le backend lancé, rechargez la page pour récupérer les données.


## Identifiants de connexion utilisateur 

- identifiants admin : 
    - username : admin
    - password : admin123
- identifiant utilisateur : 
    - username : user
    - password : user123

## Modifications du modèle des Assignments

- Ajout de la propriété "Auteur" au modèle des Assignments, qui sera l'utilisateur connecté lors de la création de l'assignment.
- Ajout de la propriété "imageAuteur" au modèle des Assignments, qui sera l'image lié à l'utilisateur connecté lors de la création de l'assignment.
- Ajout de la propriété "matière" au modèle des Assignments, qui sera le nom de la matière sélectionné lors de la création de l'assignment.
- Ajout de la propriété "imageMatiere" au modèle des Assignments, qui sera l'image de la matière sélectionné lors de la création de l'assignment.
- Ajout de la propriété "note" au modèle des Assignments, qui sera la note attribué a l'assignments. Il est possible qu'un assignment ne soit pas noté
- Ajout de la propriété "remarques" au modèle des Assignments, qui sera les remarques concernant l'assignment.

## Fonctionnalités
- 1000 assignments dans la base de données.
- Formulaire de login/password et bouton de connexion dans la toolbar. Une fois loggué, le formulaire disparait et seul un bouton de déconnexion apparait.
- Les utilisateurs autorisés peuvent modifier et ajouter des assignments. Les administrateurs peuvent également supprimer des assignments. Les utilisateurs non connectés peuvent uniquement consulter les assignments.
- Liste de login/passwords valides codée en dur dans le service d'authentification.  
- Système de tri des assignments par date de rendu et date de création, ainsi qu'une barre de recherche pour rechercher le titre de l'assignment, l'auteur ou la matière.
- Système dynamique d'assignments affichés par pages.
- Ajout d'une page d'accueil permettant l'accès rapide aux différentes fonctionnalités de l'application.
- Ajout de la vérification du rôle de l'utilisateur pour afficher le bouton de génération de données et/ou de création d'assignment et les liens dans la barre latérale.
- Mise en place d'un centre de contrôle utilisateur dans la barre latérale avec des fonctionnalités disponibles en fonction du rôle de l'utilisateur.
- Modification du composant edit-assignment pour implémenter les modifications du modèle des assignments.

## Fonctionnalités réalisés par Matthéo VASSEUR

- Utilisation d'un formulaire de type Stepper pour l'ajout d'Assignments.
- Ajout de messages de notification avec SnackBar Material.


Lien de la vidéo : [https://drive.google.com/drive/folders/1fDbo3f2FIq4kHrIYkuXDw_ogQHsSi7K1?usp=sharing](url)
