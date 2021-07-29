function NotificationsContainer(){
    return (
        <div style={{display: "none"}} id="notifications_container">
            <div className="wrapper">
                <div style={{maxWidth: 700, margin: "auto"}}>
                    <p style={{color: "orange", textAlign: "center", marginTop: 20, marginBottom: 20, fontSize: 14, fontWeight: "bolder"}}>Notifications</p>
                    <div id="user_notifications_list">
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", padding: "10px 5px", backgroundColor: "rgba(3,25,55,0.4)", marginBottom: 5}}>
                            <div style={{width: 40, height: 40, borderRadius: "100%", backgroundColor: "darkgrey"}}></div>
                            <div style={{width: "calc(100% - 50px)"}}>
                                <p style={{color: "white", fontSize: 14}}>
                                    <span style={{color: "skyblue", fontSize: 14, fontWeight: "bolder", marginRight: 10}}>
                                        Notification title to be placed here</span>
                                    March 13, 12:20 PM
                                </p>
                                <p style={{color: "goldenrod", fontSize: 13, marginTop: 5}}>
                                    Some description about the notification will be indicated here.
                                </p>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", padding: "10px 5px", backgroundColor: "rgba(3,25,55,0.4)", marginBottom: 5}}>
                            <div style={{width: 40, height: 40, borderRadius: "100%", backgroundColor: "darkgrey"}}></div>
                            <div style={{width: "calc(100% - 50px)"}}>
                                <p style={{color: "white", fontSize: 14}}>
                                    <span style={{color: "skyblue", fontSize: 14, fontWeight: "bolder", marginRight: 10}}>
                                        Notification title to be placed here</span>
                                    March 13, 12:20 PM
                                </p>
                                <p style={{color: "goldenrod", fontSize: 13, marginTop: 5}}>
                                    Some description about the notification will be indicated here.
                                </p>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationsContainer;