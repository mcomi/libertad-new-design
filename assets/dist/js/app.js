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
