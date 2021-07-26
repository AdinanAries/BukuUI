import $ from "jquery";
import { Link } from "react-router-dom"

import {toggle_show_all_service, hide_all_popups, toggle_show_notifications_container, refreshPageFunc} from "./helperFunctions";

function MobileBottomNav(){
    return (
        <><div id="mobile_bottom_nav">
            <div style={{padding: "5px", display: "flex", flexDirection: "row !important", justifyContent: "space-between"}}>
                <div onClick={refreshPageFunc} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "calc(25% - 2px)"}}>
                    <Link to="/"><div style={{color: "orange", textAlign: "center", fontSize: 18}}>
                        <i className="fa fa-home"></i>
                    </div>
                    <p style={{color: "white", fontSize: 11, textAlign: "center", marginTop: 1}}>Home</p></Link>
                </div>
                <div onClick={toggle_show_all_service} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "calc(25% - 2px)"}}>
                    <div style={{color: "orange", textAlign: "center", fontSize: 18}}>
                        <i className="fa fa-bars"></i>
                    </div>
                    <p style={{color: "white", fontSize: 11, textAlign: "center", marginTop: 1}}>Services</p>
                </div>
                <div onClick={toggle_show_notifications_container} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "calc(25% - 2px)", position: "relative"}}>
                    <div style={{border: "2px solid #212c2c", position: "absolute", right: 22, top: -3, width: 18, height: 18, backgroundColor: "white", fontSize: 12, fontWeight: "bolder", borderRadius: "100%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        0
                    </div>
                    <div style={{color: "orange", textAlign: "center", fontSize: 18}}>
                        <i className="fa fa-bell"></i>
                    </div>
                    <p style={{color: "white", fontSize: 11, textAlign: "center", marginTop: 1}}>Notifications</p>
                </div>
                <div onClick={hide_all_popups} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "calc(25% - 2px)"}}>
                    <Link to="/appointments"><div style={{color: "orange", textAlign: "center", fontSize: 18}}>
                        <i className="fa fa-calendar"></i>
                    </div>
                    <p style={{color: "white", fontSize: 11, textAlign: "center", marginTop: 1}}>Appointments</p></Link>
                </div>
                <div onClick={hide_all_popups} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "calc(25% - 2px)"}}>
                    <Link to="/user"><div style={{color: "orange", textAlign: "center", fontSize: 18}}>
                        <i className="fa fa-user"></i>
                    </div>
                    <p style={{color: "white", fontSize: 11, textAlign: "center", marginTop: 1}}>Account</p></Link>
                </div>
            </div>
        </div></>
    );
}

export default MobileBottomNav;