var HASH_PREFIX = 'tab-pane-';

$(document).ready(function () {
  // Show tab-pane comming from the url hash. If the url hash is empty, show first tab-pane.
  var tabPaneId = document.location.hash.replace('#' + HASH_PREFIX, '#') ||
    $('.nav-tabs:not(.disable-link-generation) .nav-item:first-child .nav-link').attr('href');

  $('.nav-tabs:not(.disable-link-generation) .nav-link[href="' + tabPaneId + '"]').tab('show');

  // Change url hash for page-reload
  $('.nav-tabs:not(.disable-link-generation) .nav-item .nav-link').on('shown.bs.tab', function (event) {
    if ($(event.target).parent('.nav-item').is(':first-child')) {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    else {
      document.location.hash = event.target.hash.replace('#', '#' + HASH_PREFIX);
    }
  });
});
