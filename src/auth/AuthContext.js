import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useCookies } from "react-cookie";
import axios from "axios";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const fecthUser = async token => {
    try {
      if (token !== undefined) {
        console.log('token', token);
        const response = await axios.get(
          process.env.Server + "/auth/user",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        return response.data;
      }
      return undefined;
    } catch (error) {
      console.log("fetch user: ", error);
    }
  };

  const [cookies] = useCookies(["access-token"]);
  const [user, setUser] = useState(undefined);
  const [previousURL, setPreviousURL] = useState(null);
  const googleSignIn = () => {
    //   const provider = new GoogleAuthProvider();
    //   signInWithPopup(auth, provider)
    //     .then((result) => {
    //       // This gives you a Google Access Token. You can use it to access the Google API.
    //       const user = result.user;
    //       console.log(user.email)
    //       // IdP data available using getAdditionalUserInfo(result)
    //     })
    //     .catch((error) => {
    //       // Handle Errors here.
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // The email of the user's account used.
    //       const email = error.customData.email;
    //       // The AuthCredential type that was used.
    //       const credential = GoogleAuthProvider.credentialFromError(error);
    //       // ...
    //     });
  };
  // const logOut = () => {
  //   signOut(auth);
  // };

  // // onAuthStateChange return callback call is unsubscribe use for cancel listening event

  // }, []);
  useEffect(() => {
    if (cookies["access-token"]) {
      (async () => {
        try {
          const data = await fecthUser(cookies["access-token"]);
          setUser(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        user,
        setUser,
        previousURL,
        setPreviousURL,
        fecthUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
