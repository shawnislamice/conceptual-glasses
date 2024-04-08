import { useContext } from "react";
import { FirebaseContext } from "../providers/FirebaseProvider";

const useAuth = () => {
  const all = useContext(FirebaseContext);
  return all;
};

export default useAuth;
