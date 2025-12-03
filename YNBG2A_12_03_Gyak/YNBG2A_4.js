$(document).ready(function () {
  $('#szamoloGomb').click(function () {
    var szamA = $('#szamA').val();
    var szamB = $('#szamB').val();
    var művelet = $('input[name="művelet"]:checked').val();

    if (szamA === '' || szamB === '') {
      alert('Kérjük, adjon meg mindkét számot!');
      return;
    }

    szamA = parseInt(szamA);
    szamB = parseInt(szamB);

    if (isNaN(szamA) || isNaN(szamB)) {
      alert('Kérjük, egész számokat adjon meg!');
      return;
    }

    if (!művelet) {
      alert('Kérjük, válasszon ki egy műveletet!');
      return;
    }

    var eredmeny;

    switch (művelet) {
      case '1':
        eredmeny = szamA * szamB;
        break;
      case '2':
        if (szamB === 0) {
          alert('Nullával nem lehet osztani!');
          return;
        }
        eredmeny = szamA / szamB;
        break;
      case '3':
        eredmeny = szamA + szamB;
        break;
      case '4':
        eredmeny = szamA - szamB;
        break;
    }

    $('#eredmeny').text('Eredmény: ' + eredmeny);
  });
});
