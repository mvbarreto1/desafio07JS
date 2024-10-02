function autenticarUsuario(username, password, onSuccess, onFailure) {
    // Dados de exemplo para autenticação
    const usuarioValido = "usuario";
    const senhaValida = "senha123";

    // Verificação das credenciais
    if (username === usuarioValido && password === senhaValida) {
        onSuccess(username);
    } else {
        onFailure();
    }
}

// Funções de callback
function loginSucesso(username) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Login bem-sucedido! Bem-vindo, ${username.toLowerCase()}!`;
}

function loginFalha() {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'Falha na autenticação. Verifique suas credenciais.';
}

// Manipulador de evento para o formulário
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        autenticarUsuario(username, password, loginSucesso, loginFalha);
    });
});
