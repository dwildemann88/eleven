function acao() {
    var button = document.querySelector('.button-about-apresentation');
   
    bola()
    
}
function bola() {
    var bola = document.querySelector(".bola");
    // Define as dimensões da bola para preencher a tela atual
    bola.style.left="50%"
    bola.style.width = "100%";
    bola.style.height = "100vh";
    // bola.style.transform = "scale(100)";
    bola.style.transition = "0.3s ease-in-out";
    bola.style.zIndex="2"
    // Desativa o overflow na direção Y
    document.documentElement.style.overflowY = "hidden";
    bola.style.borderRadius="0px"

}
