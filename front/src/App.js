import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import { useState } from "react";
import UserContext from "./context/UserContext";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";


function App() {

  const [user, setUser] = useState({
    logged:false,
    role:''
  });

  console.log('user logged:', user.logged);

  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
      <Header/>
      <Routes>
        {
          user.logged ? (
            <Route path='/*' element={<PrivateRoutes />} /> 
          ):(
            <Route path='/*' element={<PublicRoutes />} /> 
          )
        }
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;