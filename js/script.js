$(function(){
  "use strict";
    $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover:false,
        arrows:false,
      });
      // ===about slider===
      $('.about-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2500,
        pauseOnHover:false,
        arrows:false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          }
        ]
      });
      // =====counterup part=====
      $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    // =====comment slider start====
    $('.comment-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2500,
      pauseOnHover:false,
      dots:false,
      arrows:true,
      prevArrow:".right",
      nextArrow:".left",
     
    });
    // ====team slider start====
    $('.team-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2500,
      pauseOnHover:false,
      arrows:false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            autoplay:true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
    });
    // ====navbar sticky=====
    $(window).scroll(function(){
      var top = $(this).scrollTop()
      if(top > 100){
        $(".navbar").addClass("sticky")
      }
      else(
        $(".navbar").removeClass("sticky")
      )
      if(top > 200){
        $(".back-to-top").fadeIn(600)
      }
      else{
        $(".back-to-top").fadeOut(300)
      }
    })
  
    $(".back-to-top").click(function(){
      $("html,body").animate({scrollTop: 0},1000)
    })


    //scroll-spy & Smooth-scrolling
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 30
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 40;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
// ========venobox js======
  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'circle',
    popup:"false",

});
// =====preloder js =======
var preloder =document.querySelector("#preloder");
window.addEventListener("load",function(){
  preloder.classList.add("----preloder-hide");
})

})


