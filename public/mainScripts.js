window.onpopstate=function(){
    setTimeout("location.reload(true);", 0);
}

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        if(document.getElementById("all_services_menu_pane").style.display != "none"){
            // do not hide filters
        }else if(document.getElementById("notifications_container").style.display != "none"){
            // do not hide filters 
        }else if(document.getElementById("app_settings_page").style.display != "none"){
            // do not hide filters
        }else if(document.getElementById("edit_user_profile_page").style.display != "none"){
            // do not hide filters
        }else if(document.getElementById("news_updates_page").style.display != "none"){
            // do not hide filters
        }else if(document.getElementById("add_business_addreview_page").style.display != "none"){
            // do not hide filters
        }else{
            $("#search_filters_main_container").slideUp("fast");
        }
        
    } else {
        $("#search_filters_main_container").slideDown("fast");
    }
   });