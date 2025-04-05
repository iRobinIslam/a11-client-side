
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import LoadingPage from "../components/LoadingPage/LoadingPage";

const PrivateRoute = ({ children }) => {
const {user, loading} = useAuth()
  const location = useLocation()

  if (loading) {
    return <LoadingPage></LoadingPage>
  }

  if(!user) {
    return <Navigate state={{from:location.pathname}} to="/signIn"></Navigate>
  }
  return children;
};

export default PrivateRoute
