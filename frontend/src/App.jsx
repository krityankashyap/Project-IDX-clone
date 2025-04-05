import { Route, Routes } from "react-router-dom";
import { CreateProject } from './pages/CreateProject.jsx'; 


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<CreateProject />}></Route>
    </Routes>
  )
}

export default App
