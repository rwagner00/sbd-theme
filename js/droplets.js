jQuery(document).ready(function($) {
  var width = window.innerWidth;
  function hideNodes(active) {
    $(".view-front-page-drop-block .node-page").hide();
    $(active).show();
  }

  $(window).resize(function() {
    if ((width > 740 && window.innerWidth < 740) || (width < 740 && window.innerWidth > 740)) {
      width = window.innerWidth;
      if (window.innerWidth > 740) {
        hideNodes("#node-page-1");
        $('#aboutus').css({"top": "0", "left": "0"});
        $('#html5css3').css({"top": "0", "left": "0"});
        $('#theprocess').css({"top": "0", "left": "0"});
        $('#technology').css({"top": "0", "left": "0"});
        $('#whywerock').css({"top": "0", "left": "0"});
        $('#drupalisawesome').css({"top": "0", "left": "0"});
      }
      if (window.innerWidth < 740) {
        $("#node-page-2").show();
        $("#node-page-3").show();
        $("#node-page-4").show();
        $("#node-page-5").show();
        $("#node-page-6").show();
      }
    }
  });

  //Only do this if it's not a mobile phone
  if (window.innerWidth > 740) {
    //Animate falling drops. They will all take 2.5s to reach the bottom once they start falling.
    //The speed function will make them appear to fall at different speeds.
    $('#aboutus').delay(300).animate({top: '0', left: '0'}, 2500);
    $('#html5css3').delay(1500).animate({top: '0', left: '0'}, 2500);
    $('#theprocess').delay(700).animate({top: '0', left: '0'}, 2500);
    $('#technology').delay(1000).animate({top: '0', left: '0'}, 2500);
    $('#whywerock').delay(1200).animate({top: '0', left: '0'}, 2500);
    $('#drupalisawesome').delay(1000).animate({top: '0', left: '0'}, 2500);
    //4s after page load, and immediately after drops stop, grass grows over 1.5s.
    $('#zone-postscript-second-wrapper').delay(4000).animate({top: '0'}, 1500);
    //5.5s after page load, immediately after grass stops, content div shows over 1s.
    $('.region-sidebar-second-inner').hide().delay(5500).slideDown(1500);
    $('.region-content-inner').hide().delay(5500).slideDown(1500);
    
    // .region-content-inner
    //Hide all nodes other than about us.
    $("#node-page-2").hide();
    $("#node-page-3").hide();
    $("#node-page-4").hide();
    $("#node-page-5").hide();
    $("#node-page-6").hide();
  } 
  

  //Add active class to the About Us droplet to highlight it.
  $("#aboutus").addClass("active");

  //Whenever a droplet is moused over, add rollover class to highlight.
  //When the mouse moves away, revoke the class.
  $(".droplet").hover(
    function () {
      $(this).addClass("rollover");
    }, 
    function () {
      $(this).removeClass("rollover");
    }
  );

  //Following functions are to handle click events.
  //When a drop is clicked, clear all active classes, then add active to clicked element.
  $("#aboutus").click(function(){
    $(".droplet").removeClass("active");
    $(this).addClass("active");
    hideNodes("#node-page-1");
  });

  
  $("#html5css3").click(function() {
    $(".droplet").removeClass("active");
    $(this).addClass("active");
    hideNodes("#node-page-5");
  });

  
  $("#theprocess").click(function() {
    $(".droplet").removeClass("active");
    $(this).addClass("active");
    hideNodes("#node-page-4");
  });

  
  $("#technology").click(function(){
    $(".droplet").removeClass("active");
    $(this).addClass("active");
    hideNodes("#node-page-3");
  });

  
  $("#whywerock").click(function(){
    $(".droplet").removeClass("active");
    $(this).addClass("active");
    hideNodes("#node-page-6");
  });

  
  $("#drupalisawesome").click(function(){
    $(".droplet").removeClass("active");
    $(this).addClass("active");
    hideNodes("#node-page-2");
  });
});