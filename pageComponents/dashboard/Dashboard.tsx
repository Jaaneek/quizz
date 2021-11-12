import { Button } from "@mui/material";
import withPrivateRoute from "hoc/withPrivateRoute";
import { useRouter } from "next/router";
import { useAuth } from "reactfire";

const Dashboard = () => {
  const auth = useAuth();
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => auth.signOut()}>logout</Button>
      <Button onClick={() => router.push("/game")}>game</Button>
    </div>
  );
};

export default withPrivateRoute(Dashboard);
