import { BrowserRouter, Route } from "react-router-dom";
import { BoloInfo } from "../pages/BoloInfo";
import { Home } from "../pages/Home";


export function Routes(){
  return(
    <BrowserRouter>
      <Route path={"/"} exact component={()=><Home/>} />
      <Route path={`/cardapio/:title`} component={()=><BoloInfo/>} />
    </BrowserRouter>
  )
}