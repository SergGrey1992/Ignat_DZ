import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Routes.module.css";

function Header() {
  return (
    <div className={`${style.wrapperMenu}  `}>

          <NavLink className={style.hidden_a} to={"/pre-junior"}>pre-junior</NavLink>
          <NavLink className={style.hidden_a} to={"/junior"}>junior</NavLink>
          <NavLink className={style.hidden_a} to={"/junior-plus"}>junior-plus</NavLink>
        </div>


  );
}

export default Header;
