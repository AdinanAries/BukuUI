import { Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import Main from "./components/main";
import Footer from "./components/footer";
import SearchResultsPage from './components/searchResults';
import MobileBottomNav from './components/mobileBottomNav';
import RegisterBusinessAllInputs from './components//registerBusinessPane';
import AllServicesMenu from './components/allServiceMenu';
import AppointmentsList from './components/appointmentsListContainer';
import UserAccountContainer from './components/userAccountPage';
import NotificationsContainer from './components/notificationsContainer';
import AppSettingsPage from './components/appSettingsPage';
import EditUserProfile from './components/editProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <EditUserProfile />
        <AppSettingsPage />
        <AllServicesMenu />
        <NotificationsContainer />
        <RegisterBusinessAllInputs />
        <Header />
        <Route exact path="/" component={ Main } />
        <Route exact path="/search" component={ SearchResultsPage } />
        <Route exact path="/user" component={ UserAccountContainer } />
        <Route exact path="/appointments" component={ AppointmentsList } />
        <Footer />
        <MobileBottomNav />
      </Router>
    </div>
  );
}

export default App;
