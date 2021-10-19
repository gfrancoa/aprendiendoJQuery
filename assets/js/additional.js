$(document).ready(function () {
  //SEPTIMO CAMBIO
  $("#co").click(function () {
    $("body").css("background-color", "#89cff0");
  });

  //SEXTO CAMBIO
  const API_KEY = "c61f9cfd113e4c22acbd0c4d75f2c483";

  $("#submitapi").click(function () {
    $.ajax({
      type: "GET",
      url: `https://newsapi.org/v2/everything?q=tesla&from=2021-09-14&sortBy=publishedAt&apiKey=${API_KEY}`,
      dataType: "json",
      success: function (result, status, xhr) {
        console.log("result", result);
      },
      error: function (xhr, status, error) {
        alert(
          "Result: " +
            status +
            " " +
            error +
            " " +
            xhr.status +
            " " +
            xhr.statusText
        );
        console.log("xhr", xhr);
      },
    });
  });

  renderHtml();

  //ADICIONAL
  ///////////
  function renderHtml() {
    const obj = [
      {
        name: "Home",
      },
      {
        name: "Bookings",
      },
      {
        name: "Contact us",
      },
    ];
  }
  /////////////

  $("#submit").click(function (e) {
    var formulario = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    formulario.name = $("#name").val();
    formulario.email = $("#email").val();
    formulario.subject = $("#msg_subject").val();
    formulario.message = $("#messageTextArea").val();

    // console.log('message val',$("#messageTextArea").val());
    // console.log('message type',typeof $("#messageTextArea").val());
    // console.log( $("#messageTextArea").val().toString().length);

    if (
      $("#name").val().length == 0 ||
      $("#email").val().length == 0 ||
      $("#msg_subject").val().length == 0 ||
      $("#messageTextArea").val().toString().length == 0
    ) {
      if ($("#name").val().length == 0) {
        $("#name").addClass("errorForm");
      } else {
        $("#name").addClass("successForm");
      }

      if ($("#email").val().length == 0) {
        $("#email").addClass("errorForm");
      } else {
        $("#email").addClass("successForm");
      }

      if ($("#msg_subject").val().length == 0) {
        $("#msg_subject").addClass("errorForm");
      } else {
        $("#msg_subject").addClass("successForm");
      }

      if ($("#messageTextArea").val().toString().length == 0) {
        $("#messageTextArea").addClass("errorForm");
      } else {
        $("#messageTextArea").addClass("successForm");
      }
    }

      else {
        alert(`Su mensaje fue enviado exitosamente:
        Nombre: ${formulario.name}
        E-mail: ${formulario.email}
        Asunto: ${formulario.subject}
        Message: ${formulario.message}
      `)
      }

    e.preventDefault();
  });
});
