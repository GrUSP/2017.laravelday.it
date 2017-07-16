$(function () {

  function checkCurrentEvent () {
    var today = moment().format('M-D');

    $('.schedule tbody td:first-child').each(function(){
      var dates = $(this).closest('.schedule').data('dates').split(',');

      var enable = false;
      for (var i = 0; i < dates.length; i++) {
        if (dates[i] === today) {
          enable = true;
        }
      }

      if (enable) {
        var now = parseInt(moment().format('Hmm'));
        var from = parseInt($.trim($(this).find('.schedule__time').text().split('-')[0]).replace('.', ''));
        var to = parseInt($.trim($(this).find('.schedule__time').text().split('-')[1]).replace('.', ''));

        $(this).closest('tr').removeClass('schedule__current');

        if (now >= from && now < to) {
          $(this).closest('tr').addClass('schedule__current');
        }
      }
    });
  }

  setInterval(checkCurrentEvent, 60000);
  checkCurrentEvent();

});
