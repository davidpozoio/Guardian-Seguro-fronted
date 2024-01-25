import { useMutation } from "react-query";
import { logout } from "../modules/auth/services/authService";
import { useNavigate } from "react-router-dom";
import { routes } from "../consts/routes";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/userSlice";

const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate } = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      navigate(routes.AUTH.LOGIN);
      dispatch(setAuth({ isAuth: false }));
    },
  });

  return { logout: mutate };
};
export default useLogout;
