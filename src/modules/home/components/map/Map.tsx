import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.styles.css";

interface MapProps {
  latitude: number;
  longitude: number;
  onClose: () => void;
}

const Map = ({ latitude, longitude, onClose }: MapProps) => {
  return (
    <div className="overlay">
      <div className="modal-map">
        <button className="close-button" onClick={onClose}>
          x
        </button>
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "300px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};
export default Map;
