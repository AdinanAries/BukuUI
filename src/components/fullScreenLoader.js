function FullScreenLoader(){
    return (
        <div id="full_screen_loader" style={{position: "fixed", top: 0, left: 0, zIndex: "1000", width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.7)", display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row !important", justifyContent: "center"}}>
                <div>
                <div class="item loading-3">
                    <div class="loading"></div>
                </div>
                </div>
            </div>
        </div>
    );
}

setTimeout(()=>{
    document.getElementById("full_screen_loader").style.display = "none";
}, 2000)

export default FullScreenLoader;