$(document).ready(function () {
  $('#hideParas').on('click', function () {
    $('#para1, #para2, #para3').fadeOut(300);
  });

  $('#showParas').on('click', function () {
    $('#para1, #para2, #para3').fadeIn(300);
  });

  $('#toggleParas').on('click', function () {
    $('#para1, #para2, #para3').fadeToggle(300);
  });

  $('#opacity01').on('click', function () {
    $('#formContainer').css('opacity', '0.1');
  });

  $('#opacity05').on('click', function () {
    $('#formContainer').css('opacity', '0.5');
  });

  $('#opacity08').on('click', function () {
    $('#formContainer').css('opacity', '0.8');
  });

  $('#hideForm').on('click', function () {
    $('#formContainer').fadeOut(300);
  });

  $('#showForm').on('click', function () {
    $('#formContainer').fadeIn(300);
    $('#formContainer').css('opacity', '1');
  });

  $('#toggleForm').on('click', function () {
    $('#formContainer').fadeToggle(300);
  });
});
