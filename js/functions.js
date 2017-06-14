$(document).ready(function(){

    jQuery('ul.nav > li').hover(function() {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
},
    function() {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
});


jQuery('#slide-banner1').click(function() {
        jQuery('.header').css('backgroundImage','url("./images/forBaner/baner-slide1.jpg")');
        jQuery('#id-news').css('display','block');
        jQuery('#id-skin').css('display','none');
        jQuery('#id-video').css('display','none');
        jQuery('#id-contact').css('display','none');

    }
);
jQuery('#slide-banner2').click(function() {
        jQuery('.header').css('backgroundImage','url("./images/forBaner/baner-slide2.jpg")');
        jQuery('#id-news').css('display','none');
        jQuery('#id-skin').css('display','block');
        jQuery('#id-video').css('display','none');
        jQuery('#id-contact').css('display','none');

    }
);
jQuery('#slide-banner3').click(function() {
        jQuery('.header').css('backgroundImage','url("./images/forBaner/baner-slide3.jpg")');
        jQuery('#id-news').css('display','none');
        jQuery('#id-skin').css('display','none');
        jQuery('#id-video').css('display','block');
        jQuery('#id-contact').css('display','none');

    }
);

jQuery('#slide-banner4').click(function() {
        jQuery('.header').css('backgroundImage','url("./images/forBaner/baner-slide4.jpg")');
        jQuery('#id-news').css('display','none');
        jQuery('#id-skin').css('display','none');
        jQuery('#id-video').css('display','none');
        jQuery('#id-contact').css('display','block');

    }
);

jQuery('#openmap-ref').click(function(){
    jQuery('#googlemap').css('display','block');
    jQuery('#openmap').css('display','none');
});


jQuery('body').append('<div id="toTop"><img class="img-responsive" src="images/toTop.png" alt="toTop"></div>');
jQuery(window).scroll(function(){
    if ($(this).scrollTop() <= 200) {
        $('#toTop').fadeOut();
    } else {
        $('#toTop').fadeIn();
    }

    jQuery('.move').each(function(){
        var textPos=jQuery(this).offset().top;
        var topOfWindow=jQuery(window).scrollTop();
        var heit=jQuery(window).height();
        if(textPos<topOfWindow+heit && textPos>300){
            jQuery(this).addClass('rollIn');
        }

    });

    jQuery('.move2').each(function(){
        var textPos=jQuery(this).offset().top;
        var topOfWindow=jQuery(window).scrollTop();
        var heit=jQuery(window).height();
        if(textPos<topOfWindow+heit){
            jQuery(this).addClass('rotateIn');
        }

    });

});

jQuery('#toTop').click(function(){
    jQuery('body,html').animate({scrollTop:0},1000);
});

    jQuery("#id-skin").on("click","a", function (event) {
		event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});


    jQuery("#id-news").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});


    jQuery("#id-video").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

    jQuery("#id-contact").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

    jQuery("#fiona").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-130}, 1500);
    });

    jQuery("#prestizh").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-130}, 1500);
    });

    jQuery("#cleopatra").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-130}, 1500);
    });

    jQuery("#exhib").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-130}, 1500);
    });


    jQuery(".move3").hover(function(){
        $(this).addClass('pulse');
    });

    jQuery('.move3').mouseout(function(){
       $(this).removeClass('pulse');
    });

    jQuery('.ico').click(function(){
       var src=$(this).children().attr('src');
        $('#img-banner').fadeOut(500,function(){
            $('#img-banner').attr('src',src);
            $('#img-banner').fadeIn(500);
        });
    });
});