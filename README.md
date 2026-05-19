# Atividade: React Navigation e Consumo de API

Este projeto é uma atividade prática focada no estudo de soluções mobile utilizando React Native e Expo. O objetivo principal é demonstrar a implementação de navegação entre telas e o consumo de dados de uma API externa.

## 🚀 O que foi implementado

* **React Navigation (Native Stack):** Configuração do `NavigationContainer` e transição entre telas (`HomeScreen` e `DetailsScreen`).
* **Consumo de API:** Uso do `fetch` assíncrono junto com `useState` e `useEffect` para buscar e listar um catálogo de filmes em tela.
* **Feedback Visual:** Implementação do `ActivityIndicator` para exibição de carregamento enquanto os dados são requisitados.

## ⚠️ Atenção à Versão (Importante)

Este projeto foi construído e fixado para rodar no **Expo SDK 54**. 
Para que o aplicativo funcione corretamente no seu celular, é fundamental que o aplicativo **Expo Go** instalado no seu dispositivo móvel seja compatível com a versão 54. 

## 🛠️ Como clonar e rodar o projeto

Siga os passos abaixo para testar o aplicativo no seu próprio ambiente:

**1. Clone o repositório**
Abra o seu terminal e rode o comando:
```bash
git clone [https://github.com/JoaoMiguelRita/list-filmes-react-expo.git](list-filmes-react-expo)
```

**2. Acesse a pasta do projeto**
```bash
cd list-filmes-react-expo
```

**3. Instale as dependências**
```bash
npm install
```

**4. Inicie o servidor do Expo**
```bash
npx expo start --clear
```

**5. Teste no seu celular**
- Baixe o aplicativo Expo Go no seu celular (Android ou iOS).
- Certifique-se de que o seu celular e o seu computador estão na mesma rede Wi-Fi.
- Com o terminal aberto e o servidor rodando, abra o Expo Go e escaneie o QR Code que apareceu na tela. O aplicativo será carregado automaticamente.
