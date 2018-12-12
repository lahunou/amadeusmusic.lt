document.addEventListener('DOMContentLoaded', function() {
  $('#bookingForm').on('submit',function(e) {
    e.preventDefault();

    var validationErrors = [];

    var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfEqlxO17L0Q9aUg7shqpYDhvEJMn5bUtrD46eZNlRQqURXzQ/formResponse?';

    var nameRef    = 'entry.2023916092=';
    var phoneRef   = 'entry.422669774=';
    var emailRef   = 'entry.607377987=';
    var commentRef = 'entry.563345650=';
    var submitRef  = 'submit=-5402867006765359937';

    var nameValue    = encodeURIComponent($('#placeholder1').val());
    var phoneValue   = encodeURIComponent($('#placeholder2').val());
    var emailValue   = encodeURIComponent($('#placeholder3').val());
    var commentValue = encodeURIComponent($('#placeholder4').val());

    var params = [
      nameRef + nameValue,
      phoneRef + phoneValue,
      emailRef + emailValue,
      commentRef + commentValue,
      submitRef
    ].join('&');

    var submitURL = baseURL + params;

    // $(this)[0].action = submitURL;

    $('#placeholder1').siblings('.t-input-error').hide();
    $('#placeholder3').siblings('.t-input-error').hide();

    if (nameValue.length == 0) {
      validationErrors.push('name');

      $('#placeholder1').siblings('.t-input-error').show().text('should be present');
    }

    if (emailValue.length == 0) {
      validationErrors.push('email');

      $('#placeholder3').siblings('.t-input-error').show().text('should be present');
    }

    if (validationErrors.length == 0) {
      $.ajax({
        url: submitURL,
        type: 'POST',
        crossDomain: true,
        success: function() {
        },
        error: function() {
          $('#button3').text('Thank you!');
        }
      });
    }
  });
});