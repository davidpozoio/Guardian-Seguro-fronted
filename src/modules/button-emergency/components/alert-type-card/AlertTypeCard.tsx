import { useDispatch } from "react-redux";
import { saveAlert } from "../../../../shared/services/alertService";
import "./alertTypeCard.styles.css";
import { setSending } from "../../../../redux/alertSlice";
import { useLocation, useNavigate } from "react-router-dom";

interface AlertTypeCardProps {
  name: string;
  url: string;
}

export function AlertTypeCard({ name, url }: AlertTypeCardProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onSaveAlert = () => {
    dispatch(setSending({ isSending: true }));

    saveAlert({
      type: name,
      details: "sdas",
      latitude: 123,
      longitude: 231,
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
      });
  };

  return (
    <button onClick={onSaveAlert} className="card">
      <img className="image" src={url} alt={name} width="100" height="100" />
      <span>{name}</span>
    </button>
  );
}
