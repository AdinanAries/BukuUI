function AppointmentsList(){
    return (
        <div id="appointments_list_container">
            <div className="wrapper">
                <div style={{maxWidth: 1000, margin: "auto", padding: 5}}>
                    <div style={{marginTop: 10, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 10, backgroundColor: "rgba(0,0,0,0.3)", minHeight: 400, overflow: "hidden"}}>
                        <div style={{borderBottom: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(233,221,0,0.2)"}}>
                            <input readOnly style={{padding: 10, backgroundColor: "rgba(0,0,0,0.2)", marginRight: "10px", cursor: "pointer", background: "none", color: "white", minWidth: 250, border: "none", fontWeight: "bolder", textAlign: "center", letterSpacing: "1px"}} type="text" value="March 24 - May 15"/>
                            <i style={{color: "orange"}} className="fa fa-caret-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppointmentsList;