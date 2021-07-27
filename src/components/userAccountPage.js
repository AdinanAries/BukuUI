import profilePic from "../images/profile_avatar.png"

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
                                <div style={{marginTop: 10, textAlign: "center", color: "white", padding: 10, backgroundColor: "darkslateblue", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                    <i style={{marginRight: 5, color: "gold"}} className="fa fa-pencil"></i>
                                    Edit
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
                                        Path
                                    </div>
                                    <div style={{width: "33%", textAlign: "center", color: "white", padding: 10, backgroundColor: "rgba(65,123,22)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "gold"}} className="fa fa-pencil"></i>
                                        Edit
                                    </div>
                                    <div style={{width: "33%",  textAlign: "center", color: "white", padding: 10, backgroundColor: "crimson", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "yellow"}} className="fa fa-trash"></i>
                                        Cancel
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="user-account-page-main-sections-each" style={{padding: "10px 5px", marginTop: 10}}>
                        <p style={{color: "skyblue", textAlign: "center", fontSize: 14, fontWeight: "bolder"}}>
                            <i style={{color: "orange", marginRight: 5}} className="fa fa-history"></i>
                            History</p>
                        <div style={{marginTop: 10, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 10, backgroundColor: "rgba(0,0,0,0.3)", minHeight: 400, overflow: "hidden"}}>
                            <div style={{borderBottom: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(233,221,0,0.2)"}}>
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
                                    <div style={{width: "33%", textAlign: "center", color: "skyblue", padding: 10, border: "1px solid rgba(255,255,255,0.2)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "gold"}} className="fa fa-location-arrow"></i>
                                        Path
                                    </div>
                                    <div style={{width: "33%", textAlign: "center", color: "white", padding: 10, backgroundColor: "rgba(65,123,22)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "gold"}} className="fa fa-pencil"></i>
                                        Edit
                                    </div>
                                    <div style={{width: "33%",  textAlign: "center", color: "white", padding: 10, backgroundColor: "crimson", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "yellow"}} className="fa fa-trash"></i>
                                        Cancel
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
                                    <div style={{width: "33%", textAlign: "center", color: "skyblue", padding: 10, border: "1px solid rgba(255,255,255,0.2)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "gold"}} className="fa fa-location-arrow"></i>
                                        Path
                                    </div>
                                    <div style={{width: "33%", textAlign: "center", color: "white", padding: 10, backgroundColor: "rgba(65,123,22)", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "gold"}} className="fa fa-pencil"></i>
                                        Edit
                                    </div>
                                    <div style={{width: "33%",  textAlign: "center", color: "white", padding: 10, backgroundColor: "crimson", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                                        <i style={{marginRight: 5, color: "yellow"}} className="fa fa-trash"></i>
                                        Cancel
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div style={{marginTop: 10, backgroundColor: "darkslateblue", padding: 10, textAlign: "center", color: "white", fontSize: 14, cursor: "pointer", borderRadius: 4}}>
                            Show More History
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserAccountContainer;