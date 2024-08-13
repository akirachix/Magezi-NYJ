import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./Blogs";
import Blogstwo from "./Blogstwo";
import CaseStudy from "./CaseStudy";
import GroupDescription from "./GroupDescription";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/Blogstwo" element={<Blogstwo />} />
          <Route path="/CaseStudy" element={<CaseStudy/>}/>
          <Route path="/GroupDescription" element={<GroupDescription/>}/> 
          <Route path="/" element={<GroupDescription/>}/> 
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/" element={<CaseStudy/>}/>
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/" element={<Blogstwo />} />
          <Route path="/Blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
