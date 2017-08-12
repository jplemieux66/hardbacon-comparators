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
    if (header.description) {
      var button = generateTooltipButton(header.description);
      $th.append(button);
    }
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
        if (header.description) {
          var button = generateTooltipButton(header.description);
          $th.append(button);
        }
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
  var generatedDataRows = [];

  if (data.headers.length > 1) {
    data.headers[0].push({
      "valueName": "moreDetails",
      "label": "MORE DETAILS"
    });
  }

  data.entries.forEach(function(entry) {
    var entryDataRows = [];

    data.headers.forEach(function(headerRow) {
      var $tbody = $("<tbody>");
      var $tr = $("<tr>");

      headerRow.forEach(function(header) {
        var $td = $("<td>");

        if (header.showLabelOnMobile != false) {
          $td.attr("data-label", header.label);
        }
        
        if (header.description && !(header.valueName == "promotionalOffers")) {
          var button = generateMobileTooltipButton(header.description);
          $td.append(button);
        }

        if (header.valueName == "promotionalOffers") {
          // If the header is Promotional Offers
          var $button = $("<button>");
          $button.attr("type", "button");
          $button.addClass("btn btn-info");
          $button.attr("data-toggle", "modal");
          $button.attr("data-target", "#promotional-offer-modal");
          $button.append(entry["promotionalOffers"]);

          $td.append($button);
        } else if (header.valueName == "moreDetails") {
          // If the header is More Details
          var index = data.entries.indexOf(entry);
          var $button = $("<button>");
          $button.attr("type", "button");
          $button.addClass("tooltip-category");
          $button.attr("aria-hidden", "true");
          $button.attr("data-toggle", "collapse");
          $button.attr("id", "togglebtn" + index);
          $button.attr("data-target", ".comparator-row" + index);
          $button.attr("value", "More details");

          var $glyphicon = $("<span>");
          $glyphicon.addClass("glyphicon glyphicon-plus-sign");

          $button.attr("onClick", 'var button = $(this); if (button.attr("value") == "More details") { button.attr("value", "Less details"); button.find(".glyphicon").removeClass("glyphicon-plus-sign"); button.find(".glyphicon").addClass("glyphicon-minus-sign");} else {button.attr("value", "More details");button.find(".glyphicon").removeClass("glyphicon-minus-sign");button.find(".glyphicon").addClass("glyphicon-plus-sign");}');
          $button.click(function(e) {
            var button = $(e.target);
            if (button.attr("value") == "More details") {
              button.attr("value", "Less details");
              button.find(".glyphicon").removeClass("glyphicon-plus-sign");
              button.find(".glyphicon").addClass("glyphicon-minus-sign");
            } else {
              button.attr("value", "More details");
              button.find(".glyphicon").removeClass("glyphicon-minus-sign");
              button.find(".glyphicon").addClass("glyphicon-plus-sign");
            }
          });

          $button.append($glyphicon);
          $td.append($button);
        } else {
          var value = entry[header.valueName];
          if (isPNGImage(value)) {
            // If the data is an image (.png)
            var $img = $("<img>");
            $img.attr("src", value);
            $img.attr("alt", entry.name);
            $td.append($img);
          } else if (Array.isArray(value)) {
            // If the data is an array (multiple lines of text)
            var $p = $("<p>");
            value.forEach(function(line) {
              $p.append('"' + line + '"');
              $p.append("<br>");
            });
            $td.append($p);
          } else {
            // Else, data is a single line of text. 
            $td.append("<p>" + value + "</p>");
          }
        }

        $tr.append($td);
      });
      
      $tbody.append($tr);
      entryDataRows.push($tbody);
    });

    generatedDataRows.push(entryDataRows);
  });

  return generatedDataRows;
}

var isPNGImage = function(value) {
  if ((typeof value) == "string") {
    var splitValue = value.split('.');
    if(splitValue[splitValue.length - 1] == 'png') {
      return true;
    }
  }
  return false;
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
  $button.attr("data-content", content);

  var $glyphicon = $("<span>");
  $glyphicon.addClass("glyphicon");
  $glyphicon.addClass("glyphicon-question-sign");

  $button.append($glyphicon);

  return $button;
}

var generateMobileTooltipButton = function(content) {
  var $button = generateTooltipButton(content);
  $button.addClass("mobile");
  $button.attr("data-placement", "top");

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

  // Generate Rows and Headers
  var headerRows = generateHeaderRows(brokerages.headers);
  var dataRows = generateDataRows(brokerages);

  //Append First Row (different from the other rows)
  var $firstHeaderRow = headerRows[0].clone();
  $("#brokerage-table").append($firstHeaderRow);
  $("#brokerage-table").append(dataRows[0][0]);

  for (var i = 1; i < headerRows.length; i++) {
    var firstComparatorRowClass = "comparator-row0 collapse";
    var $headerRow = headerRows[i].clone();
    $headerRow.find("tr").addClass(firstComparatorRowClass);
    $("#brokerage-table").append($headerRow);
    dataRows[0][i].find("tr").addClass(firstComparatorRowClass);
    $("#brokerage-table").append(dataRows[0][i]);
  }

  // Append all other Rows
  for (var i = 1; i < dataRows.length; i++) {
    for (var j = 0; j < headerRows.length; j++) {
      var comparatorRowClass = "comparator-row" + i + " collapse";
      var $headerRow = headerRows[j].clone();
      $headerRow.find("tr").addClass(comparatorRowClass);
      $("#brokerage-table").append($headerRow);
      if (j != 0) {
        dataRows[i][j].find("tr").addClass(comparatorRowClass);
      }
      $("#brokerage-table").append(dataRows[i][j]);
    }
  }

  $('[data-toggle="popover"]').popover(); 
}, function(error) {
  console.log(error);
});