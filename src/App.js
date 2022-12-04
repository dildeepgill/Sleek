
import { AuthContextProvider } from "./context/AuthContext";

import Enter from './pages/Enter/Enter';
import HomePage from './pages/home/HomePage';
import SignUp from './pages/signUp/SignUp';
import {
  Route,
  Routes,
  
} from "react-router-dom";
import "./styles/lightMode.css"
import { useState } from "react";


function App() {
  const [loading,setLoading] = useState(true)
  const spinner=document.getElementById('spinner')
  if(spinner){
    setTimeout(()=>{
      spinner.style.display="none"
      setLoading(false)
    },3000)
  }
   
return (
  
  !loading && <div>
  <AuthContextProvider>
    <Routes>   
          <Route path="enter" element={ <Enter/>} />
          <Route path="/home" element={ <HomePage/>} />
          <Route path="/" element={<SignUp/>} />
     </Routes> 
  </AuthContextProvider>
  </div>
 
);
}
export default App;
