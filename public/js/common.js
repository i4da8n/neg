
var spWindow = 559;
var tbWindow = 959;

$(function () {

  //page-fade
  var loadingImg = $(".loading-img");
  loadingImg.fadeOut(400, contFadeIn);
  function contFadeIn() {
    $("#contents-wrap").addClass('fade-in');
  }

  //lazy load
  var pageTtl = $(".page-ttl");

  //window繧ｵ繧､繧ｺ蜿門ｾ�
  var windowWidth = document.documentElement.clientWidth;
  if (windowWidth <= spWindow) {
    //逕ｻ髱｢繧ｵ繧､繧ｺ559莉･荳�
    setTimeout(function () {
      pageTtl.addClass('fade-in');
    }, 600);


  } else if (windowWidth <= tbWindow) {
    //逕ｻ髱｢繧ｵ繧､繧ｺ959莉･荳�
    setTimeout(function () {
      pageTtl.addClass('fade-in');
    }, 800);

  } else {
    //逕ｻ髱｢繧ｵ繧､繧ｺ960莉･荳�
    setTimeout(function () {
      pageTtl.addClass('fade-in');
    }, 800);
  }




  //繧ｹ繝槭�繝｡繝九Η繝ｼ繝懊ち繝ｳ
  var menuFlag = false;
  $(".menu-trigger").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".slide-menu-nav").addClass("open");
    } else {
      $(".slide-menu-nav").removeClass("open");
    }
    return false;
  })

  //繝壹�繧ｸ蜀�Μ繝ｳ繧ｯ
  $('a[href^=#]').click(function () {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });


});
