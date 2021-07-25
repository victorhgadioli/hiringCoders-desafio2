import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import MainPage from "./pages/mainpage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/">
        <MainPage />
      </Route>
    </Switch>
  );
};

export default App;
