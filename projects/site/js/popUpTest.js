$(document).ready(function() {

    //if the cookie hasLaunch is not set, then show the modal window
    if (!readCookie('hasLaunch')) {
        //launch it
        launchWindow('#dialog');
    }

    //if yes button is clicked
    $('.window #yes').click(function () {
        $('#mask').hide();
        $('.window').hide();
        $('body').removeClass('no-scroll');
        $('html').removeClass('no-scroll');
        //then set the cookie, so next time the modal won't be displaying again.
        createCookie('hasLaunch', 1, 365);
    });

    $('.window #no').click(function() {
      window.location.href = "https://www.youtube.com/watch?v=REVeqcS2aEU";
    });

    $(window).resize(function() {
      setModal();
    });

});

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

        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height());
        $(id).css('left', winW/2-$(id).width()/2);

        //transition effect
        $(id).fadeIn(2000);
}
