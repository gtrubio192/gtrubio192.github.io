$(document).ready(function() {
    //If the cookie hasLaunch is not set, then show the modal window
    if (!readCookie('hasLaunch')) {
      launchWindow('#dialog');
    }
    else {
      allowScroll();
    }
    // If yes button is clicked, set cookie
    $('.window #yes').click(function () {
      $('#mask').hide();
      $('.window').hide();
      allowScroll();
      createCookie('hasLaunch', 1, 365);
    });
    // If no, redirect to cat videos
    $('.window #no').click(function() {
      window.location.href = "https://www.youtube.com/watch?v=REVeqcS2aEU";
    });
    $(window).resize(function() {
      setModal();
    });
});

function allowScroll() {
  $('body , html').removeClass('no-scroll');
}

function setModal() {
  var box = $('#boxes .window');
  //Get the screen height and width
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();
  //Set height and width to mask to fill up the whole screen
  $('#mask').css({'width':maskWidth,'height':maskHeight});
  //Get the window height and width
  var winH = $(window).height();
  var winW = $(window).width();
  //Set the popup window to center
  box.css('top',  winH/2 - box.height()/2);
  box.css('left', winW/2 - box.width()/2);
}

function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else {
      var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function launchWindow(id) {
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        //Set heigth and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        //transition effect
        $('#mask').fadeIn(1000);
        $('#mask').fadeTo("slow",0.8);
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
        if ($(window).width() < 768) {
          $(id).width($(window).width());
        }
        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height());
        $(id).css('left', winW/2-$(id).width()/2);
        //transition effect
        $(id).fadeIn(2000);
}
