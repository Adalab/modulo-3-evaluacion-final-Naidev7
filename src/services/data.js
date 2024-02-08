function getDataAppi (){
 return  fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then((response)=> response.json())
    .then((data)=>{
        const dataResult = data.map((person)=>{
            return{
                name: person.name,
                gender: person.gender,
                image: person.image,
                species: person.species,
                alive: person.alive,
                house: person.house
            }
        })
        console.log('dataResult: ', dataResult)
       return dataResult
    })
}
export default getDataAppi;



