import { general_slideUp } from './helperFunctions';

function cancel_upload_func(){
    general_slideUp("photo_upload_form");
}

export function DeletePhotoConfirmationDialog(){
    return (
        <div id="confirm_profile_photo_deletion_dialog" style={{backgroundColor: "rgba(0,0,0,0.5)", display: "none", flexDirection: "column", justifyContent: "center", position: "fixed", height: "100vh", width: "100vw", zIndex: 6}}>
            <div style={{padding: 10, backgroundColor: "white", borderRadius: 4, width: 400, margin: "auto", boxShadow: "1px 2px 3px rgba(0,0,0,0.4)"}}>
                <p style={{textAlign: "center", color: "crimson", fontWeight: "bolder", marginBottom: 5, fontSize: 14}}>Delete Profile Photo</p>
                <p style={{textAlign: "center", marginBottom: 20, fontSize: 14}}>Are you sure?</p>
                <div style={{borderRadius: 10, overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "row !important", marginTop: 10, justifyContent: "space-between"}}>
                    <div style={{padding: 10, backgroundColor: "crimson", textAlign: "center", fontSize: "14px", width: "50%", color:"white"}}>
                        Delete
                    </div>
                    <div onClick={()=>{document.getElementById("confirm_profile_photo_deletion_dialog").style.display = "none"}} style={{padding: 10, backgroundColor: "lightgreen", textAlign: "center", fontSize: "14px", width: "50%"}}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    )
}

function PhotoUploadForm(){
    return (
        <div id="photo_upload_form" style={{display: "none", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 5}}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 700, margin: "auto", height: "100%", padding: 10}}>
                <div style={{backgroundColor: "white", borderRadius: 4, boxShadow: "1px 2px 3px rgba(0,0,0,0.4)", padding: 10}}>
                    <p style={{fontWeight: "bolder", textAlign: "center", margin: "10px 0", marginBottom: 20, fontSize: 14, color: "crimson"}}>Photo Upload</p>
                    <div style={{cursor: "pointer", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", height: 160, border: "1px solid rgba(255,0,0,0.4)", backgroundColor: "rgba(255,0,0,0.3)"}}>
                        <p><i style={{fontSize: 30, color: "rgba(255,0,0,0.5)"}} className="fa fa-plus"></i></p>
                        <p style={{color: "rgba(255,0,0,0.5)", marginTop: 5, fontSize: 14, fontWeight: "bolder"}}>Click here to select photo</p>
                    </div>
                    <div style={{borderRadius: 10, overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "row !important", marginTop: 10, justifyContent: "space-between"}}>
                        <div style={{padding: 10, backgroundColor: "darkslateblue", textAlign: "center", fontSize: "14px", width: "50%", color:" white"}}>
                            Save
                        </div>
                        <div onClick={cancel_upload_func} style={{padding: 10, backgroundColor: "crimson", textAlign: "center", fontSize: "14px", width: "50%", color:" white"}}>
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoUploadForm;