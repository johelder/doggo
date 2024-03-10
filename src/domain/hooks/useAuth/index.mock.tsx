import React, { PropsWithChildren, useContext, useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext({});

function AuthContextProvider({ children }: PropsWithChildren) {
  const [isUserLogged, setIsUserLogged] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user: {
          id: 'rUyn6W4rpahiTukQ8PsB6A7R5O42',
          name: 'doggo tester',
          email: 'doggo.app.tester@gmail.com',
          favorites: [],
          photo:
            'https://lh3.googleusercontent.com/a/ACg8ocI3AuLEVoqBA6gYTJMMbMxrMKBr9DUMRj2oOIyDmqiA=s96-c',
        },
        handleSignInWithGoogle: () => setIsUserLogged(true),
        handleSignOut: () => setIsUserLogged(false),
        isUserLogged,
        isLoadingSignIn: false,
        isLoadingAuthState: false,
        setIsLoadingAuthState: () => true,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthContextProvider, useAuth };
