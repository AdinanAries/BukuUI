import $ from "jquery";

export function toggle_show_all_service(){
    if(document.getElementById("all_services_menu_pane").style.display === "none"){
        document.getElementById("main_menu_all_services_option").classList.add("active");
        document.getElementById("top_main_menu_all_services_option").classList.add("active");
    }else{
        document.getElementById("main_menu_all_services_option").classList.remove("active");
        document.getElementById("top_main_menu_all_services_option").classList.remove("active");
    }
    $("#all_services_menu_pane").toggle("up");
    document.getElementById("search_filters_main_container").style.display = "block";
    document.getElementById("notifications_container").style.display = "none";
    document.getElementById("app_settings_page").style.display = "none";
    document.getElementById("edit_user_profile_page").style.display = "none";
    document.getElementById("main_menu_notifications_option").classList.remove("active");
    document.getElementById("top_main_menu_notifications_option").classList.remove("active");
}

export function toggle_show_notifications_container(){
    if(document.getElementById("notifications_container").style.display === "none"){
        document.getElementById("main_menu_notifications_option").classList.add("active");
        document.getElementById("top_main_menu_notifications_option").classList.add("active");
    }else{
        document.getElementById("main_menu_notifications_option").classList.remove("active");
        document.getElementById("top_main_menu_notifications_option").classList.remove("active");
    }
    $("#notifications_container").toggle("up");
    document.getElementById("search_filters_main_container").style.display = "block";
    document.getElementById("all_services_menu_pane").style.display = "none";
    document.getElementById("app_settings_page").style.display = "none";
    document.getElementById("edit_user_profile_page").style.display = "none";
    document.getElementById("top_main_menu_all_services_option").classList.remove("active");
    document.getElementById("main_menu_all_services_option").classList.remove("active");
}

export function toggle_show_app_settings_page(){
    $("#app_settings_page").toggle("up");
    document.getElementById("search_filters_main_container").style.display = "block";
    document.getElementById("all_services_menu_pane").style.display = "none";
    document.getElementById("notifications_container").style.display = "none";
    document.getElementById("edit_user_profile_page").style.display = "none";
}

export function close_app_settings_page(){
    $("#app_settings_page").toggle("up");
}

export function toggle_show_edit_user_profile_page(){
    $("#edit_user_profile_page").toggle("up");
    document.getElementById("search_filters_main_container").style.display = "block";
    document.getElementById("all_services_menu_pane").style.display = "none";
    document.getElementById("app_settings_page").style.display = "none";
    document.getElementById("notifications_container").style.display = "none";
}

export function close_edit_user_profile_page(){
    $("#edit_user_profile_page").toggle("up");
}

export function hide_all_popups(elem_id){
    setActiveNav(elem_id);
    document.getElementById("app_settings_page").style.display = "none";
    document.getElementById("all_services_menu_pane").style.display = "none";
    document.getElementById("notifications_container").style.display = "none";
    document.getElementById("edit_user_profile_page").style.display = "none";
    $('html, body').animate({scrollTop:0}, '300');
}

export function setActiveNav(elem_id){
    Array.from(document.getElementsByClassName("main_menu_item")).forEach(each => {
        each.classList.remove("active");
    });
    document.getElementById(elem_id).classList.add("active");
}

export function refreshPageFunc(){
    $('html, body').animate({scrollTop:0}, '300');
    setTimeout("location.reload(true);", 310);
}

export function general_slideUp(elem_id){
    $("#"+elem_id).slideUp("fast");
}

export function general_slideDown(elem_id){
    $("#"+elem_id).slideDown("fast");
}