# useState

`useState` est le hooks **le plus utilisé** dans React (et le plus simple).

Il a un seul but :

> Garder un état dans un composant synchroniser avec l'interface.

Pour faire en sorte que ton composant soit toujours à jour, il faut que React
connaissement le moment où tu update le state. C'est pour cette raison que la création
d'un state ce fait avec :

```js
const [state, setState] = useState(initialState);
```

`useState` retourne un tableau de deux éléments :

- Le `current state` de cette variable, que l'`initial state` définit par défaut
- La `set function` qui va changer le state avec n'importe quel autre valeur.

Donc pour update le state il faut utiliser `setState(newState)`.

[📖 useState](https://beta.reactjs.org/apis/usestate)

## Exercise 1

Ajoute un state pour que l'application te dise bonjour avec ton nom en temps réel.

Instructions dans le fichier.

- 💌 Tu comprends comment basiquement crée un state.

## Exercise 2 - Ajout d'un nouveau state

Ajoute un checkbox qui quand elle est activé va afficher le prénom **inversé**.

- Melvyn -> nyvylM
- Jean -> naeJ

🦁 Tu peux ajouter une checkbox (`<input type="checkbox" />`) **controller**.

Attention, il te faut rajouter un nouveau state.
Et à aucun moment il faut inverser la valeur du state `name` (non pas que ce serait
une erreur, juste que ce n'est pas mon but avec mon exercise).

[📖 Comment inverser une string en JS](https://www.youtube.com/watch?v=ygP1PMkDz0I)

- 💌 Tu apprends ici à gérer un affichage d'état en fonction d'autre état.
- 💌 Tu apprends aussi à gérer un boolean en fonction de sa valeur précédente.

## Exercise 3 - Stocker chaque changement de notre state

Notre state change, il faut stocker ce changement dans un autre state et les
afficher sous forme de liste

```jsx
<ul>
  {nameHistory.map((name, i) => (
    <li key={i}>{name}</li>
  ))}
</ul>
```

💡 Je mets `key={i}` et pas `key={name}` car notre liste ne change jamais d'ordre
et qu'un nom peut revenir plusieurs fois.

💡 Il ne faut pas utiliser `nameHistory.push`.

[📖 Alors comment faire ?](https://bobbyhadz.com/blog/react-push-to-state-array)

- 💌 Tu apprends à ajouter dans une liste.
- 💌 Tu comprendras le lifecycle des hooks avec un bug expliqué.

## Exercise 4 - Supprimer des "NameHistory"

Quand tu cliques sur un historique, tu vas supprimer celui-ci de la liste.

```jsx
<ul>
  {nameHistory.map((name, i) => (
    <li key={i} onClick={() => deleteHistory(i)}>
      {name}
    </li>
  ))}
</ul>
```

Il te faut rajouter la fonction `deleteHistory` qui va supprimer le bonne élément
de la liste en fonction de l'index.

- 💌 Tu apprends à supprimer dans une liste.

---

## Exercise 5 - Ou mettre les states ?

⚠️ Tu dois aller dans le fichier `Exercise1-2.jsx`, ce n'est pas la suite
de ce qu'on a fait jusqu'ici. ⚠️

En React un des skill le plus important, **c'est de savoir où mettre les states**,
et c'est une énorme source d'erreur.

Je t'explique le context, je viens de créer l'application la plus
mal faites possible.

**Ton but : la réparer.**

_1er problème :_

Dans la section "Animal" quand on change le "Favorite animal" rien ne change
dans le text en dessous. Met le state au bon endroit pour réparer que l'élément
en dessous se mettent à jour.

Et crée un nouveau composant `UserAnimalForm` qui possède nos deux states et le
texte `Greeting`.

- 💌 Tu comprends comme utiliser `useState` dans une application.

## Exercise 6 - Refactor... Again

Deux concepts à comprendre :

- Les données vont d'en haut à en bas !
- Les states doivent être le plus proche possible de leur utilisation

Quand tu vois la todo list, ce n'est vraiment pas le cas. Elle rerender
toute notre app à chaque nouvelle todo car son état est dans `App`.

Ton objectif est de créer un nouveau composant `TodoList` avec le state `todos`
à l'intérieur ainsi que tous les composants qui sont liés aux todos.

Pourquoi ?

Car ce state n'est ni utiliser par notre `UserAnimalForm` ni par
notre `Counter`.

Donc il n'a pas ça place ici.

- 💌 Tu comprends qu'il faut repartir les states aux plus proches de leur
  usage dans des petits composants.

## Exercise 7 - Refactor... Again

Même chose pour Counter.

Tu peux simplement déplacer le state `count` dans le composant "Counter".

Effectivement le state `count` **n'est utiliser que dans `Counter`** ! Il n'a
pas sa place dans `App` mais dans `Counter`.

Voici à quoi devrait ressembler le composant App :

```jsx
const App = () => {
  return (
    <div>
      <Todo />
      <h2>Counter</h2>
      <Counter />
      <UserAnimalForm />
    </div>
  );
};
```

- 💌 Même les petits composants peuvent avoir un state si nécessaire.

## Conclusion

Effectivement ce genre d'exercise ne s'approche pas de cas réel. Ce qui est intéressant
avec le première exercise est de comprendre **comment** `useState` fonctionne
même si on découvriras de nouvelle chose par la suite.

Le second exercise permet quant à lui de **comprendre** et avoir la philosophie de
séparer les composants correctement.

J'ai vue tellement d'application avec des states globals alors qu'on aurait pus les
déplacer dans les enfants. Je souhaite vraiment que tu ai compris ce concept.
