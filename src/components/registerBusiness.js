import bizGroup from "../images/BizGroup.png";
import rvwImg from "../images/ReviewIcon.png";
import newsImg from "../images/NewsPic.png";
import lineCusts from "../images/LineCustomers.png"

function RegisterBusiness(){
    return (
        <div className="wrapper">
            <div className="register-business-section-content">
                <div className="register-business-each-section-content first-section">
                    <h1 className="section-title" style={{color: "rgb(23,122,122)"}} >Register Your Business</h1>
                    <p style={{textAlign: "center", fontSize: 14, color: "rgb(23,99,99)"}}>Let us help you manage your bookings</p>
                    <div className="register-business-each-section-content-inner register-business-each-section-content-first-inner">
                        <h1 style={{color: "rgb(23,122,122)", fontSize: 14, textAlign: "center", marginBottom: 20, color: "#17a0f5"}} >Add your information below</h1>
                        <div className="register-business-each-section-content-first-inner-flex">
                            <div className="register-business-each-section-content-first-inner-flex-each">
                                <div style={{backgroundColor: "slateblue", height: "calc(100% - 5px)", borderRadius: 4, display: "flex"}}>
                                    <div style={{padding: "20px", paddingTop: 0, width: "fit-content", margin: "auto"}}>
                                        <div style={{margin: "auto", width: "100%", maxWidth: "300px", padding: "10px", paddingTop: "20px",
                                                display: "flex", flexDirection: "column"}}>
                                            <h1 style={{color: "rgb(23,122,122)", fontSize: 14, textAlign: "center", marginBottom: 10, color: "white"}} >Extend your market reach</h1>
                                            <p style={{textAlign: "center"}}><img src={lineCusts}  style={{width: "80px", height: "80px"}}/></p>
                                            <p style={{color: "white", padding: "5px"}}>Our marketing team will constantly be reaching out to customers in order to get you more business</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="register-business-each-section-content-first-inner-flex-each register-business-each-section-content-first-inner-flex-each-second">
                                <div style={{backgroundColor: "white", padding: 10, borderRadius: "5px", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", marginBottom: 5}}>
                                    <p style={{fontSize: 14, color: "rgb(23,99,99)", fontWeight: "bolder"}}>Business Name</p>
                                    <div style={{borderTop: "1px solid rgba(0,0,0,0.2)", marginTop: 5}}>
                                        <input style={{padding: 10, border: "none", backgroundColor: "white", width: "100%"}} />
                                    </div>
                                </div>
                                <div style={{backgroundColor: "white", padding: 10, borderRadius: "5px", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", marginBottom: 5}}>
                                    <p style={{fontSize: 14, color: "rgb(23,99,99)", fontWeight: "bolder"}}>Business Name</p>
                                    <div style={{borderTop: "1px solid rgba(0,0,0,0.2)", marginTop: 5}}>
                                        <input style={{padding: 10, border: "none", backgroundColor: "white", width: "100%"}} />
                                    </div>
                                </div>
                                <div style={{backgroundColor: "white", padding: 10, borderRadius: "5px", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", marginBottom: 5}}>
                                    <p style={{fontSize: 14, color: "rgb(23,99,99)", fontWeight: "bolder"}}>Business Name</p>
                                    <div style={{borderTop: "1px solid rgba(0,0,0,0.2)", marginTop: 5}}>
                                        <input style={{padding: 10, border: "none", backgroundColor: "white", width: "100%"}} />
                                    </div>
                                </div>
                                <div style={{backgroundColor: "white", padding: 10, borderRadius: "5px", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", marginBottom: 5}}>
                                    <p style={{fontSize: 14, color: "rgb(23,99,99)", fontWeight: "bolder"}}>Business Name</p>
                                    <div style={{borderTop: "1px solid rgba(0,0,0,0.2)", marginTop: 5}}>
                                        <input style={{padding: 10, border: "none", backgroundColor: "white", width: "100%"}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundColor: "orange", borderBottomRightRadius: 100, padding: 10, textAlign: "center", fontWeight: "bolder", color: "green"}}>
                            Submit
                        </div>
                    </div>    
                </div>
                <div className="register-business-each-section-content">
                    <h1 className="section-title" style={{color: "rgb(23,122,122)"}} >Choose Buku</h1>
                    <p style={{textAlign: "center", fontSize: 14, color: "rgb(23,99,99)"}}>If its appointments management, always choose Buku.com</p>
                    <div className="register-business-each-section-content-inner">
                        <div style={{padding: "20px", paddingTop: 0, width: "fit-content", margin: "auto"}}>
                            <div style={{margin: "auto", width: "100%", maxWidth: "300px", padding: "10px", paddingTop: "20px",
                                    display: "flex", flexDirection: "column"}}>
                                <h1 style={{color: "lightgreen", fontSize: 14, textAlign: "center", marginBottom: 10}} >Fast growing community</h1>
                                <p style={{textAlign: "center"}}><img src={bizGroup}  style={{width: "80px", height: "80px"}}/></p>
                                <p style={{color: "#37a0f5", padding: "5px"}}>More and more businesses are signing up on our platform everyday</p>
                            </div>
                        </div>
                        <div className="choose-buku-bottom-flex">
                            <div style={{padding: "20px", paddingTop: 0, width: "fit-content", margin: "auto"}}>
                                <div style={{margin: "auto", width: "100%", maxWidth: "300px", padding: "10px", paddingTop: "20px",
                                        display: "flex", flexDirection: "column"}}>
                                    <h1 style={{color: "lightgreen", fontSize: 14, textAlign: "center", marginBottom: 10}} >Your reviews make a difference</h1>
                                    <p style={{textAlign: "center"}}><img src={rvwImg}  style={{width: "80px", height: "80px"}}/></p>
                                    <p style={{color: "#37a0f5", padding: "5px"}}>Always feel free to tell us how you were served. You help us keep the platform clean</p>
                                </div>
                            </div>
                            <div style={{padding: "20px", paddingTop: 0, width: "fit-content", margin: "auto"}}>
                                <div style={{margin: "auto", width: "100%", maxWidth: "300px", padding: "10px", paddingTop: "20px",
                                        display: "flex", flexDirection: "column"}}>
                                    <h1 style={{color: "lightgreen", fontSize: 14, textAlign: "center", marginBottom: 10}} >Our businesses keep you posted</h1>
                                    <p style={{textAlign: "center"}}><img src={newsImg}  style={{width: "80px", height: "80px"}}/></p>
                                    <p style={{color: "#37a0f5", padding: "5px"}}>Our integrated news feed feature lets businesses post regular news updates to keep you informed</p>
                                </div>
                            </div>
                        </div>
                        {/*<img style={{width: "100%", height: "auto"}} src={medsPic}/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterBusiness