const { db, Dog, Owner } = require('./server/database/db');

const seed = async () => {
  await db.sync({ force: true });
  console.log('DB synced!!!');
  const dog1 = await Dog.create({
    name: 'Charlie',
    age: 1,
    picture:
      'https://i.insider.com/5df126b679d7570ad2044f3e?width=1100&format=jpeg&auto=webp',
  });

  const dog2 = await Dog.create({
    name: 'Cooper',
    age: 2,
    picture:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-dog-royalty-free-image-505534037-1560893368.jpg?crop=0.509xw:1.00xh;0.314xw,0&resize=768:*',
  });

  const dog3 = await Dog.create({
    name: 'Rufus',
    age: 10,
    picture:
      'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d',
  });

  const owner1 = await Owner.create({
    name: 'Mac',
    picture: 'https://ca.slack-edge.com/T2VHPBHA5-U016T7X8C22-53b2b14467b3-512',
  });

  const owner2 = await Owner.create({
    name: 'Joe',
    picture: 'https://ca.slack-edge.com/T024FPYBQ-U01V8M55APQ-78a7527e091e-512',
  });

  const owner3 = await Owner.create({
    name: 'Lindsay',
    picture: 'https://ca.slack-edge.com/T024FPYBQ-U01J77R7LDT-5683c01ddf38-512',
  });
  await dog1.setOwners([owner1, owner2]);
  await dog3.setOwners(owner3);

  // // Set overrides all previous associations with the ones given
  // await dog1.setOwners([owner1, owner2])

  // // Add adds a new association
  // await dog1.addOwner(owner1);
  // await dog1.addOwner(owner2);
  //MAGIC METHODS
  console.log(Object.getPrototypeOf(owner1)); //displays magic methods!

  // Close our connection to the db
  await db.close();
};

seed();
