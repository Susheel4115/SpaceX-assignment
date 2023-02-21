import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "./config/firebase";
import routes from "./config/routes";
import Center from "./components/utils/Center";
import AuthChecker from "./components/auth/AuthChecker";
import { useDispatch } from "react-redux";
import { setUser } from "./reducers/userReducer";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      if (user) {
        //just for name and photo
        // dispatch(setUser(user.displayName));
        // dispatch(setUser(user.photoURL));
        //for all user data
        dispatch(
          setUser({ displayName: user.displayName, photoURL: user.photoURL })
        );
      } else {
        console.log("No user detected");
      }
      setLoading(false);
    });
  }, [dispatch]);

  if (loading)
    return (
      <Center>
        <CircularProgress />
      </Center>
    );

  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                  <AuthChecker>
                    <route.component />
                  </AuthChecker>
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
