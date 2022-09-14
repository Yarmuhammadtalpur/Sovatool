import { useSelector } from "react-redux";
const user1 = {
  name: "test",
  pass: "test",
};

const useAuth = () => {
  // const { user } = useSelector((state) => state.user);

  // if (user.name === user1.name && user.pass === user1.pass) {
  // }
  return localStorage.setItem("isLogged", true);
};

export default useAuth;
