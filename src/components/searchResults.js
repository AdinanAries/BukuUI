import favsProPIc from '../images/ProfilePic17.png';
import glryPic1 from "../images/medical-residents.png";
import glryPic2 from "../images/Doctors.jpg";
import glryPic3 from "../images/P1800540.jpg.2.2x.generic.jpg";
import glryPic4 from "../images/PA1.jpg";
import glryPic5 from "../images/shutterstock_88515766.jpg";
import glryPic6 from "../images/pic6.jpg";
import glryPic7 from "../images/docstalking.jpg";
import glryPic8 from "../images/Inpatient-1.jpg";
import rvwImg from "../images/ProfilePic9.jpg"
import $ from "jquery"

let selected_booking_user_id_option = "";

function show_booking_select_service_pane(){
    if($(document).width() > 700){
        $("#booking_select_time_spot").toggle("up");
        $('html, body').animate({scrollTop:0}, '300');
    }
    $("#booking_workflow_main_container").toggle("up");
}
function back_to_select_time_spot(){
    if($(document).width() > 700){
        $("#booking_select_time_spot").toggle("up");
        $('html, body').animate({scrollTop:0}, '300');
    }
    $("#booking_workflow_main_container").toggle("up");
}
function show_booking_select_user_option(){
    $("#booking_select_service_pane").toggle("up");
    $("#booking_select_user_option").toggle("up");
    if($(document).width() > 700){
        $('html, body').animate({scrollTop:0}, '300');
    }
}
function back_to_select_service_pane(){
    $("#booking_select_service_pane").toggle("up");
    $("#booking_select_user_option").toggle("up");
    if($(document).width() > 700){
        $('html, body').animate({scrollTop:0}, '300');
    }
}
function show_booking_user_signup_form(){
    selected_booking_user_id_option = "signup";
    $("#booking_user_signup_form").toggle("up");
    $("#booking_select_user_option").toggle("up");
    if($(document).width() > 700){
        $('html, body').animate({scrollTop:0}, '300');
    }
}
function back_to_select_user_option_from_signup(){
    $("#booking_user_signup_form").toggle("up");
    $("#booking_select_user_option").toggle("up");
    if($(document).width() > 700){
        $('html, body').animate({scrollTop:0}, '300');
    }
}
function show_booking_user_login_form(){
    selected_booking_user_id_option = "login";
    $("#booking_user_login_form").toggle("up");
    $("#booking_select_user_option").toggle("up");
    if($(document).width() > 700){
        $('html, body').animate({scrollTop:0}, '300');
    }
}
function back_to_select_user_option_from_login(){
    $("#booking_user_login_form").toggle("up");
    $("#booking_select_user_option").toggle("up");
    if($(document).width() > 700){
        $('html, body').animate({scrollTop:0}, '300');
    }
}
function show_booking_user_anony_form(){
    selected_booking_user_id_option = "anonymous"
    $("#booking_user_anony_form").toggle("up");
    $("#booking_select_user_option").toggle("up");
    if($(document).width() > 700){
        $('html, body').animate({scrollTop:0}, '300');
    }
}
function back_to_select_user_option_from_anony(){
    $("#booking_user_anony_form").toggle("up");
    $("#booking_select_user_option").toggle("up");
    if($(document).width() > 700){
        $('html, body').animate({scrollTop:0}, '300');
    }
}
function show_booking_select_cash_or_card_payments(){
    $("#booking_select_cash_or_card_payments").toggle("up");
    if(selected_booking_user_id_option === "login"){
        $("#booking_user_login_form").toggle("up");
    }else if(selected_booking_user_id_option === "signup"){
        $("#booking_user_signup_form").toggle("up");
    }else if(selected_booking_user_id_option === "anonymous"){
        $("#booking_user_anony_form").toggle("up");
    }
    if($(document).width() > 700){
        $('html, body').animate({scrollTop:0}, '300');
    }
}
function submit_booking_user_signup(){
    show_booking_select_cash_or_card_payments();
}
function submit_booking_user_login(){
    show_booking_select_cash_or_card_payments();
}
function submit_anonymous_user_info(){
    show_booking_select_cash_or_card_payments();
}
function show_booking_final_submission_pane(){
    $("#booking_final_submission_pane").toggle("up");
    $("#booking_select_cash_or_card_payments").toggle("up");
    if($(document).width() > 700){
        $('html, body').animate({scrollTop:0}, '300');
    }
}
function back_to_booking_select_card_cash_payments_form(){
    $("#booking_final_submission_pane").toggle("up");
    $("#booking_select_cash_or_card_payments").toggle("up");
    if($(document).width() > 700){
        $('html, body').animate({scrollTop:0}, '300');
    }
}
function booking_select_online_payment(){
    show_booking_final_submission_pane()
}
function booking_select_cash_payment(){
    show_booking_final_submission_pane()
}
function show_booking_selected_service_provider(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    $("#booking_selected_service_provider").toggle("up");
    $("#booking_main_search_results_list").toggle("up");
    /*setTimeout(()=>{
        $('html, body').animate({scrollTop:0}, '300');
    }, 550)*/
    
}
function back_to_search_results_list(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    $("#booking_selected_service_provider").toggle("up");
    $("#booking_main_search_results_list").toggle("up");
    /*setTimeout(()=>{
        $('html, body').animate({scrollTop:0}, '300');
    }, 550);*/
}

function SearchResultsPage(){
    return (
        <div className="search-results-page">
            <main>
                <div className="wrapper search-results-wrapper">
                    <div className="search-results-page-content-container">
                        <section id="booking_main_search_results_list" className="search-results-list">
                            <div className="search-results-list-each-item">
                                <div className="homepage-each-favorite-service search-results-list-each-item-left-section" style={{background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('"+glryPic7+"')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                                    <div className="homepage-each-favorite-service-inner">
                                        <div>
                                            <div className="homepage-each-favorite-service-image">
                                                <img src={favsProPIc} />
                                            </div>
                                        </div>
                                        <div style={{marginBottom: 10, marginTop: "-3px", marginRight: "-10px"}}>
                                            <p className="homepage-each-favorite-service-rating">
                                                <span className="homepage-each-favorite-service-rating-span">
                                                    9.2
                                                    <span style={{color: "orange", fontSize: 12, textAlign: "center", marginLeft: 10}}>
                                                        (122 reviews)
                                                    </span>
                                                    <i className="fa fa-check"><span> Recommended</span></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <p className="homepage-each-favorite-service-name" style={{textAlign: "center", marginBottom: 10}}>Mohammed Adinan</p>
                                    <p className="homepage-each-favorite-service-bizname">Bukus Meds</p>
                                    <p className="homepage-each-favorite-service-servicetype">- Medical Center -</p>
                                    <p style={{marginTop: 10, textAlign: "center", color: "lightgreen"}}>
                                        <i style={{marginRight: 5, color: "orange"}} className="fa fa-map-marker"></i>
                                        1253 park ave, manhattan, ny</p>
                                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "center", marginTop: "10px"}}>
                                            <div style={{padding: 5, color: "white", fontWeight: "bolder", backgroundColor: "", borderRadius: 4, marginRight: 5, fontSize: 18}}>
                                                <i style={{color: "orange"}} className="fa fa-twitter"></i>
                                            </div>
                                            <div style={{padding: 5, color: "white", fontWeight: "bolder", backgroundColor: "", borderRadius: 4, marginRight: 5, fontSize: 18}}>
                                                <i style={{color: "orange"}} className="fa fa-envelope"></i>
                                            </div>
                                            <div style={{padding: 5, color: "white", fontWeight: "bolder", backgroundColor: "", borderRadius: 4, marginRight: 5, fontSize: 18}}>
                                                <i style={{color: "orange"}} className="fa fa-instagram"></i>
                                            </div>
                                            <div style={{padding: 5, color: "white", fontWeight: "bolder", backgroundColor: "", borderRadius: 4, marginRight: 5, fontSize: 18}}>
                                                <i style={{color: "orange"}} className="fa fa-facebook"></i>
                                            </div>
                                        </div>
                                </div>
                                <div className="each-search-result-spots-section" style={{padding: 5, paddingBottom: 0}}>
                                    <div>
                                        <div style={{borderLeft: "4px solid lightgreen", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                <p>
                                                    <span style={{fontSize: 14, color: "lightgreen", marginRight: 10}}>General Medical Checkup</span>
                                                    <span style={{fontSize: 13, marginRight: 10, color: "orange"}}>
                                                        $12.99
                                                    </span>
                                                </p>
                                                <p style={{marginTop: 2}}>
                                                    <span style={{fontSize: 13, marginRight: 10, color: "yellow"}}>
                                                        this is where to put service descriptions for each searvice.. 
                                                    </span>
                                                </p>
                                            </div>
                                            <div onClick={show_booking_selected_service_provider} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "darkslateblue", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                Book
                                            </div>
                                        </div>
                                        <div style={{borderLeft: "4px solid lightgreen", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                <p>
                                                    <span style={{fontSize: 14, color: "lightgreen", marginRight: 10}}>General Medical Checkup</span>
                                                    <span style={{fontSize: 13, marginRight: 10, color: "orange"}}>
                                                        $12.99
                                                    </span>
                                                </p>
                                                <p style={{marginTop: 2}}>
                                                    <span style={{fontSize: 13, marginRight: 10, color: "yellow"}}>
                                                        this is where to put service descriptions for each searvice.. 
                                                    </span>
                                                </p>
                                            </div>
                                            <div onClick={show_booking_selected_service_provider} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "darkslateblue", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                Book
                                            </div>
                                        </div>
                                        <div style={{borderLeft: "4px solid lightgreen", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                <p>
                                                    <span style={{fontSize: 14, color: "lightgreen", marginRight: 10}}>General Medical Checkup</span>
                                                    <span style={{fontSize: 13, marginRight: 10, color: "orange"}}>
                                                        $12.99
                                                    </span>
                                                </p>
                                                <p style={{marginTop: 2}}>
                                                    <span style={{fontSize: 13, marginRight: 10, color: "yellow"}}>
                                                        this is where to put service descriptions for each searvice.. 
                                                    </span>
                                                </p>
                                            </div>
                                            <div onClick={show_booking_selected_service_provider} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "darkslateblue", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                Book
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-results-list-each-item">
                                <div className="homepage-each-favorite-service search-results-list-each-item-left-section" style={{background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('"+glryPic5+"')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                                    <div className="homepage-each-favorite-service-inner">
                                        <div>
                                            <div className="homepage-each-favorite-service-image">
                                                <img src={favsProPIc} />
                                            </div>
                                        </div>
                                        <div style={{marginBottom: 10, marginTop: "-3px", marginRight: "-10px"}}>
                                            <p className="homepage-each-favorite-service-rating">
                                                <span className="homepage-each-favorite-service-rating-span">
                                                    9.2
                                                    <span style={{color: "orange", fontSize: 12, textAlign: "center", marginLeft: 10}}>
                                                        (122 reviews)
                                                    </span>
                                                    <i className="fa fa-check"><span> Recommended</span></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <p className="homepage-each-favorite-service-name" style={{textAlign: "center", marginBottom: 10}}>Mohammed Adinan</p>
                                    <p className="homepage-each-favorite-service-bizname">Bukus Meds</p>
                                    <p className="homepage-each-favorite-service-servicetype">- Medical Center -</p>
                                    <p style={{marginTop: 10, textAlign: "center", color: "lightgreen"}}>
                                        <i style={{marginRight: 5, color: "orange"}} className="fa fa-map-marker"></i>
                                        1253 park ave, manhattan, ny</p>
                                        <div style={{display: "flex", flexDirection: "row !important", justifyContent: "center", marginTop: "10px"}}>
                                            <div style={{padding: 5, color: "white", fontWeight: "bolder", backgroundColor: "", borderRadius: 4, marginRight: 5, fontSize: 18}}>
                                                <i style={{color: "orange"}} className="fa fa-twitter"></i>
                                            </div>
                                            <div style={{padding: 5, color: "white", fontWeight: "bolder", backgroundColor: "", borderRadius: 4, marginRight: 5, fontSize: 18}}>
                                                <i style={{color: "orange"}} className="fa fa-envelope"></i>
                                            </div>
                                            <div style={{padding: 5, color: "white", fontWeight: "bolder", backgroundColor: "", borderRadius: 4, marginRight: 5, fontSize: 18}}>
                                                <i style={{color: "orange"}} className="fa fa-instagram"></i>
                                            </div>
                                            <div style={{padding: 5, color: "white", fontWeight: "bolder", backgroundColor: "", borderRadius: 4, marginRight: 5, fontSize: 18}}>
                                                <i style={{color: "orange"}} className="fa fa-facebook"></i>
                                            </div>
                                        </div>
                                </div>
                                <div className="each-search-result-spots-section" style={{padding: 5, paddingBottom: 0}}>
                                    <div>
                                        <div style={{borderLeft: "4px solid lightgreen", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                <p>
                                                    <span style={{fontSize: 14, color: "lightgreen", marginRight: 10}}>General Medical Checkup</span>
                                                    <span style={{fontSize: 13, marginRight: 10, color: "orange"}}>
                                                        $12.99
                                                    </span>
                                                </p>
                                                <p style={{marginTop: 2}}>
                                                    <span style={{fontSize: 13, marginRight: 10, color: "yellow"}}>
                                                        this is where to put service descriptions for each searvice.. 
                                                    </span>
                                                </p>
                                            </div>
                                            <div onClick={show_booking_selected_service_provider} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "darkslateblue", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                Book
                                            </div>
                                        </div>
                                        <div style={{borderLeft: "4px solid lightgreen", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                <p>
                                                    <span style={{fontSize: 14, color: "lightgreen", marginRight: 10}}>General Medical Checkup</span>
                                                    <span style={{fontSize: 13, marginRight: 10, color: "orange"}}>
                                                        $12.99
                                                    </span>
                                                </p>
                                                <p style={{marginTop: 2}}>
                                                    <span style={{fontSize: 13, marginRight: 10, color: "yellow"}}>
                                                        this is where to put service descriptions for each searvice.. 
                                                    </span>
                                                </p>
                                            </div>
                                            <div onClick={show_booking_selected_service_provider} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "darkslateblue", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                Book
                                            </div>
                                        </div>
                                        <div style={{borderLeft: "4px solid lightgreen", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                <p>
                                                    <span style={{fontSize: 14, color: "lightgreen", marginRight: 10}}>General Medical Checkup</span>
                                                    <span style={{fontSize: 13, marginRight: 10, color: "orange"}}>
                                                        $12.99
                                                    </span>
                                                </p>
                                                <p style={{marginTop: 2}}>
                                                    <span style={{fontSize: 13, marginRight: 10, color: "yellow"}}>
                                                        this is where to put service descriptions for each searvice.. 
                                                    </span>
                                                </p>
                                            </div>
                                            <div onClick={show_booking_selected_service_provider} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "darkslateblue", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                Book
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </section>
                        <section id="booking_selected_service_provider" className="search-results-list" style={{display: "none"}}>
                            <div className="search-results-list-each-item">
                                    <div className="homepage-each-favorite-service search-results-list-each-item-left-section">
                                        <div className="homepage-each-favorite-service-inner">
                                            <div>
                                                <div className="homepage-each-favorite-service-image">
                                                    <img src={favsProPIc} />
                                                </div>
                                            </div>
                                            <div style={{marginBottom: 10}}>
                                                <p className="homepage-each-favorite-service-name">Mohammed Adinan</p>
                                                <p className="homepage-each-favorite-service-rating">
                                                    <span className="homepage-each-favorite-service-rating-span">
                                                        ★★★★★ 
                                                        <i className="fa fa-check"><span> Recommended</span></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="homepage-each-favorite-service-bizname">Bukus Meds</p>
                                        <p className="homepage-each-favorite-service-servicetype">- Medical Center -</p>
                                        <p style={{marginTop: 10, textAlign: "center", color: "lightgreen"}}>
                                            <i style={{marginRight: 5, color: "orange"}} className="fa fa-map-marker"></i>
                                            1253 park ave, manhattan, ny</p>
                                            <div style={{display: "flex", flexDirection: "row !important", justifyContent: "center", marginTop: "10px"}}>
                                                <div style={{padding: 5, color: "white", fontWeight: "bolder", backgroundColor: "", borderRadius: 4, marginRight: 5, fontSize: 18}}>
                                                    <i style={{color: "orange"}} className="fa fa-twitter"></i>
                                                </div>
                                                <div style={{padding: 5, color: "white", fontWeight: "bolder", backgroundColor: "", borderRadius: 4, marginRight: 5, fontSize: 18}}>
                                                    <i style={{color: "orange"}} className="fa fa-envelope"></i>
                                                </div>
                                                <div style={{padding: 5, color: "white", fontWeight: "bolder", backgroundColor: "", borderRadius: 4, marginRight: 5, fontSize: 18}}>
                                                    <i style={{color: "orange"}} className="fa fa-instagram"></i>
                                                </div>
                                                <div style={{padding: 5, color: "white", fontWeight: "bolder", backgroundColor: "", borderRadius: 4, marginRight: 5, fontSize: 18}}>
                                                    <i style={{color: "orange"}} className="fa fa-facebook"></i>
                                                </div>
                                            </div>
                                        <div style={{marginTop: 20, overflow: "hidden", borderRadius: 4, borderTop: "4px solid #37a0f5", borderBottom: "4px solid #37a0f5", backgroundColor: "rgba(25,25,0,0.4)", boxShadow: "0px 1.6px 3.6px rgba(0, 0, 0, 0.5), 0px 0px 2.9px rgba(0, 0, 0, 0.5)"}}>
                                            <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
                                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "100%"}}>
                                                    <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic1+"')"}}>
                                                    </div>
                                                    <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic2+"')"}}>
                                                    </div>
                                                    <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic3+"')"}}>
                                                    </div>
                                                    <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic4+"')"}}>
                                                    </div>
                                                </div>
                                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "100%", marginTop: 1}}>
                                                    <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic5+"')"}}>
                                                    </div>
                                                    <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic6+"')"}}>
                                                    </div>
                                                    <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic7+"')"}}>
                                                    </div>
                                                    <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic8+"')"}}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop: 20, borderTop: "1px solid rgba(255,255,255,0.2)", padding: "10px 0"}}>
                                                <p style={{color: "white", fontSize: "15px"}}>
                                                    This place should contain the News Updates Message that the services providers add for the customers. It could 
                                                    be any update message regarding new services introduction, service changes or advertisements in general essence</p>
                                                <div style={{display: "flex", flexDirection: "row", marginTop: 20}}>
                                                    <div style={{marginRight: 10}}>
                                                        <div style={{width: 40, height: 40, borderRadius: "100%", overflow: "hidden", margin: "auto"}}>
                                                            <img style={{width: "100%", height: "auto", minHeight: 40}} src={rvwImg}/>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p style={{color: "orange", fontSize: 13, marginBottom: 5, fontWeight: "bolder"}}>Chris Amoah</p>
                                                        <div style={{display: "flex"}}>
                                                            <div style={{marginRight: 5}}>
                                                                <p style={{fontSize: 39, fontFamily: 'Courgette', color: "orange"}}>"</p>
                                                            </div>
                                                            <p style={{color: "rgb(181,255,185)", fontSize: "14px", marginTop: 12}}>
                                                                Review message from Mr. Chris should be placed here so that other customers can see this service providers reputation
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="each-search-result-spots-section">
                                        <div id="booking_select_time_spot" style={{padding: 10,}}>
                                                <p onClick={back_to_search_results_list} style={{color: "white", width: "fit-content", cursor: "pointer", padding: 10}}>
                                                    <i style={{color: "rgb(201,193,221)", marginRight: 10}} className="fa fa-arrow-left"></i>
                                                    Go Back</p>
                                                <p style={{color: "orange", textAlign: "center", fontWeight: "bolder", marginBottom: 20}}>Pick a spot below</p>
                                                <div style={{marginBottom: 10, cursor: "pointer"}}>
                                                    <input type="text" value="15 Apr" readonly style={{fontWeight: "Bolder", cursor: "pointer", width: 70, padding: 10, borderRadius: 0, background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", color: "white"}}/>
                                                    <i style={{marginLeft: 10, color: "orange"}} class="fa fa-caret-down"></i>
                                                </div>
                                                <div style={{display: "flex", flexWrap: "wrap"}}>
                                                    <div onClick={show_booking_select_service_pane} className="search-results-each-time-spot" style={{backgroundColor: "rgba(55,255,23, 0.2)", border: "1px solid rgb(55,255,23, 0.4)", borderRadius: 4, color: "rgba(55,255,23, 0.8)", cursor: "pointer"}}>
                                                        3:40 PM
                                                        <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                            <i style={{color: "rgb(21,121,223)", marginRight: 5}} className="fa fa-check"></i>
                                                            30% Discount
                                                        </p>
                                                        <p style={{marginTop: 5, color: "gold", fontSize: 13}}>
                                                            13 slots left
                                                        </p>
                                                    </div>
                                                    <div onClick={show_booking_select_service_pane} className="search-results-each-time-spot" style={{backgroundColor: "rgba(55,23,255, 0.2)", border: "1px solid rgb(55,23,255, 0.4)", borderRadius: 4, color: "rgb(155,23,255)", cursor: "pointer"}}>
                                                        3:40 PM
                                                        <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                            <i style={{color: "rgb(21,223,221)", marginRight: 5}} className="fa fa-info-circle"></i>
                                                            Full Price
                                                        </p>
                                                        <p style={{marginTop: 5, color: "gold", fontSize: 13}}>
                                                            7 slots left
                                                        </p>
                                                    </div>
                                                    <div onClick={show_booking_select_service_pane} className="search-results-each-time-spot" style={{backgroundColor: "rgba(255,55,23, 0.2)", border: "1px solid rgb(255,55,23, 0.4)", borderRadius: 4, color: "rgba(255,55,23, 0.8)", cursor: "pointer"}}>
                                                        3:40 PM
                                                        <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                            <i style={{color: "orange", marginRight: 5}} className="fa fa-exclamation-triangle"></i>
                                                            10% More
                                                        </p>
                                                        <p style={{marginTop: 5, color: "gold", fontSize: 13}}>
                                                            4 slots left
                                                        </p>
                                                    </div>
                                                    <div onClick={show_booking_select_service_pane} className="search-results-each-time-spot" style={{backgroundColor: "rgba(255,55,23, 0.2)", border: "1px solid rgb(255,55,23, 0.4)", borderRadius: 4, color: "rgba(255,55,23, 0.8)", cursor: "pointer"}}>
                                                        3:40 PM
                                                        <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                            <i style={{color: "orange", marginRight: 5}} className="fa fa-exclamation-triangle"></i>
                                                            15% More
                                                        </p>
                                                        <p style={{marginTop: 5, color: "gold", fontSize: 13}}>
                                                            3 slots left
                                                        </p>
                                                    </div>
                                                    <div onClick={show_booking_select_service_pane} className="search-results-each-time-spot" style={{backgroundColor: "rgba(255,55,23, 0.2)", border: "1px solid rgb(255,55,23, 0.4)", borderRadius: 4, color: "rgba(255,55,23, 0.8)", cursor: "pointer"}}>
                                                        3:40 PM
                                                        <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                            <i style={{color: "orange", marginRight: 5}} className="fa fa-exclamation-triangle"></i>
                                                            20% More
                                                        </p>
                                                        <p style={{marginTop: 5, color: "gold", fontSize: 13}}>
                                                            1 slot left
                                                        </p>
                                                    </div>
                                                    <div onClick={show_booking_select_service_pane} className="search-results-each-time-spot" style={{backgroundColor: "rgba(255,55,23, 0.2)", border: "1px solid rgb(255,55,23, 0.4)", borderRadius: 4, color: "rgba(255,55,23, 0.8)", cursor: "pointer"}}>
                                                        3:40 PM
                                                        <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                            <i style={{color: "orange", marginRight: 5}} className="fa fa-exclamation-triangle"></i>
                                                            12% More
                                                        </p>
                                                        <p style={{marginTop: 5, color: "gold", fontSize: 13}}>
                                                            2 slots left
                                                        </p>
                                                    </div>
                                                    <div onClick={show_booking_select_service_pane} className="search-results-each-time-spot" style={{backgroundColor: "rgba(255,55,23, 0.2)", border: "1px solid rgb(255,55,23, 0.4)", borderRadius: 4, color: "rgba(255,55,23, 0.8)", cursor: "pointer"}}>
                                                        3:40 PM
                                                        <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                            <i style={{color: "orange", marginRight: 5}} className="fa fa-exclamation-triangle"></i>
                                                            18% More
                                                        </p>
                                                        <p style={{marginTop: 5, color: "gold", fontSize: 13}}>
                                                            2 slots left
                                                        </p>
                                                    </div>
                                                    <div onClick={show_booking_select_service_pane} className="search-results-each-time-spot" style={{backgroundColor: "rgba(55,255,23, 0.2)", border: "1px solid rgb(55,255,23, 0.4)", borderRadius: 4, color: "rgba(55,255,23, 0.8)", cursor: "pointer"}}>
                                                        3:40 PM
                                                        <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                            <i style={{color: "rgb(21,121,223)", marginRight: 5}} className="fa fa-check"></i>
                                                            20% Discount
                                                        </p>
                                                        <p style={{marginTop: 5, color: "gold", fontSize: 13}}>
                                                            10 slots left
                                                        </p>
                                                    </div>
                                                    <div onClick={show_booking_select_service_pane} className="search-results-each-time-spot" style={{backgroundColor: "rgba(55,23,255, 0.2)", border: "1px solid rgb(55,23,255, 0.4)", borderRadius: 4, color: "rgb(155,23,255)", cursor: "pointer"}}>
                                                        3:40 PM
                                                        <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                            <i style={{color: "rgb(21,223,221)", marginRight: 5}} className="fa fa-info-circle"></i>
                                                            Full Price
                                                        </p>
                                                        <p style={{marginTop: 5, color: "gold", fontSize: 13}}>
                                                            6 slots left
                                                        </p>
                                                    </div>
                                                </div>
                                                <div style={{marginRight: 5, marginTop: 5, textAlign: "center", padding: 10, border: "1px solid rgb(155,23,255, 0.4)", fontSize: 14, backgroundColor: "rgba(155,23,255, 0.2)", borderRadius: 4, color: "goldenrod", cursor: "pointer"}}>
                                                    <i style={{color: "rgb(21,223,221)", marginRight: 5}} className="fa fa-arrow-down"></i>
                                                    choose your own time below
                                                    <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                    <i style={{color: "orange", marginRight: 5}} className="fa fa-exclamation-triangle"></i>
                                                        50% More
                                                    </p>
                                                </div>
                                                <div>
                                                    <div style={{padding: 10, borderTopLeftRadius: 4, borderTopRightRadius: 4, backgroundColor: 'slateblue', marginTop: 10}}>
                                                        <p style={{color: "white", textAlign: "center", fontSize: 14}}>Select your time below</p>
                                                        <div style={{marginTop: 10, display: "flex", flexDirection: "row !import", justifyContent: "space-between"}}>
                                                            <select style={{padding: 10, width: "33%"}}>
                                                                <option>HH</option>
                                                            </select>
                                                            <select style={{padding: 10, width: "33%"}}>
                                                                <option>MM</option>
                                                            </select>
                                                            <select style={{padding: 10, width: "33%"}}>
                                                                <option>
                                                                    AM
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", marginTop: 2, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, overflow: "hidden"}}>
                                                        <div style={{cursor: "pointer", width: "calc(50% - 1px)", padding: "10px", textAlign: "center", backgroundColor: "orange", color: "green", fontWeight: "bolder", fontSize: 14}}>
                                                            Done
                                                        </div>
                                                        <div style={{cursor: "pointer", width: "calc(50% - 1px)", padding: "10px", textAlign: "center", backgroundColor: "crimson", color: "white", fontSize: 14}}>
                                                            <i style={{color: "rgb(201,193,221)", marginRight: 10}} className="fa fa-link"></i>
                                                            view business page
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <div id="booking_workflow_main_container" style={{display: "none"}}>
                                            <div id="booking_select_service_pane" style={{padding: 10}}>
                                                <p onClick={back_to_select_time_spot} style={{color: "white", width: "fit-content", cursor: "pointer", padding: 10}}>
                                                    <i style={{color: "rgb(201,193,221)", marginRight: 10}} className="fa fa-arrow-left"></i>
                                                    Go Back</p>
                                                <div>
                                                    <p style={{color: "orange", textAlign: "center", fontWeight: "bolder", marginBottom: 20}}>Select a service below</p>
                                                    <div>
                                                        <div style={{borderLeft: "4px solid lightgreen", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                                <p>
                                                                    <span style={{fontSize: 14, color: "lightgreen", marginRight: 10}}>General Medical Checkup</span>
                                                                    <span style={{fontSize: 13, marginRight: 10, color: "orange"}}>
                                                                        $12.99
                                                                    </span>
                                                                </p>
                                                                <p style={{marginTop: 2}}>
                                                                    <span style={{fontSize: 13, marginRight: 10, color: "yellow"}}>
                                                                        this is where to put service descriptions for each searvice. More can be added to this in order to make the description more 
                                                                        informative
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <div onClick={show_booking_select_user_option} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "crimson", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                                Choose
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid lightgreen", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                                <p>
                                                                    <span style={{fontSize: 14, color: "lightgreen", marginRight: 10}}>General Medical Checkup</span>
                                                                    <span style={{fontSize: 13, marginRight: 10, color: "orange"}}>
                                                                        $12.99
                                                                    </span>
                                                                </p>
                                                                <p style={{marginTop: 2}}>
                                                                    <span style={{fontSize: 13, marginRight: 10, color: "yellow"}}>
                                                                        this is where to put service descriptions for each searvice. More can be added to this in order to make the description more 
                                                                        informative
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <div onClick={show_booking_select_user_option} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "crimson", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                                Choose
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid lightgreen", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                                <p>
                                                                    <span style={{fontSize: 14, color: "lightgreen", marginRight: 10}}>General Medical Checkup</span>
                                                                    <span style={{fontSize: 13, marginRight: 10, color: "orange"}}>
                                                                        $12.99
                                                                    </span>
                                                                </p>
                                                                <p style={{marginTop: 2}}>
                                                                    <span style={{fontSize: 13, marginRight: 10, color: "yellow"}}>
                                                                        this is where to put service descriptions for each searvice. More can be added to this in order to make the description more 
                                                                        informative
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <div onClick={show_booking_select_user_option} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "crimson", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                                Choose
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid lightgreen", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                                <p>
                                                                    <span style={{fontSize: 14, color: "lightgreen", marginRight: 10}}>General Medical Checkup</span>
                                                                    <span style={{fontSize: 13, marginRight: 10, color: "orange"}}>
                                                                        $12.99
                                                                    </span>
                                                                </p>
                                                                <p style={{marginTop: 2}}>
                                                                    <span style={{fontSize: 13, marginRight: 10, color: "yellow"}}>
                                                                        this is where to put service descriptions for each searvice. More can be added to this in order to make the description more 
                                                                        informative
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <div onClick={show_booking_select_user_option} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "crimson", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                                Choose
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid lightgreen", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                                <p>
                                                                    <span style={{fontSize: 14, color: "lightgreen", marginRight: 10}}>General Medical Checkup</span>
                                                                    <span style={{fontSize: 13, marginRight: 10, color: "orange"}}>
                                                                        $12.99
                                                                    </span>
                                                                </p>
                                                                <p style={{marginTop: 2}}>
                                                                    <span style={{fontSize: 13, marginRight: 10, color: "yellow"}}>
                                                                        this is where to put service descriptions for each searvice. More can be added to this in order to make the description more 
                                                                        informative
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <div onClick={show_booking_select_user_option} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "crimson", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                                Choose
                                                            </div>
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="booking_select_user_option" style={{padding: 10, display: "none"}}>
                                                <p onClick={back_to_select_service_pane} style={{color: "white", width: "fit-content", cursor: "pointer", padding: 10}}>
                                                    <i style={{color: "rgb(201,193,221)", marginRight: 10}} className="fa fa-arrow-left"></i>
                                                    Go Back</p>
                                                <div>
                                                    <p style={{color: "orange", textAlign: "center", fontWeight: "bolder", marginBottom: 20}}>Select User Option
                                                    </p>
                                                    <div>
                                                        <div style={{borderLeft: "4px solid skyblue", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                                <p>
                                                                    <span style={{fontSize: 14, color: "skyblue", marginRight: 10}}>Login</span>
                                                                    <i style={{color: "lightgreen"}} class="fa fa-sign-in"></i>
                                                                </p>
                                                            </div>
                                                            <div onClick={show_booking_user_login_form} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "darkslateblue", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                                Choose
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid slateblue", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                                <p>
                                                                    <span style={{fontSize: 14, color: "slateblue", marginRight: 10}}>Signup</span>
                                                                    <i style={{color: "pink"}} class="fa fa-user-plus"></i>
                                                                </p>
                                                            </div>
                                                            <div onClick={show_booking_user_signup_form} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "green", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                                Choose
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                                <p>
                                                                    <span style={{fontSize: 14, color: "goldenrod", marginRight: 10}}>Book Without Account</span>
                                                                    <i style={{color: "yellow"}} class="fa fa-user"></i>
                                                                </p>
                                                            </div>
                                                            <div onClick={show_booking_user_anony_form} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "crimson", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                                Choose
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="booking_user_signup_form" style={{padding: 10, display: "none"}}>
                                                <p onClick={back_to_select_user_option_from_signup} style={{color: "white", width: "fit-content", cursor: "pointer", padding: 10}}>
                                                    <i style={{color: "rgb(201,193,221)", marginRight: 10}} className="fa fa-arrow-left"></i>
                                                    Go Back</p>
                                                <div>
                                                    <p style={{color: "orange", textAlign: "center", fontWeight: "bolder", marginBottom: 20}}>Add Your Information</p>
                                                    <div>
                                                        <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10}}>
                                                                <p style={{width: "100%", fontSize: 13, color: "white", marginBottom: 5, fontWeight: "bolder"}}>Full Name</p>
                                                                <input style={{width: "100%", padding: 10}} type="text"/>
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, borderRadius: 4, overflow: "hidden"}}>
                                                        <p style={{fontSize: 13, color: "orange", margin: 10, marginBottom: 5, fontWeight: "bolder"}}>Mobile</p>
                                                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                                                <div style={{padding: 10, width: 130}}>
                                                                    <p style={{fontSize: 13, color: "white", marginBottom: 5, fontWeight: "bolder"}}>Code</p>
                                                                    <select style={{width: "100%", padding: 10}}>
                                                                        <option>+1</option>
                                                                    </select>
                                                                </div>
                                                                <div style={{padding: 10, width: "calc(100% - 130px)"}}>
                                                                    <p style={{fontSize: 13, color: "white", marginBottom: 5, fontWeight: "bolder"}}>Number</p>
                                                                    <input style={{width: "100%", padding: 10}} type="number"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10}}>
                                                                <p style={{width: "100%", fontSize: 13, color: "white", marginBottom: 5, fontWeight: "bolder"}}>Email</p>
                                                                <input style={{width: "100%", padding: 10}} type="email"/>
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10}}>
                                                                <p style={{width: "100%", fontSize: 13, color: "white", marginBottom: 5, fontWeight: "bolder"}}>Address</p>
                                                                <input style={{width: "100%", padding: 10}} type="text"/>
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10}}>
                                                                <p style={{width: "100%", fontSize: 13, color: "white", marginBottom: 5, fontWeight: "bolder"}}>Password</p>
                                                                <input style={{width: "100%", padding: 10}} type="password"/>
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10}}>
                                                                <p style={{width: "100%", fontSize: 13, color: "white", marginBottom: 5, fontWeight: "bolder"}}>Confirm Password</p>
                                                                <input style={{width: "100%", padding: 10}} type="password"/>
                                                            </div>
                                                        </div>
                                                        <div onClick={submit_booking_user_signup} style={{cursor: "pointer", marginTop: 5, backgroundColor: "darkslateblue", color: "white", textAlign: "center", fontSize: 14, padding: 10, borderRadius: 4}}>
                                                            Signup
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="booking_user_login_form" style={{padding: 10, display: "none"}}>
                                                <p onClick={back_to_select_user_option_from_login} style={{color: "white", width: "fit-content", cursor: "pointer", padding: 10}}>
                                                    <i style={{color: "rgb(201,193,221)", marginRight: 10}} className="fa fa-arrow-left"></i>
                                                    Go Back</p>
                                                <div>
                                                    <p style={{color: "orange", textAlign: "center", fontWeight: "bolder", marginBottom: 20}}>Add Your Login Info</p>
                                                    <div>
                                                        <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10}}>
                                                                <p style={{width: "100%", fontSize: 13, color: "white", marginBottom: 5, fontWeight: "bolder"}}>Email</p>
                                                                <input style={{width: "100%", padding: 10}} type="text"/>
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10}}>
                                                                <p style={{width: "100%", fontSize: 13, color: "white", marginBottom: 5, fontWeight: "bolder"}}>Password</p>
                                                                <input style={{width: "100%", padding: 10}} type="password"/>
                                                            </div>
                                                        </div>
                                                        <div onClick={submit_booking_user_login} style={{cursor: "pointer", marginTop: 5, backgroundColor: "darkslateblue", color: "white", textAlign: "center", fontSize: 14, padding: 10, borderRadius: 4}}>
                                                            Login
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="booking_user_anony_form" style={{padding: 10, display: "none"}}>
                                                <p onClick={back_to_select_user_option_from_anony} style={{color: "white", width: "fit-content", cursor: "pointer", padding: 10}}>
                                                    <i style={{color: "rgb(201,193,221)", marginRight: 10}} className="fa fa-arrow-left"></i>
                                                    Go Back</p>
                                                <div>
                                                    <p style={{color: "orange", textAlign: "center", fontWeight: "bolder", marginBottom: 20}}>Add Your Information</p>
                                                    <div>
                                                        <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10}}>
                                                                <p style={{width: "100%", fontSize: 13, color: "white", marginBottom: 5, fontWeight: "bolder"}}>Full Name</p>
                                                                <input style={{width: "100%", padding: 10}} type="text"/>
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, borderRadius: 4, overflow: "hidden"}}>
                                                        <p style={{fontSize: 13, color: "orange", margin: 10, marginBottom: 5, fontWeight: "bolder"}}>Mobile</p>
                                                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                                                <div style={{padding: 10, width: 130}}>
                                                                    <p style={{fontSize: 13, color: "white", marginBottom: 5, fontWeight: "bolder"}}>Code</p>
                                                                    <select style={{width: "100%", padding: 10}}>
                                                                        <option>+1</option>
                                                                    </select>
                                                                </div>
                                                                <div style={{padding: 10, width: "calc(100% - 130px)"}}>
                                                                    <p style={{fontSize: 13, color: "white", marginBottom: 5, fontWeight: "bolder"}}>Number</p>
                                                                    <input style={{width: "100%", padding: 10}} type="number"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10}}>
                                                                <p style={{width: "100%", fontSize: 13, color: "white", marginBottom: 5, fontWeight: "bolder"}}>Email</p>
                                                                <input style={{width: "100%", padding: 10}} type="email"/>
                                                            </div>
                                                        </div>
                                                        <div onClick={submit_anonymous_user_info} style={{cursor: "pointer", marginTop: 5, backgroundColor: "darkslateblue", color: "white", textAlign: "center", fontSize: 14, padding: 10, borderRadius: 4}}>
                                                            Conitue
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="booking_select_cash_or_card_payments" style={{padding: 10, display: "none"}}>
                                                <p onClick={show_booking_select_cash_or_card_payments} style={{color: "white", width: "fit-content", cursor: "pointer", padding: 10}}>
                                                    <i style={{color: "rgb(201,193,221)", marginRight: 10}} className="fa fa-arrow-left"></i>
                                                    Go Back</p>
                                                <div>
                                                    <p style={{color: "orange", textAlign: "center", fontWeight: "bolder", marginBottom: 20}}>Select Payment</p>
                                                    <div>
                                                        <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                                <p>
                                                                    <span style={{fontSize: 14, color: "goldenrod", marginRight: 10}}>Pay Now</span>
                                                                    <i style={{color: "yellow"}} class="fa fa-credit-card"></i>
                                                                </p>
                                                            </div>
                                                            <div onClick={booking_select_online_payment} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "crimson", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                                Choose
                                                            </div>
                                                        </div>
                                                        <div style={{borderLeft: "4px solid skyblue", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                                            <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                                <p>
                                                                    <span style={{fontSize: 14, color: "skyblue", marginRight: 10}}>Pay at Counter</span>
                                                                    <i style={{color: "lightgreen"}} class="fa fa-money"></i>
                                                                </p>
                                                            </div>
                                                            <div onClick={booking_select_cash_payment} style={{cursor: "pointer", textAlign: "center", width: 70, backgroundColor: "darkslateblue", fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                                Choose
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="booking_final_submission_pane" style={{padding: 10, display: "none"}}>
                                            <p onClick={back_to_booking_select_card_cash_payments_form} style={{color: "white", width: "fit-content", cursor: "pointer", padding: 10}}>
                                                <i style={{color: "rgb(201,193,221)", marginRight: 10}} className="fa fa-arrow-left"></i>
                                                Go Back</p>
                                            <div>
                                                <p style={{color: "orange", textAlign: "center", fontWeight: "bolder", marginBottom: 20}}>Finish Here</p>
                                                <div>
                                                    <div style={{borderLeft: "4px solid goldenrod", backgroundColor: "rgba(0,0,0,0.2)", marginBottom: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: 4, overflow: "hidden"}}>
                                                        <div style={{padding: 10, width: "calc(100% - 70px)"}}>
                                                            <p style={{marginBottom: 5}}>
                                                                <span style={{fontSize: 14, fontWeight: "bolder", color: "goldenrod", marginRight: 10}}>Name of service booked</span>
                                                            </p>
                                                            <p style={{marginBottom: 5}}>
                                                                <span style={{fontSize: 14, fontWeight: "bolder", color: "goldenrod", marginRight: 10}}>Discount (70%)</span>
                                                            </p>
                                                            <p style={{marginBottom: 5}}>
                                                                <span style={{fontSize: 14, fontWeight: "bolder", color: "goldenrod", marginRight: 10}}>Tax</span>
                                                            </p>
                                                            <p style={{marginBottom: 5, marginTop: 10}}>
                                                                <span style={{fontSize: 15, fontWeight: "bolder", color: "skyblue", marginRight: 10}}>Total</span>
                                                            </p>
                                                        </div>
                                                        <div style={{cursor: "pointer", textAlign: "center", width: 70, fontSize: 13, display: "flex", flexDirection: "column", justifyContent: "center", color: "white", fontWeight: "bolder"}}>
                                                            <p style={{marginBottom: 5}}>
                                                                <span style={{fontSize: 14, color: "goldenrod"}}>$12.34</span>
                                                            </p>
                                                            <p style={{marginBottom: 5}}>
                                                                <span style={{fontSize: 14, fontWeight: "bolder", color: "goldenrod"}}>- $9.23</span>
                                                            </p>
                                                            <p style={{marginBottom: 5}}>
                                                                <span style={{fontSize: 14, fontWeight: "bolder", color: "goldenrod"}}>$2.23</span>
                                                            </p>
                                                            <p style={{marginBottom: 5, marginTop: 10}}>
                                                                <span style={{fontSize: 15, fontWeight: "bolder", color: "skyblue"}}>$59.23</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p style={{color: "white", fontSize: 13, fontWeight: "bolder", textAlign: "center", margin: "15px 0"}}>Add Payment Below</p>
                                                        <div style={{padding: 10, textAlign: "center", fontWeight: "bolder", backgroundColor: "darkslateblue", color: "white", fontSize: 14, borderRadius: 4}}>
                                                            Submit
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </section>
                        <section className="search-results-right-section">

                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SearchResultsPage