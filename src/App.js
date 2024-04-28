import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Description/Description'
import Footer  from './components/Footer'
//import Slider from "./components/Carroussel/Slider";
import CustomNavbar from './components/Navbar/CustomNavbar'
//import Signup from "./components/LoginSignup/Signup";
import Signin from "./components/LoginSignup/Signin";
import Store from "./Boutique/Store";
import Addclaim from  "./Claims/Addclaim"



function App() {
  return (
    <div className="App">
      <CustomNavbar/>

      <Description/>
      <Footer />
  

      
    </div>
  );
}

export default App;
