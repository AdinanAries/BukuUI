import $ from 'jquery';

function toggle_show_all_service(){
    $("#all_services_menu_pane").toggle("up");
}

function AllServicesMenu(){
    return (
        <div style={{display: "none"}} id="all_services_menu_pane">
            <p style={{fontSize: 14, color: "orange", textAlign: "center", marginTop: 25, fontWeight: "bolder"}}>Select Service Category</p>
            <div style={{display: "flex", flexDirection: "row !important", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "800px", margin: "auto", marginTop: 20}}>
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