import { close_edit_user_profile_page, general_slideDown, general_slideUp, toggle_show_photo_upload_form, show_confirm_photo_deletion_dialog } from "./helperFunctions";

export default function EditUserProfile(){
    return (
        <div style={{display: "none"}} id="edit_user_profile_page">
            <div style={{position: "relative", borderTop: "1px solid white"}}>
                <p onClick={close_edit_user_profile_page} style={{position: "absolute", top: 0, right: 0, padding: 10, marginRight: 10, color: "red"}}>
                    <i className="fa fa-times"></i>
                </p>
                <div>
                    <p style={{color: "orange", textAlign: "center", marginTop: 20, marginBottom: 5, fontSize: 14, fontWeight: "bolder"}}>Edit Profile</p>
                    <p style={{color: "white", textAlign: "center", marginBottom: 20, fontSize: 13}}>Change your profile information below</p>
                    <div style={{padding: 10}}>
                        <div style={{position: "relative", width: 90, height: 90, margin: "auto", borderRadius: "100%", border: "3px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(0,0,0,0.4)"}}>
                            <div onClick={()=>{general_slideDown("edit_profile_picture_dropdown_menu")}} style={{cursor: "pointer", width: 30, height: 30, position: "absolute", right: 5, bottom: -6, border: "3px solid rgba(255,255,255,0.3)", borderRadius: "100%", backgroundColor: "darkslateblue", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <i style={{fontSize: 18, color: "rgba(255,255,255,0.3)"}} className="fa fa-pencil"></i>
                            </div>
                            <div id="edit_profile_picture_dropdown_menu" style={{display: "none", position: "absolute", left: "calc(100% - 2px)", top: "calc(100% - 20px)", padding: 10, minWidth: 150, minHeight: 100, borderRadius: 4, backgroundColor: "white", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)"}}>
                                <p style={{textAlign: "center", fontSize: 14, fontWeight: "bolder", marginBottom: 5}}>Edit Photo</p>
                                <div>
                                    <p onClick={toggle_show_photo_upload_form} style={{cursor: "pointer", fontSize: 14, padding: "5px 0"}}>
                                        <i style={{marginRight: 5, color: "green"}} className="fa fa-plus"></i>
                                        New Photo</p>
                                    <p onClick={ show_confirm_photo_deletion_dialog } style={{cursor: "pointer", fontSize: 14, padding: "5px 0"}}>
                                        <i style={{marginRight: 5, color: "green"}} className="fa fa-trash"></i>
                                        Remove Photo</p>
                                    <p onClick={()=>{general_slideUp("edit_profile_picture_dropdown_menu")}} style={{cursor: "pointer", fontSize: 14, padding: "5px 0"}}>
                                        <i style={{marginRight: 5, color: "crimson"}} className="fa fa-arrow-up"></i>
                                        Cancel</p>
                                </div>
                            </div>
                        </div>
                        <div id="" style={{padding: 10, paddingTop: 20}}>
                            <div style={{maxWidth: 700, margin: "auto"}}>
                                <div style={{background: "white", padding: 10, borderRadius: 10, boxShadow: "1px 2px 3px rgba(0,0,0,0.5)", marginBottom: 10}}>
                                    <p style={{paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.2)", fontSize: 14, fontWeight: "bolder"}}>
                                        <i style={{marginRight: 5, color: "green"}} className="fa fa-user"></i>Full Name</p>
                                    <input style={{width: "100%", padding: 10, fontSize: 14, border: "none"}} placeholder="please enter your full name here" />
                                </div>
                                <div style={{background: "white", padding: 10, borderRadius: 10, boxShadow: "1px 2px 3px rgba(0,0,0,0.5)", marginBottom: 10}}>
                                    <p style={{paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.2)", fontSize: 14, fontWeight: "bolder"}}>
                                        <i style={{marginRight: 5, fontSize: 18, color: "green"}} className="fa fa-mobile"></i>Mobile</p>
                                    <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", marginTop: 10}}>
                                        <div>
                                            <select style={{backgroundColor: "white",padding: 10, width: 80, border: "none", outline: "none"}}>
                                                <option>
                                                    +1
                                                </option>
                                                <option>
                                                    +255
                                                </option>
                                            </select>
                                        </div>
                                        <div style={{width: "calc(100% - 90px)"}}>
                                            <input type="number" style={{width: "100%", padding: 10, fontSize: 14, border: "none"}} placeholder="please enter mobile number here" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{background: "white", padding: 10, borderRadius: 10, boxShadow: "1px 2px 3px rgba(0,0,0,0.5)", marginBottom: 10}}>
                                    <p style={{paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.2)", fontSize: 14, fontWeight: "bolder"}}>
                                        <i style={{marginRight: 5, color: "green"}} className="fa fa-envelope"></i>Email</p>
                                    <input type="email" style={{width: "100%", padding: 10, fontSize: 14, border: "none"}} placeholder="please enter your email here" />
                                </div>
                                <div style={{background: "white", padding: 10, borderRadius: 10, boxShadow: "1px 2px 3px rgba(0,0,0,0.5)", marginBottom: 10}}>
                                    <p style={{paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.2)", fontSize: 14, fontWeight: "bolder"}}>
                                        <i style={{marginRight: 5, color: "green"}} className="fa fa-key"></i>Password</p>
                                    <input type="password" style={{width: "100%", padding: 10, fontSize: 14, border: "none"}} placeholder="please enter new password here" />
                                </div>
                                <div style={{background: "white", padding: 10, borderRadius: 10, boxShadow: "1px 2px 3px rgba(0,0,0,0.5)", marginBottom: 10}}>
                                    <p style={{paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.2)", fontSize: 14, fontWeight: "bolder"}}>
                                        <i style={{marginRight: 5, color: "green"}} className="fa fa-key"></i>Confirm Password</p>
                                    <input type="password" style={{width: "100%", padding: 10, fontSize: 14, border: "none"}} placeholder="please confirm password here" />
                                </div>
                                <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between"}}>
                                    <div style={{width: "calc(50% - 5px)", cursor: "pointer", padding: 10, textAlign: "center", color: "white", backgroundColor: "rgba(255,0,255,0.3)", fontSize: 13, fontWeight: "bolder", borderRadius: 4, border: "1px solid rgba(255,0,255,0.3)"}}>
                                        Save
                                    </div>
                                    <div style={{width: "calc(50% - 5px)", cursor: "pointer", padding: 10, textAlign: "center", color: "white", backgroundColor: "rgba(255,0,0,0.3)", fontSize: 13, fontWeight: "bolder", borderRadius: 4, border: "1px solid rgba(255,0,0,0.3)"}}>
                                        Cancel
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}