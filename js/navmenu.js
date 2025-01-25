
var sectionArray = [1, 2, 3, 4, 5];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 94;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.navbar-nav .nav-item ').removeClass('active');
             $('.navbar-nav .nav-item ').addClass('inactive');  
             $('.navbar-nav .nav-item ').eq(index).addClass('active');
             $('.navbar-nav .nav-item ').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 94;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item ').addClass('inactive');    
    $('.navbar-nav .nav-item ').eq(0).addClass('active');
    $('.navbar-nav .nav-item ').eq(0).removeClass('inactive');
});