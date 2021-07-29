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
                </div>
            </div>
        </div>
    );
}

export default AppSettingsPage;