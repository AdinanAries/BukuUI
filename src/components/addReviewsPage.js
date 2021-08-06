import AddReviewForm from "./addReviewForm";

import { general_slideUp } from "./helperFunctions";

function AddReviewsPage(){
    return (
        <div id="add_business_addreview_page" style={{display: "none", position: "fixed", top: 100, left: 0, zIndex: 2, overflowY: "auto", padding: 5, height: "calc(100vh - 100px)", width: "100vw", backgroundColor: "rgba(0,0,0,0.7)"}}>
            <div style={{maxWidth: 700, margin: "auto", padding: 5, backgroundColor: "#212c2c", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "1px 2px 3px rgba(0,0,0,0.4)", borderRadius: 4}}>
                    <p onClick={()=>{general_slideUp("add_business_addreview_page")}} style={{marginBottom: 15, textAlign: "right", fontSize: 14, color: "red", cursor: "pointer", padding: 10}}>
                        Hide<i style={{color: "orange", marginLeft: 7, fontSize: 17}} className="fa fa-caret-down"></i>
                    </p>
                    <p style={{color: "skyblue", fontSize: 14, textAlign: "center", marginBottom: 10, fontWeight: "bolder"}}>Tell us your experience</p>
                    <AddReviewForm />
            </div>
        </div>
    );
}

export default AddReviewsPage;