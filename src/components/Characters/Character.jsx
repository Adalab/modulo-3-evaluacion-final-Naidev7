import placeholderImg from "../../images/placeholder.png";
import hulfflepuf from "../../images/hulfflepuf.png";
import griffindor from "../../images/griffindor.jpg";
import ranvenclaw from "../../images/ranvenclaw.png";
import slythering from "../../images/slythering.png";

function Character({ allData }) {
  return (
    <div className="book">
      <h4 className="name">{allData.name}</h4>
      <h5 className="specie">{allData.species}</h5>
      <h5>{allData.patronus}</h5>
    {allData.house === "Gryffindor" && (
        <img
          className="house"
          src={griffindor}
          alt="Gryffindor"
        />
      )}
      {allData.house === "Hufflepuff" && (
        <img
          className="house"
          src={hulfflepuf}
          alt="Hufflepuff"
        />
      )}
      {allData.house === "Slytherin" && (
        <img
          className="house"
          src={slythering}
          alt="Slytherin"
        />
      )}
      {allData.house === "Ravenclaw" && (
        <img
          className="house"
          src={ranvenclaw}
          alt="Ravenclaw"
        />
      )}
     
      <div className="cover">
        <img
          src={allData.image === "" ? placeholderImg : allData.image}
          alt={allData.name}
          className="characterImg"
        />
      </div>
    </div>
  );
}

export default Character;
