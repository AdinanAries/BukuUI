function Footer(){
    return (
        <footer>
            <div className="wrapper">
                <div className="footer-items-container">
                    <div className="footer-content-section">
                        <p style={{textAlign: "center", color: "gold", fontSize: 13, fontWeight: "bolder", marginBottom: 10}}>Office</p>
                        <div>
                        <p style={{padding: 5, fontSize: 14, fontWeight: "bolder", marginTop: 10, textAlign: "justify", color: "aqua", textAlign: "center"}}>
                            <i style={{color: "skyblue", marginRight: 5, fontSize: 20}} class="fa fa-map-marker" aria-hidden="true"></i>
                            143 Liberty St.</p> 
                        <p style={{textAlign: "justify", fontSize: 14, marginLeft: 17, color: "aqua", textAlign: "center"}}>
                            Manhattan, NY</p>
                        </div>
                        <p style={{textAlign: "center", color: "gold", fontSize: 13, fontWeight: "bolder", marginBottom: 10, marginTop: 30}}>Company</p>
                        <div>
                        <ul>
                            <li style={{color: "white", fontSize: 13, listStyleType: "none", textAlign: "center"}}>
                                About
                            </li>
                            <li style={{color: "white", fontSize: 13, listStyleType: "none", textAlign: "center"}}>
                                Careers
                            </li>
                            <li style={{color: "white", fontSize: 13, listStyleType: "none", textAlign: "center"}}>
                                Mobile
                            </li>
                            <li style={{color: "white", fontSize: 13, listStyleType: "none", textAlign: "center"}}>
                                Discover
                            </li>
                            <li style={{color: "white", fontSize: 13, listStyleType: "none", textAlign: "center"}}>
                                How We Work
                            </li>
                        </ul>
                            
                        </div>
                    </div>
                    <div className="footer-content-section">
                        <p style={{textAlign: "center", color: "gold", fontSize: 13, fontWeight: "bolder", marginBottom: 10}}>About Us</p>
                        <div>
                            <p style={{color: "white", fontSize: 13}}>
                                This is about us information. Its basically, the brief company introduction.
                                This is about us information. Its basically, the brief company introduction.
                                This is about us information. Its basically, the brief company introduction.
                                This is about us information. Its basically, the brief company introduction.</p>
                        </div>
                        <p style={{textAlign: "center", color: "rgb(87, 221, 255)", fontSize: 13, fontWeight: "bolder", marginBottom: 10, marginTop: 30}}>Contact Us</p>
                        <div>
                        <ul>
                            <li style={{color: "white", fontSize: 13, listStyleType: "none", textAlign: "center", marginBottom: 10}}>
                                <i style={{color: "aqua", marginRight: 12}} className="fa fa-phone"></i>
                                +1 732 224 0689
                            </li>
                            <li style={{color: "white", fontSize: 13, listStyleType: "none", textAlign: "center", marginBottom: 10}}>
                                <i style={{color: "aqua", marginRight: 12}} className="fa fa-envelope"></i>
                                appointments@buku.com
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="footer-content-section">
                        <p style={{textAlign: "center", color: "gold", fontSize: 13, fontWeight: "bolder", marginBottom: 10}}>Support</p>
                        <div>
                        <ul>
                            <li style={{color: "white", fontSize: 13, listStyleType: "none", textAlign: "center", marginBottom: 10}}>
                                <i style={{color: "aqua", marginRight: 12}} className="fa fa-phone"></i>
                                Call Us
                            </li>
                            <li style={{color: "white", fontSize: 13, listStyleType: "none", textAlign: "center", marginBottom: 10}}>
                                <i style={{color: "aqua", marginRight: 12}} className="fa fa-envelope"></i>
                                Email Us
                            </li>
                        </ul>
                        </div>
                        <div style={{marginTop: 20}}>
                            <p className="logo" style={{textAlign: "center"}}>Buk-<span className="logosB">U</span><span>.com</span></p>
                            <p style={{color: "#37a0f5", padding: 5, fontSize: 13, textAlign: "center"}}>Buku.com &copy;2021</p>
                            <p style={{color: "darkgray", fontSize: 12, textAlign: "center"}}>All rights reserved</p>
                            <p style={{marginTop: 10, textAlign: "center"}}>
                                <a href="https://www.facebook.com/TheoMotech-107976207592401/about/?ref=page_internal" target="_blank">
                                    <i style={{padding: 5, backgroundColor: "#374949", color: "goldenrod", borderRadius: 4, margin: 5, fontSize: 20}} class="fa fa-facebook" aria-hidden="true"></i> 
                                </a>
                                <a href="https://www.linkedin.com/company/theomotech-inc" target="_blank">
                                    <i style={{padding: 5, backgroundColor: "#374949", color: "goldenrod", borderRadius: 4, margin: 5, fontSize: 20}} class="fa fa-linkedin" aria-hidden="true"></i> 
                                </a>
                                <i style={{padding: 5, backgroundColor: "#374949", color: "goldenrod", borderRadius: 4, margin: 5, fontSize: 20}} class="fa fa-instagram" aria-hidden="true"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer