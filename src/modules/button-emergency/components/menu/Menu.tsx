import { useFormik } from "formik";
import "./menu.styles.css";
import { saveAlert } from "../../../../shared/services/alertService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSending } from "../../../../redux/alertSlice";
import useGeo from "../../../../hooks/useGeo";
import { useEffect } from "react";

interface MenuProps {
  onClose: () => void;
  alertType: string;
  description: string;
}

const Menu = ({ onClose, alertType, description }: MenuProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentPosition, getGeolocation } = useGeo();

  useEffect(() => {
    getGeolocation();
  }, [getGeolocation]);

  const { handleSubmit, handleChange, isSubmitting } = useFormik({
    initialValues: { description: "" },
    onSubmit: (values) => {
      console.log(values);
      saveAlert({
        type: alertType,
        details: values.description ? values.description : description,
        latitude: currentPosition?.coords.latitude as number,
        longitude: currentPosition?.coords.longitude as number,
      })
        .then((res) => {
          console.log("ALERT CREATED:", res);
        })
        .catch((err) => {
          console.log("ERROR", err);
        })
        .finally(() => {
          dispatch(setSending({ isSending: false }));
          console.log(location.pathname);
          if (location.pathname === "/home/alerts/types") {
            navigate("/home/alerts");
          }
          onClose();
        });
    },
  });

  return (
    <div className="overlay">
      <form className="menu form" onSubmit={handleSubmit}>
        <button className="close-button" onClick={onClose}>
          x
        </button>
        <label htmlFor="Idescription">Descripción: </label>
        <input
          id="Idescription"
          type="text"
          name="description"
          placeholder="No es necesario que rellenes este campo"
          onChange={handleChange}
        />
        <button
          className={`button ${isSubmitting ? "button--ghost" : ""}`}
          disabled={isSubmitting}
          type="submit"
        >
          enviar alerta!
        </button>
      </form>
    </div>
  );
};
export default Menu;
