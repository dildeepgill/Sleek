
import { AuthContextProvider } from "./context/AuthContext";

import Enter from './pages/Enter/Enter';
import HomePage from './pages/home/HomePage';
import SignUp from './pages/signUp/SignUp';
import {
  Route,
  Routes,
  
} from "react-router-dom";

function App() {
  // const { currentUser } = useContext(AuthContext);

  // const AuthRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/enter" />;
  //   }
  //   return children;
  // };

//    {/* <Routes>   
      
//           <Route path="enter" element={ <Enter/>} />
//           <Route path="/home" element={ <HomePage/>} />
//           <Route path="/" element={<SignUp/>} />
        
//      </Routes> */}
// {/*       
//     </div> */}

    // const router = createBrowserRouter([
     
    //   {
    //     path: "/",
    //     element: <SignUp/>
    //   },
    //   {
    //     path: "/home",
    //   element: (
    //     <AuthRoute>
    //       <HomePage/>
    //     </AuthRoute>
    //   ),
    //   },
    //   {
    //     path: "/enter",
    //     element: <Enter/>
    //   },
    // ]);
   
   

return (
  
  <div className="app">
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
