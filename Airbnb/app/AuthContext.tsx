import React, { createContext, useState, useContext } from 'react';


interface AuthContextProps {
  user: { 
    displayName: string;
    email: string;
    photoURL: string;
  } | null;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<{ 
    displayName: string;
    email: string;
    photoURL: string;
  } | null>(null);

  const signIn = () => {
    // Your sign-in logic here, update the 'user' state upon successful sign-in
    const userData = {
      displayName: 'User Name',
      email: 'user@example.com',
      photoURL: 'https://example.com/avatar.jpg',
    };
    setUser(userData);
  };

  const signOut = () => {
    // Your sign-out logic here, update the 'user' state upon sign-out
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// interface AuthContextProps {
//   userLoggedIn: boolean;
//   login: () => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextProps>({
//   userLoggedIn: false,
//   login: () => {},
//   logout: () => {},
// });

// export const useAuth = () => useContext(AuthContext);

// interface AuthProviderProps {
//   children: React.ReactNode; // Define children prop here
// }

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [userLoggedIn, setUserLoggedIn] = useState(false);

//   const login = () => {
//     // Your login logic here, set userLoggedIn to true upon successful login
//     setUserLoggedIn(true);
//   };

//   const logout = () => {
//     // Your logout logic here, set userLoggedIn to false upon logout
//     setUserLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ userLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;