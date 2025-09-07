$(document).ready(function () {
  // Initialize lookingfor plugin
  $('ul.demo').lookingfor({
    input: $('input.filter'), // Input box
    items: 'li'              // List items to filter
  });
});
