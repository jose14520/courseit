$(document).ready(function () {
    
    $("#button1").on("click", function() {
        var reply1 = $("#reply1").val();
        $("#reply1").val('');
        $("#reply1-text").text(reply1);
        $("#past1").show();
        });
    
    $("#button2").on("click", function() {
        var reply2 = $("#reply2").val();
        $("#reply2").val('');
        $("#reply2-text").text(reply2);
        $("#past2").show();
        });
    
    $("#button3").on("click", function() {
        var reply3 = $("#reply3").val();
        $("#reply3").val('');
        $("#reply3-text").text(reply3);
        $("#past3").show();
        });
    
});