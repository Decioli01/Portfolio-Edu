$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('active');
    })

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('active');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }
        else{
            $('.top').hide();
        }
    })

    // smooth scrolling
    $('a[href*="#"]').on('click', function(e){

            e.preventDefault();

            $('html, body').animate({

                scrollTop : $($(this).attr('href')).offset().top,
            },
            700,
            'linear')
        
        })
    });