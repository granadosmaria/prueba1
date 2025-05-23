// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DeviceProvider } from "./context/DeviceContext";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import './App.css'; // asegúrate de importar esto

function App() {
  return (
    <DeviceProvider>
      <BrowserRouter>
        <div className="container">
          <h1>GPS Tracker App</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/device/:id" element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DeviceProvider>
  );
}

export default App;
