import { useEffect } from "react"
import { pingApi } from "./apis/ping";

function App() {

 useEffect(()=>{
  pingApi();
 },[]);

  return (
    <>Hello</>
  )
}

export default App
