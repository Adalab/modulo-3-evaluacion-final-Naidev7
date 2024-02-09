import ListCharacters from "../Characters/ListCharacters";
import Filters from "../Filters/Filters";

function HomePage({allData, filterCharacter, foundByFilters, filterVar, setFilterHouse, filterHouse, handleClearVars, setFilterGender, filterGender, loading }) {
  return (
    <>
    <Filters filterCharacter={filterCharacter} filterVar={filterVar} setFilterHouse={setFilterHouse} filterHouse={filterHouse} handleClearVars={handleClearVars} setFilterGender={setFilterGender} filterGender={filterGender} />
    
    <ListCharacters allData={foundByFilters} loading={loading}/>
    </>
  )
}

export default HomePage