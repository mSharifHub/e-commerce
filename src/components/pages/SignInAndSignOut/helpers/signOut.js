import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../providers/contexts/userContext";

export default function useSignOut(onSignOut) {
  const { dispatch } = useUser();
  const navigate = useNavigate();

  return () => {
    setTimeout(() => {
      dispatch({ type: "LOG_OUT" });
      navigate("/");
      if (onSignOut) {
        onSignOut();
      }
    }, 800);
  };
}
