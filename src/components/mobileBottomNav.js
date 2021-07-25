function MobileBottomNav(){
    return (
        <div id="mobile_bottom_nav">
            <div style={{padding: "5px", display: "flex", flexDirection: "row !important", justifyContent: "space-between"}}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "calc(25% - 2px)"}}>
                    <div style={{color: "orange", textAlign: "center", fontSize: 20}}>
                        <i className="fa fa-home"></i>
                    </div>
                    <p style={{color: "white", fontSize: 12, textAlign: "center", marginTop: 1}}>Home</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "calc(25% - 2px)"}}>
                    <div style={{color: "orange", textAlign: "center", fontSize: 20}}>
                        <i className="fa fa-bars"></i>
                    </div>
                    <p style={{color: "white", fontSize: 12, textAlign: "center", marginTop: 1}}>Services</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "calc(25% - 2px)"}}>
                    <div style={{color: "orange", textAlign: "center", fontSize: 20}}>
                        <i className="fa fa-calendar-o"></i>
                    </div>
                    <p style={{color: "white", fontSize: 12, textAlign: "center", marginTop: 1}}>Appointments</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "calc(25% - 2px)"}}>
                    <div style={{color: "orange", textAlign: "center", fontSize: 20}}>
                        <i className="fa fa-user"></i>
                    </div>
                    <p style={{color: "white", fontSize: 12, textAlign: "center", marginTop: 1}}>Account</p>
                </div>
            </div>
        </div>
    );
}

export default MobileBottomNav;