$(document).ready(function(){
  $("#fortune-form").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=gypsy-fortune]:checked").each(function(){
      var unlucky = $(this).val();
    $("input:checkbox[name=lucky-fortune]:checked").each(function(){
      var lucky = $(this).val();
    $("input:checkbox[name=event-fortune]:checked").each(function(){
      var events = $(this).val();

      if ((unlucky === "black-cat" || "broken-mirror") && (lucky === "wishbone" || "rainbow") && (events === "job")) {
        $("#evil-villian").show();
      } else if ((unlucky === "never" || "ladder") && (lucky === "fish" || "clover") && (events === "purchase")){
        $("#best-friend").show();
      } else if ((unlucky === "umbrella") && (lucky === "turquoise") && (events === "beginning" ||  "relationship")){
        $("#cobbler").show();
      }  else {
        $("#best-friend").show();
      };
    });
    });
    });

  });
});
