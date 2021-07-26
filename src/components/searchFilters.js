function show_search_filter_by_services_list(){
    if(document.getElementById("search-filter-by-services-list").style.display === "block"){
        setTimeout(()=>{
            document.getElementById("show-services-filter-list-caret").style.transform = "rotate(0deg)";
            document.getElementById("show-services-filter-list-caret").classList.remove("fa-times");
            document.getElementById("show-services-filter-list-caret").classList.add("fa-caret-down");
        }, 100);

        document.getElementById("search-filter-by-services-list").style.display = "none";
    }
    else{
        setTimeout(()=>{
            document.getElementById("show-services-filter-list-caret").style.transform = "rotate(180deg)";
            document.getElementById("show-services-filter-list-caret").classList.remove("fa-caret-down");
            document.getElementById("show-services-filter-list-caret").classList.add("fa-times");   
        }, 200);
        
        document.getElementById("search-filter-by-services-list").style.display = "block";
    }
}

function SearchFilters(){
    return (
        <section id="search_filters_main_container">
            <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", maxWidth: 700, padding: "0 10px", margin: "auto", marginTop: 5, position: "relative"}}>
                <div style={{borderBottom: "1px solid rgba(255,255,0,0.2)", padding: "10px 0", width: "calc(50% - 2px)"}}>
                    <i style={{marginRight: 5, color: "orange"}} className="fa fa-map-marker"></i>
                    <input type="text"  style={{color: "white", background: "none", border: "none", width: "calc(100% - 17px)"}} value="Bronx, NY, USA 1123" />
                </div>
                <div onClick={show_search_filter_by_services_list} style={{borderBottom: "1px solid rgba(255,255,0,0.2)", padding: "10px 0", width: "calc(50% - 2px)"}}>
                    <i style={{marginRight: 5, color: "orange"}} className="fa fa-bars"></i>
                    <input readonly="true" type="text"  style={{cursor: "pointer", color: "white", background: "none", border: "none", width: "calc(100% - 39px)"}} value="Barber, More..." />
                    <i id="show-services-filter-list-caret" style={{color: "crimson", marginLeft: 5, transition: "400ms all ease-in-out 50ms"}} className="fa fa-caret-down"></i>
                </div>
                <div id="search-filter-by-services-list">
                    
                    <div className="search-filters-include-services">
                        <div className="search-filters-include-services-each-section">
                            <div style={{postion: "absolute", top: "100%", backgroundColor: "white", border: "1px solid rgba(0,0,0,0.3)", marginBottom: 10, borderRadius: 4, padding: "0 10px"}}>
                                <input style={{fontSize: 13, fontWeight: "bolder", color: "darkslateblue", padding: 10, border: 0, width: "100%"}} type="text" placeholder="when?"/>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-barber-checkbox"/>
                                    <div>
                                        <label for="filter-barber-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-barber-checkbox">BarberShop
                                    <span style={{backgroundColor: "crimson", fontSize: 12, color: "white", padding: 3, marginLeft: 5, borderRadius: 4}}>popular</span>
                                </label>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-meds-checkbox"/>
                                    <div>
                                        <label for="filter-meds-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-meds-checkbox">Medical Center
                                    <span style={{backgroundColor: "crimson", fontSize: 12, color: "white", padding: 3, marginLeft: 5, borderRadius: 4}}>popular</span>
                                </label>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-day-spa-checkbox"/>
                                    <div>
                                        <label for="filter-day-spa-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-day-spa-checkbox">Day Spa
                                    <span style={{backgroundColor: "green", fontSize: 12, color: "white", padding: 3, marginLeft: 5, borderRadius: 4}}>new</span>
                                </label>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-med-esth-checkbox"/>
                                    <div>
                                        <label for="filter-med-esth-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-med-esth-checkbox">Medical Esthetician</label>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-p-therapy-checkbox"/>
                                    <div>
                                        <label for="filter-p-therapy-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-p-therapy-checkbox">Physical Therapy</label>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-podiatry-checkbox"/>
                                    <div>
                                        <label for="filter-podiatry-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-podiatry-checkbox">Podiatry</label>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-makeup-checkbox"/>
                                    <div>
                                        <label for="filter-makeup-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-makeup-checkbox">Makeup Artist
                                    <span style={{backgroundColor: "green", fontSize: 12, color: "white", padding: 3, marginLeft: 5, borderRadius: 4}}>new</span>
                                </label>
                            </div>
                        </div>
                        <div className="search-filters-include-services-each-section">
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-nails-checkbox"/>
                                    <div>
                                        <label for="filter-nails-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-nails-checkbox">Nail Salon</label>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-tatoo-checkbox"/>
                                    <div>
                                        <label for="filter-tatoo-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-tatoo-checkbox">Tattoo Shop
                                    <span style={{backgroundColor: "crimson", fontSize: 12, color: "white", padding: 3, marginLeft: 5, borderRadius: 4}}>popular</span>
                                </label>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-p-trainer-checkbox"/>
                                    <div>
                                        <label for="filter-p-trainer-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-p-trainer-checkbox">Personal Trainer</label>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-piercing-checkbox"/>
                                    <div>
                                        <label for="filter-piercing-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-piercing-checkbox">Piercing
                                    <span style={{backgroundColor: "crimson", fontSize: 12, color: "white", padding: 3, marginLeft: 5, borderRadius: 4}}>popular</span>
                                </label>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-makeup-checkbox"/>
                                    <div>
                                        <label for="filter-makeup-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-makeup-checkbox">Makeup Artist
                                    <span style={{backgroundColor: "green", fontSize: 12, color: "white", padding: 3, marginLeft: 5, borderRadius: 4}}>new</span>
                                </label>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-makeup-checkbox"/>
                                    <div>
                                        <label for="filter-makeup-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-makeup-checkbox">Makeup Artist
                                    <span style={{backgroundColor: "green", fontSize: 12, color: "white", padding: 3, marginLeft: 5, borderRadius: 4}}>new</span>
                                </label>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-makeup-checkbox"/>
                                    <div>
                                        <label for="filter-makeup-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-makeup-checkbox">Makeup Artist
                                    <span style={{backgroundColor: "green", fontSize: 12, color: "white", padding: 3, marginLeft: 5, borderRadius: 4}}>new</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div id="filtered_search_submit_button">
                            <div style={{cursor: "pointer", textAlign: "center", fontWeight: "bolder", fontSize: 14, padding: 10, backgroundColor: "green", color: "white", borderRadius: 10}}>
                                <i style={{marginRight: 5, color: "orange"}} className="fa fa-search" aria-hidden="true"></i>
                                Search
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default SearchFilters;