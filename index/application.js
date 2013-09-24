$(document).ready(function() {
  $(".container").mouseleave(function(){
    $("#head1,#head2,#head3").addClass('hide');
    $("#head").removeClass('hide');
  });
  $("#1").mouseenter(function() {
    $("#head").addClass('hide');
    $("#head1").removeClass('hide');
  });
  $("#2").mouseenter(function() {
    $("#head").addClass('hide');
    $("#head2").removeClass('hide');
  });
  $("#3").mouseenter(function() {
    $("#head").addClass('hide');
    $("#head3").removeClass('hide');
  });
});