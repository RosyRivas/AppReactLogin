import { createContext, useContext} from "react";


const authContext = createContext();
export const login = (username, password) => {  
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const logout = () => {
    localStorage.removeItem('user');
  };
  
  export const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    return user ? true : false;
  };
  export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
  };

  export function AuthService({ children }) {
    return (
      <authContext.Provider
        value={{
          login,
          logout, 
        }}
      >
        {children}
      </authContext.Provider>
    );
  }