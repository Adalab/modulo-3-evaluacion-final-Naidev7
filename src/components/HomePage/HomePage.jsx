import ListCharacters from "../Characters/ListCharacters";
import Filters from "../Filters/Filters";

function HomePage({allData}) {
  return (
    <>
    <Filters/>
    <ListCharacters allData={allData}/>
    </>
  )
}

export default HomePage