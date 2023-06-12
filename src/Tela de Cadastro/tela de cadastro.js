function cadastrar() {
    // Obter os valores dos campos de entrada
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    
    // Validar se os campos estão preenchidos
    if (nome === '' || email === '' || senha === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    
    // Realizar ações adicionais, como enviar dados para o servidor
    
    // Exibir mensagem de sucesso
    alert("Cadastro realizado com sucesso!");
}