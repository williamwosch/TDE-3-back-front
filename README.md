# Requisições HTTP com JavaScript
##feito por william wosch Crisostimo
## 🎯 Objetivo
Aprender a consumir APIs públicas usando JavaScript (`fetch` / `async-await`), entendendo os métodos HTTP e manipulando respostas em JSON.
link saite(https://williamwosch.github.io/TDE-3-back-front/)
---

## 🌐 API Utilizada
## 📡 Requisições HTTP Implementadas

| Método | Endpoint | Função no Código | O que Faz | Tipo de Ação | Funciona de Verdade? |
|:--------:|:-----------|:----------------|:-----------|:----------------|:----------------------|
| **GET** | `/users` | `fetchUsers()` | Busca a lista de usuários e exibe os 5 primeiros na tela | Leitura de dados | ✅ Sim, traz dados reais da API |
| **POST** | `/users` | `addUser()` | Envia dados de um novo usuário e exibe mensagem de sucesso | Criação de dado | ⚙️ Simulado (não salva no servidor) |
| **DELETE** | `/users/{id}` | `deleteUser(id)` | Envia requisição para excluir um usuário pelo ID | Exclusão de dado | ⚙️ Simulado (não apaga de verdade) |

---

### 🧠 Explicação

A API **[JSONPlaceholder](https://jsonplaceholder.typicode.com)** é uma ferramenta pública usada para testar requisições HTTP.  
Ela permite enviar requisições reais (GET, POST, DELETE etc.) e retorna respostas válidas,  
mas **não altera os dados permanentemente** — é uma **simulação segura** para aprendizado.

- O método **GET** realmente busca dados reais e exibe na página.  
- Os métodos **POST** e **DELETE** são **funcionais**, no sentido de enviar e receber respostas HTTP corretamente,  
  mas **não modificam o servidor** (a API é apenas de teste).  

**Endpoints usados:**
- `GET /users` → Lista usuários.
- `POST /users` → Cria novo usuário (simulado).
- `DELETE /users/{id}` → Simula exclusão.

---

## 🧠 Métodos HTTP Implementados
- **GET:** Busca e exibe usuários.
- **POST:** Cria novo usuário fictício.
- **DELETE:** Simula exclusão de um usuário.

---

## ⚙️ Tecnologias
- HTML
- JavaScript (fetch, async/await)
- JSONPlaceholder API

---

## 🚀 Como testar
1. Abra `index.html` no navegador.
2. Veja a lista de usuários carregada da API.-->(https://jsonplaceholder.typicode.com/users)
3. Clique em **"Adicionar Usuário (POST)"** para enviar uma requisição POST.
4. Clique em **"Excluir (DELETE)"** para testar a exclusão simulada.

---

## 🖥️ Publicação
Publique o projeto no **GitHub Pages**:
1. Envie os arquivos para um repositório no GitHub.
2. Vá em **Settings → Pages**.
3. Escolha a branch `main` e clique em **Save**.
4. Acesse o link gerado pelo GitHub Pages.
