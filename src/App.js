import "./App.css";
import Header from "./pages/Header";
import VideoCard from "./pages/highlights/VideoCard";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import MostRuns from "./pages/runs/MostRuns";
import Team from "./pages/teams/Team";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./pages/footer/Footer";
import Matches from "./pages/matches/Matches";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/mostRuns">
        <Header />
            <Nav />
            <MostRuns />
            <Footer/>
          </Route>
          <Route path="/teams">
          <Header />
          <Nav />
          <Team />
          <Footer/>
          </Route>
          <Route path="/matches">
          <Header />
          <Nav />
          <Matches/>
          <Footer/>
          </Route>
          <Route path="/">
          <Header />
          <Nav />
          <Home />
          <VideoCard />
          <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
