

var spWindow = 559;
var tbWindow = 959;

$(function () {


  //lazy load
  var mainVisual = $(".main-visual");
  var subVisual = $(".sub-visual");
  var mainVisualCopy = $(".main-visual-copy");

  //window繧ｵ繧､繧ｺ蜿門ｾ�
  var windowWidth = document.documentElement.clientWidth;
  if (windowWidth <= spWindow) {
    //逕ｻ髱｢繧ｵ繧､繧ｺ559莉･荳具ｼ�sp��
    setTimeout(function () {
      mainVisual.addClass('fade-in');
    }, 600);
    setTimeout(function () {
      mainVisualCopy.addClass('fade-in');
    }, 800);
    setTimeout(function () {
      subVisual.addClass('fade-in');
    }, 600);

    $('.advantage-sec-slide').bxSlider({
      minSlides: 6,
      maxSlides: 6,
      slideWidth: 220,
      slideMargin: 30,
      ticker: true,
      speed: 100000,
    });


    $(window).scroll(function () {
      $('.fadein').each(function () {
        var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 120) {
          $(this).addClass('scrollin');
        }
      });
    });

  } else if (windowWidth > spWindow && windowWidth <= tbWindow) {
    //逕ｻ髱｢繧ｵ繧､繧ｺ959莉･荳具ｼ�tb��
    setTimeout(function () {
      mainVisual.addClass('fade-in');
    }, 600);
    setTimeout(function () {
      subVisual.addClass('fade-in');
    }, 600);
    setTimeout(function () {
      mainVisualCopy.addClass('fade-in');
    }, 800);

    $('.advantage-sec-slide').bxSlider({
      minSlides: 6,
      maxSlides: 6,
      slideWidth: 300,
      slideMargin: 40,
      ticker: true,
      speed: 100000,
    });


    $(window).scroll(function () {
      $('.fadein').each(function () {
        var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 250) {
          $(this).addClass('scrollin');
        }
      });
    });

  } else {
    //逕ｻ髱｢繧ｵ繧､繧ｺ960莉･荳奇ｼ�pc��
    setTimeout(function () {
      mainVisual.addClass('fade-in');
    }, 600);
    setTimeout(function () {
      subVisual.addClass('fade-in');
    }, 700);
    setTimeout(function () {
      mainVisualCopy.addClass('fade-in');
    }, 800);

    $('.advantage-sec-slide').bxSlider({
      minSlides: 6,
      maxSlides: 6,
      slideWidth: 400,
      slideMargin: 50,
      ticker: true,
      speed: 100000,
    });


    $(window).scroll(function () {
      $('.fadein').each(function () {
        var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 350) {
          $(this).addClass('scrollin');
        }
      });
    });

  }

});
