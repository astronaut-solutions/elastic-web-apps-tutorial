# Elastic Web Apps

## Yarn / NPM

Przygoda z **Reactem** zaczyna się z instalacją Yarna / NPM'a. Osobiście polecam [yarna](https://yarnpkg.com/lang/en/docs/install/), jest trochę szybszy niż NPM.

## Create react app

Aplikację Reacta, trzeba skonfigurować. Jest to trochę skomplikowane ze względu na groo zależności i poziom skomplikowania WebPacka. Dlatego facebook stworzył [**create-react-app**](https://github.com/facebookincubator/create-react-app).

Wg mnie to najlepszy punkt startu, nawet dla bardzo skomplikowanych aplikacji.

Instalacja przy użyciu:

```
yarn add global create-react-app
```

Ten projekt został stworzony przez komendę:
```
create-react-app elastic-web-apps-tutorial
```


### Eject

Aby uzyskać dostep do konfiguracji w naszym przypadku aby skonfigurować CSS Modules. Trzeba zrobić tzw. **eject**, ktory jest nieodwracalny i pokazuje całego webpacka, który jest pod spodem create-react-app. Wywołuje sie do w katalogu z projektem poprzez:

```
cd ./elastic-web-apps-tutorial
yarn eject
```


## CSS Modules

Dodatek, który pozwala nam tworzyć style css w klasyczny sposób (**styles** w Reactcie), ale wynikowo dostajemy klasy w BEM plus hashe. [Instalacja znajduje się tutaj.] (https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2)

Najlepszą techniką jest tworzenie niezależnego arkusza styli per component. Głowna klasa to **root**, reszta to dziedziczenie kaskadowe po znacznikach lub dodatkowe klasy. Jeżeli chcemy coś zmienić globalnie (np. klasa która jest wyżej w hierarchii), wykorzystujemy:

```
:global(.className) {
    border: 1px solid red;
}
```

Natomiast gdy chcemy wykorzystać istniejące style z innego modułu. Używamy deklaracji *composes*, w mniej więcej taki sposób:

```
.root {
    composes: base from '../../base.css'
    width: 100%;
}
```

