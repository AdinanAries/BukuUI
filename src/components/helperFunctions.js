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
    document.getElementById("news_updates_page").style.display = "none";
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
    document.getElementById("news_updates_page").style.display = "none";
    document.getElementById("top_main_menu_all_services_option").classList.remove("active");
    document.getElementById("main_menu_all_services_option").classList.remove("active");
}

export function toggle_show_app_settings_page(){
    $("#app_settings_page").toggle("up");
    document.getElementById("search_filters_main_container").style.display = "block";
    document.getElementById("all_services_menu_pane").style.display = "none";
    document.getElementById("notifications_container").style.display = "none";
    document.getElementById("edit_user_profile_page").style.display = "none";
    document.getElementById("news_updates_page").style.display = "none";
}

export function toggle_show_news_upates_page(){
    $("#news_updates_page").toggle("up");
    document.getElementById("search_filters_main_container").style.display = "block";
    document.getElementById("all_services_menu_pane").style.display = "none";
    document.getElementById("notifications_container").style.display = "none";
    document.getElementById("edit_user_profile_page").style.display = "none";
    document.getElementById("app_settings_page").style.display = "none";
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
    document.getElementById("news_updates_page").style.display = "none";
}

export function close_edit_user_profile_page(){
    $("#edit_user_profile_page").toggle("up");
}

export function hide_all_popups(elem_id){
    setActiveNav(elem_id);
    hide_all_popups_inner_func();
    $('html, body').animate({scrollTop:0}, '300');
}

export function hide_all_popups_inner_func(){
    document.getElementById("app_settings_page").style.display = "none";
    document.getElementById("all_services_menu_pane").style.display = "none";
    document.getElementById("notifications_container").style.display = "none";
    document.getElementById("edit_user_profile_page").style.display = "none";
}

export function setActiveNav(elem_id){
    Array.from(document.getElementsByClassName("main_menu_item")).forEach(each => {
        each.classList.remove("active");
    });
    document.getElementById(elem_id).classList.add("active");
}

export function refreshPageFunc(){
    document.getElementById("full_screen_loader").style.display = "flex";
    $('html, body').animate({scrollTop:0}, '300');
    setTimeout("location.reload(true);", 310);
}

export function general_slideUp(elem_id){
    $("#"+elem_id).slideUp("fast");
}

export function general_slideDown(elem_id){
    $("#"+elem_id).slideDown("fast");
}

export function toggle_show_login_on_user_account_page(){
    $('html, body').animate({scrollTop:0}, '300');
    setTimeout(()=>{
        $("#user_account_page_user_info_pane").slideUp("fast");
        $("#user_account_page_login_signup_forms_pane").slideDown("fast");
        $("#user_account_page_signup_form_pane").slideUp("fast");
        $("#user_account_page_login_form_pane").slideDown("fast");
    }, 300);
    
}

export function toggle_show_signup_on_user_account_page(){
    $('html, body').animate({scrollTop:0}, '300');
    setTimeout(()=>{
        $("#user_account_page_user_info_pane").slideUp("fast");
        $("#user_account_page_login_signup_forms_pane").slideDown("fast");
        $("#user_account_page_login_form_pane").slideUp("fast");
        $("#user_account_page_signup_form_pane").slideDown("fast");
    }, 300);
    
}

export function toggle_show_user_infor_pane_on_user_account_page(){
    $('html, body').animate({scrollTop:0}, '300');
    setTimeout(()=>{
        $("#user_account_page_login_signup_forms_pane").slideUp("fast");
        $("#user_account_page_user_info_pane").slideDown("fast");
    }, 300);
    
}

/*
    var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
*/

//alert(window.location.pathname);
$(document).ready(()=>{
    if(window.location.pathname === "/user"){
        if($(window).width() > 700){
            setActiveNav("top_main_menu_account_option");
        }else{
            setActiveNav("main_menu_account_option");
        }
    }else if(window.location.pathname === "/appointments"){
        if($(window).width() > 700){
            setActiveNav("top_main_menu_appointments_option");
        }else{
            setActiveNav("main_menu_appointments_option");
        }
    }
});