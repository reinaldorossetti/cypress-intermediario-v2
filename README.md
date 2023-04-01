# Testes automatizados com Cypress - Intermdiário

👋 Seja bem-vinda(o)!

É muito bom tê-la(o) aqui. Tenho certeza que você vai adorar este curso. ❤️

## O que você vai aprender

Durante o curso de testes automatizados com Cypress (intermediário) você vai aprender:

- Como configurar o ambiente local de desenvolvimento
- Como instalar e configurar o Cypress
- Como criar testes automatizados de interface gráfica de usuário
- Como criar testes automatizados de API (com _feedback_ visual no navegador)
- Como testar APIs que necessitam um _token_ de acesso
- Como criar testes otimizados e direto-ao-ponto
- Como salvar a sessão do usuário no navegador para posterior restauração
- Como validar se a sessão do usuário ainda é válida e como lidar com isso quando a mesma é invalidada
- Como fazer a limpeza e criação da massa de dados antes do teste começar
- Como proteger dados sensíveis, tais como senhas e _tokens_ de acesso
- Como organizar os testes e comandos customizados em diferentes "camadas" (_API, CLI, GUI_)
- Como estruturar os testes pensando em pré-condições, ações e resultados esperados
- Como gerar dados aleatórios para uso nos testes automatizados
- Como habilitar funcionalidades experimentais do Cypress
- Como executar comandos à nível de sistema operacional
- E como testar a leitura de arquivos

## Vamos começar?

Vá para a seção [estrutura do curso](./lessons/_course-structure_.md).

## Adicionando Por Reinaldo o Allure Plugin e Execução via Esteira pelo Git Actions:
using npm:
```
npm i -D @shelex/cypress-allure-plugin
```
To enable Allure results writing just pass environment variable allure=true, example:
```
npx cypress run --env allure=true --spec cypress/e2e/api/openweathermap/weatherSearch.cy.js
```
https://www.npmjs.com/package/@shelex/cypress-allure-plugin

Na esteira adicionei o cypress-io/github-action@v5, passando uma spec e a variável do allure.

```
name: Cypress tests
on: push
jobs:
  cypress-run:
    name: Cypress run
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Cypress run
        uses: cypress-io/github-action@v5
        with:
            spec: cypress/e2e/api/openweathermap/*.cy.js
            env: allure=true
````

___

https://github.com/cypress-io/github-action

Este é mais um curso da [**Escola Talking About Testing**](https://udemy.com/user/walmyr).
