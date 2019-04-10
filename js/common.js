
/*offer-card-slick js start*/

$('.offers-cards').slick({
  dots: false,
  infinite: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.prev-arrow'),
  nextArrow: $('.next-arrow'),
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        dots: false
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/*offer-card-slick js end*/

/*offer-card-arrow js start*/

$('.offers-cards').on('afterChange', function (event, slick, currentSlide) {

        if(currentSlide === 2) {
            $('.slick-next').addClass('hidden');
        }
        else {
            $('.slick-next').removeClass('hidden');
        }

        if(currentSlide === 0) {
            $('.slick-prev').addClass('hidden');
        }
        else {
            $('.slick-prev').removeClass('hidden');
        }  
    })

/*offer-card-arrow js end*/

/*steps-slick start*/

$('.steps-start').slick({
  dots: false,
  infinite: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  draggable: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        dots: false
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/*steps-slick ends*/


$('.cardssection-slider').slick({
  dots: false,
  infinite: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: $('.prev-arrow-cards'),
  nextArrow: $('.next-arrow-cards'),
    responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
        }
      },
           {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true
      }
    },
    ]
  });


/*checkbox script*/

$(function () {
        $("#chkdifferance").click(function () {
            if ($(this).is(":checked")) {
                $(".checked-differance").show();
                $(".unchecked-differance").hide();
                $(".feesection").hide();
                $(".creditcard").addClass("checkedheight");

            } else {
                $(".checked-differance").hide();
                $(".unchecked-differance").show();
                $(".feesection").show();
                $(".creditcard").removeClass("checkedheight");
            }
        });

        $("#chkdifferancemob1, #chkdifferancemob2, #chkdifferancemob3").click(function () {
            if ($(this).is(":checked")) {
                $(this).parents(".creditcard").find(".checked-differance").show();
                $(this).parents(".creditcard").find(".unchecked-differance").hide();
                $(this).parents(".creditcard").find(".feesection").hide();
                $(this).parents(".creditcard").find(".creditcard").addClass("checkedheight");

            } else {
                $(this).parents(".creditcard").find(".checked-differance").hide();
                $(this).parents(".creditcard").find(".unchecked-differance").show();
                $(this).parents(".creditcard").find(".feesection").show();
                $(this).parents(".creditcard").find(".creditcard").removeClass("checkedheight");
            }
        });

        
});



/*mobile-credit card slider start*/



$('.mobcreditslider').slick({
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 3,
  prevArrow: $('.lharrow'),
  nextArrow: $('.rharrow'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
var mySlideNumber = 0;
$('.mobcreditslider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    mySlideNumber = nextSlide;
    if (mySlideNumber == 1) {

        $('.creditcard-box1').hide();
        $('.creditcard-box2').show();
        $('.creditcard-box3').hide();
    } else if (mySlideNumber == 2) {

        $('.creditcard-box1').hide();
        $('.creditcard-box2').hide();
        $('.creditcard-box3').show();
    } else {
        $('.creditcard-box1').show();
        $('.creditcard-box2').hide();
        $('.creditcard-box3').hide();
    }
});

/*mobile-credit card slider finished*/

/*popup index page script start*/

  $('.viewdetailslink').click(function() {
      $(this).parents('body').find('.popUpOpenBoard').fadeIn();
      $(this).parents('body').find('.bg-overlay').fadeIn();
  });

  $('.crossPop').click(function() {
      $(this).parents('body').find('.popUpOpenBoard').fadeOut();
      $(this).parents('body').find('.bg-overlay').fadeOut();
  });

/*popup index page script ends*/



    $(".card-benefits").mCustomScrollbar({
      axis: "y",
      theme: "dark-3",
      scrollInertia: 500,
      mouseWheelPixels: 50
    });