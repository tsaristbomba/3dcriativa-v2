import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GlobalStyles } from "./GlobalStyles";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Trabalhos from "./pages/Trabalhos";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/trabalhos" component={Trabalhos} />
          <Route path="/contato" component={Contato} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
