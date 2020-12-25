---
---
// debug stuff
{% if jekyll.environment != 'production' %}
  $(document).ready(function() {
    $(document).on("click", function() {
      //console.log("clicked " + event.target.nodeName);
    });
    $(".viewport-measure").on("click", function() {
      console.log("click");
      if ($("body").hasClass("debug")) {
        $("body").removeClass("debug");
        localStorage.setItem("debug-css", "false");
        return false
      } else {
        $("body").addClass("debug");
        localStorage.setItem("debug-css", "true");
        return false
      };
    });
    $(window).resize(function() {
      // your size calculation code here
        $(".vwidth").html(window.innerWidth);
      }).resize();
  });
{% endif %}
// run after load
$(window).on("load", function (e) {
  $("html").addClass("loaded");
});

// fix mobile touch 
$("body").bind("touchstart", function() {});      
