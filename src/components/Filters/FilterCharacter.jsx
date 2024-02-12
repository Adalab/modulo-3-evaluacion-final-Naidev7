import PropTypes from "prop-types";

function FilterCharacter({filterCharacter, filterVar }) {
  const handleInput = (ev)=>{
    filterCharacter(ev.target.value);
  }
  return (
   <div className="name">
    <label className="searchName" >Busca por personaje ⚯ ͛</label> <br /> 
      <input type="text" onChange={handleInput} value={filterVar} placeholder="Neville Longbottom" className="inputSearch" /> 
   </div>
  );
}

FilterCharacter.propTypes = {
  filterCharacter : PropTypes.func,
  filterVar : PropTypes.string
}
export default FilterCharacter;
