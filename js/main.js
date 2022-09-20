$('.trigger').click(function(){
    $(this).toggleClass('on');
    $('nav').slideToggle(400);
});

// $(window).resize(function(){
//     $('nav').removeAttr('style');      
// });

$(window).resize(function(){
    let winW = $(window).width();  // 브라우저의 가로길이를 변수에 
    console.log('브라우저 가로길이?', winW);

    if( winW >= 768 && $('nav').is(':hidden')){
        console.log('nav가 안보여요');
        $('nav').removeAttr('style');
    };
});