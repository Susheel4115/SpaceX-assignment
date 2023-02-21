import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
interface Props {
  // props types
  navigator?: string;
}
const Dashboard = ({ navigator = "/dashboard" }: Props) => {
  const [disable, setDisabled] = React.useState(false);
  const navigate = useNavigate();
  const goToDashboard = () => {
    setDisabled(true);
    navigate(navigator);
  };
  return (
    <div>
      <Button disabled={disable} onClick={goToDashboard}>
        Go to Dashboard
      </Button>
    </div>
  );
};

export default Dashboard;
