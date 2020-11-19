const formatOwner = (owner) => {
  const dogsExist = owner.dogs && owner.dogs.length > 0;
  return `<div> Name: ${owner.name}</div>
  ${dogsExist ? `<div> Dog(s): ${owner.dogs.map((dog) => dog.name)} </div>` : '<div>No Dogs :(</div>'}
  <img src="${owner.picture}">`
}

const formatOwners = (owners) => {
  return `<div>
    ${owners.map((owner) => formatOwner(owner))}
  </div>`
}

module.exports = formatOwners