window.onpopstate=function(){
    setTimeout("location.reload(true);", 0);
}

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        if(document.getElementById("all_services_menu_pane").style.display != "none"){
            // do not hide filters
        }else if(document.getElementById("notifications_container").style.display != "none"){
            // do not hide filters
        }else{
            $("#search_filters_main_container").slideUp("fast");
        }
        
    } else {
        $("#search_filters_main_container").slideDown("fast");
    }
   });