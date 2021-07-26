import $ from "jquery";

export function toggle_show_all_service(){
    $("#all_services_menu_pane").toggle("up");
    document.getElementById("search_filters_main_container").style.display = "block";
    document.getElementById("notifications_container").style.display = "none";
}

export function toggle_show_notifications_container(){
    $("#notifications_container").toggle("up");
    document.getElementById("search_filters_main_container").style.display = "block";
    document.getElementById("all_services_menu_pane").style.display = "none";
}

export function hide_all_popups(){
    document.getElementById("all_services_menu_pane").style.display = "none";
    document.getElementById("notifications_container").style.display = "none";
    $('html, body').animate({scrollTop:0}, '300');
}

export function refreshPageFunc(){
    $('html, body').animate({scrollTop:0}, '300');
    setTimeout("location.reload(true);", 310);
}