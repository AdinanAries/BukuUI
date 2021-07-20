import './App.css';
import Header from './components/header';
import Main from "./components/main";
import Footer from "./components/footer";
import SearchResultsPage from './components/searchResults';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SearchResultsPage />
      <Footer />
    </div>
  );
}

export default App;
