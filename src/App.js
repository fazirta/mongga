import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LandingPage from "./Landing Page";
import Aktivitas from "./Aktivitas";
import Produk from "./Produk";
import ContactUs from "./Contact Us";
import Komunitas from "./Komunitas";
import Kompetisi from "./Kompetisi";
import AboutUs from "./About Us";
import UpgradingDiri from "./Upgrading Diri";
import UpgradingDiriLengkap from "./Upgrading Diri Lengkap";
import Mentor from "./Mentor";
import Testimoni from "./Testimoni";
import Aktivitas1 from "./Aktivitas 1";
import Aktivitas2 from "./Aktivitas 2";
import Aktivitas3 from "./Aktivitas 3";
import Aktivitas4 from "./Aktivitas 4";
import Aktivitas5 from "./Aktivitas 5";
import Aktivitas6 from "./Aktivitas 6";
import Aktivitas7 from "./Aktivitas 7";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/testimoni">
            <Testimoni />
          </Route>
          <Route path="/mentor">
            <Mentor />
          </Route>
          <Route path="/aktivitas/apprenticeship">
            <Aktivitas1 />
          </Route>
          <Route path="/aktivitas/webinar">
            <Aktivitas2 />
          </Route>
          <Route path="/aktivitas/open-class">
            <Aktivitas3 />
          </Route>
          <Route path="/aktivitas/pelatihan-olimpiade">
            <Aktivitas4 />
          </Route>
          <Route path="/aktivitas/workshop">
            <Aktivitas5 />
          </Route>
          <Route path="/aktivitas/short-class">
            <Aktivitas6 />
          </Route>
          <Route path="/aktivitas/bootcamp">
            <Aktivitas7 />
          </Route>
          <Route path="/aktivitas">
            <Aktivitas />
          </Route>
          <Route path="/produk/kompetisi">
            <Kompetisi />
          </Route>
          <Route path="/produk">
            <Produk />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/komunitas">
            <Komunitas />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
