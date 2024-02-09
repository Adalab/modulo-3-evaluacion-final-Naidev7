import "../styles/_App.scss";
import { Route, Routes } from "react-router-dom";
import dataResult from "../services/data";
import { useEffect, useState } from "react";
import getDataAppi from "../services/data";
import Filters from "./Filters/Filters";
import HomePage from "../components/HomePage/HomePage";

function App() {
  const [allData, setAllData] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  let notFoundCharacter =  ''

  useEffect(() => {
    getDataAppi(filterHouse).then((dataResult) => {
      setAllData(dataResult);
    });
  }, [filterHouse]);

  let foundByFilters = allData.filter((character) => character.name.toLowerCase().includes(filterCharacter.toLowerCase()) 
  );
  if(foundByFilters.length === 0){
    return notFoundCharacter = 'Ups, no hemos encontrado el personaje que deseas, prueba con otro'
  }


  return (
    <div>
      <h1>HARRY POTTER</h1>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              allData={allData}
              filterCharacter={setFilterCharacter}
              foundByFilters={foundByFilters}
              notFoundCharacter={notFoundCharacter}
              filterVar={filterCharacter}
              setFilterHouse={setFilterHouse} 
              filterHouse={filterHouse}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
