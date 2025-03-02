# My Petplan

> **LEIA, IMPORTANTE!!**  
> Este projeto foi migrado para **React** utilizando **Vite**, e está configurado com **TypeScript** e **SWC**.  
> **Atenção:** Não altere a estrutura de pastas e arquivos. Caso precise adicionar novos componentes ou funções, siga o mesmo padrão do projeto para evitar conflitos.

---

## Sumário

- [Visão Geral](#visão-geral)
- [Requisitos](#requisitos)
- [Instalação e Configuração](#instalação-e-configuração)
  - [Frontend](#frontend)
  - [Backend - API Java + Spring Boot](#backend---api-java--spring-boot)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Melhorias e Sugestões](#melhorias-e-sugestões)
- [Observações Finais](#observações-finais)

---

## Visão Geral

Este projeto é a base para o site Petplan, contendo as funcionalidades essenciais do frontend e uma API backend para gerenciamento de usuários e autenticação. A aplicação foi dividida em componentes React, permitindo que o HTML seja modularizado e facilmente mantido. Por exemplo, a página Home pode ser encontrada em `src/page/home.tsx`, onde você também pode modificar os cards ou adicionar novos elementos.

Além disso, foi desenvolvida uma API em Java com Spring Boot para manipulação de cadastros e logins, integrando o sistema a um banco de dados PostgreSQL hospedado no Neon.

---

## Requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina. Caso não tenha, procure um tutorial ou vídeo explicativo para instalação.
- **npm**: Vem junto com o Node.js.
- **Java**: Necessário para rodar a API backend.
- **Eclipse**: Para trabalhar com o projeto Java. Recomenda-se baixar essa versão, é a primeira desse link [https://www.eclipse.org/downloads/packages/].
- **PostgreSQL**: O banco de dados já está configurado no Neon. Está na minha conta então por favor não abusem, quando estiver livre colocamos numa conta própria de vocês.

---

## Instalação e Configuração

### Frontend

1. **Abrir o Terminal:**
   - Clique com o botão direito na pasta principal do projeto, chamada `my-petplan`, e escolha a opção para abrir o terminal.

2. **Instalar Dependências:**
   - No terminal, execute:
     npm i

3. **Iniciar o Projeto:**
   - Após a instalação, execute:
     npm run dev

   - O projeto deverá estar disponível em:  
     [http://localhost:5173]

### Backend - API Java + Spring Boot

1. **Baixe o Eclipse:**
   - Faça o download do Eclipse na [página oficial](https://www.eclipse.org/downloads/packages/).  
     *Obs.: É importante baixar a primeira versão indicada para evitar problemas de compatibilidade.*

2. **Importar o Projeto Maven:**
   - No Eclipse, vá até:  
     `File > Import > Maven > Existing Maven Projects from SCM`
   - Na janela que abrir, clique em **Browse** e selecione a pasta do projeto.
   - Certifique-se de que o arquivo `pom.xml` esteja presente e marcado.

3. **Executar a API:**
   - Após a importação, clique com o botão direito sobre o projeto, vá em:  
     `Run As > Maven Build`
   - Na seção **Goals**, digite:
     spring-boot:run

   - Clique em **Apply** e depois em **Run** para iniciar a API.
   - Com a API rodando, será possível cadastrar usuários e realizar logins, enviando os dados para o banco de dados.

   > **Atenção:** Atualmente, o banco de dados PostgreSQL está configurado na conta do desenvolvedor no Neon. Se o projeto entrar em produção ou se for utilizado por outros, recomenda-se migrar para uma conta própria.

---

## Estrutura do Projeto

- **Frontend (React + Vite):**
  - `src/`: Contém todos os componentes React, páginas e estilos.
  
- **Backend (Java + Spring Boot):**
  - Projeto Maven com arquivo `pom.xml` configurado para executar a API.
  - Estrutura padrão de um projeto Spring Boot para gerenciamento de autenticação e cadastro de usuários.

---

## Melhorias e Sugestões

- **Responsividade:**  
  - Aperfeiçoar a responsividade geral do site para melhorar a experiência do usuário em dispositivos móveis.

- **Novas Telas:**  
  - Criar páginas adicionais para o **Blog** e para o **Petshop**.

- **Funcionalidades de Autenticação:**  
  - Adicionar funcionalidades aos botões de **Login** e **Cadastro** para que, ao usuário logado, a interface se atualize conforme necessário.

- **Interface de Usuário:**  
  - Substituir o aviso atual de *window* por um popup personalizado.
  - Adicionar um favicon (pode utilizar a logo do petshop).

---

## Observações Finais

- **Manutenção da Estrutura:**  
  - Evite modificar a estrutura das pastas e arquivos. Se for necessário adicionar novos elementos, siga o padrão já estabelecido para evitar conflitos ou problemas de integração.

- **Estudo e Referência:**  
  - Se você já realizou alguma customização anteriormente (como os "cads"), lembre-se de que, em React, a abordagem é dividir o HTML em componentes. Portanto, qualquer modificação ou adição pode ser feita diretamente nos componentes, como na página `home.tsx`.

- **Suporte e Dúvidas:**  
  - Em caso de dúvidas, consulte a documentação oficial do React, Vite e Spring Boot, ou faça pesquisas utilizando AI's seja o Claude, GPT ou DeepSeek.

---

Siga as instruções cuidadosamente para garantir que o ambiente de desenvolvimento funcione conforme esperado.
