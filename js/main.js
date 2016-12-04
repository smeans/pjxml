var doc;

$(function () {
  $.get('test.xml', function (data, statusText, jqXHR) {
    $('textarea[name=sampleXML]').val(data);
  }, 'text');
  $('button[name=parseSample]').click(function () {
    doc = pjXML.parse($('textarea[name=sampleXML]').val());

    $('pre[name=sampleJson]').text(JSON.stringify(doc));
    $('pre[name=sampleText]').text(doc.text());
    $('pre[name=sampleXML]').text(doc.xml());
  });
  $('input[name="xpath"]').on('change, keyup', function (e) {
    $('pre[name=selectResult]').text(JSON.stringify(doc.select($(e.target).val())));
  });
});
