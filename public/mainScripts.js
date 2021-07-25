window.onpopstate=function(){
    setTimeout("location.reload(true);", 0);
}

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $("#search_filters_main_container").slideUp("fast");
    } else {
        $("#search_filters_main_container").slideDown("fast");
    }
   });