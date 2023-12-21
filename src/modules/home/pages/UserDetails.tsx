import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";

export function UserDetails() {
  const user = useSelector((state: AppState) => state.user);

  return (
    <>
      <h2>{user.fullName}</h2>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <p>{user.latitude}</p>
      <p>{user.longitude}</p>
    </>
  );
}
