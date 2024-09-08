
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/pages/Home';
import Product from './Component/pages/Product';
import Services from './Component/pages/Services';
import Footer from './Component/pages/Footer';
function App() {
  return (
    <div>
         <Navbar/>
         <Home/>
         <Product/>
         <Services/>
         <Footer/>
    </div>
  );
}

export default App;
