import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar';
import LandingPage from './Landing Page';
import Aktivitas from './Aktivitas';
import Produk from './Produk';
import ContactUs from './Contact Us';
import Komunitas from './Komunitas';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/aktivitas">
            <Aktivitas />
          </Route>
          <Route path="/produk">
            <Produk />
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
