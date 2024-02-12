import FilterCharacter from "./FilterCharacter";
import FilterHouse from "./FilterHouse";
import FilterGender from "./FilterGender";

function Filters({filterCharacter, filterVar, setFilterHouse, filterHouse, handleClearVars, setFilterGender, filterGender }) {

  const handleForm = (event)=>{
    event.preventDefault();
  }

  const handleReset = (event)=>{
    event.preventDefault();
    handleClearVars()
  }

  return (
  <>
    <form onSubmit={handleForm} className="formFilters">
     <FilterCharacter filterCharacter={filterCharacter} filterVar={filterVar}/>

     <FilterHouse setFilterHouse={setFilterHouse} filterHouse={filterHouse}/>

    <FilterGender setFilterGender={setFilterGender} filterGender={filterGender}/>

    <button onClick={handleReset} className="resetBtn"> 
    <i className="fa-sharp fa-solid fa-trash fa-flip-horizontal"></i>
    </button>
    </form>
 
  </>
  );
}

export default Filters;
