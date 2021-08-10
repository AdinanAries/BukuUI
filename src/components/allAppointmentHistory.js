import $ from "jquery";

import profilePic from "../images/profile_avatar.png";

import { general_slideDown, general_slideUp, show_add_business_addreview_page } from "./helperFunctions";

function toggle_hide_history_page(){
    $("#all_appointment_history").toggle("up");
}

function AllAppointmentHistory(){
    return (
        <div style={{display: "none"}} id="all_appointment_history">
            <div style={{position: "relative", borderTop: "1px solid white"}}>
                <p onClick={toggle_hide_history_page} style={{position: "absolute", top: 0, right: 0, padding: 10, marginRight: 10, color: "red"}}>
                    <i className="fa fa-times"></i>
                </p>
                <div>
                    <p style={{color: "orange", textAlign: "center", marginTop: 20, marginBottom: 20, fontSize: 14, fontWeight: "bolder"}}>History</p>
                    <div style={{maxWidth: 700, margin: "auto"}}>
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
                                <div style={{display: "flex", margin: 5, marginTop: 15, flexDirection: "row !important", justifyContent: "space-between", position: "relative"}}>
                                    <div onClick={show_add_business_addreview_page} style={{width: "66.5%", textAlign: "center", color: "white", padding: 10, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(145,12,122,0.3)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
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
                                <div style={{position: "relative", display: "flex", margin: 5, marginTop: 15, flexDirection: "row !important", justifyContent: "space-between"}}>
                                    <div onClick={show_add_business_addreview_page} style={{width: "66.5%", textAlign: "center", color: "white", padding: 10, border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(145,12,122,0.3)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
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
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllAppointmentHistory;