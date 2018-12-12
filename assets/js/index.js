function setReadMoreButton() {
  if ($('#text19').text() === '') {
    $('#readMoreButton').hide();
  } else {
    $('#readMoreButton').show();
  }
}


document.addEventListener('DOMContentLoaded', function() {
  setReadMoreButton();

  $('#readMoreButton').click(function(e) {
    e.preventDefault();

    var block = $('#readMoreBlock');

    if (block.hasClass('activeBlock')) {
      block.removeClass('activeBlock');
    } else {
      block.addClass('activeBlock');
    }
  });
});