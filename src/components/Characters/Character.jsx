import placeholderImg from "../../images/placeholder.png";

function Character({ allData }) {
  return (
    <div className="book">
      <h4 className="name">{allData.name}</h4> 
      <h5 className="specie">{allData.species}</h5>
      <div className="cover">
        <img
          src={allData.image === "" ? placeholderImg : allData.image}
          alt={allData.name} className="characterImg"
        />
      </div>
    </div>
  );
}

export default Character;
