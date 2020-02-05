import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
/*Navigation Component*/
<<<<<<< HEAD
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Gallery from "./components/pages/gallery";
import Speakers from "./components/pages/speakers";
import Schedule from "./components/pages/schedule";
import Venue from "./components/pages/venue";
import Hotels from "./components/pages/hotels";
import Supporters from "./components/pages/supporters";
import Buytickets from "./components/pages/buytickets";
import UserListing from "./components/users/listing";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
=======
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Gallery from "./components/gallery";
import Speakers from "./components/speakers";
import Schedule from "./components/schedule";
import Venue from "./components/venue";
import Hotels from "./components/hotels";
import Supporters from "./components/supporters";
import Buytickets from "./components/buytickets";
import UserListing from "./components/users/listing";
>>>>>>> 6f03dcf58d3d2ae6dfef722cdd41bd9272ab1a10
// import Dashboard from "./components/users/dashboard/dashboard";

/*Navigation Component*/
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <main id="main">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/speakers"><Speakers /></Route>
            <Route path="/schedule"><Schedule /></Route>
            <Route path="/venue"><Venue /></Route>
            <Route path="/hotels"><Hotels /></Route>
            <Route path="/gallery"><Gallery /></Route>
            <Route path="/supporters"><Supporters /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/buytickets" forceRefresh={true}><Buytickets /></Route>
            <Route path="/user_listing"><UserListing /></Route>
            <Route path="/dashboard"><UserListing /></Route>
         </Switch>
         </main>
         <Footer />
       </Router>
    </div>
  );
}

export default App;
