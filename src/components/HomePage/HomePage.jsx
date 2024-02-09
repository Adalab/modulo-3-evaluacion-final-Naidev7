import ListCharacters from "../Characters/ListCharacters";
import Filters from "../Filters/Filters";

function HomePage({allData, filterCharacter, foundByFilters, filterVar, setFilterHouse, filterHouse, notFoundCharacter }) {
  return (
    <>
    <Filters filterCharacter={filterCharacter} filterVar={filterVar} setFilterHouse={setFilterHouse} filterHouse={filterHouse}  notFoundCharacter={notFoundCharacter}/>
    
    <ListCharacters allData={foundByFilters}/>
    </>
  )
}

export default HomePage