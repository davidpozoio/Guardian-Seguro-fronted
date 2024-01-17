import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { setAuth, setRole } from "../redux/userSlice";
import { Roles } from "../consts/roles";

export const useAutomaticLogout = <T,>(
  queryKey: string[],
  fetch: () => Promise<T>
) => {
  const { data, error, isLoading, isFetching } = useQuery(queryKey, fetch, {
    retry: 1,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Error :", error);
    if (!error) return;
    dispatch(setAuth({ isAuth: false }));
    dispatch(setRole({ role: Roles.INVALID }));
  }, [error, dispatch]);

  return { data, error, isLoading, isFetching };
};
