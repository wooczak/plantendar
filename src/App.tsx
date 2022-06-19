import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
