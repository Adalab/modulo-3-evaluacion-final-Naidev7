import "../styles/_App.scss";
import { Route, Routes } from "react-router-dom";
import dataResult from "../services/data";
import { useEffect, useState } from "react";
import getDataAppi from "../services/data";
import Filters from "./Filters/Filters";
import HomePage from "../components/HomePage/HomePage";

function App() {
  const [allData, setAllData] = useState([]);

  useEffect(()=>{
    getDataAppi().then((dataResult)=>{
      setAllData(dataResult)
    })
  }, [])

  
  
  return (
    <div>
      <h1>HARRY POTTER</h1>
      <Routes>
        <Route path="/" element={<HomePage allData={allData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
