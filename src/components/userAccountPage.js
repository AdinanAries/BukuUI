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
                        <div style={{padding: 10, marginTop: 10}}>
                            <p style={{color: "skyblue", textAlign: "center", fontSize: 14, fontWeight: "bolder"}}>
                                <i style={{color: "orange", marginRight: 5}} className="fa fa-clock-o"></i>
                                Your Next Appointment</p>
                            <div style={{marginTop: 10, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 10, backgroundColor: "rgba(0,0,0,0.3)", minHeight: 400}}>

                            </div>
                        </div>
                    </div>
                    <div className="user-account-page-main-sections-each" style={{padding: 10, marginTop: 10}}>
                        <p style={{color: "skyblue", textAlign: "center", fontSize: 14, fontWeight: "bolder"}}>
                            <i style={{color: "orange", marginRight: 5}} className="fa fa-history"></i>
                            History</p>
                        <div style={{marginTop: 10, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 10, backgroundColor: "rgba(0,0,0,0.3)", minHeight: 400, overflow: "hidden"}}>
                            <div style={{borderBottom: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(233,221,0,0.2)"}}>
                                <input readOnly style={{padding: 10, backgroundColor: "rgba(0,0,0,0.2)", marginRight: "10px", cursor: "pointer", background: "none", color: "white", minWidth: 250, border: "none", fontWeight: "bolder", textAlign: "center", letterSpacing: "1px"}} type="text" value="March 24 - May 15"/>
                                <i style={{color: "orange"}} className="fa fa-caret-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserAccountContainer;