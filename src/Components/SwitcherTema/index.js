import React from "react";
import themeOff from "../../assets/images/themeOff.svg"
import themeOn from "../../assets/images/themeOn.svg"
import { Icono } from "../UI/Index";

export default ({tema}) =>{
    const claro=<Icono  src={themeOn} alt="tema claro"/>;

    const oscuro=<Icono  src={themeOff} alt="tema oscuro"/>;
    return <>{tema ? oscuro:claro}</>
}

