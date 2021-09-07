import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route name="Home" path="/" exact component={Home} />
          <Route name="Contact" path="/contact" exact component={Contact} />
          <Route name="Projects" path="/projects" exact component={Projects} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
