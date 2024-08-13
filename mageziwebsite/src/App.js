import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Videos from "./Videos";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Videos />} />
          {/* <Route path="/videos" element={<Videos />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
