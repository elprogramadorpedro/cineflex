import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./CSS/reset.css";
import "./CSS/styles.css";
import ListMovies from "./Components/ListMovies";
import GetMovie from "./Components/GetMovie";
import ChooseSeat from "./Components/ChooseSeat";
import Sucesso from "./Components/Sucesso";

function App() {
    const [request, setRequest] = useState({});
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

         <Route path="/assentos/:idSessao" exact>
                        <ChooseSeat
                            request={request}  setRequest={setRequest}
                        />
          </Route>

          <Route path="/sucess" exact>
                        <Sucesso request={request}/>
                    </Route>
0
        </Switch>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
