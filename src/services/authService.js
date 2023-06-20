export const login = (username, password) => {
    // Lógica de autenticación
  
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const logout = () => {
    //localStorage.removeItem('user');
  };
  
  export const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    return user ? true : false;
  };