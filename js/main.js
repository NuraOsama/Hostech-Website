(function ($) {

    "use strict";
    new WOW().init();

//preloader
var  mainStatus  = $('#status'),
mainBody = $('body'),
mainPreloader  = $('#preloader');
window.onload = function() {
 mainStatus.fadeOut();
 mainPreloader.delay(500).fadeOut('slow');
 mainBody.delay(500).css({
  'overflow': 'auto'
 });
}

 //sticky navbar
 $(window).scroll(function () {


    if ($(window).scrollTop()) {
        $('.navbar-light').addClass('sticky-top').animate({

        }, 4000);

       /* $(".bk-image-sec").addClass("change-position")*/

          
    } 
    else {
        $('.navbar-light').removeClass('sticky-top').animate({

        }, 4000);
       /* $(".bk-image-sec").removeClass("change-position")*/
    }


});

$('.sub-menu li a').on('click touchend', function() {
  var el = $(this);
  var link = el.attr('href');
  window.location = link;
});


 //search form
  var search_button = $('.search-icon'),
      close_button  = $('.close-form'),
      input = $('.search-form');
      search_button.on('click',function(){
      input.toggleClass('show');
      $(this).fadeOut(500);
      $(".top-header .top-nav-left ul .search-line").fadeOut(500)

  });
  
  close_button.on('click',function(){
    input.removeClass('show');
    search_button.fadeIn(500);
    $(".top-header .top-nav-left ul .search-line").fadeIn(500)
  });


  // typing text

  var textar = document.getElementsByClassName('text-switch-ar');
  var texten = document.getElementsByClassName('text-switch-en');
  var arrayar = [].slice.call(textar);
  var arrayen = [].slice.call(texten);
  var optionsar = ['المختبر', 'الأشعة', 'الصيدلية', 'الطواريء'];
  var optionsen = ['Laboratory', 'Radiology', 'Pharmacy', 'Emergency'];

    arrayar.forEach(function(element) {
     var optCount = 0;
     var removing = true;
     var selectedar = optionsar[0];
     var newString =  selectedar.split("");
  
     var interval = setInterval(function() {
       console.log( selectedar);
       var currentString = element.innerHTML.split("");
       if (removing) {
       delete currentString[currentString.length - 1]
       element.innerHTML = currentString.join("");
         if (currentString.length === 0) removing = false;
     } else {
       if (newString.length > 0) {
         element.innerHTML += newString[0];
         newString.shift()
       } else {
         removing = true;
         var currentString = element.innerHTML.split("");
         if (optCount + 1 >= optionsar.length) {
           optCount = 0
         } else {
         optCount++
         }
         selectedar = optionsar[optCount];
         newString =  selectedar.split("");
         if (currentString.length === 0) removing = false;
       }
       
     }
           
     }, 120);
      
  })

  arrayen.forEach(function(element) {
    var optCount = 0;
    var removing = true;
    var selecteden = optionsen[0];
    var newString =  selecteden.split("");
    var interval = setInterval(function() {
      console.log( selecteden);
      var currentString = element.innerHTML.split("");
      if (removing) {
      delete currentString[currentString.length - 1]
      element.innerHTML = currentString.join("");
        if (currentString.length === 0) removing = false;
    } else {
      if (newString.length > 0) {
        element.innerHTML += newString[0];
        newString.shift()
      } else {
        removing = true;
        var currentString = element.innerHTML.split("");
        if (optCount + 1 >= optionsar.length) {
          optCount = 0
        } else {
        optCount++
        }
        selecteden = optionsen[optCount];
        newString =  selecteden.split("");
        if (currentString.length === 0) removing = false;
      }
      
    }
          
    }, 120);
     
 })


  //counter
  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 30000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    });
     

    $(".tabs li").click(function () {
     $(this).addClass("active-tabs").siblings().removeClass("active-tabs");
      });

   
      
    $('.tabs').find('> li:eq(0)').addClass('current');
		
		$('.tabs li a').click(function (e) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
      e.preventDefault();
    });

    //active tabs
  

/*const $menu1 = $('li');

 $(document).mouseup(function (e) {
     if (!$menu1.is(e.target) && $menu1.has(e.target).length === 0)
     {
         $menu1.removeClass('active-tabs');
     }
 });*/


 //footer silder

$(document).ready(function(){   
  $('.footer-owl').owlCarousel({
      items:4,
      nav: false,
      loop: true,
      dots:false,
      margin:20,
      autoplay:true,
      smartSpeed:500,
      responsiveClass:true,
      responsive:{
          0:{
              items:4,
              nav:true,
              loop:false
          },
          1024 : {
    
              items:4,
             
            },
          991 : {
    
              items:3,
             
            },
            768 : {
    
              items:3,
             
            },
    
            575 : {
    
              items:2,
             
            },
           
            418: {
    
              items:1,
             
             
                
        },
       375: {
    
          items:1,   
         },
    320: {
       
      items:1,      
        },
    300: {
       
      items:1,
            
       }  
          
        
      }
     
  });
});

//responsive navbar

$("li").click(function(){

   $(this).toggleClass("show");
   
});
//scroll to top
$(window).scroll(function(){
  if($(this).scrollTop() > 300) {

    $(".auto-scroll-to-top").removeClass("non-hover");                 
     $(".auto-scroll-to-top").addClass("visible");  
   } else {

    $(".auto-scroll-to-top").addClass("non-hover");
    $(".auto-scroll-to-top").removeClass("visible");
   }        
  });
   
 /*$(".auto-scroll-to-top").click(function(){
   $("html, body").animate({scrollTop: 0}, 1000);
 });*/
 
 $('.auto-scroll-to-top').on('click touchend', function() {
  $("html, body").animate({scrollTop: 0}, 1000);
  var el = $(this);
  var link = el.attr('href');
  window.location = link;
});

   
   //scroll
 /* $("body").niceScroll({
    scrollspeed: 80,
    cursorcolor:"#307b9b",
     cursorwidth:"10px",
     zindex: 2000,
})*/
   
//auto complete input
$('input').attr("autocomplete", "off"); 


})(jQuery);