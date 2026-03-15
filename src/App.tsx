import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Browse from "./pages/Browse";
import Credits from "./pages/Credits";
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="browse" element={<Browse />} />
        <Route index element={<About />} />
        <Route path="credits" element={<Credits />} />
      </Route>
    </Routes>
  );
};

export default App;
