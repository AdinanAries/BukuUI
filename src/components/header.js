import $ from 'jquery';
import { Link } from 'react-router-dom';

import HeaderSearchBox from "./headerSearchBox";
import SearchFilters from './searchFilters';

import {toggle_show_all_service, hide_all_popups, toggle_show_notifications_container, toggle_show_news_upates_page, refreshPageFunc, hide_all_popups_inner_func} from "./helperFunctions";

function search_without_filter(){
    hide_all_popups_inner_func();
}

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
                        <Link to="/"><li onClick={refreshPageFunc} className="active main_menu_item">
                            <i className="fa fa-home"></i>Home
                        </li></Link>
                        <li id="top_main_menu_all_services_option" onClick={toggle_show_all_service} className="main_menu_item">
                            <i className="fa fa-bars"></i>Services</li>
                        <Link to="/appointments"><li id="top_main_menu_appointments_option" onClick={()=>{hide_all_popups("top_main_menu_appointments_option")}} className="main_menu_item">
                            <i className="fa fa-calendar-o"></i>Appointments</li></Link>
                        <Link to="/user"><li id="top_main_menu_account_option" onClick={()=>{hide_all_popups("top_main_menu_account_option")}} className="main_menu_item">
                            <i className="fa fa-sign-in"></i>Login</li></Link>
                        <li className="main_menu_item" id="top_main_menu_notifications_option" onClick={toggle_show_notifications_container} style={{position: "relative"}}>
                            <div style={{color: "black",border: "2px solid #212c2c", position: "absolute", right: -4, top: -10, width: 18, height: 18, backgroundColor: "white", fontSize: 12, fontWeight: "bolder", borderRadius: "100%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                0
                            </div>
                            <span style={{color: "orange", textAlign: "center", fontSize: 18}}>
                                <i className="fa fa-bell"></i>
                            </span>
                        </li>
                    </ul>
                </div>
                <div onClick={toggle_show_news_upates_page} className="each-header-section header-menu-new-button" style={{paddingTop: 5, cursor: "pointer"}}>
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