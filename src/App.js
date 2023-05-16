import React, {useState} from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle.js";
import { temaClaro,temaOscuro } from "./Components/UI/Temas";
import { BtnTema } from "./Components/UI/Index";
import SwitcherTema from "./Components/SwitcherTema";
import { ThemeProvider } from "styled-components";
function App() {
  const [tema,setTema]=useState(true)

  const toggleTema=()=>{
    setTema((tema)=>!tema)
  }
  return (
    <>
      <ThemeProvider theme={tema ? temaClaro:temaOscuro}>
        <GlobalStyle />
        <BtnTema onClick={toggleTema}>
          <SwitcherTema  tema={tema}/>
        </BtnTema>
        <Header />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
