const formatOwner = (owner) => {
  return `<div> Name: ${owner.name}</div>
  <img src="${owner.picture}">`
}

const formatOwners = (owners) => {
  return `<div>
    ${owners.map((owner) => formatOwner(owner))}
  </div>`
}

module.exports = formatOwners