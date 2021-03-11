const { db, Dog, Owner } = require('./server/database/db');

const seed = async () => {
  // Connect to our db and check our tables.
  // force: true says drop our old tables, and make new ones
  await db.sync({ force: true });
  console.log('Database has synced');
  // Creating some dogs
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

  const mac = await Owner.create({
    name: 'mac',
    picture: 'https://ca.slack-edge.com/T2VHPBHA5-U016T7X8C22-53b2b14467b3-512',
  });

  const sarah = await Owner.create({
    name: 'sarah',
    picture: 'https://ca.slack-edge.com/T024FPYBQ-ULD8TQPU2-ad9fb321ffd1-512',
  });

  const jackie = await Owner.create({
    name: 'jackie',
    picture: 'https://ca.slack-edge.com/T024FPYBQ-U0181CJPZ61-424e3eeac86f-512',
  });

  await dog1.addOwner(mac);
  await sarah.addDogs([dog1, dog2]);

  // this shos you the magic methods
  console.log(dog1.__proto__);
};

seed();
