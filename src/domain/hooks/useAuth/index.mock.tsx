import React, { PropsWithChildren, useContext } from 'react';
import { createContext } from 'react';

const AuthContext = createContext({});

function AuthContextProvider({ children }: PropsWithChildren) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: 'id-do-usuario',
          name: 'Nome do Usuário',
          email: 'usuario@dominio.com',
          // Outros dados do usuário conforme necessário
        },
        handleSignInWithGoogle: () => true,
        handleSignOut: () => true,
        isUserLogged: true, // Indica que o usuário está logado durante os testes
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
