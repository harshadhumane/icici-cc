
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
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  
});


