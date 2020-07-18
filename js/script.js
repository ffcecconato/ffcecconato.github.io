//Hamburger effect, multi-lingual bar and top navbar
$(document).ready(function() {
    $("#burger-container").on("click", function() {
        $(this).toggleClass("open");
        $(".lang-item").removeClass("show");
        $("#main-menu").toggleClass("open");
        $("#globe-icon").toggleClass("open");       
    }); 

    $(".menu-item").on("click", function() {
        $("#burger-container").removeClass("open");
        $(".lang-item").removeClass("show");
        $("#main-menu").removeClass("open");
        $("#globe-icon").removeClass("open");
        // Making active class work on one page website
        $(".menu-item").removeClass("active-menu");
        $(this).addClass("active-menu");
    });

    $("#globe-icon").on("click", function(){   
        $(".lang-item").toggleClass("show");
    });

    $("#large-lang-menu").on("click", function(){
        $("#large-lang").toggleClass("dropdown");
    });

    if($(window).width() < 1082) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var heightvp = $(window).height();
            var offsetabout = $("#about").offset().top;
            var offsetwork = $("#work").offset().top;
            var offsetcontact = $("#contact").offset().top;

            if (scroll > heightvp - "60") {
                $(".nav").css("background", "url('images/back-nav60-1082px.jpg')");
            }
            else {
                $(".nav").css("background", "linear-gradient(rgba(0, 0, 0, 5), rgba(0, 0, 0, 0))");
            }
        });
    };
    

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var heightvp = $(window).height();
        var offsetabout = $("#about").offset().top;
        var offsetwork = $("#work").offset().top;
        var offsetcontact = $("#contact").offset().top;
    
        if (scroll > heightvp - "60") {
            $(".nav").css("background", "url('images/back-nav60-1082px.jpg')");
        }
        else {
            $(".nav").css("background", "linear-gradient(rgba(0, 0, 0, 5), rgba(0, 0, 0, 0))");
        }
    });

});

//Active class based on scroll
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const scrollAbout = document.getElementById("about");
    const scrollWork = document.getElementById("work");
    const scrollcontact = document.getElementById("contact");
    const menuItem1 = document.getElementById("menu-item1");
    const menuItem2 = document.getElementById("menu-item2");
    const menuItem3 = document.getElementById("menu-item3");
    const halfWindow = window.innerHeight / 3;

    if (scrolled >= scrollAbout.offsetTop - halfWindow && scrolled < scrollWork.offsetTop - halfWindow) {
        menuItem1.classList.add("active-menu");
    }
    else {
        menuItem1.classList.remove("active-menu");
    }

    if (scrolled >= scrollWork.offsetTop - halfWindow && scrolled < scrollcontact.offsetTop - halfWindow) {
        menuItem2.classList.add("active-menu");
    }
    else {
        menuItem2.classList.remove("active-menu");
    }

    if (scrolled >= scrollcontact.offsetTop - halfWindow) {
        menuItem3.classList.add("active-menu");
    }
    else {
        menuItem3.classList.remove("active-menu");
    }  
    
});




// Responsive Form

var z1p9xtdf1an32im; (function(d, t) { var s = d.createElement(t), options = { 'userName':'ffcecconato', 'formHash':'z1p9xtdf1an32im', 'autoResize':true, 'height':'520', 'async':true, 'host':'wufoo.com', 'header':'show', 'ssl':true }; s.src = ('https:' == d.location.protocol ?'https://':'http://') + 'secure.wufoo.com/scripts/embed/form.js'; s.onload = s.onreadystatechange = function() { var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return; try { z1p9xtdf1an32im = new WufooForm(); z1p9xtdf1an32im.initialize(options); z1p9xtdf1an32im.display(); } catch (e) { } }; var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr); })(document, 'script');