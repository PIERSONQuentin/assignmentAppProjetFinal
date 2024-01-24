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
    cd tp1-angular-lord83560/frontend
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



## Identifiants de connexion utilisateur 

- identifiants admin : 
    - username : admin
    - password : admin123
- identifiant utilisateur : 
    - username : user
    - password : user123

## Fonctionnalités
- 1001 assignments dans la base de données.
- Formulaire de login/password et bouton de connexion dans la toolbar. Une fois loggué, le formulaire disparait et seul un bouton de déconnexion apparait.
- Les utilisateurs autorisés peuvent modifier et ajouter des assignments. Les administrateurs peuvent également supprimer des assignments. Les utilisateurs non connectés peuvent uniquement consulter les assignments.
- Liste de login/passwords valides codée en dur dans le service d'authentification.
- Ajout de la propriété "Auteur" au modèle des Assignments, qui sera l'utilisateur connecté lors de la création de l'assignment.
- Système de tri des assignments par date de rendu et date de création, ainsi qu'une barre de recherche pour rechercher le titre de l'assignment ou l'auteur.
- Utilisation d'un formulaire de type Stepper pour l'ajout d'Assignments.
- Ajout de messages de notification avec SnackBar Material.
