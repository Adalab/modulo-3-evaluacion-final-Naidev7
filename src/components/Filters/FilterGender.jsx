function FilterGender({ setFilterGender, filterGender }) {
  const handleGender = (event) => {
    setFilterGender(event.target.value);
  };

  return (
    <div> 
      <label> 
        <p  className="genderSection">Seleciona el genero </p>
        <input
          type="radio"
          value="male"
          checked={filterGender === "male"}
          onClick={handleGender} className="inputGender"
        />{" "}
        Male
        <input
          type="radio"
          value="female"
          checked={filterGender === "female"}
          onClick={handleGender} className="inputGender"
        />
        Female
        <input type="radio" value="All" checked={filterGender === "All"} onClick={handleGender} className="inputGender"/>
        All
      </label>
    </div>
  );
}

export default FilterGender;
