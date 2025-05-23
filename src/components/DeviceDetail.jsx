import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DeviceContext } from "../context/DeviceContext";

const DeviceDetail = () => {
  const { id } = useParams();
  const { devices } = useContext(DeviceContext);
  const [device, setDevice] = useState(null);

  useEffect(() => {
    const found = devices.find((d) => d.id === id);
    setDevice(found);
  }, [id, devices]);

  if (!device) return <p>Dispositivo no encontrado...</p>;

  return (
    <div className="device-detail">
      <h2>Detalle del Dispositivo</h2>
      <p><strong>ID:</strong> {device.id}</p>
      <p><strong>Nombre:</strong> {device.name}</p>
      <p>
        <strong>Estado:</strong>{" "}
        <span
          className={
            device.status.toLowerCase() === "online"
              ? "status online"
              : "status offline"
          }
        >
          {device.status}
        </span>
      </p>

      <Link to="/" className="back-link">
        ← Volver a la lista
      </Link>
    </div>
  );
};

export default DeviceDetail;
