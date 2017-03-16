$(document).ready(function() {
    $('.masterStockText').click(function() {
        $(this).next('.masterStockMenu').slideToggle();
    });
	$('.closeIcon').click(function() {
        $('.masterStockMenu').hide();
    });
$('.searchIcon').click(function() {
	$(this).next('.searchBox').slideToggle();
});
$('.shearhClose').click(function() {
	$('.searchBox').hide();
});	

$('.contestSlider').slick({
	infinite: true,
	arrows:false,
	dots:true,
	fade:false,
	//cssEase: 'linear',
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 1000,
	pauseOnHover:true,
	slidesToShow: 1,
	slidesToScroll:1
});

$('.teamSlider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  centerPadding: '0',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.addworkSlider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
(function() {
        $(" #nav ul ").css({
            display: "none"
        }); // Opera Fix
        $(" #nav li").hover(function() {
            $(this).find('ul:first').css({
                visibility: "visible",
                display: "none"
            }).fadeIn(300);
        }, function() {
            $(this).find('ul:first').css({
                display: "none"
            });
        });
    })();


$('header nav').meanmenu();

setTimeout(function(){ 
	var topBan=$('.topBannerSec').outerHeight();


$(window).scroll(function(){
  var sticky = $('.header,.masterStock'),
      scroll = $(window).scrollTop();

  if (scroll >= topBan) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
}, 1000);
});
			