var generateHeaderRows = function (headers) {
  var generatedHeaders = [];

  var $mainthead = $ ('<thead>');
  var $maintr = $ ('<tr>');
  $maintr.addClass ('header-row');

  // Create the first row for the header
  headers[0].forEach (function (header) {
    var $th = $('<th>');
    $th.append(header.label);
    $th.append('<br>');
    var button = generateTooltipButton(header.description);
    $th.append(button);
    $maintr.append($th);
  });

  if (headers.length > 1) {
    var detailsth = '<th>' + 'More details' + '</th>';
    $maintr.append(detailsth);
    $mainthead.append($maintr);
    generatedHeaders.push($mainthead);

    for (var i = 1; i < headers.length; i++) {
      var $thead = $ ('<thead>');
      var $tr = $ ('<tr>');
      $tr.addClass ('header-row');

      headers[i].forEach(function(header) {
        var $th = $('<th>');
        $th.append(header.label);
        $th.append('<br>');
        var button = generateTooltipButton(header.description);
        $th.append(button);
        $tr.append($th);
      });

      $thead.append($tr);
      generatedHeaders.push($thead);
    }
  } else {
    $mainthead.append($maintr);
    generatedHeaders.push($mainthead);
  }

  return generatedHeaders;
};


var generateDataRows = function(data) {
  // TODO : complete function
}

var generateTooltipButton = function(content) {
  var $button = $("<button>");
  $button.attr("type", "button");
  $button.addClass("tooltip-category");
  $button.attr("id", "popout");
  $button.attr("aria-hidden", "true");
  $button.attr("data-toggle", "popover");
  $button.attr("data-trigger", "focus");
  $button.attr("data-placement", "right");
  // $button.attr("title", "true");
  $button.attr("data-content", content);

  var $glyphicon = $("<span>");
  $glyphicon.addClass("glyphicon");
  $glyphicon.addClass("glyphicon-question-sign");

  $button.append($glyphicon);

  return $button;
}

var config = {
  apiKey: 'AIzaSyCEqRHvphWUbE-7GsEd_tvZqbytpbKHVog',
  authDomain: 'hardbacon-comparators.firebaseapp.com',
  databaseURL: 'https://hardbacon-comparators.firebaseio.com',
  projectId: 'hardbacon-comparators',
  storageBucket: 'hardbacon-comparators.appspot.com',
  messagingSenderId: '249486670235',
};

firebase.initializeApp(config);

var brokeragesSnapshot = firebase.database().ref('/brokerages').once('value', function(dataSnapshot) {
  var brokerages = dataSnapshot.val();

  var headerRows = generateHeaderRows(brokerages.headers);
  headerRows.forEach(function(header) {
    $("#brokerage-table").append(header);
  });
  var dataRows = generateDataRows(brokerages);

  $('[data-toggle="popover"]').popover(); 
  console.log(brokerages);
}, function(error) {
  console.log(error);
});