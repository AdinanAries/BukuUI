import { close_app_settings_page } from "./helperFunctions"
//...
function AppSettingsPage(){
    return (
        <div style={{display: "none"}} id="app_settings_page">
            <div style={{position: "relative", borderTop: "1px solid white"}}>
                <p onClick={close_app_settings_page} style={{position: "absolute", top: 0, right: 0, padding: 10, marginRight: 10, color: "red"}}>
                    <i className="fa fa-times"></i>
                </p>
                <div>
                    <p style={{color: "orange", textAlign: "center", marginTop: 20, marginBottom: 20, fontSize: 14, fontWeight: "bolder"}}>Settings</p>
                    <div style={{maxWidth: 700, margin: "auto"}}>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", padding: 15, backgroundColor: "rgba(255,255,255,0.1)"}}>
                            <div style={{color: "white", fontSize: 14}}>
                                Setting Name
                            </div>
                            <div style={{color: "white", fontSize: 14}}>
                                value
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", padding: 15, backgroundColor: "rgba(0,0,0,0.1)"}}>
                            <div style={{color: "white", fontSize: 14}}>
                                Setting Name
                            </div>
                            <div style={{color: "white", fontSize: 14}}>
                                value
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", padding: 15, backgroundColor: "rgba(255,255,255,0.1)"}}>
                            <div style={{color: "white", fontSize: 14}}>
                                Setting Name
                            </div>
                            <div style={{color: "white", fontSize: 14}}>
                                value
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", padding: 15, backgroundColor: "rgba(0,0,0,0.1)"}}>
                            <div style={{color: "white", fontSize: 14}}>
                                Setting Name
                            </div>
                            <div style={{color: "white", fontSize: 14}}>
                                value
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", padding: 15, backgroundColor: "rgba(255,255,255,0.1)"}}>
                            <div style={{color: "white", fontSize: 14}}>
                                Setting Name
                            </div>
                            <div style={{color: "white", fontSize: 14}}>
                                value
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", padding: 15, backgroundColor: "rgba(0,0,0,0.1)"}}>
                            <div style={{color: "white", fontSize: 14}}>
                                Setting Name
                            </div>
                            <div style={{color: "white", fontSize: 14}}>
                                value
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", padding: 15, backgroundColor: "rgba(255,255,255,0.1)"}}>
                            <div style={{color: "white", fontSize: 14}}>
                                Setting Name
                            </div>
                            <div style={{color: "white", fontSize: 14}}>
                                value
                            </div>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", maxWidth: 700, margin: "auto", padding: 10}}>
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
    );
}

export default AppSettingsPage;