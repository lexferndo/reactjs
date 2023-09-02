import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Homepage from "./pages/home";
import NewBookpage from "./pages/createbook";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/newbook" element={<NewBookpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
