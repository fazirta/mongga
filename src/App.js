import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar';
import LandingPage from './Landing Page';
import Aktivitas from './Aktivitas';
import Produk from './Produk';
import ContactUs from './Contact Us';
import Komunitas from './Komunitas';
import Kompetisi from "./Kompetisi";
import AboutUs from "./About Us";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
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
            <LandingPage/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
