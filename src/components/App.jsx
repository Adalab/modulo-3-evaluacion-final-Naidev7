import "../styles/_App.scss";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";
import dataResult from "../services/data";
import { useEffect, useState } from "react";
import getDataAppi from "../services/data";
import Filters from "./Filters/Filters";
import HomePage from "../components/HomePage/HomePage";
import Detail from "./Detail/Detail";
import Header from "./Header/Header";



function App() {
  const [allData, setAllData] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState("");
  const [filterGender, setFilterGender] = useState("All");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    getDataAppi(filterHouse).then((dataResult) => {
      setAllData(dataResult);
      setLoading(false)
    });
  }, [filterHouse]);

  const foundByFilters = allData
    .filter((character) =>
      character.name.toLowerCase().includes(filterCharacter.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((eachGender) => filterGender === "All" || eachGender.gender === filterGender);
  


  const { pathname } = useLocation();
  const routeData = matchPath("/character/:idUser", pathname);
  const idUser = routeData !== null ? routeData.params.idUser : null;
  const characterData = allData.find((character) => character.id === idUser);
  console.log(routeData)

  const handleClearVars = () => {
    setFilterCharacter("");
    setFilterGender("All");
    setFilterHouse("Gryffindor");
  };


  return (
    <div className="body">
     <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              allData={allData}
              filterCharacter={setFilterCharacter}
              foundByFilters={foundByFilters}
              filterVar={filterCharacter}
              setFilterHouse={setFilterHouse}
              filterHouse={filterHouse}
              handleClearVars={handleClearVars}
              setFilterGender={setFilterGender}
              filterGender={filterGender}
              loading={loading}
            />
          }
        />

        <Route
          path="/character/:idUser"
          element={<Detail characterData={characterData} routeData={routeData}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
