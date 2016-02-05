$(document).ready(function () {

    $('.active').on('click', function() {
        $('.active').hide();
        $('.input-group').show();
    });

    $(".input-group").on("change", function() {
        var input = $("#class_search").val();
        alert(input);
        $.ajax({
            method: 'GET',
            url: '/courses',
            success: function(courses) {
                alert(JSON.stringify(courses));
            }
        })
        });

});
