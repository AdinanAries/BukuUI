import $ from 'jquery';

function toggle_show_all_service(){
    $("#all_services_menu_pane").toggle("up");
}

function AllServicesMenu(){
    return (
        <div  style={{display: "none"}} id="all_services_menu_pane">
            {/*<p onClick={toggle_show_all_service} style={{width: "fit-content", fontSize: 14, backgroundColor: "crimson", padding: 10, borderRadius: "4px", cursor: "pointer", position: "absolute", top: 10, right: 10, color: "white"}}>
                <i style={{marginRight: 5}} className="fa fa-times"></i>
                hide
            </p>*/}
            <p style={{fontSize: 14, color: "orange", textAlign: "center", marginTop: 25, fontWeight: "bolder"}}>Select Service Category</p>
            <div style={{display: "flex", flexDirection: "row !important", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "800px", margin: "auto", marginTop: 20, padding: 5}}>
                <div className="all_service_each_category_item">

                </div>
                <div className="all_service_each_category_item">

                </div>
                <div className="all_service_each_category_item">

                </div>
                <div className="all_service_each_category_item">

                </div>
                <div className="all_service_each_category_item">

                </div>
                <div className="all_service_each_category_item">

                </div>
                <div className="all_service_each_category_item">

                </div>
                <div className="all_service_each_category_item">

                </div>
                <div className="all_service_each_category_item">

                </div>
                <div className="all_service_each_category_item">

                </div>
                <div className="all_service_each_category_item">

                </div>
                <div className="all_service_each_category_item">

                </div>
                <div className="all_service_each_category_item">

                </div>
            </div>
        </div>
    );
}

export default AllServicesMenu;