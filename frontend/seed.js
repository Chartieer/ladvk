// require('dotenv-safe').config()
import  { Seeder } from 'mongo-seeding';
import path from 'path';
import conf from './src/config/config';

console.log('SEEDER', conf.db);

const config = {
  database: conf.db,
  inputPath: path.resolve(__dirname, './test/data'),
  dropDatabase: true
};

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(path.resolve('./test/data'));

const main = async () => {
  try {
    await seeder.import(collections);
    console.log('Seed complete!');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
};

main();
