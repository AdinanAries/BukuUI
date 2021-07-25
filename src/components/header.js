import $ from 'jquery';
import { Link } from 'react-router-dom';

import HeaderSearchBox from "./headerSearchBox";
import SearchFilters from './searchFilters';

import {toggle_show_all_service, hide_all_popups, refreshPageFunc} from "./helperFunctions";


function Header(){
    return (
        <><header className="App-header">
            <div className="header-wrapper">
                <Link to="/"><div onClick={refreshPageFunc} className="each-header-section">
                    <p className="logo">Buk-<span className="logosB">U</span><span className="logos-dotcom">.com</span></p>
                </div></Link>
                <div className="each-header-section header-search-section">
                    <HeaderSearchBox />
                </div>
                <div className="each-header-section header-main-nav">
                    <ul>
                        <Link to="/"><li onClick={refreshPageFunc} className="active">
                            <i className="fa fa-home"></i>Home
                        </li></Link>
                        <li onClick={toggle_show_all_service}><i className="fa fa-bars"></i>Services</li>
                        <Link to="/appointments"><li onClick={hide_all_popups}>
                            <i className="fa fa-calendar-o"></i>Appointments</li></Link>
                        <Link to="/user"><li onClick={hide_all_popups}>
                            <i className="fa fa-sign-in"></i>Login</li></Link>
                    </ul>
                </div>
                <div className="each-header-section header-menu-new-button" style={{paddingTop: 5}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <p><i style={{fontSize: "22px", color: "aqua"}} className="fa fa-newspaper-o"></i></p>
                        <p style={{fontSize: "11px", color: "white"}}>News</p>
                    </div>
                </div>
            </div>
            <div>
                <SearchFilters />
            </div>
        </header></>
    );
}

export default Header