import { saveAlert } from "../../../shared/services/alertService";

interface AlertTypeCardProps {
  name: string;
}

export function AlertTypeCard({ name }: AlertTypeCardProps) {
  const onSaveAlert = () => {
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
      });
  };

  return <button onClick={onSaveAlert}>{name}</button>;
}
