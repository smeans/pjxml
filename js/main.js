$(function () {
  $.get('test.xml', function (data, statusText, jqXHR) {
    $('textarea[name=sampleXML]').val(data);
  }, 'text');
  $('button[name=parseSample]').click(function () {
    var doc = pjXML.parse($('textarea[name=sampleXML]').val());

    $('pre[name=sampleDom]').text(JSON.stringify(doc));
  });
});
