
jQuery(document).ready(function($) {
  $(".field-name-field-picture").mouseover(function() {
    $(".field-name-field-picture").removeClass('active');
    $(this).addClass('active');
  });
  
  $(".field-name-field-picture").mouseout(function() {
    $(".field-name-field-picture").removeClass('active');
  });
});