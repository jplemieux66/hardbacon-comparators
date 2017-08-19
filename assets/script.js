$(document).ready(function() {
  $("[data-toggle=popover]").popover();

  $(".more-details-btn").toArray().map(function(moreDetailsButton) {
    moreDetailsButton.click(function() {
      console.log("click is working");
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
    })
  });
});