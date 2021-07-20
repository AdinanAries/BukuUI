import DocAppt from '../images/DocAppt.jpg';
import BarbAppt from '../images/BarberAppt.jpg';
import SpaAppt from '../images/SpaAppt.jpg';

function AboutBuku(){
    return (
        <div className="about-buku-section">
            <div className='eachCSecFlex'>
                <h1 style={{color: "skyblue", fontSize: 14, textAlign: "center", marginBottom: "10px", fontFamily: 'Courgette'}}>Book your doctor's appointment online</h1>
                <div style={{margin: "auto", width: "100%", maxWidth: "400px", height: "300px",
                        backgroundImage: "url('"+DocAppt+"')", backgroundSize: "cover", backgroundPosition: "right",
                        display: "flex", justifyContent: "flex-end", flexDirection: "column"}}>
                    <p style={{backgroundColor: "rgba(0,0,0, 0.3)", color: "#ffe96b", padding: "5px"}}>It's a fully automated platform for booking appointments. Your doctor's appointment has never been easier.</p>
                </div>
            </div>
            <div className='eachCSecFlex marginUp20'>
                <h1 style={{color: "skyblue", fontSize: 14, textAlign: "center", marginBottom: "10px", fontFamily: 'Courgette'}}>Find barber shops near you</h1>
                <div style={{margin: "auto", width: "100%", maxWidth: "400px", height: "300px", 
                        backgroundImage: "url('"+BarbAppt+"')", backgroundSize: "cover", backgroundPosition: "right",
                        display: "flex", justifyContent: "flex-end", flexDirection: "column"}}>
                    <p style={{backgroundColor: "rgba(0,0,0, 0.3)", color: "#ffe96b", padding: "5px"}}>Our recommendations algorithms make it easier for you to find the best barber in town</p>
                </div>
            </div>
            <div className='eachCSecFlex marginUp20'>
                <h1 style={{color: "skyblue", fontSize: 14, textAlign: "center", marginBottom: "10px", fontFamily: 'Courgette'}}>Find your beauty time online</h1>
                <div style={{margin: "auto", width: "100%", maxWidth: "400px", height: "300px", 
                        backgroundImage: "url('"+SpaAppt+"')", backgroundSize: "cover", backgroundPosition: "right",
                        display: "flex", justifyContent: "flex-end", flexDirection: "column"}}>
                    <p style={{backgroundColor: "rgba(0,0,0, 0.3)", color: "#ffe96b", padding: "5px"}}>No more waiting on a line. Your service provider has a Buku. Find your spot here.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutBuku