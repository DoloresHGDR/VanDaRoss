import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import {Routes,Route} from "react-router-dom"
import Api from "./components/api"



function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path='/weather' element={<Api/>} />
      </Routes>

      <Footer/>
        
    </div>
  );
}

export default App;
