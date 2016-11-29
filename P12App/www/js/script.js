//BOTÃO
$(document).ready(function () {
    $('select').material_select();
});

$(".button-collapse").sideNav();

//MODAL
$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});

//PICKADATE

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });