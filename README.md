# CSS - The Complete Guide 2021 (incl. Flexbox, Grid & Sass) 🖌
## Course project

This repository contains a follow along project designed as material for the Udemy course mentioned below.

Course link :
https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/

Course authors : 
- [Maximilian Schwarzmüller](e.linkedin.com/in/maximilian-schwarzmüller-66b152a5)
- [Manuel Lorenz](https://www.linkedin.com/in/manuel-lorenz-808b5185/)

Credits : [Academind](https://academind.com/)

## 1. Getting Started

### 1.4. CSS History, Present & Future

Il n'y aura jamais de CSS version 4. Il a été jugé plus pertinent par l'équipe de développement d'organiser son travail autour de différents modules, chacun étant centré sur une fonctionnalité spécifique. Les modules, quant à eux, continuent d'apparaître et d'évoluer.

L'évolution du langage CSS peut être suivie via l'évolution des [standards du W3C](https://www.w3.org/TR/?tag=css).

## 2. Diving Into the Basics of CSS
### 2.3. Adding CSS to our Project with Inline Styles

3 façons d'appliquer du CSS sur une page :

- En ligne dans la balise HTML de l'élément ciblé, via l'attribut `style` :

  ```html
  <div style="color: blue; font-weight: 600;">
      Le contenu de ma div
  </div>
  ```
  Cette approche n'est généralement pas recommandée : dans un projet conséquent, la lisibilité et la maintenabilité du code sont affectées par le mélange des deux langages au sein d'une même ligne de code.

### 2.4. Understanding the &lt;style&gt; Tag & Creating a .css File

- Dans la balise `head` du fichier HTML, via la balise `style` et les sélecteurs CSS :

  ```html
  <head>
    <style>
        .myClass {
            color: blue;
            font-weight: 600;
        }
    </style>    
  </head>
  <body>
      <div class="myClass">
          Le contenu de ma div
      </div>
  </body>
  ```

- Dans un fichier `.css` référencé via une balise `link` dans la balise `head` du fichier HTML :

  `page.html` :

  ```html
  <head>
      <link rel="stylesheet" href="style.css"></link>
  </head>
  <body>
      <div class="myClass">
          Le contenu de ma div
      </div>
  </body>
  ```

  `style.css` :

  ```css
  .myClass {
      color: blue;
      font-weight: 600;
  }
  ```

  La dernière option est également plus maintenable notamment grâce à la séparation des responsabilités. De plus, lorsqu'un fichier CSS est utilisé dans plusieurs pages, la navigateur peut le mettre en cache ce qui permet un gain de performance.

### 2.6. Theory Time - Selectors

| Sélecteur | Sélecteur | S'applique à...                                              |
| --------- | --------- | ------------------------------------------------------------ |
| Balise    | `nom`     | Tous les élements portant ce nom                             |
| Classe    | `.nom`    | Tous les éléments dont l'attribut `class` contient ce nom (délimité par des espaces) |
| ID        | `#nom`    | L'élement dont l'attribut `id` est égal à ce nom             |
| Attribut  | `[nom]`   | Tous les éléments portant un attribut de ce nom              |

#### Le sélecteur `*`

Les règles CSS définies dans le contexte de ce sélecteur s'appliqueront à tous les éléments.

> **:bulb: Le langage CSS n'est pas sensible à la casse.**

### 2.7. Understanding the 'Cascading' Style & Specificity​

Le mot "*cascade*" dénote le fait qu'une même règle puisse être spécifiée plusieurs fois pour un même élément. Lorsque le contexte de spécification est identique, la règle définie le plus récemment prend le pas. Le reste du temps, la règle ayant la plus haute spécificité sera prioritaire.

La *spécificité* est la priorité donnée à une règle CSS en fonction du contexte dans lequel cette dernière a été définie.

![image-20210331154615407](C:\Users\batti\Documents\CSS\courseNotes\images\specificity.png)

### 2.8. Understanding Inheritance

Certaines règles CSS, notament celles qui concernent le formatage du texte, sont héritées de l'élément parent. Cependant l'héritage possède la spécificité la plus basse. Le mot clé `inherit` permet d'augmenter la spécificité d'un héritage.

### 2.10. Theory Time - Combinators

| Combinateur    | Notation | Effet                                          |
| -------------- | -------- | ---------------------------------------------- |
| Frère adjacent | A + B    | Tous les Bs qui **suivent immédiatement** un A |
| Frère général  | A ~ B    | Tous les Bs qui **suivent** un A               |
| Enfant         | A > B    | Tous les Bs **enfants directs** d'un A         |
| Descendant     | A B      | Tous les Bs **descendants** d'un A             |

Direct selectors usually have a slightly better performance than combinators.

### 2.11. Summarizing Properties & Selectors

Vocabulaire CSS :

```css
selecteur {
    propriete: valeur;
}
```

[Index des propriétés CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Reference)

![image-20210331164409975](C:\Users\batti\Documents\CSS\courseNotes\images\value-types.png)

### 2.15. Useful Resources & Links

- [Documentation CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

- [Référence des propriétés CSS usuelles](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)

- [Combinateurs CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)

- [Détails sur la Spécificité](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

## 3. Diving Deeper into CSS
### 3.2. Introducing the CSS Box Model

Chaque élément HTML est interprété comme une *boîte* par CSS.

![box-model.png](images/box-model.png)

### 3.4. Understanding Margin Collapsing and Removing Default Margins

Les marges de deux éléments adjacents se recoupent. Plus de détails [ici](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing).

### 3.6. Theory Time - Working with Shorthand Properties

![image-20210401104851887](C:\Users\batti\Documents\CSS\courseNotes\images\shorthand-properties.png)

### 3.8. Diving Into the Height & Width Properties

Les élements de [*niveau bloc*](https://fr.wikipedia.org/wiki/%C3%89l%C3%A9ment_HTML#Niveau_bloc_et_niveau_texte) ont par défaut une largeur qui occupe toute l'étendue de la page.

La largeur et la hauteur, exprimées en `%`, sont relatives à l'élément parent. 

> :bulb: **Pour exprimer la hauteur d'un élément en `%`, il faut que tous ses ancêtres jusqu'à l'élément HTML aient une hauteur définie.**

### 3.9. Understanding Box Sizing

La largeur et la hauteur sont par défaut spécifiées pour la boîte "contenu" de l'élément sélectionné. Ce comportement peut être modifié via la propriété [`box-sizing`](#box-sizing).

> :bulb: **Pour appliquer la propriété `box-sizing` par défaut à tous les éléments, il faut nécessairement utiliser le sélecteur universel**.

### 3.11. Understanding the Display Property

Voir l'annexe [`display`](#display).

### 3.12. display: none vs visibility: hidden

Alors que `display: none` supprime l'élément du *document flow*, `visibility: hidden` le rend simplement invisible, laissant un espace vide à sa place. Dans les deux cas, l'élément fait toujours partie du DOM.

### 3.14. Applying the Display Property & Styling our Navigation Bar

La fonction `calc` permet de calculer des valeurs en CSS.

### 3.19. Theory Time - Pseudo Classes & Pseudo Elements

Une pseudo-classe permet de définir des règles CSS pour un élément dans un certain état. 

Notation : `:nomClasse`

[Liste des pseudo-classes standard](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

Un pseudo élément permet de définir des règles CSS pour une certaine partie d'un élément. 

Notation : `::nomElement`

[Liste des pseudo-éléments standard](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-elements)

### 3.20. Grouping Rules

Il est possible de spécifier les mêmes règles pour plusieurs éléments en groupant les sélecteurs : 

```css
selecteur-a,
selecteur-b {
    propriete: valeur;
}
```

### 3.23. Adding a Background Image to our Project

la fonction `url` permet de pointer vers un fichier (une image par exemple).

### 3.24. Properties Worth to Remember

![image-20210404164930377](C:\Users\batti\Documents\CSS\courseNotes\images\common-properties.png)

### 3.27. Useful Resources & Links

[CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)

[`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

[More on height & width](https://www.w3schools.com/css/css_dimension.asp)

[The `display` Property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

## 4. More on Selectors & CSS Features
### 4.2. Using Multiple CSS Classes & Combined Selectors

Il est possible d'enchaîner les sélecteurs (sans espace) avant de définir des règles CSS. L'enchaînement agit comme l'opérateur logique ET.

```css
a.active {
    color: red;
}
```

Le texte d'un élément ancre possédant la classe active sera coloré en rouge.

### 4.3. Classes or IDs?

Généralement, on préfèrera utiliser une classe, même si un seul élément nécessite d'être stylisé. Il est conseillé de procéder ainsi car l'ID possède aussi un comportement non-lié au style : il crée une ancre à laquelle on peut accéder via l'URL sur la page.

### 4.4. (Not) using !important

L'annotation `!important` permet de s'affranchir de la spécificité et de forcer l'application de la règle. En général, l'utiliser est une mauvaise pratique, justement parce-que la spécificité est une fonctionnalité intégrée à CSS qui permet  de styliser les pages de manière propre.

### 4.5. Selecting the Opposite with :not()

Exemple d'utilisation :

```css
.customer:not(.registered) {
    color: grey;
}
```

### 4.6. CSS & Browser Support

La liste des navigateurs supportés est affichée pour chaque fonctionnalité dans la documentation officielle MDN.

[caniuse](https://caniuse.com/) : un site intéressant qui donne des détails sur le support du navigateur pour les fonctionnalités CSS ainsi que le pourcentage d'utilisateurs qui ont un navigateur capable de les interpréter.

## 5. Practicing the Basics
### 5.8. Understanding Outlines

La propriété `outline` est comparable à `border` mais ne fait pas partie du modèle de boîte. Elle apparaît à la limite entre la bordure et la marge.

### 5.11. Preparing the Content of the Key Feature Area

`margin: auto` centre l'élément au sein de l'espace horizontal disponible.

### 5.18. Adding 'float' to our Package

La propriété `float` permet de repositionner un élément sur la page. L'élément chevauche alors les autres éléments, et est bordé du texte qu'ils contiennent. 

![image-20210405084829790](C:\Users\batti\Documents\CSS\courseNotes\images\float-illustration.png)

L'astuce "clearfix" permet de rendre ineffectif le chevauchement. Il s'agit d'insérer une `div` entre les deux conteneurs :

```html
<div class="conteneur-a"></div>
<div class="clearfix"></div>
<div class="conteneur-b"></div>
```

Et d'y appliquer la règle `clear: both` :

```css
.conteneur-a {
    float: right
}

.clearfix {
    clear: both
}
```

De nos jours ils est préférable d'utiliser les flexboxes. 

[La propriété `float`](More on float: https://developer.mozilla.org/en-US/docs/Web/CSS/float)

[La propriété `clear`](https://developer.mozilla.org/fr/docs/Web/CSS/clear)

## 6. Positioning Elements with CSS
### 6.3. Understanding Positioning - The Theory

La propriété `position` définit la façon dont les éléments sont placés sur la page.

| Valeur            | Comportement                                                 |
| ----------------- | ------------------------------------------------------------ |
| `static` (défaut) | Les éléments sont positionnés suivant le *document flow* (comportement classique, les blocs occupent la largeur et sont placés les uns au dessus des autres). |
| absolute          | Deux cas de figure se présentent :<br /><br />  - Aucun des ancêtres de l'élément n'a de propriété `position` autre que `static` ; le contexte de positionnement est alors l'élément `<html>`.<br /><br />  - Dans le cas contraire, le contexte de positionnement est l'ancêtre le plus proche ayant une propriété `position` différente de `static`. |
| relative          | Le contexte de positionnement est l'élément lui-même.        |
| fixed             | Les éléments sont positionnés relativement au viewport et se comportent comme des `inline-block`. |
| sticky            | Dès lors que la propriété `top` est définie pour un élément `sticky`, il est "emporté" lors du défilement par le haut du *viewport* (à la distance spécifiée), et "s'arrête" avec la fin du contenu de l'élément parent. |

Lorsque la propriété `position` n'a pas pour valeur `static`, il est nécessaire de spécifier une ou plusieurs des propriétés suivantes pour positionner l'élément : `top`, `right`, `bottom`, et `left`. Cette spécification peut être relative à l'élément lui-même (à sa position statique), à un autre élément ou au *viewport*.

### 6.4. Working with the 'fixed' Value

Dès que la valeur `fixed` est appliquée à la propriété `position`, l'élément est retiré du *document flow*. Suite à cette modification, l'élément se comporte aussi comme un `inline-block` (qu'il soit initialement de type `block` ou `inline`) :

![image-20210405184633722](C:\Users\batti\Documents\CSS\courseNotes\images\fixed-1.png)

Avec cette valeur, le **contexte de positionnement** (référence des propriétés `top`, `right`, `bottom`, et `left`) est le *viewport*.

### 6.7. Understanding the Z-Index

La propriété `z-index` permet de contrôler la façon dont les éléments se superposent. Une valeur élevée sera plus proche des yeux de l'utilisateur, alors qu'une valeur faible en sera plus éloignée. La valeur par défaut est `auto`, ce qui correspond à `0`.

Cette propriété ne peut être modifiée que pour les éléments dont la propriété `position` est différente de `static`.

En cas d'égalité du `z-index` entre deux éléments se chevauchant, celui qui apparaît en dernier dans le HTML est placé au dessus de l'autre.

Le `z-index` n'a de sens qu'entre éléments frères (*stacking context*). Dans certains cas, le *stacking context* n'apparaît pour un élément que lorsque son `z-index` est défini.

### 6.12. Working with 'overflow' and Relative Positioning

La propriété `overflow` permet de définir la visibilité des descendants de l'élément en question lorsqu'ils sont situés hors de la boîte de l'élément en question. La valeur `hidden` permet de ne pas les afficher.

> :bulb: **Lorsqu'on applique la propriété `overflow` au `body`, il est nécessaire de l'appliquer également à l'élément `html`, sinon la propriété remonte à ce dernier et n'est pas appliquée au `body`.

### 6.17. Useful Resources & Links

[Positioning theory](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)

[More about the "position" property](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

[The z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

[The Stacking Context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)

## 7. Understanding Background Images & Images
### 7.3. Understanding 'background-size'

| Valeur                  | Effet                                                        |
| ----------------------- | ------------------------------------------------------------ |
| `...px`, `...%`, `auto` | Spécifie la largeur. Avec deux valeurs, la largeur et la hauteur. Remplacer une des deux par `auto` conserve le ratio de l'image. |
| `cover`                 | Le ratio est conservé. Un des côtés de l'image est visible à 100%. Le conteneur est couvert dans sa totalité quelle que soit l'orientation du *viewport*. L'image est rognée. |
| `contain`               | Le ratio est conservé. Les deux côtés de l'image sont visibles à 100%. Le conteneur n'est pas couvert dans sa totalité. L'image s'affiche en entier. |

Propriété `background-repeat` : répéter ou non l'image pour couvrir le conteneur.

### 7.4. Working with 'background-position'

| Valeur                        | Effet                                                        |
| ----------------------------- | ------------------------------------------------------------ |
| `...px`, `...%`               | Définit la distance de l'image de fond au bord du conteneur selon les axes x puis y. Pour les valeurs en %, c'est la distribution des parties de l'image "invisibles" suivant cet axe qui est spécifiée. |
| `center`                      | L'image est centrée                                          |
| `top`/`bottom` `left`/`right` | Seulement la ou les parties spécifiées ne sont pas rognées.  |

### 7.5. The 'background' Shorthand - Theory

![image-20210406092734688](C:\Users\batti\Documents\CSS\courseNotes\images\background-shorthand.png)

### 7.6. Applying 'background' Origin, Clip & Attachment

La propriété `background-origin` permet de spécifier à quelle partie du modèle de boîte l'image d'arrière plan est circonscrite.

La propriété `background-clip` permet de spécifier à partir de quel élément du modèle de boîte l'image est rognée.

La propriété `background-attachment` permet de définir le comportement du défilement au sein du conteneur.

### 7.8. Styling Images

Modifier les dimensions du conteneur n'affecte la taille d'une image que si celui-ci est de type `block` ou `inline-block`.

### 7.10. Working on the Image Layout

La propriété `vertical-align` permet de contrôler l'alignement du contenu d'un élément `block` ou  `inline-block`.

> :bulb:  **Les images sont par défaut des éléments en ligne, et une marge entre leur bord et le bord de leur conteneur de type `block`. Il s'agit d'un bug et pour y remédier il suffit de spécifier la règle `vertical-align: top`.** 

### 7.11. Understanding Linear Gradients

La fonction `linear-gradient` prend comme premier argument la direction : `to bottom/top left/right / xdeg` (optionnel), puis la suite de couleurs utilisées pour le dégradé (au moins 2). 

`transparent` est une valeur de couleur acceptée. 

Il est possible de spécifier après chaque couleur son "point d'arrêt" en % (séparer la couleur et cette valeur d'un espace).

### 7.12. Applying Radial Gradients

Pour la fonction `radial-gradient`, le premier argument peut être `circle`, la seule alternative à l'ellipse présente par défaut. 

Le second argument permet de spécifier le centre du cercle ou de l'ellipse : `at bottom/top left/right / x% y%`. 

Tout comme le gradient linéaire, il est possible de définir des "points d'arrêt" pour les couleurs. 

Juste après la forme on peut spécifier le/les rayon(s) du cercle ou de l'ellipse (sans la dernière couleur) en `px`. Des mots-clés aussi disponibles pour ces dimensions : `closest/farthest-side/corner`. 

### 7.13. Stacking Multiple Backgrounds

Pour empiler des images de fond, il suffit de les séparer par des virgules lors de la définition du raccourci `background`. Il est possible d'utiliser plusieurs images ou dégradés, et une seule couleur.

### 7.14. Understanding Filters

[La fonction filter en détail](https://developer.mozilla.org/en-US/docs/Web/CSS/filter).

### 7.17. Useful Resources & Links

[La propriété `background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

[Styliser les images](https://www.w3schools.com/css/css3_images.asp)

[Styliser les SVGs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)

## 8. Sizes & Units
### 8.3. Where Units Matter

| Unité          | Comportement                                                 |
| -------------- | ------------------------------------------------------------ |
| `px`           | Définit la taille de manière absolue                         |
| `%`            | Définit la taille relativement à d'autres éléments           |
| `rem`          | *root empheral unit* : Définit la taille relativement à la taille de caractères de l'élément `html`. Si non-spécifiée, il s'agit de la taille définie par le navigateur |
| `em`           | *empheral unit* : Définit la taille relativement à la taille de caractères du parent. Si celle-ci n'est pas spécifiée, le principe de l'héritage s'applique |
| `vh`           | *viewport height* : Définit la taille relativement à la hauteur *viewport* |
| `vw`           | *viewport width* : Définit la taille relativement à la largeur *viewport* |
| `vmin`, `vmax` | Équivalent de `vh` ou `vw`, en fonction de la plus petite ou de la plus grande dimension du viewport. |

![image-20210407180734889](C:\Users\batti\Documents\CSS\courseNotes\images\units-properties.png)

### 8.4. An Overview of Available Sizes & Units

![image-20210407181054203](C:\Users\batti\Documents\CSS\courseNotes\images\available-units-1.png)

![image-20210407181146289](C:\Users\batti\Documents\CSS\courseNotes\images\available-units-2.png)

### 8.5. Rules to Remember: Fixed Positioning & '%'

Avec `position: fixed`, la référence est le *viewport*.

### 8.6. Rules to Remember: Absolute Positioning & '%'

Avec `position: absolute`, l'élément de référence est l'ancêtre n'ayant pas sa position fixée à `static` le plus proche, *padding* inclus.

### 8.7. Rules to Remember: Relative / Static Positioning & '%'

Avec `position: relative` ou `position: static`, l'élement de référence est l'ancêtre de type `block` le plus proche, limité au contenu.

![image-20210407182527837](C:\Users\batti\Documents\CSS\courseNotes\images\containing-block.png)

### 8.15. Windows, Viewport Units & Scrollbars

Attention : sur les machines Windows` width: 100vh` fera apparaître une barre de défilement horizontale.

### 8.16. Choosing the Right Unit

![image-20210407214726052](C:\Users\batti\Documents\CSS\courseNotes\images\choosing-unit.png)

## 9. Working with JavaScript & CSS
### 9.8. Manipulating Element Classes

Plutôt que d'éditer la propriété `style` d'un élément vie JavaScript, il est également possible d'y ajouter ou enlever des classes définies dans les fichiers CSS.

## 10. Making our Website Responsive

Il est conseillé de développer le site "*mobile first*", c'est à dire de développer la version mobile puis d'ajouter des *breakpoints* à partir de certaines valeurs minimales de dimension d'écran pour travailler la ou les versions *desktop*.

### 10.3. Understanding Hardware Pixels vs. Software Pixels

Les mobiles ont des densités de pixel de plus en plus élevées.

[Ratio pixel CSS / pixel physique](https://www.mydevice.io/)

Un tag HTML est nécessaire pour harmoniser les pixels entre différents appareils mobiles.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 10.4. Comparing the Viewport Metatag (HTML) and Media Queries (CSS)

Le tag HTML `<meta name="viewport">` est nécessaire pour adapter le site au *viewport* de l'appareil.

Les *media queries* permettent de spécifier des règles CSS en fonction des dimensions de l'appareil.

### 10.5. Understanding the 'viewport' Metatag

L'attribut `name` prend la valeur `viewport`, et permet de spécifier la cible du tag `meta`.

Le paramètre `width` de l'attribut `content` permet de spécifier la largeur du viewport en fonction des pixels logiciels de l'appareil (conversion appliquée sur les pixels physiques). 

Le paramètre `initial-scale` permet de définir le niveau de zoom initial. `maximum-scale` et `minimum-scale` permettent de limiter les zooms maximal et minimal. 

Le paramètre `user-scalable` prend la valeur `yes` ou `no` et permet d'autoriser ou non l'utilisateur à zoomer sur le site.

### 10.9. Finding the Right Breaking Points

Les appareils les plus populaires sont listés [ici](https://www.mydevice.io/).

### 10.14. Working with Logical Operators

Il est possible de spécifier des *media queries* plus complexes en utilisant des opérateurs logiques (`and` et `,`).

Les media queries peuvent aussi s'appliquer en fonction de l'orientation de l'écran (paramètre : `orientation`, mots clé : `portrait` / `landscape`).

### 10.20. Useful Resources & Links

[Absolute lengths on W3.org](https://www.w3.org/TR/css-values-3/#absolute-lengths)

[More about device sizes](https://bjango.com/articles/min-device-pixel-ratio/)

[Media queries theory](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)

[Applying media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

## 11. Adding & Styling Forms

### 11.3. Page Initialization

Pour que les éléments de formulaire occupent l'espace, il ne suffit pas de spécifier `display: block`. Il faut également leur donner une `width`.

### 11.4. Understanding Advanced Attribute Selectors

![image-20210409190653087](C:\Users\batti\AppData\Roaming\Typora\typora-user-images\image-20210409190653087.png)

### 11.6. Restyling the Form Elements

La plupart des éléments de formulaires on des styles prédéfinis. Il faut donc les écraser. 

Certains éléments particuliers comme les `input` de type `checkbox` et de type `select` (assez logiquement tous les éléments à données dynamiques) ne sont pas toujours affectés par les styles CSS.

### 11.7. Styling the Checkbox

Pour désactiver le style par défaut des checkbox, il est notamment nécessaire d'y ajouter les règles suivantes :

```css
input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
```

Dans ce cas, il sera également nécessaire de spécifier à la fois les règles de style de la box cochée (à l'aide de la pseudo-classe `:checked`) et de la box non-cochée.

### 11.8. Providing Validation Feedback

2 possibilités : la plus personnalisable est de définir ses propres classes `.valid` et `.invalid`, et de les ajouter dynamiquement via javascript ou lorsque le serveur renvoie la page.

La seconde est d'utiliser les pseudo-classes `:valid` et `:invalid`, ce qui présente l'avantage de pouvoir utiliser les validateurs intégrés aux navigateurs, pour les adresses email par exemple. Cependant, garder en mémoire que les éléments de formulaires invalides le seront dès le chargement de la page.

### 11.12. Useful Resources & Links

[Styling Form Elements](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Styling_HTML_forms)

[Styling a `<select>` Element](https://stackoverflow.com/questions/1895476/how-to-style-a-select-dropdown-with-css-only-without-javascript)

## 12. Working with Text and Fonts

### 12.2. Comparing Generic Families & Font Families

![image-20210409225725380](C:\Users\batti\Documents\CSS\courseNotes\images\generic&font-families.png)

### 12.3. Understanding the Browser Settings

![image-20210409230137638](C:\Users\batti\Documents\CSS\courseNotes\images\browser settings.png)

### 12.9. Importing our Custom Fonts

Il est possible dimporter sa propre police pourvu qu'elle soit accessible depuis un serveur. La syntaxe est la suivante :

```css
@font-face {
    font-family: "Nom de référence";
    src: 
        url("https://mondomaine.com/assets/maPolice.woff2") format("woff2"),
        url("https://mondomaine.com/assets/maPolice.woff") format("woff"),
        url("https://mondomaine.com/assets/maPolice.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}
```

### 12.10. Understanding Font Formats

Les différents navigateurs sont capables d'interpréter différents formats de polices. Le plus répandu est `.ttf` (truetype font) mais il existe également `.woff` (web open font format) qui est bien supporté et plus léger. `woff2` sont petit-frère est encore plus performant.

### 12.11. Diving into Font Properties

`font-variant` permet d'utiliser les petites majuscules.

`font-stretch` permet de définir la largeur des lettres. Cependant, il font qu'une `font-face` soit présente ou importée pour chaque valeur de *stretch*.

### 12.12. Adding "letter-spacing"

`letter-spacing` permet de définir l'espacement entre les lettres.

`white-space` définit l'interprétation des espaces et retours à la ligne au sein des éléments stylisés.

### 12.13. Changing the Line Height

`line-height` définit la hauteur de ligne en multiple de la taille de la police.

### 12.14. Applying "text-decoration" & "text-shadow"

`text-decoration` permet de modifier la mise en valeur du texte.

### 12.15. Understanding the "font" Shorthand

https://www.w3schools.com/css/css_font_shorthand.asp

L'ordre est important pour que le raccourci fonctionne. Il est aussi possible de se référer à des polices système par défaut.

### 12.16. Loading Performance & "font-display"

`font-display` définit le comportement du chargement **d'une police personnalisée**.

![image-20210410001610717](C:\Users\batti\Documents\CSS\courseNotes\images\font-display.png)

### 12.18. Useful Resources & Links

## 13. Adding Flexbox to our Project

### 13.4. Understanding Flexbox

L'élément sur lequel on définit la règle `display: flex` est l'élément conteneur ("*flex container*"). Ses enfants sont les "*flex items*". Le conteneur et ses enfants ont accès à des propriétés différentes :

![image-20210410101438283](C:\Users\batti\Documents\CSS\courseNotes\images\understanding-flexbox.png)

### 13.5. Creating a Flex Container

Dans un conteneur `flex`, les éléments rétrécissent et s'arrêtent à la limite de leur contenu. Dans un conteneur `inline-flex`, les éléments ne rétrécissent pas.

### 13.6. Using "flex-direction" & "flex-wrap"

Par défaut, on a `flex-direction: row` et `flex-wrap: nowrap`.

#### `flex-wrap`

| Valeur            | Effet                                                        |
| ----------------- | ------------------------------------------------------------ |
| `nowrap` (défaut) | Les éléments restent sur la même ligne et rétrécissent jusqu'à la limite du contenu. |
| `wrap`            | Les éléments passent à la ligne à la limite de leur largeur définie, puis rétrécissent jusqu'à la limite de leur contenu. |
| `wrap-reverse`    | Les éléments passent à la ligne de la même façon, mais l'ordre est inversé. |

Attention, ces définitions sont valables pour une `flex-direction: row`. C'est plus facile à visualiser, mais pour généraliser on peut dire que la propriété wrap définit l'alignement des *items* suivant la direction normale à la `flex-direction`.

#### `flex-direction`

| Valeur           | Effet                                                        |
| ---------------- | ------------------------------------------------------------ |
| `row`            | Les *items* sont affichés en ligne.                          |
| `column`         | Les *items* sont affichés en colonne (`wrap-reverse` les aligne à droite). |
| `row-reverse`    | Les *items* sont affichés en ligne, dans le sens inverse de leur définition. |
| `column-reverse` | Les *items* sont affichés en colonne, dans le sens inverse de leur définition. |

### 13.7. Understanding the Importance of Main Axis & Cross Axis

![image-20210410142818372](C:\Users\batti\Documents\CSS\courseNotes\images\main&cross-axis.png)

### 13.8. Working with "align-items" & "justify-content"

#### ![image-20210410145258063](C:\Users\batti\Documents\CSS\courseNotes\images\align-items&justify-content.png)

### 13.9. And What About "align-content"?

Définit l'alignement le long de l'axe normal lorsque plusieurs lignes le long de l'axe principal.

### 13.14. Flexbox and the Z-Index

Le `z-index` est disponible pour les *flex items* même si aucune valeur n'a été spécifiée pour leur propriété `position`.

### 13.18. Using the "order" Property for a Flex Item

La propriété `order` appliquée sur un *flex item* permet de modifier la position de ce dernier dans le conteneur.

### 13.19. Working with "align-self"

La propriété `align-self` appliquée sur un *flex item* permet de modifier l'alignement individuel de ce dernier au sein du conteneur, le long de l'axe transversal.

### 13.20. Understanding "flex-grow"

La propriété `flex-grow` appliquée sur un *flex item* permet de définir la propention de ce dernier à s'agrandir suivant l'axe principal. Si un item a 1 pour valeur et l'autre 2, l'item prendra 1/3 de l'agrandissiment et l'autre 2/3. Valeur par défaut : 0 (pas d'agrandissement).

### 13.21. Applying "flex-shrink"

La propriété `flex-shrink` définit la façon dont les *flex items* rétrécissent suivant le même fonctionnement. Sa valeur par défaut est 1.

### 13.22. Comparing "flex-basis" vs "width" & "height"

La propriété `flex-basis` permet de définir la dimension du *flex item* suivant l'axe principal. Sa valeur par défaut est `auto`. Il existe le raccourci `flex` pour définir à la fois `flex-grow`, `flex-shrink` et `flex-basis` (dans cet ordre spécifique).

### 13.24. Useful Resources & Links

[Théorie flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

## 14. Using the CSS Grid

### 14.5. Defining Columns & Rows

Pour définir les colonnes, on utilise la propriété `grid-template-columns`. Il suffit alors de spécifier une largeur pour chaque colonne de la grid, séparée par un espace. Une unité spécifique à la grid est disponible : `fr`. Le nombre de `fr` est la proportion de l'espace disponible restant qui sera attribué à la colonne. `auto` fait en sorte que la colonne ou la ligne occupent le reste de l'espace disponible (en réservant assez d'espace pour afficher le contenu).

La propriété `grid-template-rows` permet de la même façon de définir la hauteur des lignes. Les lignes non-spécifiées prennent la hauteur de leur contenu par défaut, mais il est également possible de modifier la hauteur par défaut.

### 14.6. Positioning Child Elements in a Grid

La grid fonctionne en positionnant des droites qui délimitent ses lignes et ses colonnes. Ces droites sont référencées par des numéros.

Avec l'aide de ces droites, et des propriétés `grid-column(row)-start(end)`, il est possible de définir le positionnement et l'étendue de chaque enfant du conteneur. Pour les propriétés `-end`, il est également possible de spécifier `span n`, où n est le nombre de lignes/colonnes occupées par la cellule.

### 14.7. Using "element-sizing", "repeat" & "minmax"

La fonction CSS `repeat` permet de répéter une chaîne de caractères dans le code :

```css
.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
```

Le code ci-dessus créera une grid de 4 colonnes de même taille.

La fonction CSS `minmax` permet de spécifier la valeur maximum et minimum de la dimension d'une ligne ou d'une colonne.

### 14.8. Advanced Element Positioning

Les éléments seront automatiquement déplacés si ils se superposent, à moins que leurs positions aient été explicitement définies. Dans ce cas, ils restent superposés.

### 14.9. Working with Named Lines

Il est possible de nommer les lignes utilisées par la grid :

```css
.container {
    display: grid;
    grid-template-rows: [row-1-start] 1fr [row-1-end row-2-start] 1fr [row-2-end];
}
```

Comme montré dans l'exemple ci-dessus, il est également possible de donner deux noms différent à la même ligne. Les lignes sont par la suite référencées sans les crochets.

### 14.11. Understanding Column & Row Shorthands

Les raccourcis `grid-column` et `grid-row` permettent de résumer le positionnement des cellules.

Il existe également la propriété `grid-area` qui permet de spécifier, dans l'ordre indiqué : 

- début de la ligne
- début de la colonne
- fin de la ligne
- fin de la colonne

Les valeurs  sont séparées par un `/`.

### 14.12. Working with Gaps

Il est possible de séparer les lignes et les colonnes au niveau du container via les propriétés `column-gap` et `row-gap`. Le raccourci `gap` permet de spécifier ces deux valeurs d'un coup en les séparant par un espace.

### 14.13. Adding Named Template Areas

Il est possible de définir des zones à l'avance après avoir spécifié les colonnes et les lignes de la grid :

```css
.container {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 15% auto 15%;
    grid-template-areas: 
        "header header header header" 
        "side   main   main   main"
        "footer footer footer footer";
}

.header {
    background: rgba(255, 154, 72, 0.5);
    grid-area: header;
}

/* ... */
```

Les zones devant rester vides sont simplement labellisées "`.`".

![image-20210412165125908](C:\Users\batti\AppData\Roaming\Typora\typora-user-images\image-20210412165125908.png)

> :bulb:  **Les grid-areas doivent absolument être de forme rectangulaire.**

### 14.15. Creating Automatically Generated Grid Areas

Il est possible de créer plusieurs droites-support portant le même nom. Lors du référencement des ces droites, il suffira de spécifier le numéro de la droite après son nom suivi d'un espace.

Un ensemble de cellules délimitées par 4 droites, `x-start` et `x-end` pour les lignes, `x-start` et `x-end ` pour les colonnes (`x` pouvant être remplacé par n'importe quelle chaîne de caractères), sera automatiquement considéré comme une *area* et nommé `x`.

### 14.16. Using the Grid on our Project

Les éléments qui ne font pas partie du *document flow* ne font pas partie de la grid.

### 14.17. Working with "fit-content"

La fonction `fit-content` permet de spécifier une dimension minimale, qui sera agrandie pour faire rentrer le contenu le cas échéant.

### 14.18. Positioning Grid Elements

La propriété `justify-items` permet de justifier les éléments horizontalement. Valeurs possibles : `center`, `start`, `end`, `stretch` (défaut). Si la valeur n'est pas `stretch`, la largeur des éléments sera par défaut celle de leur contenu.

`align-items` permet de justifier les éléments verticalement. Les valeurs possibles sont les mêmes.

### 14.19. Positioning the Entire Grid Content

Il est possible d'avoir une grid de dimension plus grande que son contenu. Dans ce cas il est possible de positionner l'ensemble du contenu au sein de l'espace disponible :

`justify-content` permet de le faire horizontalement. `align-content` permet de le faire verticalement. Les valeurs pouvant être prises par ces propriétés sont les mêmes que pour le 14.18.

### 14.20. Positioning Elements Individually

`justify-self` et `align-self` permettent de placer l'élément individuellement au sein de sa cellule. Une nouvelle fois, les valeurs possibles sont identiques.

### 14.22. Applying Autoflow

Il est possible de modifier la hauteur par défaut de lignes générées automatiquement via la propriété `grid-auto-rows`.

La propriété `grid-auto-flow` permet de modifier la façon dont de nouveau éléments sont automatiquement placés au sein de la grid. La valeur par défaut est `row`, c'est-à-dire que de nouvelles lignes seront automatiquement créées pour contenir les nouveaux éléments.

Si `grid-auto-flow` est paramétré sur `column`, il est possible de spécifier la largeur des colonnes générées automatiquement en utilisant la propriété `grid-auto-columns`.

### 14.24. Understanding "auto-fill" & "auto-fit"

Il est possible d'utiliser la valeur `auto-fill` dans la fonction `repeat` utilisée comme valeur de la propriété `grid-template-columns` ou `grid-template-rows`, afin que le nombre d'éléments sur l'axe soit calculé automatiquement en fonction de l'espace disponible.

L'alternative `auto-fit` a le même comportement, mais fait aussi en sorte que le contenu soit centré si l'espace de la grid n'est pas entièrement occupé.

### 14.25. Creating a Dense Grid

Il est possible d'ajouter la valeur `dense` à la valeur déjà présente dans la propriété `grid-auto-flow`. Les cellules non occupées par manque de place seront alors si possible occupées par d'autres éléments, même si l'ordre du DOM n'est plus respecté.

### 14.27. Comparing Grid & Flexbox

![image-20210413173344398](C:\Users\batti\Documents\CSS\courseNotes\images\grid-vs-flexbox-1.png)

### 14.30. Useful Resources & Links

[A really great article series on the CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

[A complete guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 15. Transforming Elements with CSS Transforms

### 15.2. Rotating Elements and setting transform-origin

La propriété permettant d'appliquer des transformations aux éléments est `transform`.

| Fonction                        | Paramètres | Effet                                                        |
| ------------------------------- | ---------- | ------------------------------------------------------------ |
| `rotateZ()`                     | `xdeg`     | Applique une rotation de `x` degrés sur l'élément            |
| `translateX()` / `translateY()` | distance   | Applique une translation de la distance spécifiée suivant l'axe correspondant |
| `skewX() / skewY()`             | `xdeg`     | Applique un cisaillement de `x` degrés sur l'élément         |
| `scale()`                       | `x`        | Applique un coefficient multiplicateur de `x` sur la taille de l'élément |

La propriété `transform-origin` permet de spécifier le point invariant de l'élément lors de la transformation. Par défaut, la valeur est `center`, mais il est possible d'utiliser n'importe-quelle combinaison (ou pas) de `top` / `bottom` + `left` / `right`. Il est aussi possible de spécifier le point en coordonnées cartésiennes.

### 15.6. Rotating Elements in 3 Dimensions

![image-20210413190009888](C:\Users\batti\Documents\CSS\courseNotes\images\rotate-3d.png)

### 15.7. Understanding the "perspective" Property

La fonction `perspective()` appliquée sur la propriété `transform` de l'élément permet de spécifier la distance à l'élément.  Les propriétés `perspective` et `perspective-origin` appliquées sur des conteneurs permettent repectivement de spécifier la distance et le point de vue par rapport aux éléments enfants.

### 15.9. Rotating the Container with "transform style"

La propriété `transform-style` définit si  les éléments-fils d'un éléments sont positionnés dans l'espace  tridimensionnel ou s'ils sont aplatis dans le plan de l'élément. (source: MDN)

### 15.10. Flipping Elements & "backface-visibility"

La propriété `backface-viibility` permet de définir la visibilité des éléments qui "tournent le dos" à l'utilisateur.

### 15.12. Useful Resources & Links

[CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)

[3D Transforms](https://desandro.github.io/3dtransforms/)

## 16. Transitions & Animations in CSS

### 16.2. Understanding and Applying Transitions

![image-20210413210047305](C:\Users\batti\Documents\CSS\courseNotes\images\transition-theory.png)

### 16.3. CSS "transition" Property Deep Dive

La propriété `transition` permet de "surveiller" certaines propriétés et d'appliquer une transition lorsque celles-ci sont modifiées, en spécifiant la durée de la transition. Il est également possible de définir une fonction temporelle, qui rendra la transition non-linéaire du temps. Le quatrième paramètre peut définir un délai avant que la transition ne s'exécute. Voici un exemple :

```css
.element {
    transition: opacity 200ms ease-out 1s, transform 500ms;
}
```

### 16.4. Working with Timing Functions

![image-20210413213226708](C:\Users\batti\Documents\CSS\courseNotes\images\timing-function.png)

Référence : https://easings.net/fr

En examinant les transitions avec les outils développeurs Chrome, il est facile de visualiser et de créer ses propres fonctions temporelles.

### 16.5. Transitions & "display"

La propriété `display` n'est pas "surveillable". De plus, lors de son changement, les transitions surveillant d'autres propriétés sur l'élément concerné ne se jouent pas.

La solution est légèrement alambiquée, il faut en fait se servir d'un timeout en javascript pour s'assurer que le changement de `display` et la transition se font séquentiellement.

### 16.7. Using CSS Animations

![image-20210413230306624](C:\Users\batti\Documents\CSS\courseNotes\images\css-animations.png)

Les animations permettent un contrôle plus fin que les transitions en définissant des états transitoires aussi appelés *keyframes*. Voici une déclaration simple : 

```css
@keyframes wiggle {
    from {
        transform: rotateZ(0);
    } to {
        transform: rotateZ(10deg);
    }
}
```

Il est possible de spécifier plus que deux *keyframes*, en spécifiant le %age de l'animation à la place des mots-clé `from` et `to`.

Puis son utilisation :

```css
.some-class {
    animation: wiggle 200ms 3s 8 alternate;
}
```

Les paramètres sont, dans l'ordre : 

- Le nom de l'animation
- La durée de l'animation
- Le délai de départ de l'animation
- Le nombre de cycles
- Le type de cycle :
  - `alternate` : animation enchaînée avec retour
  - `reverse` : animation inversée
  - ... (voir doc)
- Un dernier paramètre peut éventuellement être ajouté, pour définir la façon dont les styles s'appliquent à l'élément avant et après l'animation.

### 16.8. CSS "animation" Property Deep Dive

### 16.12. Using JavaScript Animation Event Listeners

Il existe 3 *event listeners* pour surveiller l'évolution des animations en javascript : `animationstart`, `animationend`, `animationiteration`.

### 16.14. Useful Resources & Links

[CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

[CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

[List of "transitionable" Properties](https://www.w3.org/TR/css-transitions-1/#animatable-properties)

## 17. Writing Future-Proof CSS Code

### 17.2. CSS Modules & Their Working Groups

Groupes de travail, recommandations et mises à l'essai de certaines fonctionnalités : https://www.w3.org/TR/?tag=css

### 17.3. Using CSS Variables

![image-20210414151143072](C:\Users\batti\Documents\CSS\courseNotes\images\css-variables.png)

Attention : IE11 ne supporte pas cette fonctionnalité.

### 17.4. Understanding & Using Vendor Prefixes

Au début de leur implémentation, les propriétés CSS sont préfixées (préfixe différent en fonction du navigateur). Cela permet aux navigateurs de tester les fonctionnalités, puis de les modifier si besoin avant de déterminer la propriété finale, qui prendra le nom universel. Ainsi, les sites créés avant l'implémentation finale ne seront pas cassés si le fonctionnement de la propriété change.

Il peut être intéressant d'utiliser les préfixes, car cela permet parfois à d'anciennes versions des navigateurs de supporter la fonctionnalité en question.

### 17.5. Which Prefixes Should You Use?

http://shouldiprefix.com/

Il existe un outil permettant d'automatiser l'utilisation de préfixes : https://github.com/postcss/autoprefixer

### 17.6. Detecting Browser Support with @supports

```css
@supports (display: grid) {
    .container {
        display: grid;
    }
}
```

Possibilité d'ajouter des opérateurs `and`, `or` et `not`.

`@supports` n'est pas supportée par tous les navigateurs, mais si le navigateur ne comprend pas cette règle il prendra celles par défaut, qui sont censées être supportées par la majorité des navigateurs.

### 17.7. Polyfills

Un polyfill est un package Javascript qui permet d'utiliser certaines fonctionnalités CSS dans des navigateurs qui ne l'implémentent pas.

> :bulb:  **Attention: les polyfills ont un coût en terme de performances !**

https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills

### 17.8. Eliminating Cross-Browser Inconsistencies

![image-20210414155338719](C:\Users\batti\Documents\CSS\courseNotes\images\browser-defaults.png)

Attention, l'utilisation d'un package peut aussi avoit un coût de performance.

### 17.9. How to Name CSS Classes

![image-20210414155707054](C:\Users\batti\AppData\Roaming\Typora\typora-user-images\image-20210414155707054.png)

![image-20210414155915391](C:\Users\batti\Documents\CSS\courseNotes\images\bem.png)

http://getbem.com/introduction/

### 17.10. Vanilla CSS vs Frameworks

![image-20210414160224576](C:\Users\batti\Documents\CSS\courseNotes\images\frameworks.png)

![image-20210414160810664](C:\Users\batti\Documents\CSS\courseNotes\images\css-vs-frameworks.png)

### 17.12. Useful Resources & Links

## 18. Introducing Sass (Syntactically Awesome Style Sheets)

### 18.2. What is Sass & Scss?

![image-20210414161313425](C:\Users\batti\Documents\CSS\courseNotes\images\sass.png)

![image-20210414161358279](C:\Users\batti\Documents\CSS\courseNotes\images\sass-features.png)

### 18.6. Nesting Selectors

Il est possible d'imbriquer des sélecteurs les uns dans les autres, répliquant la structure du HTML.

### 18.7. Adding Nested Properties

Il est possible d'utiliser les espaces de nommage des propriétés possédant le même préfixe :

```scss
.flexbox {
    flex: {
        direction: column;
        wrap: nowrap;
    }
}
```

### 18.8. Understanding Variables

Voici la syntaxe :

```scss
$main-color: #521751;

.el {
    color: $main-color;
}
```

### 18.9. Storing Lists & Maps in Variables

Voici la syntaxe pour les listes :

```scss
$main-color: #521751;
$border-default: 0.05rem solid $main-color;

.el {
    border: $border-default;
}
```

La syntaxe pour les *maps* :

```scss
$main-color: #521751;
$colors: (
  main: $main-color,
  secondary: #fa923f
);

.el {
    color: map-get($colors, secondary);
}
```

### 18.10. Built-In Functions

https://sass-lang.com/documentation/modules

### 18.12. Adding Simple Arithmetics

Il est possible d'utiliser les opérateurs arithmétiques de base sur les propriété numériques.

### 18.13. Adding Better Import and Partials

Il est possible d'importer des fichiers `.sass` qui seront lus et intégrés au fichier final, à l'aide d'une déclaration `@import`. 

> :bulb:  **La déclaration `@import` est aussi supportée en Vanilla CSS!**

### 18.14. Improving Media Queries

Les *media queries* peuvent aussi être imbriquées dans les éléments :

```scss
.el {
    width: 70%;
    
    @media (min-width: 40rem) {
        width: 90%
    }
}
```

### 18.15. Understanding Inheritance

Syntaxe :

```scss
.parent {
    color: blue;
}
.child {
    @extend .parent;
    background: red;
}
```

### 18.16. Adding Mixins

Les *mixins* sont l'équivalent de fonctions :

```scss
@mixin display-flex() {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.flexbox {
    @include display-flex();
}
```

Il est également possible d'ajouter des paramètres, et de personnaliser une partie du contenu :

```scss
@mixin media-min-width($width) {
    @media (min-width: $width) {
        @content
    }
}

.el {
    @include media-min-width(40rem) {
        font-size: 2rem;
    }
}
```

Compilé en :

```css
@media (min-width: 40rem) {
    .el {
        font-size: 2rem;
    }
}
```

### 18.17. Using the Ampersand Operator

Pour les sélecteurs qui ne doivent pas être imbriqués mais connectés, on utilise `&` :

```scss
header {
    button {
        &:hover {
            background: transparent;
        }
    }
}
```

## 19. Course Roundup

### 19.1. Course Roundup

![image-20210414174243198](C:\Users\batti\AppData\Roaming\Typora\typora-user-images\image-20210414174243198.png)

### 19.2. Bonus: More Content!

## A. Propriétés CSS

### `font-family`

Les valeurs `serif`, `sans-serif` et `monospace` utilisent les polices par défaut définies par le navigateur. 

On peut spécifier une ou plusieurs valeurs de repli pour cette propriété, en les séparant par des virgules.

### <span id="box-sizing">`box-sizing`</span>

| Valeur                 | Comportement                                                 |
| ---------------------- | ------------------------------------------------------------ |
| `content-box` (défaut) | La largeur et la hauteur spécifiées s'appliqueront à la boîte "contenu" |
| `border-box`           | La largeur et la hauteur spécifiées s'appliqueront à la boîte "bordure" |

### <span id="display">`display`</span>

| Valeur         | Comportement                                                 |
| -------------- | ------------------------------------------------------------ |
| `inline`       | Prend seulement la largeur requise pour afficher son contenu ; pas de marge verticale, le *padding* vertical repousse la bordure de l'élément mais ne "pousse" pas le contenu adjacent. Les propriétés de largeur et de hauteur n'ont aucun effet. |
| `block`        | Commence sur une nouvelle ligne, occupe toute la largeur par défaut. Possibilité de définir une largeur, des marges et *padding* verticaux. |
| `inline-block` | Même comportement qu'`inline`, mais possibilité de jouer sur la largeur et la hauteur |
