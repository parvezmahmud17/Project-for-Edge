
import { brouserouters, routs, rout} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Manu from "./Pages/Manu";
import pagenotfound from "./Pages/pagenotfound";

function App() {
  return (
    <div >
      <brouserouters>
      <routs>
        <rout path="/" elemet={<Home/>}/>
        <rout path="/About" elemet={<About/>}/>
        <rout path="/contact" elemet={<Contact/>}/>
        <rout path="/Manu" elemet={<Manu/>}/>
        <rout path="*" elemet={<pagenotfound/>}/>

        
      </routs>
      </brouserouters>
    </div>
  
  
  );
}

export default App;
