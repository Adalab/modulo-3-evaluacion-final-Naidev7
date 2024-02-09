

function FilterHouse( { setFilterHouse, filterHouse } ) {
  const handleSelectHouse = (ev)=>{
    setFilterHouse(ev.target.value)
  }

  return (
   <>
    <label htmlFor="select">Selecciona por casa <br /></label>
    <select id="select" onChange={handleSelectHouse} value={filterHouse}>
      <option value="Gryffindor">Godric Gryffindor</option>
      <option value="Slytherin">Salazar Slytherin</option>
      <option value="Hufflepuff">Helga Hufflepuff</option>
      <option value="Ravenclaw">Rowena Ravenclaw</option>
    </select>
   </>
  )
}

export default FilterHouse