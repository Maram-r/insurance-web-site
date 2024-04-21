import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Description/Description'
import Footer  from './components/Footer'
//import Slider from "./Carroussel/Slider";



function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <Slider/>
      <Description/>
      
      
      <Signup/>
      <Footer />
  

      
    </div>
  );
}

export default App;
