$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 200){
            $("header").css("background","rgba(0,0,0,0.7)");
        }else{
            $("header").css("background","");
        }
    });
    
    window.odometerOptions = {
    format: '(d).dd'
};
     setTimeout(function(){
        $('.odometer1').html(200);
        $('.odometer2').html(50);
        $('.odometer3').html(500);
        $('.odometer4').html(25);
      }, 1000);

});


