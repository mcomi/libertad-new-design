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
