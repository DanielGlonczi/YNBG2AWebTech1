$(document).ready(function () {
  var animationSpeed = 1500;

  var isBoxCollapsed = false;

  $('#startAnimation').on('click', function () {
    var $box = $('#animatedBox');

    $box.animate(
      {
        left: '600px',
        width: '500px',
        fontSize: '30pt',
        height: '80px',
      },
      animationSpeed,
      function () {
        $box.animate(
          {
            top: '400px',
            width: '300px',
            height: '150px',
            fontSize: '16pt',
          },
          animationSpeed,
          function () {
            $box.animate(
              {
                left: '50px',
                opacity: '0.4',
              },
              animationSpeed,
              function () {
                $box.animate(
                  {
                    left: '300px',
                    top: '50px',
                    width: '300px',
                    height: '80px',
                    fontSize: '12pt',
                    opacity: '1',
                  },
                  animationSpeed,
                  function () {
                    alert('VÉGE');
                  }
                );
              }
            );
          }
        );
      }
    );
  });

  $('#hideParas').on('click', function () {
    $('#para1, #para2, #para3').fadeOut(500);

    var $box = $('#animatedBox');
    var $container = $('#animationContainer');

    $box.clearQueue().stop().css({
      left: '300px',
      top: '100px',
      width: '300px',
      height: '80px',
      fontSize: '12pt',
      opacity: '1',
    });

    alert('Bekezdések elrejtése');
  });

  $('#toggleBox').on('click', function () {
    var $box = $('#animatedBox');

    if (!isBoxCollapsed) {
      $box
        .clearQueue()
        .stop()
        .animate(
          {
            height: '20px',
            width: '100px',
            fontSize: '8pt',
          },
          500,
          function () {
            $box.animate(
              {
                left: '600px',
              },
              1000
            );
          }
        );
      isBoxCollapsed = true;
    } else {
      $box.clearQueue().stop().animate(
        {
          height: '80px',
          width: '300px',
          fontSize: '12pt',
          left: '300px',
        },
        500
      );
      isBoxCollapsed = false;
    }
  });
});
