$(document).ready(function () {
  $('h1').on('mouseenter', function () {
    alert('jQuery feladatok - Egér információ ablak');
  });

  $('.description .link-text').on('click', function (e) {
    e.preventDefault();
    $('#paragraph1').fadeOut(300);
  });

  $('#click-para2').on('dblclick', function (e) {
    e.preventDefault();
    $('#paragraph2').fadeOut(300);
  });

  $('#submitBtn').on('mouseenter', function () {
    alert('Kattintson ide a regisztrációhoz!');
  });

  $('#name, #email, #password').on('mouseenter', function () {
    $(this).css('border-color', '#ff6600');
  });

  $('#name, #email, #password').on('mouseleave', function () {
    $(this).css('border-color', '#ddd');
  });

  $('#name, #email, #password').on('click', function () {
    $(this).addClass('filled');
  });

  $('#name, #email, #password').on('blur', function () {
    if ($(this).val() === '') {
      $(this).removeClass('filled');
    }
  });
});
