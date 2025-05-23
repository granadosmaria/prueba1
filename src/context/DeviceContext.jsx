// src/context/DeviceContext.jsx
import { createContext, useState } from "react";

// Crear el contexto
export const DeviceContext = createContext();

// Crear el proveedor del contexto
export const DeviceProvider = ({ children }) => {
  const [devices, setDevices] = useState([
    { id: "1", name: "Tracker 01", status: "Online" },
    { id: "2", name: "Tracker 02", status: "Offline" },
    { id: "3", name: "Tracker 03", status: "Online" },
  ]);

  return (
    <DeviceContext.Provider value={{ devices, setDevices }}>
      {children}
    </DeviceContext.Provider>
  );
};
