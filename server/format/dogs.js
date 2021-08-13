const formatDog = (dog) => {
  return `<div> Name: ${dog.name}</div>
  <div> Age: ${dog.age}</div>
  <div> Owner(s): ${
    dog.owners ? dog.owners.map((owner) => owner.name) : 'None'
  } </div>
  <img src="${dog.picture}">`;
};

const formatDogs = (dogs) => {
  return `<h1> All dogs!!! </h1>
  <div>
    ${dogs.map((dog) => formatDog(dog))}
  </div>
  `;
};

module.exports = {
  formatDog,
  formatDogs
}
