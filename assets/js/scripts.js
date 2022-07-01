//scroll
$(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      },800, function(){
        window.location.hash = hash;
      });
    } 
  });
});



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

let exampleFormControlInput1 = document.querySelector("#exampleFormControlInput1");
function send() {
  console.log(exampleFormControlInput1.value);
}
$(document).ready(function () {
    $("#btn").click(function () {
        const correo =  alert ("Tu Mensaje fue enviado")
    })})