const { db, Dog, Owner } = require('./server/database/db');

const seed = async () => {
  await db.sync({ force: true });
  await db.close();
};

seed();
