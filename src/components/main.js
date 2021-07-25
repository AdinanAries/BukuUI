import Hero from './heroSection';
import NewsSection from './newsSection';
import RegisterBusiness from './registerBusiness';
import RegisterBusinessAllInputs from './registerBusinessPane';
import AllServicesMenu from './allServiceMenu';
import AppointmentsList from './appointmentsListContainer';

function Main(){
    return(
        <main>
            <AppointmentsList />
            <AllServicesMenu />
            <RegisterBusinessAllInputs />
            <Hero />
            <RegisterBusiness />
            <NewsSection />
        </main>
    )
}

export default Main