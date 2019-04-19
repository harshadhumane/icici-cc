
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

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


/*floatbutton script*/
$('.floatingbutton').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, 600);
  return false;
});

  /*===========Start of the input field==================*/
  //$(".input-box input").val("");

    function animDrp(e) {
      if (e.html() != "") {
        e.addClass('has-content');
      } else {
        e.removeClass('has-content');

      }

    }

  $(".input-effect input").focusout(function() {
    if ($(this).val() != "") {
      $(this).addClass("has-content");
    } else {
      $(this).removeClass("has-content");
    }
  });

  $(".effect-animate").each(function(index) {
    if ($(this).val() != "") {
      $(this).addClass("has-content");
    }
  });

  $(".dropdown-effect select").on('change', function() {
    if ($(this).val() != "") {
      $(this).addClass("has-content");
      //$(this).addClass("has-content");
    } else {
      $(this).removeClass("has-content");
      //$(this).removeClass("has-content");
    }
  });

  $(".drp-element").click(function() {
      //$(this).closest('.common-inputbox').find('.identity-error').hide();

      if ($(this).find("a").html() == "None of the above") {
        //$(this).closest(".ntb-drp").addClass('error-show');
        $(this).closest('.common-inputbox').find('.identity-error').show();
      } else {
        //$(this).closest(".ntb-drp").removeClass('error-show');
        $(this).closest('.common-inputbox').find('.identity-error').hide();
      }


      if ($(".sub-drop").hasClass("collapse")) {
        $(this).closest(".drp-menu").find('.sub-drop').collapse("hide");
      }

      $(this).closest(".form-box").find(".drp").html($(this).find("a").html());
      animDrp($(this).closest(".form-box").find(".drp"));
      var name = $(this).closest(".ntb-drp").find(".dropdown");
      setTimeout(function() {

        $(name).removeClass("open");
      }, 50);


      $(this).closest('.common-inputbox').find(".warningmessage-error").hide();

    });

      $('.gender-selection li').click(function() {
        //  console.log($(this).addClass('active'));
          $(this).closest('.gender-div').find('.gender-selection li').removeClass('active');
          $(this).addClass('active');
      });



      $(".yesnodiv .gender-selection li").click(function() {

        if ($(this).parents(".gender-div").find("li.active a").html() == "Yes") {
          //$(this).closest(".ntb-drp").addClass('error-show');
          //$(this).closest('.common-inputbox').find('.identity-error').show();
          //console.log('yes')
          $(".employeeidsection").show();
        }
        else{
            $(".employeeidsection").hide();
        }

      });


  /*===========End of the input field==================*/

  /*enabled input jquerey start*/

  $('.pencilicon').click(function(){
          //$('#FullName').attr('disabled', 'disabled'\'');
          //$('.curr-add').prop('disabled', false);
          //$('.sec-pg-mid .curr-add.has-content').css('color', '#333334');
          $('.cross-small-addr').css("display","inline-block");
          $('.office-address').hide();
          $('.resident-address').show();        
          $('.pencilicon').hide();   
          $('.hidetermscondition').hide();   
          $('.hidegenratebtncontainer').hide();   

  });

  $('.cross-small-addr, .updatebtnsection').click(function(){

          $('.cross-small-addr').css("display","none");
          $('.office-address').show();
          $('.resident-address').hide();        
          $('.pencilicon').show();     
          $('.hidetermscondition').show();   
          $('.hidegenratebtncontainer').show();      
  });


  /*enabled input jquerey ends*/

  $("#btnfile").click(function(e) {
    $("#uplodfile").click();
  });




$(".custom-radio-li input").click(function() {

  if ($("#addhar").prop("checked")) {
       $(".upload-section").hide();
       $(this).parents(".custom-radio-li").find(".upload-section").show();
       $(".identity-error").hide();
       
  }
  else if($("#otherdoc").prop("checked")){
        $(".upload-section").hide();
        //$(this).parents(".custom-radio-li").find(".upload-section").show();
        $(".identity-error").hide();
  }
  else if($("#noneof").prop("checked")){
       $(".upload-section").hide();
       $(".identity-error").show();
  }

});

 $('.custom-radio-li input[type="file"]').change(function(){
    //alert("A file has been selected.");
    $(".pregressupload").show();
    $(".upload-section").hide();
});

 $('.cross-small').click(function(){
    $(".pregressupload").hide();
    $(".upload-section").show();
 })