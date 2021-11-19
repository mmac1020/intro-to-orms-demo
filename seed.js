const { db, Dog, Owner } = require('./server/database');

// be used to create mock data in our database

const seed = async () => {
  await db.sync({ force: true });

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
    age: 0.5,
    picture:
      'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d',
  });

  const owner1 = await Owner.create({
    name: 'Mac',
    picture: 'https://ca.slack-edge.com/T2VHPBHA5-U016T7X8C22-53b2b14467b3-512',
  });

  const owner2 = await Owner.create({
    name: 'Zach',
    picture: 'https://ca.slack-edge.com/T024FPYBQ-UF849GR1D-ce1e3b2c50c0-512',
  });

  const owner3 = await Owner.create({
    name: 'Sey',
    picture: 'https://ca.slack-edge.com/T024FPYBQ-U01U52GE9HD-ad844432bdf3-72',
  });

  // option 1
  // 'set' method overrides all previous associations
  // owner1.setDogs([dog1])

  // option 2
  // Add dog appends a dog association
  await owner1.addDog(dog1);
  // console.log(owner1.hasDog('dog1'))
  console.log(await owner1.hasDog(dog1));
  await dog1.addOwner(owner2);
  await dog1.addOwner(owner3);

  // This will display our magic methods!
  console.log(Object.getPrototypeOf(owner3));

  await db.close();
};

seed();
