import { Link } from 'react-router-dom';

import { hide_all_popups_inner_func } from "./helperFunctions";

function search_without_filter(){
    hide_all_popups_inner_func();
}

function HeaderSearchBox(){
    
    return (
        <><div className="search-container">
            <input className="search-input" placeholder="search service provider"/>
            <Link to="/search"><button onClick={search_without_filter} className="search-button">
                <i style={{color: "darkslateblue", marginRight: 5}} className="fa fa-search"></i><span>search</span>
            </button></Link>
        </div></>
    );
}

export default HeaderSearchBox