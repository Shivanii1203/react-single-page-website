

import Home from "./components/Home";
import Features from "./components/Features";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";

function App() {
  console.log("app component");
  return (
    <div>
     <Home/>
     <Features/>
     <Services/>
     <Testimonial/>
     <Contact/>
    </div>
  );
}

export default App;

 