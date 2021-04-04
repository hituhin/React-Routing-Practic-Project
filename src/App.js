import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotMath from "./Components/NotMatch/NotMath";
import FriendDetail from "./Components/FriendDetail/FriendDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/friend/:friendId">
          <FriendDetail />
        </Route>
        <Route path="*">
          <NotMath />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
