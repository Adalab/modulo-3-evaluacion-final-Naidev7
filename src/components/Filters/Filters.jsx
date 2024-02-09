import FilterCharacter from "./FilterCharacter";
import FilterHouse from "./FilterHouse";

function Filters({filterCharacter, filterVar, setFilterHouse, filterHouse, notFoundCharacter }) {
  const handleForm = (event)=>{
    event.preventDefault();
  }
  return (
    <form onSubmit={handleForm}>
     <FilterCharacter filterCharacter={filterCharacter} filterVar={filterVar}/>

     <FilterHouse setFilterHouse={setFilterHouse} filterHouse={filterHouse}/>

     {notFoundCharacter}
    </form>
  );
}

export default Filters;
