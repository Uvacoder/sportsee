import { FC, useContext, useEffect } from "react";
import Layout from "../components/Layout";
import UserContext from "../contexts/UserContext";
import AuthContext from "../contexts/AuthContext";

const Home: FC = () => {
  const { user, getUser, isLoading } = useContext(UserContext);
  const { userId } = useContext(AuthContext);

  console.log("user", user);

  useEffect(() => {
    if (userId) {
      getUser(userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return <Layout>{isLoading === false && user?.userInfos.firstName}</Layout>;
};

export default Home;
