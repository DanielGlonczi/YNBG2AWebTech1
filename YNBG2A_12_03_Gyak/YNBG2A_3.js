$(document).ready(function () {
  var animacioFut = false;
  var bekezdesekLatasban = true;
  var dobozOsszecsukolva = false;
  var animacioSebesseg = 1500;

  $('#animacioGomb').click(function () {
    if (animacioFut) return;
    animacioFut = true;

    var $doboz = $('.animacio-doboz');

    $doboz.stop(true, false).css({
      left: '300px',
      top: '400px',
      width: '300px',
      height: '100px',
      fontSize: '12pt',
      opacity: 1,
    });

    $doboz.animate(
      {
        left: '800px',
        width: '600px',
        fontSize: '30pt',
      },
      animacioSebesseg,
      function () {
        $doboz.animate(
          {
            top: '600px',
            width: '300px',
            height: '110px',
            fontSize: '14pt',
          },
          animacioSebesseg,
          function () {
            $doboz.animate(
              {
                left: '50px',
                opacity: 0.4,
              },
              animacioSebesseg,
              function () {
                $doboz.animate(
                  {
                    left: '300px',
                    top: '400px',
                    width: '300px',
                    height: '100px',
                    fontSize: '12pt',
                    opacity: 1,
                  },
                  animacioSebesseg,
                  function () {
                    alert('VÉGE');
                    animacioFut = false;
                  }
                );
              }
            );
          }
        );
      }
    );
  });

  $('#elrejtesGomb').click(function () {
    if (bekezdesekLatasban) {
      $('.bekezdesek').hide();
      $('.animacio-doboz').css({
        position: 'static',
        margin: '20px 0',
      });
      bekezdesekLatasban = false;
    } else {
      $('.bekezdesek').show();
      $('.animacio-doboz').css({
        position: 'absolute',
        left: '300px',
        top: '400px',
      });
      bekezdesekLatasban = true;
    }
    alert('Bekezdések elrejtése');
  });

  $('#osszecsukasGomb').click(function () {
    var $doboz = $('.animacio-doboz');

    if (!dobozOsszecsukolva) {
      $doboz.stop(true, false).animate(
        {
          width: '50px',
          height: '50px',
          fontSize: '8pt',
        },
        500,
        function () {
          $doboz.animate(
            {
              left: '600px',
            },
            1000
          );
        }
      );
      dobozOsszecsukolva = true;
    } else {
      $doboz.stop(true, false).animate(
        {
          width: '300px',
          height: '100px',
          fontSize: '12pt',
          left: '300px',
        },
        1000
      );
      dobozOsszecsukolva = false;
    }
  });
});
