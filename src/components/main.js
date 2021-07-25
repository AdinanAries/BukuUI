import Hero from './heroSection';
import NewsSection from './newsSection';
import RegisterBusiness from './registerBusiness';
import RegisterBusinessAllInputs from './registerBusinessPane';
import AllServicesMenu from './allServiceMenu';

function Main(){
    return(
        <main>
            <AllServicesMenu />
            <RegisterBusinessAllInputs />
            <Hero />
            <RegisterBusiness />
            <NewsSection />
        </main>
    )
}

export default Main