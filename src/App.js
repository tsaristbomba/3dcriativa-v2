import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Trabalhos from "./pages/Trabalhos";
import Success from "./component/Success";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/trabalhos" component={Trabalhos} />
        <Route path="/contato" component={Contato} />
        <Route path="/sucesso" component={Success} />
      </Switch>
    </Router>
  );
}

export default App;
