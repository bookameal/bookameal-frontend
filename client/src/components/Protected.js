import { useNavigate } from "react-router-dom";



const ProtectedRoute = ({ user, children }) => {
    let navigate = useNavigate()

    if (!user) {
    //   return <Navigate to="/login" replace />;
    navigate('/login')
    }
  
    return children;
  };
  export default ProtectedRoute