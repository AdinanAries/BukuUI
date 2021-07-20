function SearchFilters(){
    return (
        <section>
            <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", maxWidth: 700, margin: "auto", marginBottom: 15}}>
                <div style={{borderBottom: "1px solid rgba(255,255,0,0.2)", padding: 10, width: "calc(50% - 2px)"}}>
                    <i style={{marginRight: 5, color: "orange"}} className="fa fa-map-marker"></i>
                    <input type="text"  style={{color: "white", background: "none", border: "none", width: "calc(100% - 15px)"}} value="Bronx, NY, USA 1123" />
                </div>
                <div style={{borderBottom: "1px solid rgba(255,255,0,0.2)", padding: 10, width: "calc(50% - 2px)"}}>
                    <i style={{marginRight: 5, color: "orange"}} className="fa fa-bars"></i>
                    <input readonly="true" type="text"  style={{cursor: "pointer", color: "white", background: "none", border: "none", width: "calc(100% - 35px)"}} value="Barber, More..." />
                    <i style={{color: "orange", marginLeft: 5}} className="fa fa-caret-down"></i>
                </div>
            </div>
        </section>
    );
}

export default SearchFilters;