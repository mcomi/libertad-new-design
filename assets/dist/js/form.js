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

const menuSteps = $(".menu-form");
const stepsContainers = $(".step-container");

const nextStep = () => {
  const menuItem = $(".menu-form.active");
  const activeStepContainer = $(".step-container").not(".hidden");
  activeStepContainer.addClass("hidden");
  const step = activeStepContainer.data("step");
  const nextStep = step + 1;
  const selector = `div[data-step='${nextStep}']`;
  $(selector).removeClass("hidden");
  menuItem.removeClass("active");
  menuItem.next().addClass("active");
};

const prevStep = () => {
  const menuItem = $(".menu-form.active");
  const activeStepContainer = $(".step-container").not(".hidden");
  activeStepContainer.addClass("hidden");
  const step = activeStepContainer.data("step");
  const nextStep = step - 1;
  const selector = `div[data-step='${nextStep}']`;
  $(selector).removeClass("hidden");
  menuItem.removeClass("active");
  menuItem.prev().addClass("active");
};

const datosPersonales = document.getElementById("datos-personales");
const datosEmpleo = document.getElementById("datos-empleo");

// objeto constructor para formateo dinero
var formatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 2,
});

const ingresos = document.getElementById("ingresos");
ingresos.addEventListener("change", function () {
  let ingreso = Number(this.value);
  ingresos.value = formatter.format(ingreso.toFixed(2));
});

// validacion datos personales
$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#step-1-form").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      nombre: "required",
      materno: "required",
      paterno: "required",
      genero: "required",
      nacionalidad: "required",
      estado: "required",
      ciudad: "required",
      telefono: "required",
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
      $("html, body").animate({ scrollTop: 0 }, "slow");
      nextStep();
    },
  });
});

// validacion datos personales
$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#step-2-form").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      ocupacion: "required",
    },
    // Specify validation error messages
    messages: {
      ocupacion:
        "<i class='fa fa-exclamation-circle'></i> Todos los campos son requeridos",

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
      $("html, body").animate({ scrollTop: 0 }, "slow");
      nextStep();
    },
  });
});

// validacion historial
$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#step-3-form").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      digitos: "required",
    },
    // Specify validation error messages
    messages: {
      digitos:
        "<i class='fa fa-exclamation-circle'></i> Todos los campos son requeridos",

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
      $("html, body").animate({ scrollTop: 0 }, "slow");
      nextStep();
    },
  });
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
  $("#descuento-desglose").html(descuento);
}

$("select[name='periodos']").change(actualizaMontoYDescuento);

function ui_multi_add_file(id, file) {
  var template = $("#files-template").text();
  template = template.replace("%%filename%%", file.name);

  template = $(template);
  template.prop("id", "uploaderFile" + id);
  template.data("file-id", id);

  $("#files").find("li.empty").fadeOut(); // remove the 'no files yet'
  $("#files").prepend(template);
}

// Changes the status messages on our list
function ui_multi_update_file_status(id, status, message) {
  $("#uploaderFile" + id)
    .find("span")
    .html(message)
    .prop("class", "status text-" + status);
}

function ui_multi_update_file_progress(id, percent, color, active) {
  color = typeof color === "undefined" ? false : color;
  active = typeof active === "undefined" ? true : active;

  var bar = $("#uploaderFile" + id).find("div.progress-bar");

  bar.width(percent + "%");
  // bar.toggleClass("progress-bar-striped progress-bar-animated", active);

  if (percent === 0) {
    bar.html("");
  } else {
    bar.html(percent + "%");
  }

  if (color !== false) {
    bar.removeClass("bg-success bg-info bg-warning bg-danger");
    bar.addClass("bg-" + color);
  }
  if (!active) {
    $("#uploaderFile" + id)
      .find("div.progress")
      .hide();
  }
}

// carga de ine
$("#drop-area-front").dmUploader({
  //
  url: "https://httpstat.us/200", // url publica para recibir un status 'ok' y ver funcionar la animacion
  maxFileSize: 3000000, // 3 Megs
  onDragEnter: function () {
    // Happens when dragging something over the DnD area
    this.addClass("active");
  },
  onDragLeave: function () {
    // Happens when dragging something OUT of the DnD area
    this.removeClass("active");
  },
  onInit: function () {
    // Plugin is ready to use
    console.log("Carga inicializada");
  },
  onComplete: function () {
    // All files in the queue are processed (success or error)
    console.log("All pending tranfers finished");
  },
  onNewFile: function (id, file) {
    // When a new file is added using the file selector or the DnD area

    console.log("New file added #" + id);
    console.log(id, file);
    ui_multi_add_file(id, file);
    if (typeof FileReader !== "undefined") {
      var reader = new FileReader();
      var img = $("#uploaderFile" + id).find(".preview-img");

      reader.onload = function (e) {
        img.attr("src", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  },
  onBeforeUpload: function (id) {
    // about tho start uploading a file
    ui_multi_update_file_status(
      id,
      "uploading",
      '<img src="img/ico-close.svg" alt="">'
    );
    ui_multi_update_file_progress(id, 0, "", true);
  },
  onUploadCanceled: function (id) {
    // Happens when a file is directly canceled by the user.
    ui_multi_update_file_status(id, "warning", "Canceled by User");
    ui_multi_update_file_progress(id, 0, "warning", false);
  },
  onUploadProgress: function (id, percent) {
    // Updating file progress
    ui_multi_update_file_progress(id, percent);
  },
  onUploadSuccess: function (id, data) {
    // A file was successfully uploaded
    this.addClass("success");
    console.log(
      "Server Response for file #" + id + ": " + JSON.stringify(data)
    );
    console.log("Upload of file #" + id + " COMPLETED", "success");
    ui_multi_update_file_status(
      id,
      "success",
      '<button class="red btn-link delete-file-btn">Eliminar documento</button><button class="red btn-link modal-tag-btn"> <img src="img/tag-icon.svg" alt=""> Categorizar documento</button>'
    );
    ui_multi_update_file_progress(id, 100, "success", false);
  },
  onUploadError: function (id, xhr, status, message) {
    ui_multi_update_file_status(id, "danger", message);
    ui_multi_update_file_progress(id, 0, "danger", false);
  },
  onFallbackMode: function () {
    // When the browser doesn't support this plugin :(
    console.log(
      "Plugin cant be used here, running Fallback callback",
      "danger"
    );
  },
  onFileSizeError: function (file) {
    console.log(
      "File '" + file.name + "' cannot be added: size excess limit",
      "danger"
    );
  },
});
