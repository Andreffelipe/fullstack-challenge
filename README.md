# Fullstack Challenge 🏅 2021

## Introdução

Este é um desafio para que possamos ver as suas habilidades como Fullstack Developer.

Nesse desafio trabalharemos no desenvolvimento de uma REST API que utilizará os dados do projeto Open Food Facts, um banco de dados aberto com informação nutricional de diversos produtos alimentícios.

O projeto tem como objetivo dar suporte a equipe de nutricionistas da empresa Fitness Foods LC para que possam comparar de maneira rápida a informação nutricional dos alimentos da base do Open Food Facts. Para isso vamos precisar de um projeto front-end usando um framework javascript moderno com a usabilidade focada no nutricionistas.


[SPOILER] As instruções de entrega e apresentação do challenge estão no final deste Readme (=


### Obrigatório

- Trabalhar em um [FORK](https://lab.coodesh.com/help/gitlab-basics/fork-project.md) deste repositório em seu usuário ou utilizar um repositório em seu github pessoal (não esqueça de colocar no readme a referência a este challenge);
- O projeto **back-end** deverá ser desenvolvido usando uma das tecnologias a seguir: **Node.js | C# .NET Core | PHP Laravel | RubyOnRails | Go Lang | Python FastAPI | SpringBoot Kotlin | Rust**;
- O projeto **front-end** deverá ser desenvolvido usando uma das tecnologias a seguir: **React.js | Vue.js | Angular 8+**;


## O projeto

- Criar um banco de dados grátis MongoDB usando Atlas: https://www.mongodb.com/cloud/atlas ou banco de dados grátis MySQL no Heroku: https://elements.heroku.com/addons/jawsdb;
- Criar uma REST API com as melhores práticas de desenvolvimento (escolher entre: node, c#, golang, fastapi, ruby, kotlin ou laravel)
- Criar uma versão Web para listar os produtos (framework javascript)
- Recomendável usar Drivers oficiais para integração com o DB

### Modelo de Dados:

Para a definição do modelo, consultar o arquivo [products.json](./products.json) que foi exportado do Open Food Facts, um detalhe importante é que temos dois campos personalizados para controlar a importação de produtos:

- `imported_t`: campo do tipo `Date` com a dia e hora que foi importado;
- `status`: campo do tipo `Enum` com os possíveis valores `draft` e `imported`;

### Sistema do CRON

Para prosseguir com o desafio, precisaremos criar na API um sistema de atualização que vai realizar o scraping da página do [Open Food Facts](https://world.openfoodfacts.org/) uma vez ao día. Adicionar aos arquivos de configuração o melhor horário para executar a importação.

Ao realizar o scraping do HTML, recomendamos utilizar estruturas recursivas para navegar entre a lista de produtos e acessar a página do produto com as informações adicionais necessárias como:

- Código de Barras
- Quantidade
- Marcas
- Embalagem
- Categorias

Ter em conta que:

- Todos os produtos deverão ter os campos personalizados `imported_t` e `status`.
- Limitar a importação a somente 100 produtos;
- Para gerar a URL das imagens, revisar o How to do projeto em: https://wiki.openfoodfacts.org/Developer-How_To

### A REST API

Na REST API teremos os seguintes endpoints:

- `GET /`: Retornar um Status: 200 e uma Mensagem "Fullstack Challenge 2021"
- `GET /products/:code`: Obter a informação somente de um produto;
- `GET /products`: Listar todos os produtos da base de dados, utilizar o sistema de paginação para não sobrecarregar a `REQUEST`.

### Front End

Desenvolver o projeto front-end para listar os produtos com a seguinte informação:

- Imagem
- Nome

Ao clicar nos produtos, expandiremos a informação utilizando um modal com os dados:

- Barcode
- Status
- Packaging
- Brands
- Store


## Extras

- **Diferencial 1** Adicionar um sistema de comparação entre os produtos;
- **Diferencial 2** Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;
- **Diferencial 3** Configurar um sistema de alerta se tem algum falho durante o Sync dos produtos;
- **Diferencial 4** Descrever a documentação da API utilizando o conceito de Open API 3.0;
- **Diferencial 5** Escrever Unit Tests para os endpoints da API;


## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
- Se está usando github pessoal, referencie que é um challenge by coodesh 

## Finalização e Instruções para a Apresentação

Avisar sobre a finalização e enviar para correção.

1. Confira se respondeu o Scorecard Fullstack;
2. Verique se o Readme está bom e faça o commit final em seu repositório;
3. Acesse: [https://coodesh.com/review-challenge](https://coodesh.com/review-challenge);
4. Coloque seu nome completo; 
5. Coloque seu e-mail;
6. Adicione o repositório com a sua solução;
7. Confira a vaga desejada;

![Solicitar Correção](https://res.cloudinary.com/coodesh/image/upload/v1612571243/coodesh-teams/challenges/repo.gif)

8. Envie e aguarde as instruções para apresentação da sua solução

## Instruções para se preparar para a Apresentação:

1. Aguarde o e-mail com as instruções de apresentação 
2. Enquanto isso, crie uma conta na plataforma: https://www.loom.com/ e instale o Desktop App ou Extensão no Chrome: https://www.loom.com/download 
3. DICA: Será necessário compartilhar a tela durante a gravação ou vídeo chamada. Deixe todos os projetos de solução previamente abertos em seu computador antes de iniciar a gravação ou chamanda de vídeo. Ambientes configurados e prontos para rodar.
4. Prepara-se pois você será questionado sobre cada etapa e decisão do Challenge. Prepare uma lista de perguntas, dúvidas, sugestões de melhorias e feedbacks (caso tenha).

## Suporte

Use o nosso canal no slack: http://bit.ly/32CuOMy para tirar dúvidas sobre o processo ou envie um e-mail para contato@coodesh.com.
