import { close_edit_user_profile_page } from "./helperFunctions";

export default function EditUserProfile(){
    return (
        <div style={{display: "none"}} id="edit_user_profile_page">
            <div style={{position: "relative", borderTop: "1px solid white"}}>
                <p onClick={close_edit_user_profile_page} style={{position: "absolute", top: 0, right: 0, padding: 10, marginRight: 10, color: "red"}}>
                    <i className="fa fa-times"></i>
                </p>
                <div>
                    <p style={{color: "orange", textAlign: "center", marginTop: 20, marginBottom: 20, fontSize: 14, fontWeight: "bolder"}}>Edit Profile</p>
                </div>
            </div>
        </div>
    );
}