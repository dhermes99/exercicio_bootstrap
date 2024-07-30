$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
    arrows: false,
    bots: false,
  });
  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(DDD) 12345-6789",
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
});
