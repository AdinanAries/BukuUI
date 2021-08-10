import rvwImg from "../images/ProfilePic9.jpg";

function NewsSection(){
    return (
        <div style={{paddingTop: 20}}>
            <h1 className="section-title" style={{color: "rgb(23,122,122)"}} >Services in your area</h1>
            <p style={{textAlign: "center", fontSize: 14, color: "rgb(23,99,99)"}}>Buku helps inform you about updates in services around your location</p>
            <div className="site-news-section">
                <div className="wrapper">
                    <h1 className="section-title" style={{color: "orange", marginTop: "30px"}} >News Updates</h1>
                    <p style={{textAlign: "center", fontSize: 14, color: "goldenrod", marginBottom: "30px"}}>What's going on with businesses in your area</p>
                    <div id="home-page-news-list">
                        {/*
                        <div style={{display: "flex", flexDirection: "row", backgroundColor: "#212c2c", borderRadius: 20, overflow: "hidden", marginBottom: 5}}>
                            <div style={{width: "50%"}}>
                                <div style={{padding: 20, borderLeft: "20px solid orange", minHeight: 370,}}>
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
                            <div style={{width: "50%", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "url("+newsImg+")", height: "100%", minHeight: 350, backgroundColor: "grey",
                            borderRadius: 50, marginTop: 10, marginBottom: 10, borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRight: "5px solid orange",}}>
                            </div>
                        </div>
                        */}
                        <div className="each-homepage-news-item">
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
                        <div className="each-homepage-news-item">
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
                        <div className="each-homepage-news-item">
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
                </div>
            </div>
        </div>
    );
}

export default NewsSection