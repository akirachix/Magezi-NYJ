import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landingpage from "./LandingPage";
import Navbar from "./Navbar"


function App() {
  return (
    <Router>

      <div>
        <Navbar/>
       
        <Routes>
          <Route path="/" element={<Landingpage />}/>

        </Routes>
      </div>

     
    </Router>
  );
}

export default App;

