import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "../pages/Home";


export function Routes(){
  return(
    <BrowserRouter>
      <Route path={"/"} exact component={()=><Home/>} />
    </BrowserRouter>
  )
}