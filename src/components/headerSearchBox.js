function HeaderSearchBox(){
    
    return (
        <div className="search-container">
            <input className="search-input" placeholder="search service provider"/>
            <button className="search-button">
                <i style={{color: "darkslateblue", marginRight: 5}} className="fa fa-search"></i><span>search</span>
            </button>
        </div>
    );
}

export default HeaderSearchBox