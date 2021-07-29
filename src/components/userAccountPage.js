import profilePic from "../images/profile_avatar.png"

import { general_slideUp, general_slideDown, toggle_show_app_settings_page } from "./helperFunctions";

function UserAccountContainer(){
    return (
        <div id="user_account_page">
            <div className="wrapper">
                <div className="user-account-page-main-container">
                    <div className="user-account-page-main-sections-each" >
                        <div style={{padding: 10, display: "flex", flexDirection: "row !important", justifyContent: "space-between"}}>
                            <div style={{width: 70, height: 70, overflow: "hidden", borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.2)"}}>
                                <img src={profilePic} style={{width: 70, minHeight: 70, height: "auto"}} />
                            </div>
                            <div style={{width: "calc(100% - 90px)"}}>
                                <p style={{color: "white", fontWeight: "bolder"}}>Mohammed Adinan</p>
                                <p style={{color: "orange", fontSize: 13, marginTop: 5}}>m.adinan@yahoo.com</p>
                                <p style={{color: "orange", fontSize: 13}}>+1 (732) 799 9546</p>
                                <div style={{display: "flex", margin: 5, marginTop: 15, flexDirection: "row !important", justifyContent: "space-between"}}>
                                    <div style={{width: "calc(50% - 1px)", textAlign: "center", color: "white", padding: 10, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(204,0,204,0.2)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "skyblue"}} className="fa fa-pencil"></i>
                                        Edit Profile
                                    </div>
                                    <div onClick={toggle_show_app_settings_page} style={{width: "calc(50% - 1px)",  textAlign: "center", color: "white", padding: 10, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(0,204,204,0.2)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "skyblue"}} className="fa fa-cogs"></i>
                                        Settings
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: "10px 5px", marginTop: 10}}>
                            <p style={{color: "skyblue", textAlign: "center", fontSize: 14, fontWeight: "bolder"}}>
                                <i style={{color: "orange", marginRight: 5}} className="fa fa-clock-o"></i>
                                Your Next Appointment</p>
                            <div style={{marginTop: 10, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 10, backgroundColor: "rgba(0,0,0,0.3)"}}>
                                <div style={{padding: 10, marginBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(21,12,111,0.3)"}}>
                                    <p style={{color: "white", fontWeight: "bolder"}}>
                                        <span style={{fontSize: 14, marginRight: 10}}>
                                        March 12</span>
                                        <span style={{color: "rgba(255,255,255,0.3)", fontSize: 14, marginRight: 10}}>
                                        |</span>
                                        <span style={{fontSize: 14, marginRight: 20}}>
                                        9:45 PM</span>
                                    </p>
                                    <p style={{color: "goldenrod", fontSize: 14, marginTop: 5}}>
                                        Regular Body Checkup
                                    </p>
                                </div>
                                <div style={{padding: 10, display: "flex", flexDirection: "row !important", justifyContent: "space-between"}}>
                                    <div style={{width: 50, height: 50, overflow: "hidden", borderRadius: "100%", backgroundColor: "rgba(255,155,0,0.2)"}}>
                                        <img src={profilePic} style={{width: 50, minHeight: 50, height: "auto"}} />
                                    </div>
                                    <div style={{width: "calc(100% - 70px)"}}>
                                        <p style={{color: "pink", fontWeight: "bolder"}}>Mohammed Adinan</p>
                                        <p className="homepage-each-favorite-service-bizname"  style={{textAlign: "left", marginTop: 10}}>Bukus Meds</p>
                                        <p className="homepage-each-favorite-service-servicetype" style={{textAlign: "left"}}>Medical Center</p>
                                        <p style={{color: "lightgreen", fontSize: 14, marginTop: 10}}>
                                            <i style={{marginRight: 5, color: "orange"}} className="fa fa-map-marker"></i>
                                            1253 allerton ave</p>
                                            <p style={{color: "lightgreen", fontSize: 14}}>
                                            <i style={{marginRight: 5, color: "orange"}} className="fa fa-envelope"></i>
                                            m.adinan@yahoo.com</p>
                                            <p style={{color: "lightgreen", fontSize: 14}}>
                                            <i style={{marginRight: 5, color: "orange"}} className="fa fa-phone"></i>
                                            +1 (732) 799 9546</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", margin: 5, marginTop: 15, flexDirection: "row !important", justifyContent: "space-between"}}>
                                    <div style={{width: "33%", textAlign: "center", color: "skyblue", padding: 10, border: "1px solid rgba(255,255,255,0.2)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "gold"}} className="fa fa-location-arrow"></i>
                                        Map
                                    </div>
                                    <div style={{width: "33%", textAlign: "center", color: "white", padding: 10, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(65,123,22,0.3)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "gold"}} className="fa fa-pencil"></i>
                                        Change
                                    </div>
                                    <div style={{position: "relative", width: "33%",}}>
                                        <div onClick={()=>{general_slideDown("usracc_next_appointment_more_menu")}} style={{textAlign: "center", color: "white", padding: 10, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(45,112,122,0.3)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                            <i style={{marginRight: 5, color: "yellow"}} className="fa fa-ellipsis-v"></i>
                                            More
                                        </div>
                                        <div id="usracc_next_appointment_more_menu" style={{display: "none", padding: "10px 5px", width: 200, position: "absolute", top: -2, right: -2, backgroundColor: "#212c2c", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "1px 2px 3px rgba(0,0,0,0.4)", borderRadius: 4}}>
                                            <p onClick={()=>{general_slideUp("usracc_next_appointment_more_menu")}} style={{marginBottom: 15, textAlign: "right", fontSize: 14, color: "red", cursor: "pointer"}}>
                                                Hide<i style={{color: "orange", marginLeft: 7, fontSize: 17}} className="fa fa-caret-up"></i>
                                            </p>
                                            <p style={{color: "white", fontSize: 14, padding: "10px 0", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.3)"}}>
                                                <i style={{marginRight: 5, color: "gold"}} className="fa fa-trash"></i>
                                                Cancel Appointment</p>
                                            <p style={{color: "white", fontSize: 14, padding: "10px 0", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.3)"}}>
                                                <i style={{marginRight: 5, color: "gold"}} className="fa fa-phone"></i>
                                                Call</p>
                                            <p style={{color: "white", fontSize: 14, padding: "10px 0", textAlign: "left"}}>
                                                <i style={{marginRight: 5, color: "gold"}} className="fa fa-eye"></i>
                                                View Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{margin: "0 5px", marginBottom: 10, backgroundColor: "rgba(22,22,98,0.3)", border: "1px solid rgba(55,155,73,0.3)", padding: 10, textAlign: "center", color: "white", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                            see all appointments
                        </div>
                    </div>
                    <div className="user-account-page-main-sections-each" style={{padding: "10px 5px", marginTop: 10}}>
                        <p style={{color: "skyblue", textAlign: "center", fontSize: 14, fontWeight: "bolder"}}>
                            <i style={{color: "orange", marginRight: 5}} className="fa fa-history"></i>
                            History</p>
                        <div style={{marginTop: 10, paddingBottom: 10, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 10, backgroundColor: "rgba(0,0,0,0.3)", minHeight: 400}}>
                            <div style={{borderBottom: "1px solid rgba(255,255,255,0.3)", borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: "rgba(233,221,0,0.2)"}}>
                                <input readOnly style={{padding: 10, backgroundColor: "rgba(0,0,0,0.2)", marginRight: "10px", cursor: "pointer", color: "white", minWidth: 250, border: "none", fontWeight: "bolder", textAlign: "center", letterSpacing: "1px"}} type="text" value="March 24 - May 15"/>
                                <i style={{color: "orange"}} className="fa fa-caret-down"></i>
                            </div>
                            <div style={{borderBottom: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(0,0,0,0.3)"}}>
                                <div style={{padding: 10}}>
                                    <p style={{color: "white", fontWeight: "bolder"}}>
                                        <span style={{fontSize: 14, marginRight: 10}}>
                                        March 12</span>
                                        <span style={{color: "rgba(255,255,255,0.3)", fontSize: 14, marginRight: 10}}>
                                        |</span>
                                        <span style={{fontSize: 14, marginRight: 20}}>
                                        9:45 PM</span>
                                    </p>
                                    <p style={{color: "goldenrod", fontSize: 14, marginTop: 5}}>
                                        Regular Body Checkup
                                    </p>
                                </div>
                                <div style={{padding: 10, display: "flex", flexDirection: "row !important", justifyContent: "space-between"}}>
                                    <div style={{width: 50, height: 50, overflow: "hidden", borderRadius: "100%", backgroundColor: "rgba(255,155,0,0.2)"}}>
                                        <img src={profilePic} style={{width: 50, minHeight: 50, height: "auto"}} />
                                    </div>
                                    <div style={{width: "calc(100% - 70px)"}}>
                                        <p style={{color: "pink", fontWeight: "bolder"}}>Mohammed Adinan</p>
                                        <p className="homepage-each-favorite-service-bizname"  style={{textAlign: "left", marginTop: 10}}>Bukus Meds</p>
                                        <p className="homepage-each-favorite-service-servicetype" style={{textAlign: "left"}}>Medical Center</p>
                                        <p style={{color: "lightgreen", fontSize: 14, marginTop: 10}}>
                                            <i style={{marginRight: 5, color: "orange"}} className="fa fa-map-marker"></i>
                                            1253 allerton ave</p>
                                            <p style={{color: "lightgreen", fontSize: 14}}>
                                            <i style={{marginRight: 5, color: "orange"}} className="fa fa-envelope"></i>
                                            m.adinan@yahoo.com</p>
                                            <p style={{color: "lightgreen", fontSize: 14}}>
                                            <i style={{marginRight: 5, color: "orange"}} className="fa fa-phone"></i>
                                            +1 (732) 799 9546</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", margin: 5, marginTop: 15, flexDirection: "row !important", justifyContent: "space-between"}}>
                                    <div style={{width: "66.5%", textAlign: "center", color: "white", padding: 10, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(145,12,122,0.3)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "gold"}} className="fa fa-star"></i>
                                        Add Review
                                    </div>
                                    <div style={{position: "relative", width: "33%",}}>
                                        <div onClick={()=>{general_slideDown("usracc_appointment_history_more_menu_1")}} style={{textAlign: "center", color: "white", padding: 10, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(45,112,122,0.3)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                            <i style={{marginRight: 5, color: "yellow"}} className="fa fa-ellipsis-v"></i>
                                            More
                                        </div>
                                        <div id="usracc_appointment_history_more_menu_1" style={{display: "none", padding: "10px 5px", width: 200, position: "absolute", top: -2, right: -2, backgroundColor: "#212c2c", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "1px 2px 3px rgba(0,0,0,0.4)", borderRadius: 4}}>
                                            <p onClick={()=>{general_slideUp("usracc_appointment_history_more_menu_1")}} style={{marginBottom: 15, textAlign: "right", fontSize: 14, color: "red", cursor: "pointer"}}>
                                                Hide<i style={{color: "orange", marginLeft: 7, fontSize: 17}} className="fa fa-caret-up"></i>
                                            </p>
                                            <p style={{color: "white", fontSize: 14, padding: "10px 0", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.3)"}}>
                                                <i style={{marginRight: 5, color: "gold"}} className="fa fa-trash"></i>
                                                Cancel Appointment</p>
                                            <p style={{color: "white", fontSize: 14, padding: "10px 0", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.3)"}}>
                                                <i style={{marginRight: 5, color: "gold"}} className="fa fa-phone"></i>
                                                Call</p>
                                            <p style={{color: "white", fontSize: 14, padding: "10px 0", textAlign: "left"}}>
                                                <i style={{marginRight: 5, color: "gold"}} className="fa fa-eye"></i>
                                                View Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{borderBottom: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(0,0,0,0.3)"}}>
                                <div style={{padding: 10}}>
                                    <p style={{color: "white", fontWeight: "bolder"}}>
                                        <span style={{fontSize: 14, marginRight: 10}}>
                                        March 12</span>
                                        <span style={{color: "rgba(255,255,255,0.3)", fontSize: 14, marginRight: 10}}>
                                        |</span>
                                        <span style={{fontSize: 14, marginRight: 20}}>
                                        9:45 PM</span>
                                    </p>
                                    <p style={{color: "goldenrod", fontSize: 14, marginTop: 5}}>
                                        Regular Body Checkup
                                    </p>
                                </div>
                                <div style={{padding: 10, display: "flex", flexDirection: "row !important", justifyContent: "space-between"}}>
                                    <div style={{width: 50, height: 50, overflow: "hidden", borderRadius: "100%", backgroundColor: "rgba(255,155,0,0.2)"}}>
                                        <img src={profilePic} style={{width: 50, minHeight: 50, height: "auto"}} />
                                    </div>
                                    <div style={{width: "calc(100% - 70px)"}}>
                                        <p style={{color: "pink", fontWeight: "bolder"}}>Mohammed Adinan</p>
                                        <p className="homepage-each-favorite-service-bizname"  style={{textAlign: "left", marginTop: 10}}>Bukus Meds</p>
                                        <p className="homepage-each-favorite-service-servicetype" style={{textAlign: "left"}}>Medical Center</p>
                                        <p style={{color: "lightgreen", fontSize: 14, marginTop: 10}}>
                                            <i style={{marginRight: 5, color: "orange"}} className="fa fa-map-marker"></i>
                                            1253 allerton ave</p>
                                            <p style={{color: "lightgreen", fontSize: 14}}>
                                            <i style={{marginRight: 5, color: "orange"}} className="fa fa-envelope"></i>
                                            m.adinan@yahoo.com</p>
                                            <p style={{color: "lightgreen", fontSize: 14}}>
                                            <i style={{marginRight: 5, color: "orange"}} className="fa fa-phone"></i>
                                            +1 (732) 799 9546</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", margin: 5, marginTop: 15, flexDirection: "row !important", justifyContent: "space-between"}}>
                                    <div style={{width: "66.5%", textAlign: "center", color: "white", padding: 10, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(145,12,122,0.3)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "gold"}} className="fa fa-star"></i>
                                        Add Review
                                    </div>
                                    <div style={{position: "relative", width: "33%",}}>
                                        <div onClick={()=>{general_slideDown("usracc_appointment_history_more_menu_2")}} style={{textAlign: "center", color: "white", padding: 10, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(45,112,122,0.3)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                            <i style={{marginRight: 5, color: "yellow"}} className="fa fa-ellipsis-v"></i>
                                            More
                                        </div>
                                        <div id="usracc_appointment_history_more_menu_2" style={{display: "none", padding: "10px 5px", width: 200, position: "absolute", top: -2, right: -2, backgroundColor: "#212c2c", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "1px 2px 3px rgba(0,0,0,0.4)", borderRadius: 4}}>
                                            <p onClick={()=>{general_slideUp("usracc_appointment_history_more_menu_2")}} style={{marginBottom: 15, textAlign: "right", fontSize: 14, color: "red", cursor: "pointer"}}>
                                                Hide<i style={{color: "orange", marginLeft: 7, fontSize: 17}} className="fa fa-caret-up"></i>
                                            </p>
                                            <p style={{color: "white", fontSize: 14, padding: "10px 0", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.3)"}}>
                                                <i style={{marginRight: 5, color: "gold"}} className="fa fa-trash"></i>
                                                Cancel Appointment</p>
                                            <p style={{color: "white", fontSize: 14, padding: "10px 0", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.3)"}}>
                                                <i style={{marginRight: 5, color: "gold"}} className="fa fa-phone"></i>
                                                Call</p>
                                            <p style={{color: "white", fontSize: 14, padding: "10px 0", textAlign: "left"}}>
                                                <i style={{marginRight: 5, color: "gold"}} className="fa fa-eye"></i>
                                                View Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop: 10, backgroundColor: "rgba(22,22,98,0.3)", border: "1px solid rgba(55,155,73,0.3)", padding: 10, textAlign: "center", color: "white", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                            see all history
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserAccountContainer;