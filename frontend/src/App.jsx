import usePing from "./hooks/apis/queries/usePing"

function App() {
 
const {isLoading , data} = usePing();

if(isLoading){
  return (
  <>
     Loading.....
  </>
  )
}
  return (
    <>Hello {data.message}</>
  )
}

export default App
