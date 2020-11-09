import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";
import style from "./Routes.module.css"

export const PATH = {
  PRE_JUNIOR: "/pre-junior",
  JUNIOR: "/junior",
  JUNIOR_PLUS: "/junior-plus"
}

function Routes() {
  return (
    <div  >
      <Switch>
        <Route path={"/"} exact render={() => <Redirect to={"/pre-junior"}/>}/>

        <Route path={PATH.PRE_JUNIOR} exact render={() => <PreJunior/>}/>
        <Route path={PATH.JUNIOR} exact render={() => <Junior/>}/>
        <Route path={PATH.JUNIOR_PLUS} exact render={() => <JuniorPlus/>}/>

        <Route render={() => <Error404/>}/>

      </Switch>
    </div>
  );
}

export default Routes;
