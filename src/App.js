import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Description/Description'
import Footer  from './components/Footer'
//import Slider from "./components/Carroussel/Slider";
import CustomNavbar from './components/Navbar/CustomNavbar'
//import Signup from "./components/LoginSignup/Signup";
import Signin from "./components/LoginSignup/Signin";




function App() {
  return (
    <div className="App">
      <CustomNavbar/>

      <Description/>
      
      <Signin/>
      <Footer />
  

      
    </div>
  );
}

export default App;
