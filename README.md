# Syntaxes ES6 et ES6+

## Variables `let` et `const`
➡️ Exercice à réaliser dans le dossier `1-variables`

### Section 1
1. Remplacez toutes les occurences de `var` par `let`.
2. Constatez que cela ne change rien. Désormais **on n'utilisera plus `var`** mais `let` ou `const`
3. Remplacez toutes les occurences de `let` par `const`.
4. Expliquez l'erreur

TypeError: Assignment to constant variable.
Une constante est une valeur qui ne peut pas être modifiée lors de l'exécution du programme. Elle ne peut pas être modifiée grâce à une réaffectation ou grâce à une redéclaration.
Il existe plusieurs façons de résoudre ce problème et il faut au préalable comprendre le rôle de la constante en question.
const ne doit pas être utilisé si on ne souhaite pas déclarer de constante. Peut-être qu'on souhaite simplement déclarer une variable avec une portée de bloc grâce à let 
La déclaration const crée une référence en lecture seule vers une valeur. Elle ne signifie pas que la valeur en question est immuable mais uniquement que l'identifiant de la référence ne peut pas recevoir de nouvelle valeur.
Ainsi, si le contenu est un objet, celui-ci pourra toujours être modifié.
En revanche, on peut modifier les propriétés.

5. Corrigez le code en conservant le maximum de valeurs constantes

### Section 2
1. Remplacez toutes les occurences de `let` par `const`.
2. Expliquez **l'absence** l'erreur

### Section 3
1. Remplacez toutes les occurences de `let` par `const`.
2. Expliquez l'erreur
3. Corrigez le code en conservant le maximum de valeurs constantes

**COMMITTEZ VOS CHANGEMENTS 🚢**

## Arrow functions
➡️ Exercice à réaliser dans le dossier `2-functions`

### Section 1
Convertissez les 3 fonctions avec la notation "Arrow function" et vérifiez que le code fonctionne comme avant la conversion

### Section 2
1. **Avant toute modification : a ssurez-vous de comprendre le code déjà écrit ! Au besoin commentez-le.**
2. Convertissez la fonction `showThis` en notation "Arrow function"
3. Observez le résultat. Que pouvez-vous en conclure ?

### Section 3
Complétez le code pour reproduire le comportement de la section 1 mais cette fois-ci grâce à l'objet `odile`. Vous utiliserez dès que possible des "Arrow functions".

**COMMITTEZ VOS CHANGEMENTS 🚢**

## `Object.keys` & `Object.values`
➡️ Exercice à réaliser dans le dossier `3-objects`

### Section 1
Afficher les carractéristiques du véhicule sours la forme `clé : valeur` (Ex: `id: 3221`)

### Section 2
Pour chacunes des perturbations du fichier `data.js` (variable `data`) afficher leur texte.

**COMMITTEZ VOS CHANGEMENTS 🚢**

## Destructuring
➡️ Exercice à réaliser dans le dossier `4-destructuring`

### Section 1
1. **COMPRENEZ** et **COMMENTEZ** le code de la première partie
2. Afficher le 3e élément du tableau ainsi que la propriété `age` de l'objet

### Section 2
Pour chacunes des perturbations du fichier `data.js` (variable `data`) récupérer dans des variables puis afficher leur texte, date de début et date de fin.

**COMMITTEZ VOS CHANGEMENTS 🚢**

## Import / Export
➡️ Exercice à réaliser dans le dossier `5-import`
__⚠ Cet exercice est à exécuter soit sous Firefox soit sous Chrome avec un serveur de développement (WebStorm ou VS Code en proposent)__

### Section 1
1. Lire et comprendre le code déjà écrit dans la première partie
2. Importer et utiliser la fonction `showError`
2. Importer et utiliser la fonction anonyme définie à la fin du fichier

### Section 2
Exporter les fonctions du fichier `math.js` pour pouvoir les utiliser dans le script principal (`script.js`)

**COMMITTEZ VOS CHANGEMENTS 🚢**
