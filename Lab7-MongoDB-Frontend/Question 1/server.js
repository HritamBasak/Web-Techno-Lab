const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let db;

async function startServer() {

    await client.connect();
    console.log("MongoDB connected");

    db = client.db("student_notes");

    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });

}

startServer();
app.post("/notes", async (req, res) => {

    const note = {
        title: req.body.title,
        subject: req.body.subject,
        description: req.body.description,
        created_date: new Date()
    };

    const result = await db.collection("notes").insertOne(note);
    res.send(result);

});
app.get("/notes", async (req, res) => {

    const notes = await db.collection("notes").find().toArray();
    res.send(notes);

});
app.put("/notes/:id", async (req, res) => {

    const id = req.params.id;

    const result = await db.collection("notes").updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        }
    );

    res.send(result);

});
app.put("/notes/:id", async (req, res) => {

    const id = req.params.id;

    const result = await db.collection("notes").updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        }
    );

    res.send(result);

});