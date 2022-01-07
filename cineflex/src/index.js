import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./CSS/reset.css";
import "./CSS/styles.css";
import ListMovies from "./Components/ListMovies";
import GetMovie from "./Components/GetMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <ListMovies />
          </Route>

          <Route path="/sessoes/:idFilme" exact>
                        <GetMovie />
         </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
