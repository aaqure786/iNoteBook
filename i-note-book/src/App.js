import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (

    <Router>
      <NavBar />
      <Routes>
        
          <Route exact path='/' element={<Home/>} ></Route>
          <Route exact path='/about' element={<About/>} ></Route>
          <Route exact path='/contact' element={<Contact/>} ></Route>
        
      </Routes>
    </Router>



  );
}

export default App;
