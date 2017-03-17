$( document ).ready(function() {

    var menu = false;
    var menuList = document.getElementById('menu_list');
    var aboutPos = $("#nav_reappear").offset().top;
    var lastScroll = 0;
    var extraHeight = $('#top').outerHeight();            // height of placeholder for auto scroll

    ///////////////////
    // Animate nav bar
    ///////////////////
    $("#menu_left").click(function(){
        $(this).toggleClass("change");
        if(menu == false) {
            $("#menu_list").css({"left": "0px", "transition": ".65s"});
            menu = true;
        } else {
            $("#menu_list").css({"left": "-5000px", "transition": "2.0s"});
            menu = false;
        }
    });

    ///////////////////
    // Fade in nav bar
    ///////////////////
    $( window ).scroll(function(){
        var scrollPos = $( window ).scrollTop();
        var navBarHeight = $("#nav_div").height();
        var navRepo = false;

        if(scrollPos > lastScroll){
            console.log("Going down the page!");
            while(navRepo){
                $("#nav_div").css({
                    "position": "fixed",
                    "top": "0",
                    "animation": "none"
                });
            }
            if(scrollPos >= aboutPos){
                $(".placeholder").css({
                    "height": navBarHeight
                });
                $("#nav_div").css({
                    "position": "fixed",
                    "top": "10px",
                    "animation": "fadein .5s",
                });
                navRepo = true;
            }
        } else {
            console.log("Going up the page!");
            while(navRepo){
                $("#nav_div").css({
                    "position": "fixed",
                    "top": "0",
                });
            }
            if(scrollPos < 25) {
                $(".placeholder").css({
                    "height": "0",
                });
                $("#nav_div").css({
                    "position": "relative",
                    "top": "0",
                    "animation": "none"
                });
            }
        }
        lastScroll = scrollPos
    })

    ///////////////
    // Auto scroll
    ///////////////
    $('.slide_section').click(function(event){
        var linkHref = $(this).attr('href');                 // target item clicked
        event.preventDefault();                              // turns off default a tag actions
        // get value of element selected relative to the top minus extra height from nav bar
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - 115
        }, 1200);

        $("#menu_list").css({"left": "-5000px", "transition": "2.0s"});
        menu = false;
        $(".change").removeClass();

    });



});
