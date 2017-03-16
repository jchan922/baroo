$( document ).ready(function() {

    var menu = false;
    var menuList = document.getElementById('menu_list');
    var aboutPos = $("#nav_reappear").offset().top;
    var lastScroll = 0;

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

});
