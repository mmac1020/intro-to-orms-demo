const formatDog = (dog) => {
  const dogOwnersExist = dog.owners && dog.owners.length > 0;
  return `<div> Name: ${dog.name}</div>
  <div> Age: ${dog.age}</div>
  ${dogOwnersExist ? `<div> Owner(s): ${dog.owners.map((owner) => owner.name)} </div>` : 'No Owner :('}
  <img src="${dog.picture}">`
}

const formatDogs = (dogs) => {
  console.log(dogs.owners);
  return `<h1> All dogs!!! </h1>
  <div>
    ${dogs.map((dog) => formatDog(dog))}
  </div>
  `
}

module.exports = {
  formatDog,
  formatDogs
}