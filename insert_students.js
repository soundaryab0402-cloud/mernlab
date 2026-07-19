import { MongoClient } from "mongodb";
import fs from "fs";

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

await client.connect();

console.log("Connected Successfully");

const db = client.db("studentdb");

const collection = db.collection("students");

const data = JSON.parse(
    fs.readFileSync("students.json")
);

const result = await collection.insertMany(data);

console.log(
    `${result.insertedCount} documents inserted`
);

await client.close();