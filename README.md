# Rodando localmente

Este é um guia rápido para rodar este projeto localmente em sua máquina.

## Pré-requisitos

Certifique-se de ter o Node.js e npm instalados em sua máquina. Você pode baixá-los e instalá-los a partir do [site oficial do Node.js](https://nodejs.org/).

## Instalação

1. Clone este repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/gabesouto/lexart-test-tecnico.git
    ```

2. Navegue até a pasta clonada:

    ```bash
    cd lexart-test-tecnico
    ```

3. Instale as dependências do backend (BACKEND):

    ```bash
    cd app/backend
    npm install
    ```

obs: <strong>ALTERE O NOME DO ARQUIVO .EN-EXAMPLE PARA .env</strong>

4. Instale as dependências do frontend:

    ```bash
    cd app/frontend
    npm install
    ```

## Rodando o servidor de desenvolvimento

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento para o backend e o frontend.

1. Abra um terminal e navegue até a pasta do backend:

    ```bash
    cd ../backend
    ```

2. Inicie o servidor de desenvolvimento do backend:

    ```bash
    npm run dev
    ```

3. Abra um novo terminal e navegue até a pasta do frontend:

    ```bash
    cd ../frontend
    ```

4. Inicie o servidor de desenvolvimento do frontend:

    ```bash
    npm run dev
    ```

Agora você deve ter o backend e o frontend rodando localmente em terminais diferentes. Você pode acessar o aplicativo em seu navegador visitando `http://localhost:3001`.




