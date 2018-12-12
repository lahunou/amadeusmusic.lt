function I18nController() {
  var _self = this;

  function addEventListeners() {
    var localeSwitches = document.getElementsByClassName('js-locale-switch');

    Array.from(localeSwitches).forEach(function(element, i) {
      element.addEventListener('mouseup', handleClick, false);
    });
  }

  function handleClick(event) {
    event.preventDefault();

    var localeId = this.dataset.localeId;

    _self.switchLocale(localeId);
  }

  this.switchLocale = function(localeId) {
    var data = I18N_DATA[localeId];

    window.history.pushState({}, 'lang', '?lang=' + localeId);

    for (var key in data) {
      var element = document.getElementById(key);

      if (element == null) { continue; }

      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = data[key];
      } else {
        element.innerHTML = data[key];
      }
    }

    setReadMoreButton();
  };

  this.perform = function() {
    addEventListeners();
  };
}

document.addEventListener('DOMContentLoaded', function() {
  var controller = new I18nController();

  controller.perform();

  var currentURL = new URL(window.location.href);
  var searchParams = new URLSearchParams(currentURL.search);
  var localeId = searchParams.get('lang');

  if (localeId != null) {
    controller.switchLocale(localeId);
  }
});