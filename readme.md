# SaintéJS
## Appli des membres du groupe d'utilisateurs JavaScript de Saint-Etienne

### Installation :
Installer Meteor sur votre système.

Installer une version récente de nodejs (node -v >= 4).

A la racine du projet, installer les dépendances avec :

```
npm install
```
Une fois les dépendances installées, remplir le fichier settings.json et lancer Meteor avec :

```
meteor run --settings settings.json
```

Pour lancer avec une base mongo séparée, avant de lancer Meteor :

```
export MONGO_URL=mongodb://localhost:27017/saintejs
```

### Configuration :
Changer les infos dans settings.json pour le serveur smtp et Kadira (optionnel).

Changer l'admin par défaut dans ./imports/api/users/publications_seeds.js
