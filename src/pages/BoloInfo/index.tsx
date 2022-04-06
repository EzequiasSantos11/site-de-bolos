import { useEffect } from "react"
import { useParams } from "react-router-dom"

export function BoloInfo(){
  const params = useParams();
  const title =  Object.values(params);
  useEffect(()=>{
    console.log(title);
  },[title])
  return(
    <div>
      <h1>{title}</h1>
      <strong>value,00</strong>
      <p>description</p>
    </div>
  )
}