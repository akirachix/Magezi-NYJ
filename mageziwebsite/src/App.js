import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Podcast";

function App() {
  return (


    <Router>
      <div>

        <Routes> 
           <Route path="/" element={<About />} />
          {/* <Route path="/podcast" element={<About />} /> */}

        </Routes> 
      </div>
    </Router>
  );
};

export default App;
