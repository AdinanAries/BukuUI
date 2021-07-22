import { Link } from 'react-router-dom';

function HeaderSearchBox(){
    
    return (
        <><div className="search-container">
            <input className="search-input" placeholder="search service provider"/>
            <Link to="/search"><button className="search-button">
                <i style={{color: "darkslateblue", marginRight: 5}} className="fa fa-search"></i><span>search</span>
            </button></Link>
        </div></>
    );
}

export default HeaderSearchBox