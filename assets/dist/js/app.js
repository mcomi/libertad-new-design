var isMobile = false; //initiate as false
// device detection
if (
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent
  ) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4)
  )
) {
  isMobile = true;
}

const btnUserCode = document.getElementById("btn-user-code");
const btnGetCode = document.getElementById("btn-get-code");
const userCodeStepOne = document.getElementById("step-1-register-users");
const userCodeStepTwo = document.getElementById("step-2-register-users");
const userCodeStepThree = document.getElementById("sms-input-user");

btnUserCode.addEventListener("click", function () {
  userCodeStepOne.classList.add("hidden");
  userCodeStepTwo.classList.remove("hidden");
});

btnGetCode.addEventListener("click", function () {
  userCodeStepTwo.classList.add("hidden");
  userCodeStepThree.classList.remove("hidden");
});

const linkLogin = document.getElementById("login-btn");
const loginContainer = document.getElementById("login-container");
linkLogin.addEventListener("click", function () {
  loginContainer.classList.contains("hidden")
    ? loginContainer.classList.remove("hidden")
    : loginContainer.classList.add("hidden");
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
  if (isMobile)
    $("#descuento-mobile").html(
      `Pagando mensualmente <span class="font-bold"> ${descuento}</span> pesos`
    );
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
            const verificacionHtml = `<div class="text-red-700">Código inválido <br />`;
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
            $(".code-input").addClass("border-green-form");
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

// evento para que pase en automatico los numeros del codigo sms
var indexCodeInput = 0;
$(".code-input-folio").bind("keyup", function () {
  var value = $(this).val();
  var regex = /^\d+$/;
  if (regex.test(value)) {
    if (indexCodeInput < 8) {
      $(this).next().focus();
      if (indexCodeInput === 7) {
        $("#spinner-sms").removeClass("hidden");
        if (value === "1") {
          setTimeout(function () {
            const verificacionHtml = `<div class="text-red-700">Folio inválido <br />`;
            $("#sms-response").html(verificacionHtml);
            $(".code-input-folio").addClass("border-red-700");
            $("#spinner-sms").addClass("hidden");
            $(".code-input-folio").val("");
            indexCodeInput = 0;
            document.querySelectorAll(".code-input-folio")[0].focus();
          }, 1500);
        } else {
          setTimeout(function () {
            if ($(".code-input-folio").hasClass("border-red-700")) {
              $(".code-input-folio").removeClass("border-red-700");
              $("#sms-response").find("div").removeClass("text-danger");
            }
            const toastHtml = `Folio válido, espere ...`;
            $("#sms-response").html(toastHtml);
            $(".code-input-folio").addClass("border-green-form");
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

// formateo de celular
let celCheck = new Cleave("#phone-input", {
  phone: true,
  phoneRegionCode: "MX",
});

let userPhone = new Cleave("#user-phone", {
  phone: true,
  phoneRegionCode: "MX",
});

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
      $(element).parent().addClass("border-green-form");
    },
    errorPlacement: function (error, element) {
      console.log(error);
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

const offerBtns = document.querySelectorAll(".offer-btn");
const mainText = document.getElementById("main-text");
const offerRegisterPanel = document.getElementById("register-offer");

offerBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    !loginContainer.classList.contains("hidden") &&
      loginContainer.classList.add("hidden");
    offerRegisterPanel.classList.remove("hidden");
    mainText.classList.add("hidden");
    $("html, body").animate({ scrollTop: 0 }, "slow");
    document.getElementById("nombre").focus();
  });
});

const btnCloseRegister = document.getElementById("close-register");
btnCloseRegister.addEventListener("click", function () {
  offerRegisterPanel.classList.add("hidden");
  mainText.classList.remove("hidden");
});
var stepOne = new Waypoint({
  element: document.getElementById("steps"),
  handler: function (direction) {
    $(".step-1").removeClass("invisible");
    $(".step-1").addClass(
      "animate__animated animate__bounceInRight animate__slow"
    );
  },
  offset: "60%",
});
var stepOne = new Waypoint({
  element: document.getElementById("steps"),
  handler: function (direction) {
    $(".step-2").removeClass("invisible");
    $(".step-2").addClass(
      "animate__animated animate__bounceInRight animate__slow"
    );
  },
  offset: "50%",
});
var stepOne = new Waypoint({
  element: document.getElementById("steps"),
  handler: function (direction) {
    $(".step-3").removeClass("invisible");
    $(".step-3").addClass(
      "animate__animated animate__bounceInRight animate__slow"
    );
  },
  offset: "40%",
});
var stepOne = new Waypoint({
  element: document.getElementById("steps"),
  handler: function (direction) {
    $(".step-4").removeClass("invisible");
    $(".step-4").addClass(
      "animate__animated animate__bounceInRight animate__slow"
    );
  },
  offset: "30%",
});

const stepsContainers = document.querySelectorAll(".step");
const stepDescription = document.getElementById("step-description");

stepsContainers.forEach((step) => {
  step.addEventListener("mouseover", function () {
    let textStep;
    if (step.classList.contains("step-1"))
      textStep = `No necesitas papeleo, ni perder tiempo en filas que parecen interminables para pedir préstamos rápidos, ¡gracias a nuestro servicio 100% en línea! Desliza la barra azul para seleccionar el monto que necesitas (hasta $2,000 pesos). Una vez seleccionado la cantidad podrás comenzar tu solicitud de préstamo.`;
    if (step.classList.contains("step-2"))
      textStep = `Paso 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dignissimos vitae perspiciatis fugit eum dolor maiores deserunt rerum at. Aliquid, est. Adipisci itaque repudiandae voluptatum, tenetur pariatur impedit architecto laudantium.`;
    if (step.classList.contains("step-3"))
      textStep = `Paso 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dignissimos vitae perspiciatis fugit eum dolor maiores deserunt rerum at. Aliquid, est. Adipisci itaque repudiandae voluptatum, tenetur pariatur impedit architecto laudantium.`;
    if (step.classList.contains("step-4"))
      textStep = `Paso 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dignissimos vitae perspiciatis fugit eum dolor maiores deserunt rerum at. Aliquid, est. Adipisci itaque repudiandae voluptatum, tenetur pariatur impedit architecto laudantium.`;
    stepDescription.innerHTML = textStep;
  });
});
