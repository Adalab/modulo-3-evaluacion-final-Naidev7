

function FilterGender( { setFilterGender, filterGender } ) {
  const handleGender = (event)=>{
    setFilterGender(event.target.value)
  }

  return (
    <>
    <br />
    <label>Seleciona el genero </label> <br />
    <input type="radio" value="male" checked={filterGender === "male" } onClick={handleGender}/> Male
    <input type="radio" value="female" checked={filterGender === "female"} onClick={handleGender}/>Female
    </>
  )
}

export default FilterGender