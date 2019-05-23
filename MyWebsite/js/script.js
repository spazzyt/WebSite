$(document).ready(function() {
    // options in parameter can be changed to: https://github.com/nicinabox/superslides#options
    $('#slides').superslides({
        animation: 'fade',
        play: '5000',
        pagination: false
    });

    /* selector, options */
    var typed = new Typed(".typed", {
        strings: ["Software Engineer", "", "Student"],
        typeSpeed: 60,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });


         
    var skillsTopOffset = $(".skillsSection").offset().top; //contains position of skillSection
    var statsTopOffset = $(".statsSection").offset().top; //contains position of skillSection
    var countUpFinished = false;

    $(window).scroll(function(){
        // when scrolling past + small offset to bottom
        if(window.pageYOffset > skillsTopOffset- $(window).height() + 275) {
            $('.chart').easyPieChart({
                easing:'easeInOut',
                barColor:'#fff',
                trackColor:false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                /* counter from 0 to specified percent number animation */
                onStep: function(from,to,percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if(!countUpFinished && window.pageYOffset > statsTopOffset- $(window).height() + 275) {
            $(".counter").each(function(){
                var element = $(this);
                var endVal = parseInt(element.text());

        
                element.countup(endVal);
            });
            countUpFinished=true;
        }
    });





});

 