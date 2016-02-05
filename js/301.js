$(document).ready(function () {
    
    $("#reply1").on("change", function() {
        var reply1 = $("#reply1").val();
        alert(reply1);
        $("#reply1").val('');
        $("#reply-text1").val(reply1);
        });
    
    $("#reply2").on("change", function() {
        var reply2 = $("#reply2").val();
        alert(reply2);
        $("#reply2").val('');
        $("#reply-text2").val(reply2);
        });
    
    $("#reply3").on("change", function() {
        var reply3 = $("#reply3").val();
        alert(reply3);
        $("#reply3").val('');
        $("#reply-text3").val(reply3);
        });
    
});