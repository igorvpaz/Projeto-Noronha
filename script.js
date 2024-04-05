//click do botão 'Fazer a minha reserva'
var botao = document.getElementById("botao");
botao.addEventListener("click", function() {
    window.location.href = "https://api.whatsapp.com/send/?phone=5581997940172&text&type=phone_number&app_absent=0";
  });
  