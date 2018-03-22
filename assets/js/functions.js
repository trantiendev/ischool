new WOW().init();

$(function(){
    hoverMenu();
    carousel();
    countdown();
    select();
    fancybox();
    hover();
    contactform();
    activeFilter();
});

$(window).scroll(function(){
  menu();
});

$(window).resize(function(){
  changeLogoNav();
});

function activeFilter(){
  if( $('body').is('.home-gallery') ){
    $('.filtr-container').filterizr({});
  }
}

function changeLogoNav(){

  if( $('body').is('.index-page-1') && $(window).width() < 992 ){
    $('a.navbar-brand img').attr({
        'src': 'assets/img/logo-1.png'
      });
  }


};

function contactform(){
    $('input[type="password"]').on('focus', () => {
    $('*').addClass('password');
  }).on('focusout', () => {
    $('*').removeClass('password');
  });;
}

function hover(){
  $('#da-thumbs > li').each( function() { $(this).hoverdir(); } );
}

function fancybox(){
    $(".fancybox").fancybox({
      openEffect	: 'fade',
		closeEffect	: 'fade',
  		prevEffect	: 'elastic',
  		nextEffect	: 'elastic',
  		helpers	: {
  			title	: {
  				type: 'float'
  			},
  			thumbs	: {
  				width	: 60,
  				height	: 60
  			}
  		}
  	});
};

function  select(){
  $('select').niceSelect();

}

function countdown(){
  $('#clock').countdown('2020/09/10', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="cc"><span>%d</span> <span>Days</span></div> '
      + '<div class="cc"><span>%H</span> <span>Hours</span></div> '
      + '<div class="cc"><span>%M</span> <span>Minutes</span></div> '
      + '<div class="cc"><span>%S</span> <span>Seconds</span></div>'));
  });
};

function carousel(){
  $('.owl-carousel-popular').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    responsive:{

      300:{
        items: 1
      },

        400:{
            items:1
        },
        700:{
            items:2,
        },
        1000:{
            items:3
        }
    }
  });

  $('.owl-courses-content-popular').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    responsive:{
      300:{
        items: 1
      },
        400:{
            items:1
        },
        700:{
            items:2,
        },
        1000:{
            items:2
        }
    }
  });

//section-teachers
  $('.owl-carousel-teachers').owlCarousel({
    loop:true,
    margin: 70,
    nav:true,
    center: true,
    responsive:{
      300:{
        items: 1
      },
      400:{
          items:1
      },
      700:{
          items:1,
      },
      1000:{
          items:3
      }
    }
  });

  $('.owl-carousel-quote-1').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeInUp',
    margin:1000,
    nav:true,
    center: true,
    responsive:{
      300:{
        items: 1
      },
        400:{
            items:1
        },
        700:{
            items:1,
        },
        1000:{
            items:1
        }
    }
  });

  $('.owl-carousel-quote-2').owlCarousel({
    // loop:true,
    margin:100,
    nav:true,
    center: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
      300:{
        items: 1
      },
        400:{
            items:1
        },
        700:{
            items:1,
        },
        1000:{
            items:1
        }
    }
  });

  $('.owl-carousel-quote-3').owlCarousel({
    items:4,
    loop:true,
    // center:true,
    margin:20,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    responsive:{
      300:{
        items: 2
      },
        400:{
            items:2
        },
        700:{
            items:4,
        },
        1000:{
            items:4
        }
    }
});


};

function menu(){



  var wScroll = $(window).scrollTop();

  // $('.thumb-title').css({
  //   'transform': 'translate(0px, '+ wScroll /10 +'%)'
  // });


  if( $('body').is('.index-page-1') && $(window).width() > 992){
    if( $('header').offset().top > 50 ){

     $('nav.navbar').addClass('bg-light');
     $('a.nav-link').addClass('active-menu');
     $('.fa-shopping-bag').addClass('active');
     $('section.menu .container').addClass('active');
     $('a.navbar-brand img').attr({
         'src': 'assets/img/logo-1.png'
       });
    } else{

     $('nav.navbar').removeClass('bg-light');
     $('a.nav-link').removeClass('active-menu');
     $('.fa-shopping-bag').removeClass('active');
     $('section.menu .container').removeClass('active');
     $('a.navbar-brand img').attr({
         'src': 'assets/img/logo.png'
       });

    }

  }








};


function hoverMenu(){


  if( $('body').is('.index-page-2')){
    $('a.navbar-brand img').attr({
        'src': 'assets/img/logo-1.png'
      });
  }

  if( $('body').is('.index-page-1') && $(window).width() < 992 ){
    $('a.navbar-brand img').attr({
        'src': 'assets/img/logo-1.png'
      });
  }




  if($(window).width() > 992) {

      $('.dropdown-toggle ').attr('data-toggle', '');

    $('.dropdown').hover(function(){
      $(this).find('.dropdown-menu').slideDown(150);
    }, function(){
      $(this).find('.dropdown-menu').slideUp(150);
    })

  } else {
    $('.dropdown-toggle').attr('data-toggle', 'dropdown');

  }

}
