import React, { useState } from "react";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { clearUser } from "../../reducers/userReducer";
import { GoogleAuthProvider } from "firebase/auth";
interface Props {
  navigateTo?: string;
}

const Logout = ({ navigateTo = "/login" }: Props) => {
  const [disabled, setDisabled] = useState(false);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    setDisabled(true);
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
        provider.addScope("https://www.googleapis.com/auth/userinfo.email");
        provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
        navigate(navigateTo);
        return signOut(auth);
      })
      .catch((error) => {
        console.error(error);
        setDisabled(false);
      });
  };

  return (
    <div>
      <Button disabled={disabled} onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
