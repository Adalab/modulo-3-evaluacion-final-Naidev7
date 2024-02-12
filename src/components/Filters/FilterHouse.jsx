

function FilterHouse( { setFilterHouse, filterHouse } ) {
  const handleSelectHouse = (ev)=>{
    setFilterHouse(ev.target.value)
  }

  return (
   <div>
     <label htmlFor="select" className="searchName">Selecciona por casa<br /></label>
    <select id="select" onChange={handleSelectHouse} value={filterHouse} className="inputSearch">
      <option value="Gryffindor">Godric Gryffindor 🦁</option>
      <option value="Slytherin">Salazar Slytherin 🐍</option>
      <option value="Hufflepuff">Helga Hufflepuff 🦡</option>
      <option value="Ravenclaw">Rowena Ravenclaw 🦅</option>
    </select>
   </div>
  )
}

export default FilterHouse