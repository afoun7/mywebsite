// animated scroll
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-60 // 30 indicates how much to scroll down 
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

// fixes nav bar at top of screen
$(function() {

    var params = {
        bodyJsClass: "js_enabled",
        activeClass: "active",
        navSelector: "nav",
        subNavClass: "subnav",
        toggleSpeed: 150
    }

    $(document).bind("click keyup", function(e) {
        if (!navLists.is(":visible")) return;
        var eventTarget = $(e.target);
        if ((e.type == "keyup" && e.keyCode == 27) || (e.type == "click" && !(
        eventTarget.is(nav.find("a:has(" + navListHeaderElt + ")").selector) || eventTarget.is(nav.find(navListHeaderElt).selector) || eventTarget.is(navLists.find("*").selector)))) navLists.filter(":visible").slideUp(params.toggleSpeed);
    })
})

// data viz


