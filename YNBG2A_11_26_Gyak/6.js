$(document).ready(function () {
  $('#calculateBtn').on('click', function (e) {
    e.preventDefault();

    clearErrors();

    var a = $('#inputA').val();
    var b = $('#inputB').val();
    var operation = $('input[name="operation"]:checked').val();

    var isValid = true;

    if (a === '' || a === null) {
      showError('errorA', 'Az A mező kitöltése kötelező!');
      isValid = false;
    } else if (isNaN(a)) {
      showError('errorA', 'Az A mezőbe csak szám megengedett!');
      isValid = false;
    } else if (!Number.isInteger(Number(a))) {
      showError('errorA', 'Az A mezőbe csak egész szám megengedett!');
      isValid = false;
    }

    if (b === '' || b === null) {
      showError('errorB', 'A B mező kitöltése kötelező!');
      isValid = false;
    } else if (isNaN(b)) {
      showError('errorB', 'A B mezőbe csak szám megengedett!');
      isValid = false;
    } else if (!Number.isInteger(Number(b))) {
      showError('errorB', 'A B mezőbe csak egész szám megengedett!');
      isValid = false;
    }

    if (!operation) {
      showError('errorOperation', 'Válasszon ki egy műveletet!');
      isValid = false;
    }

    if (!isValid) {
      $('#resultGroup').removeClass('show');
      return;
    }

    var numA = parseInt(a);
    var numB = parseInt(b);
    var result = 0;

    switch (operation) {
      case 'multiply':
        result = numA * numB;
        break;
      case 'divide':
        if (numB === 0) {
          showError('errorB', 'Nullával nem lehet osztani!');
          $('#resultGroup').removeClass('show');
          return;
        }
        result = Math.floor(numA / numB);
        break;
      case 'add':
        result = numA + numB;
        break;
      case 'subtract':
        result = numA - numB;
        break;
      default:
        result = 0;
    }

    $('#resultValue').text(result);
    $('#resultGroup').addClass('show');
  });

  $('#inputA, #inputB').on('keypress', function (e) {
    if (e.which === 13) {
      // Enter
      e.preventDefault();
      $('#calculateBtn').click();
    }
  });

  function showError(elementId, message) {
    $('#' + elementId)
      .text(message)
      .addClass('show');
  }

  function clearErrors() {
    $('.error-message').removeClass('show').text('');
  }

  $('#inputA, #inputB').on('blur', function () {
    clearErrors();
  });
});
