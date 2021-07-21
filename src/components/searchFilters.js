function show_search_filter_by_services_list(){
    if(document.getElementById("search-filter-by-services-list").style.display === "block")
        document.getElementById("search-filter-by-services-list").style.display = "none";
    else
        document.getElementById("search-filter-by-services-list").style.display = "block";
}

function SearchFilters(){
    return (
        <section>
            <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", maxWidth: 700, margin: "auto", marginBottom: 15, position: "relative"}}>
                <div style={{borderBottom: "1px solid rgba(255,255,0,0.2)", padding: 10, width: "calc(50% - 2px)"}}>
                    <i style={{marginRight: 5, color: "orange"}} className="fa fa-map-marker"></i>
                    <input type="text"  style={{color: "white", background: "none", border: "none", width: "calc(100% - 15px)"}} value="Bronx, NY, USA 1123" />
                </div>
                <div onClick={show_search_filter_by_services_list} style={{borderBottom: "1px solid rgba(255,255,0,0.2)", padding: 10, width: "calc(50% - 2px)"}}>
                    <i style={{marginRight: 5, color: "orange"}} className="fa fa-bars"></i>
                    <input readonly="true" type="text"  style={{cursor: "pointer", color: "white", background: "none", border: "none", width: "calc(100% - 35px)"}} value="Barber, More..." />
                    <i style={{color: "orange", marginLeft: 5}} className="fa fa-caret-down"></i>
                </div>
                <div id="search-filter-by-services-list" style={{display: "none"}}>
                    <div className="search-filters-include-services">
                        <div className="search-filters-include-services-each-section">
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-barber-checkbox"/>
                                    <div>
                                        <label for="filter-barber-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-barber-checkbox">BarberShop</label>
                            </div>
                            <div style={{padding: 5, display: "flex", flexDirection: "row !important"}}>
                                <div className="search-filter-by-service-each-service-toggle" style={{marginRight: 10}}>
                                    <input type="checkbox" id="filter-meds-checkbox"/>
                                    <div>
                                        <label for="filter-meds-checkbox"></label>
                                    </div>
                                </div>
                                <label for="filter-meds-checkbox">Medical Center</label>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchFilters;