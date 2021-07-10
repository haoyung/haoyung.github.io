$(function() {
  'use strict';

  const $formInput = $('input');

  /**
   * Init MailChimpForm
   */
  $('#subscribe-form').MailChimpForm({
    url: 'https://gmail.us6.list-manage.com/subscribe/post?u=638c75f9e7b5ea4fd32d76a3a&amp;id=09c247923d',
    fields: '0:EMAIL',
    submitSelector: '#submit-form',
    customMessages: {
      E003: 'Please enter a valid email address',
      E004: 'Please enter a valid email address',
    },
    onOk: (message) => {
      document.getElementById('mce-EMAIL').value = ''
      document.getElementById('mce-EMAIL').placeholder = 'Success! Thank you for subscribing!'
      $('input').addClass('green-class');
    },
    onFail: (message) => {
      document.getElementById('mce-EMAIL').value = ''
      if (message === 'This email cannot be added to this list. Please enter a different email address.') {
        document.getElementById('mce-EMAIL').placeholder = 'This email cannot be added to this list.'
        $('input').addClass('red-class');
      }
      else if (message.split(' ')[1] === 'is' && message.split(' ')[2] === 'already' && message.split(' ')[3] === 'subscribed') {
        document.getElementById('mce-EMAIL').placeholder = 'You have already subscribed!'
        $('input').addClass('green-class');
      }
      else {
        document.getElementById('mce-EMAIL').placeholder = message
        $('input').addClass('red-class');
      }
    }
  });

  /**
   * mc:input:error event handler
   */
  $formInput.on('mc:input:error', function () {
    console.log('mc:input:error event fired');
    document.getElementById('mce-EMAIL').value = ''
    document.getElementById('mce-EMAIL').placeholder = document.getElementById('mc-error').innerText
    $('input').addClass('red-class');
    // addBorder($(document.getElementById('mc_embed_signup_scroll')), 'red');
  });

  /**
   * mc:input:ok event handler
   */
  $formInput.on('mc:input:ok', function () {
    console.log('mc:input:ok event fired');
    // addBorder($(this), 'green');
  });

  /**
   * @param element
   * @param {String} color
   */
  function addBorder(element, color) {
    element.css({'box-shadow': `inset 0px 0px 0px 10px ${color}`});
  }
});