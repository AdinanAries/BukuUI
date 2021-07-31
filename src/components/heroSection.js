import $ from 'jquery';

import barberIcon from '../images/barber-pole.png';
import medsIcon from '../images/medical-doctor.png';
import nailsIcon from '../images/nails.png';
import spaIcon from '../images/spa.png';
import cosmeticBrushIcon from '../images/cosmetic-brush.png';
import hairDryerIcon from '../images/hair-dryer.png';
import favsProPIc from '../images/ProfilePic17.png';

import AboutBuku from './aboutBukuSection';

/*function toggle_show_all_service(){
    $("#all_services_menu_pane").toggle("up");
}*/

import {toggle_show_all_service} from "./helperFunctions";

function Hero(){
    return (
        <section className="hero-section">
            <div id="hero_section_svg_bg">
            </div>
            <div className="hero-section-inner">
                <div className="wrapper">
                    <h1 className="section-title" style={{marginBottom: "10px", marginTop: 10}}>Popular Services</h1>
                    <div id="popular-services-section" style={{zIndex: 1, position: "relative"}}>
                        <a href="">
                            <div className="each-popular-service">
                                <p className="img-p">
                                    <img src={medsIcon} /></p>
                                <p className="name-p">Medical Center</p>
                            </div>
                        </a>
                        <a href="">
                            <div className="each-popular-service">
                                <p className="img-p"><img src={barberIcon} /></p>
                                <p className="name-p">Barber Shop</p>
                            </div>
                        </a>
                        <a href="">
                            <div className="each-popular-service">
                                <p className="img-p"><img src={nailsIcon} /></p>
                                <p className="name-p">Nail Salon</p>
                            </div>
                        </a>
                        <a href="">
                            <div className="each-popular-service">
                                <p className="img-p"><img src={spaIcon} /></p>
                                <p className="name-p">Day Spa</p>
                            </div>
                        </a>
                        <a className="dontShowMobile" href="">
                            <div className="each-popular-service">
                                <p className="img-p"><img src={cosmeticBrushIcon} /></p>
                                <p className="name-p">Beauty Salon</p>
                            </div>
                        </a>
                        <a className="dontShowMobile" href="">
                            <div className="each-popular-service">
                                <p className="img-p"><img src={hairDryerIcon} /></p>
                                <p className="name-p">Hair Salon</p>
                            </div>
                        </a>
                    </div>
                    <div onClick={toggle_show_all_service} style={{zIndex: 1, position: "relative", cursor: "pointer", maxWidth: 700, margin: "auto", marginTop: 20, borderRadius: 4, backgroundColor: "rgba(95,11,85)", border: "1px solid rgba(233,221,11,0.4)", padding: 10, color: "white", textAlign: "center"}}>
                        <i style={{marginRight: 10, color: "orange"}} className="fa fa-bars"></i>
                        all services
                    </div>
                    <h1 className="section-title" style={{marginTop: "20px", marginBottom: 5}}>Suggested Places</h1>
                    <div className="homepage-favorite-services-list">
                        <a href=''>
                            <div className="homepage-each-favorite-service">
                                <div className="homepage-each-favorite-service-inner">
                                    <div>
                                        <div className="homepage-each-favorite-service-image">
                                            <img src={favsProPIc} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="homepage-each-favorite-service-name">Mohammed Adinan</p>
                                        <p className="homepage-each-favorite-service-rating">
                                            <span className="homepage-each-favorite-service-rating-span">
                                                ★★★★★ 
                                                <i className="fa fa-check"><span> Recommended</span></i>
                                            </span>
                                        </p>
                                    </div>

                                </div>
                                <p className="homepage-each-favorite-service-bizname ">Bukus Meds</p>
                                <p className="homepage-each-favorite-service-servicetype">- Medical Center -</p>
                                <p style={{textAlign: "center", color: "lightgreen", fontSize: 14, marginTop: 10}}>
                                    <i style={{marginRight: 5, color: "orange"}} className="fa fa-map-marker"></i>
                                    1253 allerton ave</p>
                            </div>
                        </a>
                        <a href=''>
                            <div className="homepage-each-favorite-service">
                                <div className="homepage-each-favorite-service-inner">
                                    <div>
                                        <div className="homepage-each-favorite-service-image">
                                            <img src={favsProPIc} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="homepage-each-favorite-service-name">Mohammed Adinan</p>
                                        <p className="homepage-each-favorite-service-rating">
                                            <span className="homepage-each-favorite-service-rating-span">
                                                ★★★★★ 
                                                <i className="fa fa-check"><span> Recommended</span></i>
                                            </span>
                                        </p>
                                    </div>

                                </div>
                                <p className="homepage-each-favorite-service-bizname ">Bukus Meds</p>
                                <p className="homepage-each-favorite-service-servicetype">- Medical Center -</p>
                                <p style={{textAlign: "center", color: "lightgreen", fontSize: 14, marginTop: 10}}>
                                    <i style={{marginRight: 5, color: "orange"}} className="fa fa-map-marker"></i>
                                    1253 allerton ave</p>
                            </div>
                        </a>
                        <a href=''>
                            <div className="homepage-each-favorite-service">
                                <div className="homepage-each-favorite-service-inner">
                                    <div>
                                        <div className="homepage-each-favorite-service-image">
                                            <img src={favsProPIc} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="homepage-each-favorite-service-name">Mohammed Adinan</p>
                                        <p className="homepage-each-favorite-service-rating">
                                            <span className="homepage-each-favorite-service-rating-span">
                                                ★★★★★ 
                                                <i className="fa fa-check"><span> Recommended</span></i>
                                            </span>
                                        </p>
                                    </div>

                                </div>
                                <p className="homepage-each-favorite-service-bizname ">Bukus Meds</p>
                                <p className="homepage-each-favorite-service-servicetype">- Medical Center -</p>
                                <p style={{textAlign: "center", color: "lightgreen", fontSize: 14, marginTop: 10}}>
                                    <i style={{marginRight: 5, color: "orange"}} className="fa fa-map-marker"></i>
                                    1253 allerton ave</p>
                            </div>
                        </a>
                        <a href=''>
                            <div className="homepage-each-favorite-service">
                                <div className="homepage-each-favorite-service-inner">
                                    <div>
                                        <div className="homepage-each-favorite-service-image">
                                            <img src={favsProPIc} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="homepage-each-favorite-service-name">Mohammed Adinan</p>
                                        <p className="homepage-each-favorite-service-rating">
                                            <span className="homepage-each-favorite-service-rating-span">
                                                ★★★★★ 
                                                <i className="fa fa-check"><span> Recommended</span></i>
                                            </span>
                                        </p>
                                    </div>

                                </div>
                                <p className="homepage-each-favorite-service-bizname ">Bukus Meds</p>
                                <p className="homepage-each-favorite-service-servicetype">- Medical Center -</p>
                                <p style={{textAlign: "center", color: "lightgreen", fontSize: 14, marginTop: 10}}>
                                    <i style={{marginRight: 5, color: "orange"}} className="fa fa-map-marker"></i>
                                    1253 allerton ave</p>
                            </div>
                        </a>
                    </div>
                    {/*<p className="top-border"></p>*/}
                        <h1 style={{color: "orange", fontSize: "22px", fontFamily: 'Courgette', textAlign: "center", paddingBottom: 10, marginTop: 20}}>
                        What is Buku.com</h1>
                    <p style={{textAlign: "center", maxWidth: "400px", margin: "auto", fontFamily: 'Courgette', color: "white"}}>
                        Buku.com is a website and app that lets you find medical and beauty places near your location to book appointments.
                        It also provides features for the businesses to post news updates with pictures to keep you informed about their services
                        and products.
                    </p>
                    <AboutBuku />
                </div>
            </div>
        </section>
    );
}

export default Hero