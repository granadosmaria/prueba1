import { useContext, useState } from "react";
import { DeviceContext } from "../context/DeviceContext";
import { Link } from "react-router-dom";

const DeviceList = () => {
  const { devices } = useContext(DeviceContext);
  const [search, setSearch] = useState("");

  const filteredDevices = devices.filter((device) =>
    device.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Lista de Dispositivos GPS</h2>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredDevices.length === 0 ? (
        <p>No se encontraron dispositivos.</p>
      ) : (
        <ul>
          {filteredDevices.map((device) => (
            <li key={device.id}>
              <Link to={`/device/${device.id}`}>{device.name}</Link>
              <span
                className={
                  device.status.toLowerCase() === "online"
                    ? "status online"
                    : "status offline"
                }
              >
                {device.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeviceList;
