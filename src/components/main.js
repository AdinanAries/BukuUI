import Hero from './heroSection';
import NewsSection from './newsSection';
import RegisterBusiness from './registerBusiness';
import RegisterBusinessAllInputs from './registerBusinessPane';
import AllServicesMenu from './allServiceMenu';
import MobileBottomNav from './mobileBottomNav';

function Main(){
    return(
        <main>
            <AllServicesMenu />
            <RegisterBusinessAllInputs />
            <Hero />
            <RegisterBusiness />
            <NewsSection />
            <MobileBottomNav />
        </main>
    )
}

export default Main