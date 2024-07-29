// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Popular from './Components/Popular/popular';
import Offers from './Components/Offers/Offers';
import NewCollections from './Components/NewCollections/NewCollections';

function App() {
  return (
     <>
     <Navbar/>
     <Hero/>
     <Popular/>
     <Offers/>
     <NewCollections/>
     </>
  );
}

export default App;
