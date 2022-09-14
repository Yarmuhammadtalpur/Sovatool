const useAuth = (userData) => {
  const User1 = {
    name: "test",
    pass: "test",
  };
  if (userData.name === User1.name && userData.pass === User1.pass) {
    return localStorage.setItem("isLogged", true);
  } else {
    return localStorage.setItem("isLogged", false);
  }
};

export default useAuth;
