import React, { useState } from "react";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { clearUser } from "../../reducers/userReducer";
interface Props {
  navigateTo?: string;
}

const Logout = ({ navigateTo = "/login" }: Props) => {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    setDisabled(true);
    await signOut(auth)
      .then(() => {
        dispatch(clearUser());
        navigate(navigateTo);
        //not require causing issues
        // return signOut(auth);
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
