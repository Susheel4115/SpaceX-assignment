import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, Providers } from "../../config/firebase";
import { Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Center from "../utils/Center";

interface Props {}

const AuthContainer = (props: Props) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const signInWithGoogle = () => {
    setDisabled(true);
    signInWithPopup(auth, Providers.google)
      .then(() => {
        setDisabled(false);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.code + ": " + error.message);
        setDisabled(false);
      });
  };

  const signInWithFacebook = () => {
    setDisabled(true);
    signInWithPopup(auth, Providers.facebook) //facebook
      .then(() => {
        setDisabled(false); //enable button
        navigate("/"); //navigate to home
      })
      .catch((error) => {
        setErrorMessage(error.code + ": " + error.message);
        setDisabled(false);
      });
  };

  return (
    <Center height={"auto"}>
      <Button
        startIcon={<GoogleIcon />}
        size="large"
        disabled={disabled}
        variant="contained"
        onClick={signInWithGoogle}
        style={{
          backgroundColor: "#db4437",
          color: "white",
          marginRight: "10px",
        }}
      >
        Sign In With Google
      </Button>
      <Button
        startIcon={<FacebookIcon />}
        size="large"
        disabled={disabled}
        variant="contained"
        onClick={signInWithFacebook}
        style={{ backgroundColor: "#3b5998", color: "white" }}
      >
        Sign In With Google
      </Button>
      <Typography sx={{ mt: 2 }} color={"red"}>
        {errorMessage}
      </Typography>
    </Center>
  );
};

export default AuthContainer;
