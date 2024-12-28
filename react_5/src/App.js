import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Main from "./components/main/Main";
import About from "./components/about/About";
// import Pagenotfound from "./components/pagenotfound/Pagenotfound";
import Contact from "./components/contact/Contact";

function App() {
  return (
   <BrowserRouter>
     <Header/>
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="ocasion" element={<Main/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<Home/>}/>
          {/* <Route path="*" element={<Home/>}></Route> */}
        </Routes>
     <Footer/>
   </BrowserRouter>
  );
}

export default App;
