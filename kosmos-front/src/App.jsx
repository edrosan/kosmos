import { useState } from "react";
import { useEffect } from "react";
import { Link, Route, Switch } from "wouter";
import { NavBar } from "./components/NavBar";
import { Login } from "./views/Login";
import { About } from "./views/About";
import { Agency } from "./views/Agency";
import { Home } from "./views/Home";
import { KosmosLoading } from "./components/KosmosLoading";
import { Logros } from "./Logros";

function App() {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 2000);
  }, []);

  return (
    <div className=" min-h-screen flex flex-col">
      <KosmosLoading loading={pageLoading} />

      <NavBar />

      



      <Switch >
        <Route path="/"  ><Home /></Route>
        <Route path="/about" ><About /></Route>
        <Route path="/login" ><Login /></Route>
        <Route path="/singup" >Kosmos SingUp</Route>
        <Route path="/agency" ><Agency></Agency></Route>
        <Route path="/logros" ><Logros/></Route>

        <Route>404: No such page!</Route>
      </Switch>


    </div>

  );
}

export default App;
