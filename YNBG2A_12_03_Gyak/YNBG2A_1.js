$(document).ready(function () {
  $('#betöltGomb').click(function () {
    $.ajax({
      url: 'YNBG2A_orarend.json',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        let html = '<div class="adatok-container">';

        html += '<h2>MISKOLCI EGYETEM</h2>';

        html +=
          '<p><strong>Cím:</strong> ' +
          data.cim.iranyitoszam +
          ' ' +
          data.cim.varos +
          ' ' +
          data.cim.utca +
          '</p>';

        html += '<p><strong>Telefonszám:</strong><br>';
        data.telefonszam.forEach(function (tel) {
          html += tel.tipus + ': ' + tel.szam + '<br>';
        });
        html += '</p>';

        html += '<p><strong>MI, PTI Órarend 2024 tavasz</strong></p>';

        data.kurzus.forEach(function (k) {
          html += '<p><strong>Tárgy:</strong> ' + k.targy + '</p>';
          html += '<p><strong>Időpont:</strong><br>';
          html += 'Nap: ' + k.idopont.nap + '<br>';
          html += 'Tól: ' + k.idopont.tol + '<br>';
          html += 'Ig: ' + k.idopont.ig + '<br></p>';
          html += '<p><strong>Helyszín:</strong> ' + k.helyszin + '</p>';
          html += '<p><strong>Oktató:</strong> ' + k.oktato + '</p>';
          html += '<p><strong>Szak:</strong> ' + k.szak + '</p>';
          html += '<p><strong>Típus:</strong> ' + k.tipus + '</p>';
          html += '<hr>';
        });

        html += '</div>';
        $('#adatok').html(html);
      },
      error: function (xhr, status, error) {
        console.log('Hiba: ' + error);
        console.log('Status: ' + status);
        $('#adatok').html('<p>Hiba az adatok betöltésekor!</p>');
      },
    });
  });
});
