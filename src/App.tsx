import './App.css'
import App from "./components/index"
import { Routes, Route, } from 'react-router-dom'
function Home() {
  

  return (
   <>
       <Routes>
        <Route path="/" element={<App/>} />
      </Routes>
   </>
  );
}

export default Home;