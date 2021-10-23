import { MongoClient } from "mongodb";
import {config} from '../config'

const db = new MongoClient(config.databaseURL);
db.connect(err => {
  if(err) throw err;
  console.log("Connected To MongoDB");
});

export default db;