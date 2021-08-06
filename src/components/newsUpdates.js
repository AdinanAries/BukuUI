import { toggle_show_news_upates_page } from "./helperFunctions";

function NewsUpdatesPage(){
    return (
        <div style={{display: "none"}} id="news_updates_page">
            <div style={{position: "relative", borderTop: "1px solid white"}}>
                <p onClick={toggle_show_news_upates_page} style={{position: "absolute", top: 0, right: 0, padding: 10, marginRight: 10, color: "red"}}>
                    <i className="fa fa-times"></i>
                </p>
                <div>
                    <p style={{color: "orange", textAlign: "center", marginTop: 20, marginBottom: 20, fontSize: 14, fontWeight: "bolder"}}>News Updates</p>
                </div>
            </div>
        </div>
    );
}

export default NewsUpdatesPage;