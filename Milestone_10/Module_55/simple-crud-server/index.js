const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mofakhkharulislammaruf:mofakhkharulislammaruf@cluster0.dysq3yj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        const database = client.db('usersdb') // Create a database
        const usersCollection = database.collection('users') //create a collection for database

        app.get('/users', async(req, res)=>{
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.post('/users', async (req, res) => {
            console.log('Data in the server', req.body)
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser) //insert data to the database
            res.send(result)
        })
        
        app.delete('/users/:id', async(req, res)=>{
            console.log(req.params)
        })

        await client.db('admin').command({ ping: 1 })
        console.log('Pinged your deployment. You successfully connected to MongoDB')
    }
    finally {

    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const port = process.env.PORT || 3000;

// const { MongoClient, ServerApiVersion } = require('mongodb');

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB URI
// const uri = "mongodb+srv://mofakhkharulislammaruf:mofakhkharulislammaruf@cluster0.dysq3yj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // MongoClient setup
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// // Connect to MongoDB
// async function run() {
//     try {
//         console.log("🔄 Connecting to MongoDB...");
//         await client.connect();
//         console.log("✅ Connected to MongoDB client.");

//         const result = await client.db('admin').command({ ping: 1 });
//         console.log('🎉 Pinged your deployment. You successfully connected to MongoDB:', result);
//     } catch (error) {
//         console.error("❌ MongoDB connection error:", error);
//     }
// }
// run();

// // Routes
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// // Start server
// app.listen(port, () => {
//     console.log(`🚀 Server is running at http://localhost:${port}`);
// });
