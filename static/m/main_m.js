
$(function() {
$('.bar').on('click',function(){
    if($(this).siblings().is(':hidden') ){
        $('.content').slideUp();
    }
$(this).siblings().slideToggle();
console.info($(this));
})
});

