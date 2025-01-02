import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage";
import TeachersPage from "./Pages/TeachersPage";

const App = () => {
  return <div className="container">
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/teachers" element={<TeachersPage/>}/>
    </Routes>
  </div>;
};

export default App;
