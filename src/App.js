import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import './App.css';
import Navv from "./components/header/Navv"
import WhatsApp from "./components/header/WhatsApp"
import Home from "./components/main"
import FooterPage from "./components/Footer/footer"
import About from "./components/pages/About"
import Features from "./components/pages/Features"
import Pages from "./components/pages/Pages"
import Elements from "./components/pages/Elements"
import Blogs from "./components/pages/Blogs"

function App() {
  return (

    <Router>
    <div className="App">
      <WhatsApp />
      <Navv/>
      <Switch>
        <Route  exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/features" component={Features}></Route>
        <Route path="/pages" component={Pages}></Route>
        <Route path="/elements" component={Elements}></Route>
        <Route path="/blogs" component={Blogs}></Route>

      </Switch>
      <FooterPage/>
     
    </div>
    </Router>
  );
}

export default App;
