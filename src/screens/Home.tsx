import { useEffect } from "react";
import Logout from "../components/auth/Logout";
import CenterRow from "../components/utils/CenterRow";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";

const Home = () => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps
  const user = useSelector((state: any) => state.user.user);
  // debugger;
  console.log("user-->", user);
  return (
    <div
      style={{
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        width: "50%",
        marginLeft: "25%",
      }}
    >
      <CenterRow>
        {user?.displayName && (
          <>
            <img
              src={user.photoURL}
              alt="Pic"
              style={{ borderRadius: "50%" }}
            />
            <h1>Welcome, {user.displayName}!</h1>
          </>
        )}
        <Dashboard />
        <Logout />
      </CenterRow>
    </div>
  );
};

export default Home;
