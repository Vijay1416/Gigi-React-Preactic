import { BrowserRouter as Router, Routes, Route, Link, Switch, browserHistory } from 'react-router-dom';
 
import "./componant/css/style.scss";
import "./componant/css/line-awesome.min.css";
import Navbar from './componant/pages/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Home from './componant/pages/Home';
import ScrollButton from './componant/scrolltopbtn/Scrolltopbutton';
import About from './componant/pages/About';
import Plan from './componant/pages/Plan';
import Dashboard from './componant/Dashboard/Dashboard';
import Investor from './componant/investor/Investor';
import Faq from './componant/faq/Faq';
import Policy from './componant/policy/Policy';

 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/plan" component={Plan} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/investor" component={Investor} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/policy" component={Policy} />
        </Switch>
        <ScrollButton />
      </Router>
    </>

  );
};  

export default App;
