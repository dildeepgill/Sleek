
import { AuthContextProvider } from "./context/AuthContext";

import Enter from './pages/Enter/Enter';
import HomePage from './pages/home/HomePage';
import SignUp from './pages/signUp/SignUp';
import {
  Route,
  Routes,
  
} from "react-router-dom";
import "./styles/lightMode.css"
import { useContext } from "react";
import { LightModeContext } from "./context/lightModeContent";

function App() {
   
const {LightMode}= useContext(LightModeContext)
return (
  
  <div className={LightMode? "app lightMode ": "app"}>
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
