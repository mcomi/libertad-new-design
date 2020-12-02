const linkLogin = document.getElementById("login-btn");
const linkContainer = document.getElementById("login-container");
linkLogin.addEventListener("click", function () {
  linkContainer.classList.contains("hidden")
    ? linkContainer.classList.remove("hidden")
    : linkContainer.classList.add("hidden");
});

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  loop: true,
  backDelay: 8000,
});

// objeto constructor para formateo dinero
var formatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 2,
});

// rangeslider
// slider para seleccionar el monto del credito
var $element = $('input[type="range"]');
var $handle;

$element
  .rangeslider({
    polyfill: false,
    onInit: function () {
      $handle = $(".rangeslider__handle", this.$range);
      updateHandle($handle[0], this.value);
      $handle.addClass("shake-active");
    },
  })
  .on("input", function () {
    updateHandle($handle[0], this.value);
  });

var montoCredito;
function updateHandle(el, val) {
  montoCredito = parseInt(val);
  actualizaMontoYDescuento();
}

function actualizaMontoYDescuento() {
  const meses = parseInt(
    $("select[name='periodos']").children("option:selected").val()
  );
  let montoFormateado = formatter.format(montoCredito.toFixed(2));
  $("#monto-requerido").html(montoFormateado);
  $("#monto").html(montoFormateado);
  let descuento = formatter.format((montoCredito / meses).toFixed(2));
  $("#descuento").html(descuento);
}

$("select[name='periodos']").change(actualizaMontoYDescuento);

/* Optional Javascript to close the radio button version by clicking it again */
var myRadios = document.getElementsByName("tabs");
var setCheck;
var x = 0;
for (x = 0; x < myRadios.length; x++) {
  myRadios[x].onclick = function () {
    if (setCheck != this) {
      setCheck = this;
    } else {
      this.checked = false;
      setCheck = null;
    }
  };
}

const btnStepRegister = document.getElementById("step-register-btn");
const registerStepOne = document.getElementById("step-1-register");
const registerStepTwo = document.getElementById("step-2-register");

// btnStepRegister.addEventListener("click", function () {
//   console.log("click");
//   registerStepOne.classList.add("hidden");
//   registerStepTwo.classList.remove("hidden");
// });

// evento para que pase en automatico los numeros del codigo sms
var indexCodeInput = 0;
$(".code-input").bind("keyup", function () {
  var value = $(this).val();
  var regex = /^\d+$/;
  if (regex.test(value)) {
    if (indexCodeInput < 5) {
      $(this).next().focus();
      if (indexCodeInput === 4) {
        $("#spinner-sms").removeClass("hidden");
        if (value === "1") {
          setTimeout(function () {
            const verificacionHtml = `<div class="text-red-700">Código inválido <br />
              <span class="btn-link text-white text-underline"> recibe otro código por SMS</span></div>`;
            $("#sms-response").html(verificacionHtml);
            $(".code-input").addClass("border-red-700");
            $("#spinner-sms").addClass("hidden");
            $(".code-input").val("");
            indexCodeInput = 0;
            document.querySelectorAll(".code-input")[0].focus();
          }, 1500);
        } else {
          setTimeout(function () {
            if ($(".code-input").hasClass("border-red-700")) {
              $(".code-input").removeClass("border-red-700");
              $("#sms-response").find("div").removeClass("text-danger");
            }
            const toastHtml = `Código válido, espere ...`;
            $("#sms-response").html(toastHtml);
            $(".code-input").addClass("border-green-500");
            setTimeout(function () {
              window.location.href =
                window.location.origin + "/formulario.html?oferta=" + true;
            }, 2500);
          }, 1500);
        }
      }
    }
    indexCodeInput++;
  }
});

const celularInput = document.getElementById("phone-input");

celularInput.addEventListener("keyup", function () {
  let regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (regex.test($(this).val())) {
    document.getElementById("spinner-register").classList.remove("hidden");
    //validar si existe en registros
    setTimeout(function () {
      document.getElementById("spinner-register").classList.add("hidden");
      document.getElementById("sms-input-container").classList.remove("hidden");
      document.querySelectorAll(".code-input")[0].focus();
    }, 2000);
  }
});

// validacion forma
$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#step-1-register").validate({
    groups: {
      requeridosGroup: "nombre materno paterno email",
    },
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      nombre: "required",
      materno: "required",
      paterno: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true,
      },
    },
    // Specify validation error messages
    messages: {
      nombre:
        "<i class='fa fa-exclamation-circle'></i> Todos los campos son requeridos",
      paterno:
        "<i class='fa fa-exclamation-circle'></i> Todos los campos son requeridos",
      materno:
        "<i class='fa fa-exclamation-circle'></i> Todos los campos son requeridos",
      email: {
        required:
          "<i class='fa fa-exclamation-circle'></i> Todos los campos son requeridos",
        email: "Introduzca un correo válido",
      },
      // celular: { required: "<i class='fa fa-exclamation-circle'></i> Todos los campos son requeridos", number: "Introduzca un celular válido" }
    },
    validClass: "valid",
    errorClass: "invalid",
    errorLabelContainer: "#messageBox",
    success: function (label, element) {
      $(element).parent().addClass("border-green-500");
    },
    errorPlacement: function (error, element) {
      $(element).parent().addClass("border-red-700");
    },

    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      registerStepOne.classList.add("hidden");
      registerStepTwo.classList.remove("hidden");
      // btnStepRegister.classList.remove("opacity-50", "cursor-not-allowed");
      // $("#mandar-codigo-cel").removeClass("hidden");
      // $("#loader-phone-message").removeClass("hidden");
      // $("html, body").animate({ scrollTop: 0 }, "slow");
      // setTimeout(function () {
      //   $("#loader-phone-message").addClass("hidden");
      //   $("#sms-input-container").removeClass("hidden");
      // }, 3000);
    },
  });
});

const offerBtn = document.getElementById("offer-btn");
const offerRegisterPanel = document.getElementById("register-offer");
offerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  offerRegisterPanel.classList.remove("hidden");
});
