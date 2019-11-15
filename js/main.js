$(document).ready(function() {
  // Get the full year
  $("#year").text(new Date().getFullYear());

  $(".port-item").click(function() {
    $(".collapse").collapse("hide");
  });

  //Init lightbox
  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
});
