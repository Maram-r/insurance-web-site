import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Description/Description'
import Footer  from './components/Footer'
//import Slider from "./components/Carroussel/Slider";
import CustomNavbar from './components/Navbar/CustomNavbar'
import Signup from "./components/LoginSignup/Signup";



function App() {
  return (
    <div className="App">
      <CustomNavbar/>

      <Description/>
      <Signup/>
      <Footer />
  

      
    </div>
  );
}

export default App;
