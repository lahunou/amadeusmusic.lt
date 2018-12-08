function I18nController() {
  function addEventListeners() {
    var localeSwitches = document.getElementsByClassName('js-locale-switch');

    Array.from(localeSwitches).forEach(function(element, i) {
      element.addEventListener('mouseup', switchLocale, false);
    });
  }

  function switchLocale() {
    var data = I18N_DATA[this.dataset.localeId];

    for (var key in data) {
      var element = document.getElementById(key);

      if (element == null) { continue; }

      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = data[key];
      } else {
        element.innerHTML = data[key];
      }
    }
  }

  this.perform = function() {
    addEventListeners();
  };
}

document.addEventListener('DOMContentLoaded', function() {
  var controller = new I18nController();

  controller.perform();
});