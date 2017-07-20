# Elastic Web Apps

# Yarn / NPM

Przygoda z **Reactem** zaczyna się z instalacją Yarna / NPM'a. Osobiście polecam [yarna](https://yarnpkg.com/lang/en/docs/install/), jest trochę szybszy niż NPM.

# Create react app

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


## Eject

Aby uzyskać dostep do konfiguracji w naszym przypadku aby skonfigurować CSS Modules. Trzeba zrobić tzw. **eject**, ktory jest nieodwracalny i pokazuje całego webpacka, który jest pod spodem create-react-app. Wywołuje sie do w katalogu z projektem poprzez:

```
cd ./elastic-web-apps-tutorial
yarn eject
```

