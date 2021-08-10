import { toggle_show_news_upates_page } from "./helperFunctions";

import rvwImg from "../images/ProfilePic9.jpg";

function NewsUpdatesPage(){
    return (
        <div style={{display: "none"}} id="news_updates_page">
            <div style={{position: "relative", borderTop: "1px solid white"}}>
                <p onClick={toggle_show_news_upates_page} style={{position: "absolute", top: 0, right: 0, padding: 10, marginRight: 10, color: "red"}}>
                    <i className="fa fa-times"></i>
                </p>
                <div>
                    <p style={{color: "orange", textAlign: "center", marginTop: 20, marginBottom: 10, fontSize: 14, fontWeight: "bolder"}}>News Updates</p>
                    <p style={{color: "white", textAlign: "center", marginBottom: 20, fontSize: 14}}>
                        See what business in your area are saying</p>
                    <div id="news_updates_page_news_items_list" style={{maxWidth: 1400, margin: "auto"}}>
                        <div className="each-homepage-news-item" style={{backgroundColor: "rgba(0,0,0,0.3)", marginBottom: 5}}>
                            <div className="each-homepage-news-item-each-inner-section each-homepage-news-item-each-inner-section-img">
                            </div>
                            <div className="each-homepage-news-item-each-inner-section">
                                <div className="each-homepage-news-item-each-inner-section-info">
                                    <h1 style={{color: "skyblue", fontSize: 18, marginBottom: "10px", fontFamily: 'Courgette'}}>
                                        Buku Hair Salon
                                    </h1>
                                    <p style={{marginBottom: 15, color: "white", fontSize: 13}}>
                                        <i style={{marginRight: "5px", color: "orange"}} className="fa fa-map-marker"></i>
                                        2321 Park Ave, Manhattan</p>
                                    <p style={{marginBottom: 5, color: "white", fontSize: 13}}>Rated:
                                    <span style={{marginLeft: 5, color: "orange"}}>4.2</span></p>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", backgroundColor: "orange"}}></div>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", backgroundColor: "orange"}}></div>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", backgroundColor: "orange"}}></div>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", backgroundColor: "orange"}}></div>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", border: "1px solid rgba(221,221,0,0.3)", backgroundColor: "rgba(221,221,0,0.3)"}}></div>
                                    </div>
                                    <div style={{cursor: "pointer", border: "1px solid rgba(221,0,221,0.5)", backgroundColor: "rgba(221,0,221,0.4)", padding: 10, marginTop: 10, width: "150px", textAlign: "center", fontSize: 13, color: "rgb(255,255,0)", borderRadius: 4}}>
                                        Book Now
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
                            </div>
                        </div>
                        <div className="each-homepage-news-item" style={{backgroundColor: "rgba(0,0,0,0.3)", marginBottom: 5}}>
                            <div className="each-homepage-news-item-each-inner-section each-homepage-news-item-each-inner-section-img">
                            </div>
                            <div className="each-homepage-news-item-each-inner-section">
                                <div className="each-homepage-news-item-each-inner-section-info">
                                    <h1 style={{color: "skyblue", fontSize: 18, marginBottom: "10px", fontFamily: 'Courgette'}}>
                                        Buku Hair Salon
                                    </h1>
                                    <p style={{marginBottom: 15, color: "white", fontSize: 13}}>
                                        <i style={{marginRight: "5px", color: "orange"}} className="fa fa-map-marker"></i>
                                        2321 Park Ave, Manhattan</p>
                                    <p style={{marginBottom: 5, color: "white", fontSize: 13}}>Rated:
                                    <span style={{marginLeft: 5, color: "orange"}}>4.2</span></p>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", backgroundColor: "orange"}}></div>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", backgroundColor: "orange"}}></div>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", backgroundColor: "orange"}}></div>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", backgroundColor: "orange"}}></div>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", border: "1px solid rgba(221,221,0,0.3)", backgroundColor: "rgba(221,221,0,0.3)"}}></div>
                                    </div>
                                    <div style={{cursor: "pointer", border: "1px solid rgba(221,0,221,0.5)", backgroundColor: "rgba(221,0,221,0.4)", padding: 10, marginTop: 10, width: "150px", textAlign: "center", fontSize: 13, color: "rgb(255,255,0)", borderRadius: 4}}>
                                        Book Now
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
                            </div>
                        </div>
                        <div className="each-homepage-news-item" style={{backgroundColor: "rgba(0,0,0,0.3)", marginBottom: 5}}>
                            <div className="each-homepage-news-item-each-inner-section each-homepage-news-item-each-inner-section-img">
                            </div>
                            <div className="each-homepage-news-item-each-inner-section">
                                <div className="each-homepage-news-item-each-inner-section-info">
                                    <h1 style={{color: "skyblue", fontSize: 18, marginBottom: "10px", fontFamily: 'Courgette'}}>
                                        Buku Hair Salon
                                    </h1>
                                    <p style={{marginBottom: 15, color: "white", fontSize: 13}}>
                                        <i style={{marginRight: "5px", color: "orange"}} className="fa fa-map-marker"></i>
                                        2321 Park Ave, Manhattan</p>
                                    <p style={{marginBottom: 5, color: "white", fontSize: 13}}>Rated:
                                    <span style={{marginLeft: 5, color: "orange"}}>4.2</span></p>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", backgroundColor: "orange"}}></div>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", backgroundColor: "orange"}}></div>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", backgroundColor: "orange"}}></div>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", backgroundColor: "orange"}}></div>
                                        <div style={{width: 15, height: 15, marginRight: 5, borderRadius: "100%", border: "1px solid rgba(221,221,0,0.3)", backgroundColor: "rgba(221,221,0,0.3)"}}></div>
                                    </div>
                                    <div style={{cursor: "pointer", border: "1px solid rgba(221,0,221,0.5)", backgroundColor: "rgba(221,0,221,0.4)", padding: 10, marginTop: 10, width: "150px", textAlign: "center", fontSize: 13, color: "rgb(255,255,0)", borderRadius: 4}}>
                                        Book Now
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
                            </div>
                        </div>
                        
                    </div>
                    <div style={{textAlign: "center", color: "white", margin: 10, padding: 10, borderRadius: 4, border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", fontSize: 14, backgroundColor: "rgba(0,255,0,0.1)"}}>
                        load more...
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsUpdatesPage;