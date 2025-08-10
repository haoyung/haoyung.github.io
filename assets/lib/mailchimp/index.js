jQuery(function ($) {
  'use strict';

  const $formInput = $('input');

  /**
   * Init MailChimpForm
   */
  $('#subscribe-form').MailChimpForm({
    url: 'https://gmail.us6.list-manage.com/subscribe/post?u=638c75f9e7b5ea4fd32d76a3a&amp;id=09c247923d&amp;f_id=000537e3f0',
    fields: '0:EMAIL',
    submitSelector: '#submit-form',
    customMessages: {
      E003: 'An email address must have an @ in it.',
      E004: 'Please enter a valid email address.',
    },
    onOk: (message) => {
      document.getElementById('mce-EMAIL').value = ''
      if (message === "You're already subscribed, your profile has been updated. Thank you!") {
        document.getElementById('mce-EMAIL').placeholder = 'You\'re already subscribed!'
        $('input').removeClass('red-class');
        $('input').addClass('green-class');
      }
      else {
        document.getElementById('mce-EMAIL').placeholder = 'Thank you for subscribing!'
        $('input').removeClass('red-class');
        $('input').addClass('green-class');
      }
    },
    onFail: (message) => {
      document.getElementById('mce-EMAIL').value = ''
      if (message === 'This email cannot be added to this list. Please enter a different email address.') {
        document.getElementById('mce-EMAIL').placeholder = 'This email cannot be added. Try another one?'
        $('input').removeClass('green-class');
        $('input').addClass('red-class');
      }
      else {
        document.getElementById('mce-EMAIL').placeholder = message
        $('input').removeClass('green-class');
        $('input').addClass('red-class');
      }
    }
  });

  /**
   * mc:input:error event handler
   */
  $formInput.on('mc:input:error', function () {
    // console.log('mc:input:error event fired');
    document.getElementById('mce-EMAIL').value = ''
    if (document.getElementById('mc-error').innerText === 'The username portion of the email address is empty')
      document.getElementById('mce-EMAIL').placeholder = 'You have to have an username in your email!'
    else
      document.getElementById('mce-EMAIL').placeholder = document.getElementById('mc-error').innerText
    $('input').removeClass('green-class');
    $('input').addClass('red-class');
    // addBorder($(document.getElementById('mc_embed_signup_scroll')), 'red');
  });

  /**
   * mc:input:ok event handler
   */
  // $formInput.on('mc:input:ok', function () {
  //   console.log('mc:input:ok event fired');
  //   addBorder($(this), 'green');
  // });

  /**
   * @param element
   * @param {String} color
   */
  function addBorder(element, color) {
    element.css({ 'box-shadow': `inset 0px 0px 0px 10px ${color}` });
  }
});