$(function() {
  var $h1 = $("h1");
  var $zip = $("input[name='zip']");

  $("form").on("submit", function(event) {
    // 
    event.preventDefault();

    var zipcode = $.trim($zip.val());
    $h1.text("loading");

    // 
    var request = $.ajax({
      url: "/" + zipcode,
      dataType: "json"
    });
    // 
    request.done(function(data) {
      var temperature = data.temperature;
      $h1.text("It is " + temperature + "in " + zipcode + ".");
    });
    // 
    request.fail(function() {
      $h1.text("error");
    });
  });
});
