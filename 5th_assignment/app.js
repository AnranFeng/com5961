
$(document).ready(function() {

  $(".desc").mouseover(function() {
      $(this).css("background-color","#94b8b8");
  });

  $(".desc").mouseout(function() {
      $(this).css("background-color","#e0e0d1");
  });  

   $("#hide_me").click(function(){
    $(".row").hide(1000);
  });

  $("#show_me").click(function(){
    $(".row").show(1000);
  });

  $("#getdata").click(function(){
     // $.getJSON('articles.json', function(obj) {
        // console.log(obj);
     // $.getJSON('document.json', function(obj) {
     // $.getJSON('document2.json', function(obj) { 
    // $.getJSON('http://localhost/d750b_geomap2/fehd-json-view2', function(obj) { 
      $.getJSON('http://dev-com5961a.pantheonsite.io/fehd-json-view2', function(obj) {   
      $("#lesson").append("<ul>");
      // $.each(obj, function(key, value) {
      // $.each(obj.statuses, function(key,value) {
        $.each(obj.nodes, function(key,value) {
        $("#box1").append("<li>" + value.facility_type + "(" + value.total_count + ")" + "</li>");
        // $("#lesson").append("<li>"+value+"</li>");
      });
      $("#box1").append("</ul>");
      
    });
  }); /* End getdata */

  $("#cleardata").click(function(){
    $("#box1").html('');
  });

        // alert("Menu clicked!");      
}); 
