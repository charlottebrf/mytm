$( document ).ready(function() {
    $('#idea').change(function(){
        $('#user_id').html('Your amazing idea is ' + $('#idea').val());
    });
});
