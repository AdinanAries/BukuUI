import $ from "jquery";

export function toggle_show_all_service(){
    $("#all_services_menu_pane").toggle("up");
    document.getElementById("search_filters_main_container").style.display = "block";
}

export function hide_all_popups(){
    document.getElementById("all_services_menu_pane").style.display = "none";
}

export function refreshPageFunc(){
    setTimeout("location.reload(true);", 0);
}