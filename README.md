<h1 align="center">doggo - Ajude animais de rua</h1>

<div align="center">

![](./.github/doggo-icon.png)

  <a href="https://play.google.com/store/apps/details?id=com.doggo">
  
  ![Play Store](https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white)
    
  </a>
</div>

---

## Apresentação | 📖

O Doggo é um aplicativo dedicado a facilitar a alimentação de animais de rua. Nele, é possível que usuários encontrem comedouros públicos próximos em um mapa interativo atualizado em tempo real ou cadastrem seus próprios comedouros para serem reabastecidos pela comunidade.

![](./.github/doggo-presentation.png)

## Pré-Requisitos | ⚙️

- [Ambiente de Desenvolvimento React Native](https://reactnative.dev/docs/environment-setup);
- [Firebase Cloud Firestore Emulator e Firebase Auth Emulator](https://rnfirebase.io/firestore/emulator#running-the-emulator);
- [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key);
- [Google Web Client ID](https://console.developers.google.com/apis/credentials).

## Guia de Instalação | 🔨

1. Copie o .env.example para um novo arquivo .env e adicione seu [Google Web Client ID](https://console.developers.google.com/apis/credentials).

```bash
cp .env.example .env
```

2. No arquivo `local.properties` no caminho `/android/local.properties` adicione sua [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key).

```bash
GOOGLE_MAPS_KEY=YOUR_API_KEY
```

3. Rode os emuladores do firebase. Siga os passos descritos [aqui.](https://rnfirebase.io/firestore/emulator#running-the-emulator).

4. Agora, você precisará iniciar o Metro, o bundler JavaScript que acompanha o React Native. Para iniciar o Metro, execute o seguinte comando na raiz do projeto:

```bash
# Usando Yarn
yarn start

# Ou usando npm
npm start
```

5. Build da Aplicação: Deixe o Metro Bundler rodando no seu próprio terminal e abra o novo na raiz do projeto. Rode os seguintes comandos para iniciar a aplicação.

- Para Android:
```bash
# Usando Yarn
yarn android

# Ou usando npm
npm run android
```

- Para IOS:
```bash
# Usando Yarn
yarn ios

# Ou usando npm
npm run ios
```

:tada: Tudo pronto!

## Executando os Testes | 🧪

Rodando os testes unitários:

```bash
# Usando Yarn
yarn test

# Ou usando npm
npm run test
```

Rodando os testes e2e:
```bash
# Usando Yarn
yarn detox:test-android
yarn detox:test-ios

# Ou usando npm
npm run detox:test-android
npm run detox:test-ios
```

## Tecnologias Utilizadas | 📦

- React Native;
- Typescript;
- Firebase;
- React Query;
- Styled-Components;
- Jest;
- React Native Testing Library;
- Detox;
- React Native Reanimated;
- React Navigation.

## Como contribuir | 🤝

Fico muito feliz por você considerar contribuir com o doggo. Sua ajuda é fundamental para melhorar e expandir este projeto. Aqui estão algumas maneiras pelas quais você pode contribuir:

**Relatar Problemas:** Se encontrar algum problema ou bug, por favor, abra uma issue descrevendo detalhadamente o problema. Inclua informações sobre como reproduzir o erro, seu ambiente de desenvolvimento e qualquer outra informação relevante.

**Sugerir Melhorias:** Se você tem ideias para novos recursos, melhorias de usabilidade ou qualquer outra sugestão, sinta-se à vontade para compartilhá-las em uma issue dedicada a propostas de melhorias.

**Contribuir com Código:** Se deseja contribuir diretamente com código, siga estes passos:

Faça um fork do repositório.
Crie uma branch para suas alterações: git checkout -b feature-nova.
Faça suas modificações e commit: git commit -m 'Adiciona nova funcionalidade'.
Envie suas alterações para o seu fork: git push origin feature-nova.
Abra um pull request descrevendo suas alterações.

---

<p align="center">Com 🧡 por <a href="https://www.linkedin.com/in/johelder/">Johelder</a></p>
