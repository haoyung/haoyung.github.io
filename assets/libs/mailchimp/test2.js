$(function () {
  $('.img__wrap').on('click', function (e) {
    $(this).find('.img__description').fadeToggle('slow');
  });
});