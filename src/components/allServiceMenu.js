import $ from 'jquery';

import medsIcon from "../images/MedicalCenterIcon.svg";
import barbIcon from "../images/BarberIcon.svg";
import barbIcon2 from "../images/BarberIcon2.svg";
import spaIcon from "../images/SpaIcon1.svg";
import spaIcon2 from "../images/SpaIcon2.svg";
import DentistIcon from "../images/DentistIcon2.svg";
import DentistIcon2 from "../images/DentistIcon1.svg";
import beautyIcon from "../images/beautyIcon.svg";
import beautyIcon2 from "../images/beautyIcon2.svg";
import nailSalonIcon from "../images/nailSalonIcon.svg";
import hairSalonIcon from "../images/hairSalonIcon.svg";
import tattooShopIcon from "../images/tattooShopIcon.svg";
import poidatryIcon from "../images/poidatryIcon.svg";

///
function toggle_show_all_service(){
    $("#all_services_menu_pane").toggle("up");
    document.getElementById("main_menu_all_services_option").classList.remove("active");
    document.getElementById("top_main_menu_all_services_option").classList.remove("active");
}

function AllServicesMenu(){
    return (
        <div  style={{display: "none"}} id="all_services_menu_pane">
            <p onClick={toggle_show_all_service} style={{width: "fit-content", fontSize: 14, padding: 10, cursor: "pointer", position: "absolute", top: 10, right: 10, color: "white"}}>
                <i style={{marginRight: 5, color: "crimson"}} className="fa fa-times"></i>
                hide
            </p>
            <p style={{fontSize: 14, color: "orange", textAlign: "center", marginTop: 25, fontWeight: "bolder"}}>Select Service Category</p>
            <div style={{display: "flex", flexDirection: "row !important", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "800px", margin: "auto", marginTop: 20, padding: 5}}>
                <div className="all_service_each_category_item">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: 10, position: "relative"}}>
                        <p style={{color: "white", textAlign: "center",fontSize: 14, marginTop: 10, fontWeight: "bolder"}}>
                            Medical Center
                        </p>
                        <div style={{backgroundImage: "url("+medsIcon+")", width: 60, height: 60, backgroundRepeat: "no-repeat", backgroundSize: "cover", margin: "auto"}}>
                        </div>
                        <div style={{zIndex: -1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "5px solid rgba(244,244,244,0.2)", borderRadius: 4, borderTopRightRadius: "30px", borderBottomRightRadius: "50%", borderTopLeftRadius: "100%", backgroundColor: "rgba(244,0,222,0.3)"}}></div>
                    </div>
                </div>
                <div className="all_service_each_category_item">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: 10, position: "relative"}}>
                        <p style={{color: "white", textAlign: "center", fontSize: 14, marginTop: 10, fontWeight: "bolder"}}>
                            Barber Shop
                        </p>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "center"}}>
                            <div style={{backgroundImage: "url("+barbIcon+")", width: 60, height: 60, marginLeft: -5, marginTop: -10, transform: "rotate(55deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                            <div style={{backgroundImage: "url("+barbIcon2+")", width: 60, height: 60, marginLeft: -25, marginTop: 10, transform: "rotate(20deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                        </div>
                        <div style={{zIndex: -1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "5px solid rgba(244,244,244,0.2)", borderRadius: 4, borderTopRightRadius: "30px", borderBottomRightRadius: "50%", borderTopLeftRadius: "100%", backgroundColor: "rgba(244,0,222,0.3)"}}></div>
                    </div>
                </div>
                <div className="all_service_each_category_item">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: 10, position: "relative"}}>
                        <p style={{color: "white", textAlign: "center", fontSize: 14, marginTop: 10, fontWeight: "bolder"}}>
                            Tattoo Shop
                        </p>
                        <div style={{backgroundImage: "url("+tattooShopIcon+")", width: 60, height: 60, marginLeft: -25, margin: "auto", transform: "rotate(33deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        </div>
                        <div style={{zIndex: -1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "5px solid rgba(244,244,244,0.2)", borderRadius: 4, borderTopRightRadius: "30px", borderBottomRightRadius: "50%", borderTopLeftRadius: "100%", backgroundColor: "rgba(244,0,222,0.3)"}}></div>
                    </div>
                </div>
                <div className="all_service_each_category_item">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: 10, position: "relative"}}>
                        <p style={{color: "white", textAlign: "center", fontSize: 14, marginTop: 10, fontWeight: "bolder"}}>
                            Piercing
                        </p>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "center"}}>
                            <div style={{backgroundImage: "url("+barbIcon+")", width: 60, height: 60, marginLeft: -25, marginTop: -10, transform: "rotate(55deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                            <div style={{backgroundImage: "url("+barbIcon2+")", width: 60, height: 60, marginLeft: -25, marginTop: 10, transform: "rotate(20deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                        </div>
                        <div style={{zIndex: -1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "5px solid rgba(244,244,244,0.2)", borderRadius: 4, borderTopRightRadius: "30px", borderBottomRightRadius: "50%", borderTopLeftRadius: "100%", backgroundColor: "rgba(244,0,222,0.3)"}}></div>
                    </div>
                </div>
                <div className="all_service_each_category_item">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: 10, position: "relative"}}>
                        <p style={{color: "white", textAlign: "center", fontSize: 14, marginTop: 10, fontWeight: "bolder"}}>
                            Physical Therapy
                        </p>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "center"}}>
                            <div style={{backgroundImage: "url("+barbIcon+")", width: 60, height: 60, marginLeft: -25, marginTop: -10, transform: "rotate(55deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                            <div style={{backgroundImage: "url("+barbIcon2+")", width: 60, height: 60, marginLeft: -25, marginTop: 10, transform: "rotate(20deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                        </div>
                        <div style={{zIndex: -1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "5px solid rgba(244,244,244,0.2)", borderRadius: 4, borderTopRightRadius: "30px", borderBottomRightRadius: "50%", borderTopLeftRadius: "100%", backgroundColor: "rgba(244,0,222,0.3)"}}></div>
                    </div>
                </div>
                <div className="all_service_each_category_item">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: 10, position: "relative"}}>
                        <p style={{color: "white", textAlign: "center", fontSize: 14, marginTop: 10, fontWeight: "bolder"}}>
                            Podiatry
                        </p>
                        <div style={{backgroundImage: "url("+poidatryIcon+")", width: 60, height: 60, marginLeft: -25, margin: "auto", transform: "rotate(55deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        </div>
                        <div style={{zIndex: -1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "5px solid rgba(244,244,244,0.2)", borderRadius: 4, borderTopRightRadius: "30px", borderBottomRightRadius: "50%", borderTopLeftRadius: "100%", backgroundColor: "rgba(244,0,222,0.3)"}}></div>
                    </div>
                </div>
                <div className="all_service_each_category_item">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: 10, position: "relative"}}>
                        <p style={{color: "white", textAlign: "center", fontSize: 14, marginTop: 10, fontWeight: "bolder"}}>
                            Dentist
                        </p>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "center"}}>
                            <div style={{backgroundImage: "url("+DentistIcon+")", width: 63.5, height: 60, marginLeft: -5, marginTop: 5, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                            <div style={{backgroundImage: "url("+DentistIcon2+")", width: 60, height: 60, marginLeft: -15, marginTop: 10, transform: "rotate(20deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                        </div>
                        <div style={{zIndex: -1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "5px solid rgba(244,244,244,0.2)", borderRadius: 4, borderTopRightRadius: "30px", borderBottomRightRadius: "50%", borderTopLeftRadius: "100%", backgroundColor: "rgba(244,0,222,0.3)"}}></div>
                    </div>
                </div>
                <div className="all_service_each_category_item">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: 10, position: "relative"}}>
                        <p style={{color: "white", textAlign: "center", fontSize: 14, marginTop: 10, fontWeight: "bolder"}}>
                            Beauty Salon
                        </p>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "center"}}>
                            <div style={{backgroundImage: "url("+beautyIcon+")", width: 60, height: 60, marginLeft: -25, marginTop: -5, transform: "rotate(55deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                            <div style={{backgroundImage: "url("+beautyIcon2+")", width: 60, height: 60, marginLeft: -15, marginTop: 10, transform: "rotate(20deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                        </div>
                        <div style={{zIndex: -1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "5px solid rgba(244,244,244,0.2)", borderRadius: 4, borderTopRightRadius: "30px", borderBottomRightRadius: "50%", borderTopLeftRadius: "100%", backgroundColor: "rgba(244,0,222,0.3)"}}></div>
                    </div>
                </div>
                <div className="all_service_each_category_item">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: 10, position: "relative"}}>
                        <p style={{color: "white", textAlign: "center", fontSize: 14, marginTop: 10, fontWeight: "bolder"}}>
                            Tattoo Shop
                        </p>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "center"}}>
                            <div style={{backgroundImage: "url("+barbIcon+")", width: 60, height: 60, marginLeft: -25, marginTop: -10, transform: "rotate(55deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                            <div style={{backgroundImage: "url("+barbIcon2+")", width: 60, height: 60, marginLeft: -25, marginTop: 10, transform: "rotate(20deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                        </div>
                        <div style={{zIndex: -1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "5px solid rgba(244,244,244,0.2)", borderRadius: 4, borderTopRightRadius: "30px", borderBottomRightRadius: "50%", borderTopLeftRadius: "100%", backgroundColor: "rgba(244,0,222,0.3)"}}></div>
                    </div>
                </div>
                <div className="all_service_each_category_item">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: 10, position: "relative"}}>
                        <p style={{color: "white", textAlign: "center", fontSize: 14, marginTop: 10, fontWeight: "bolder"}}>
                            Day Spa
                        </p>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "center"}}>
                            <div style={{backgroundImage: "url("+spaIcon+")", width: 60, height: 60, marginLeft: -5, marginTop: 5, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                            <div style={{backgroundImage: "url("+spaIcon2+")", width: 40, height: 40, marginLeft: -10, marginTop: 29, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                        </div>
                        <div style={{zIndex: -1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "5px solid rgba(244,244,244,0.2)", borderRadius: 4, borderTopRightRadius: "30px", borderBottomRightRadius: "50%", borderTopLeftRadius: "100%", backgroundColor: "rgba(244,0,222,0.3)"}}></div>
                    </div>
                </div>
                <div className="all_service_each_category_item">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: 10, position: "relative"}}>
                        <p style={{color: "white", textAlign: "center", fontSize: 14, marginTop: 10, fontWeight: "bolder"}}>
                            Massage
                        </p>
                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "center"}}>
                            <div style={{backgroundImage: "url("+barbIcon+")", width: 60, height: 60, marginLeft: -25, marginTop: -10, transform: "rotate(55deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                            <div style={{backgroundImage: "url("+barbIcon2+")", width: 60, height: 60, marginLeft: -25, marginTop: 10, transform: "rotate(20deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            </div>
                        </div>
                        <div style={{zIndex: -1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "5px solid rgba(244,244,244,0.2)", borderRadius: 4, borderTopRightRadius: "30px", borderBottomRightRadius: "50%", borderTopLeftRadius: "100%", backgroundColor: "rgba(244,0,222,0.3)"}}></div>
                    </div>
                </div>
                <div className="all_service_each_category_item">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: 10, position: "relative"}}>
                        <p style={{color: "white", textAlign: "center", fontSize: 14, marginTop: 10, fontWeight: "bolder"}}>
                            Nail Salon
                        </p>
                        <div style={{backgroundImage: "url("+nailSalonIcon+")", width: 60, height: 60, margin: "auto", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        </div>
                        <div style={{zIndex: -1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "5px solid rgba(244,244,244,0.2)", borderRadius: 4, borderTopRightRadius: "30px", borderBottomRightRadius: "50%", borderTopLeftRadius: "100%", backgroundColor: "rgba(244,0,222,0.3)"}}></div>
                    </div>
                </div>
                <div className="all_service_each_category_item">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: 10, position: "relative"}}>
                        <p style={{color: "white", textAlign: "center", fontSize: 14, marginTop: 10, fontWeight: "bolder"}}>
                            Hair Salon
                        </p>
                        <div style={{backgroundImage: "url("+hairSalonIcon+")", width: 60, height: 60, marginLeft: -25, margin: "auto", transform: "rotate(55deg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        </div>
                        <div style={{zIndex: -1, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "5px solid rgba(244,244,244,0.2)", borderRadius: 4, borderTopRightRadius: "30px", borderBottomRightRadius: "50%", borderTopLeftRadius: "100%", backgroundColor: "rgba(244,0,222,0.3)"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllServicesMenu;