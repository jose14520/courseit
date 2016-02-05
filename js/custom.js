$(document).ready(function () {
    
    $('#add_class').on('click', function() {
        $('#add_class').hide();
        $('.input-group').show();
    });
    
    $(".input-group").on("change", function() {
        var input = $("#class_search").val();
        alert(input);
        
        $.ajax({
            method: 'GET',
            url: 'http://localhost:3000/courses/' + input,
            success: function(courses) {
                alert(courses);   
            },
            
            error: function() {
                
                alert("not found");
            }
            
        });
    });
    
});