import $ from "jquery";

export function login(email_param, password_param){
    console.log("called");
    return $.ajax({
        type: "POST",
        url: "http://www.buku-services.somee.com/api/Account",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: {
            email: email_param,
            password: password_param
        },
        success: res=>{
            return res;
        },
        error: err => {
            return err;
        }
    });
}