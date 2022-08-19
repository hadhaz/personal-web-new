import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { uiActions } from "./ui-slice";
import { authActions } from "./auth-slice";
import { auth } from "../config/firebase";

// Available Actions:
// 1. register (with email and password)
// 2. signInWithGoogle (continue with google auth provider)
// 3. logout
// 4. signIn (with email and password)
// 5. verifyIsLoggedIn (listen auth state change)

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return async dispatch => {
    const sendRequest = async () => {
      const response = await signInWithPopup(auth, provider);
      return {
        email: response.user.email,
      };
    };

    try {
      const { email } = await sendRequest();
      dispatch(authActions.login({ email }));
      dispatch(uiActions.setSuccess());
    } catch (error) {
      console.log(error);
      dispatch(authActions.logout());
    }
  };
};

export const verifyIsLoggedIn = () => {
  return dispatch => {
    dispatch(authActions.setLoading(true));
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(
          authActions.login({
            email: user.email,
          })
        );

        dispatch(uiActions.resetSuccess());
      } else {
        console.log("USER NOT FOUND");
      }
    });

    unsubscribe();
    dispatch(authActions.setLoading(false));

    return unsubscribe;
  };
};

export const signIn = (email, password) => {
  return async dispatch => {
    const sendRequest = async () => {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const { email: emailUser } = response.user;
      dispatch(authActions.login({ email: emailUser }));
    };

    try {
      await sendRequest();
      dispatch(uiActions.setSuccess());
    } catch (error) {
      dispatch(uiActions.setError(error.message));
    }
  };
};

export const register = (email, password) => {
  return async dispatch => {
    const sendRequest = async () => {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { email: emailUser } = response.user;

      dispatch(authActions.login({ email: emailUser }));
    };

    try {
      await sendRequest();
      dispatch(uiActions.setSuccess());
    } catch (error) {
      dispatch(uiActions.setError(error.message));
    }
  };
};

export const logout = () => {
  return async dispatch => {
    await signOut(auth);
    dispatch(authActions.logout());
  };
};
