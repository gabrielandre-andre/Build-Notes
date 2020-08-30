$(function(){

    $('.note').draggable();


    $('#add').click(function(){

        var codeAdd = '<div class="note"><p>X</p><textarea></textarea></div>';

        $( ".notes" ).append(codeAdd);

        $('.note').draggable();

        $('.notes > .note p').click(function(){
            $(this).parent().remove();
        })


    })

    $('.notes > .note p').click(function(){
        $(this).parent().remove();
    })

    
})