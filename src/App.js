import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import BoysShoe from "./ShoesComponents/Boyshoe/BoysShoe";
import Girlshoes from "./ShoesComponents/GirlShoe/GirlsShoe";
import BabyShoe from "./ShoesComponents/BabyShoe/BabyShoe";
import BoyShoeProduct from "./ShoesComponents/Boyshoe/Boyshoeproduct";
import Girlshoeproduct from "./ShoesComponents/GirlShoe/Girlshoeproduct";
import BabyShoeProduct from "./ShoesComponents/BabyShoe/Babyshoeproduct";



function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}
         

          <Switch>
            <Route exact path={"/"}>
              <Home />
            </Route>
            <Route exact path={"/about"}>
              <About />
            </Route>
            <Route exact path={"/boyshoe"}>
              <BoysShoe />
            </Route>
            <Route exact path={"/boyshoe/:id"}>
              <BoyShoeProduct />
            </Route>
            <Route exact path={"/Girlshoes"}>
              <Girlshoes />
            </Route>
            <Route exact path={"/Girlshoes/:id"}>
              <Girlshoeproduct />
            </Route>
            <Route exact path={"/BabyShoe"}>
              <BabyShoe />
            </Route>
            <Route exact path={"/BabyShoe/:id"}>
              <BabyShoeProduct />
            </Route>
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
