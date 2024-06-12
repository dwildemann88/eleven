// JavaScript para manipular o envio do formulário
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Limpa os campos do formulário
        form.reset();

        // Exibe um alerta de sucesso
        alert("Email enviado com sucesso!");
    });
});