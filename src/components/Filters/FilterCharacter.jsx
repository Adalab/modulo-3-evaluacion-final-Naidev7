function FilterCharacter({filterCharacter, filterVar }) {
  const handleInput = (ev)=>{
    filterCharacter(ev.target.value);
  }
  return (
    <>
      <label >Busca por personaje <br /> </label>
      <input type="text" onChange={handleInput} value={filterVar} /> <br />
    </>
  );
}

export default FilterCharacter;
