import { Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import Main from "./components/main";
import Footer from "./components/footer";
import SearchResultsPage from './components/searchResults';
import MobileBottomNav from './components/mobileBottomNav';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={ Main } />
        <Route exact path="/search" component={ SearchResultsPage } />
        <Footer />
        <MobileBottomNav />
      </Router>
    </div>
  );
}

export default App;
