import { Routes, Route } from "react-router-dom";
import "./utils/styles/App.css";
import Home from "./pages/Home";
const App = () => {


  return (
    <div className="App   ">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
