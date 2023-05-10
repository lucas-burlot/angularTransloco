# Angular projet avec Transloco

## Lancer le projet

`ng serve`

## Lancer les tests unitaires

`ng test`

## Pourquoi Transloco?

J'ai choisi d'utiliser Transloco plutôt que le module Angular Localize pour plusieurs raisons. 

- **Flexibilité** : Transloco offre une grande flexibilité en termes de configuration. Il permet de charger dynamiquement les fichiers de traduction au besoin, ce qui permet d'économiser les ressources et d'améliorer les performances de l'application. Globalement, ça veut dire qu'on ne charge que les traductions qui sont visibles sur notre page.
  
- **Efficacité** : Les traductions sont toutes implémentés dans des fichiers JSON, et comme nous le savons le JSON est un fichier vraiment pas lourd.

- **Temps réel** : Transloco permet de facilement changer de langue en temps réel, sans avoir à recharger la page.

- **Facilité d'utilisation** : Transloco offre une API simple et intuitive, je trouve ça plus facile de l'utiliser que de passer par Angular localize

- **Habitude** : J'ai déjà utilisé cette librairie dans le passé dans mon entreprise. Ça fait longtemps et je ne l'avais pas forcément mis en place, mais j'ai compris son système très rapidement alors que c'étais un très gros projet.

PS : Petit bonus, la librairie est très maintenue. Il vient même d'y avoir un push il y a 30 minutes.

## Configuration

La configuration de Transloco est relativement simple. Globalement les configurations sont gérés dans un fichier qui s'appelle `transloco-root.module.ts`.

Voici les points clés à retenir :

`defaultLang` : C'est la langue par défaut qui sera définie pour notre application. Généralement, c'est la première langue qui sera chargée.

`availableLangs` : Ce sont les langues qui seront disponibles dans notre application. Ça fais appel aux fichiers .json de traductions.

`prodMode` : Permet de définir si nous sommes en prod ou pas. Si nous sommes en prod, nous n'aurons aucun message d'erreur/warning concernant la traduction

`fallbackLang ` : Permet de spécifier la langue à utiliser lorsque la traduction pour la langue demandée n'est pas disponible

En conclusion, j'ai choisi Transloco parceque je le trouve plus simple niveau utilisation, plus rapide, moins lourd. Le seul aspect négatif c'est que ce n'est pas natif à Angular, si les dev ne souhaitent plus maintenir cette librairie c'est compliqué.

---
