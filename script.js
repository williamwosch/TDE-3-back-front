const apiUrl = "https://jsonplaceholder.typicode.com/users";
const userList = document.getElementById("user-list");
const message = document.getElementById("message");

// Função GET - Buscar usuários
async function fetchUsers() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const users = await response.json();

    userList.innerHTML = ""; // Limpa antes de renderizar
    users.slice(0, 5).forEach(user => { // Exibe apenas 5
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Cidade:</b> ${user.address.city}</p>
        <button onclick="deleteUser(${user.id})">Excluir (DELETE)</button>
      `;
      userList.appendChild(card);
    });
  } catch (error) {
    message.textContent = `Erro ao buscar usuários: ${error.message}`;
    message.style.color = "red";
  }
}

// Função POST - Adicionar usuário
async function addUser() {
  try {
    const newUser = {
      name: "Novo Usuário",
      email: "novo@exemplo.com",
      address: { city: "São Paulo" }
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const createdUser = await response.json();
    message.textContent = `Usuário criado com sucesso! (ID: ${createdUser.id})`;
    message.style.color = "green";
  } catch (error) {
    message.textContent = `Erro ao criar usuário: ${error.message}`;
    message.style.color = "red";
  }
}

// Função DELETE - Excluir usuário
async function deleteUser(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });

    if (!response.ok) {
      throw new Error(`Erro ao excluir: ${response.status}`);
    }

    message.textContent = `Usuário ${id} excluído (simulado pela API)`;
    message.style.color = "orange";
  } catch (error) {
    message.textContent = `Erro ao excluir usuário: ${error.message}`;
    message.style.color = "red";
  }
}

document.getElementById("add-user").addEventListener("click", addUser);

// Inicializa a página
fetchUsers();