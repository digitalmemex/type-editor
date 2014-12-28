/*global $, RESTClient*/

$(function() { // jQuery ready => start up
  var dmc = new RESTClient('/core'),
      types = dmc.get_topics('dm4.core.topic_type', true, true),
      $types = $('#types').empty(),
      renderType = function (c) {
        $types.append($('<tr>')
          .append($('<td>').text(c.value))
          .append($('<td>').text(c.uri))
        )
      };
  $.each(types.items, function (i, t) { renderType(t) });
});

