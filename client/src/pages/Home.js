import BottomNav from '../components/BottomNav';
import NavBar from '../components/NavBar';
import {Helmet} from "react-helmet";
import Login from '../components/user/Login';

const Home = () => {
  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
              
            </Helmet>
      <Login />
      <NavBar />
      <BottomNav />
    </>
  );
};

export default Home;
