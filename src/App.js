import Login from "./components/Login/Login";
import {Routes,Route} from 'react-router-dom'
import Main from "./components/Main";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Dashboard/>}/>
      </Routes>
    

    </div>
  );
}

export default App;
