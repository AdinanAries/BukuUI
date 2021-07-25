import $ from "jquery";

export function toggle_show_all_service(){
    $("#all_services_menu_pane").toggle("up");
    document.getElementById("appointments_list_container").style.display = "none";
}

export function toggle_show_appointments_list_container(){
    $("#appointments_list_container").toggle("up");
    document.getElementById("all_services_menu_pane").style.display = "none";
}
export function refreshPageFunc(){
    setTimeout("location.reload(true);", 0);
}