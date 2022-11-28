import Ads from "../../components/ads/Ads";
import Display from "../../components/display/Display";
import Nav from "../../components/nav/Nav";
import SideLeft from "../../components/sideLeft/SideLeft";
import "./HomePage.css";

// import "./HomePage.css";
function HomePage() {
  return (
    <>
      <div className="homePage">
        <Nav />
        <div className="container">
          <SideLeft />
          <Display />
          <Ads />
        </div>
      </div>
    </>
  );
}

export default HomePage;
