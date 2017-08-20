$(document).ready(function() {
  $("[data-toggle=popover]").popover();

  // Add More Details Buttons Click Handlers
  var classname = document.getElementsByClassName("more-details-btn");
  
  var moreDetailsFunction = function() {
    var button = $(this);
    var moreDetailsLabel = button.attr("data-more-details");
    var lessDetailsLabel = button.attr("data-less-details");
    if (button.attr("value") == moreDetailsLabel) { 
      button.attr("value", lessDetailsLabel); 
      button.find(".glyphicon").removeClass("glyphicon-plus-sign"); 
      button.find(".glyphicon").addClass("glyphicon-minus-sign");
    } else {
      button.attr("value", moreDetailsLabel);
      button.find(".glyphicon").removeClass("glyphicon-minus-sign");
      button.find(".glyphicon").addClass("glyphicon-plus-sign");
    }
  };
  
  for (var i = 0; i < classname.length; i++) {
      classname[i].addEventListener('click', moreDetailsFunction, false);
  }

  // offer-btn
  // Add Promotional Offer Buttons Click Handlers 
  var classname = document.getElementsByClassName("offer-btn");
  
  var promotionalOffersFunction = function() {
    var button = $(this);
    var offerText = button.attr("data-offer-text");
    var offerName = button.attr("data-offer-name");

    $('.promotional-offer-text').text(offerText);
    $('#offer-name-input').attr('value', offerName);
  };
  
  for (var i = 0; i < classname.length; i++) {
      classname[i].addEventListener('click', promotionalOffersFunction, false);
  }
});