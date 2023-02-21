import Home from "../screens/Home";
import Login from "../screens/Login";
import SpaceX from "../screens/SpaceX";
interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "",
    component: Home,
    name: "Home Screen",
    protected: true,
  },
  {
    path: "/dashboard",
    component: SpaceX,
    name: "SpaceX Screen",
    protected: true,
  },
  {
    path: "/login",
    component: Login,
    name: "Login Screen",
    protected: false,
  },
];

export default routes;
