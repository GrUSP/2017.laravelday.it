$(function () {
  var $acceptPrivacy = $('#accept-privacy');
  var $checkPrivacy = $('#privacy-policy');
  var $form = $('#newsletter');
  var $email = $('#newsletter-email');
  var $submitDisabled = $('#submit-disabled');
  var $submitEnabled = $('#submit-enabled');

  $checkPrivacy.on('click', function (e) {
    if($(this).is(':checked')) {
      $acceptPrivacy.addClass('newsletter__text--hidden');
      $submitDisabled.addClass('button--hidden');
      $submitEnabled.removeClass('button--hidden');
    } else {
      $acceptPrivacy.removeClass('newsletter__text--hidden');
      $submitDisabled.removeClass('button--hidden');
      $submitEnabled.addClass('button--hidden');
    }
  });

  $form.on('submit', function (e) {
    if ($email.val().length == 0) {
      $email.addClass('newsletter__email--invalid');
      $email.attr('placeholder', 'Write email here');
      return false;
    }
  });

})
