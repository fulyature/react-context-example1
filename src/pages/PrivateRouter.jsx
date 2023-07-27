import { Outlet, Navigate, useInRouterContext } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {
  const user = useInRouterContext(LoginContext);
  return user.email && user.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
