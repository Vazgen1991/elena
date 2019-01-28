$(document).ready(function () {

    $(function() {
        $(".roll").css("opacity","0");
        $(".roll").hover(function () {

                $(this).stop().animate({
                    opacity: .7
                }, "slow");
            },
            function () {
                $(this).stop().animate({
                    opacity: 0
                }, "slow");
            });
    });

    var acc =document.getElementsByClassName('.roll');
    acc.onclick=function () {
        document.getElementById('#search-input').style.display='block';

    }
    $("#search-input").on('click',function () {
        if(this.value.length<=4){
            $(this).css({
                'border':'2px solid red'
            });
        }else {
            $(this).css({
                'border':'2px solid green'
            });
        }

    });

    $("#search-input").on('input',function () {
        if(this.value.length>=4){
            $(this).css({
                'border':'2px solid green'
            });
        }else {
            $(this).css({
                'border':'2px solid red'
            });
        }

    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });


});



var acc = document.getElementsByClassName('accordion');
for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    }
}

