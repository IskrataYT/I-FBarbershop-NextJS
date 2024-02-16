import { MongoClient } from "mongodb"
import bcrypt from "bcrypt"
import { withIronSession } from "next-iron-session"

export default withIronSession(async (req, res) => {
  // You would have your own logic to authenticate the user here.
  if (req.method === "POST") {
    const { name, phone, password } = req.body
    // Connection URL
    const url = "mongodb+srv://root:EHp3wLINM3dPT6x4@db1.yr4dzh4.mongodb.net/?retryWrites=true&w=majority"

    // Database Name
    const dbName = "myproject"

    // Create a new MongoClient
    const client = new MongoClient(url)

    try {
      // Connect to the MongoDB cluster
      await client.connect()

      // Establish and verify connection
      await client.db("admin").command({ ping: 1 })
      console.log("Connected successfully to server")

      // Connect to the desired database
      const db = client.db(dbName)

      // Get the users collection
      const collection = db.collection("users")

      // Hash the password
      const saltRounds = 10
      const hashedPassword = await bcrypt.hash(password, saltRounds)

      // Insert a document into the collection
      const result = await collection.insertOne({ name, phone, password: hashedPassword })
      // Set the user session
      req.session.set("user", { id: 1, username: name, phonenumber: phone})

      // Save the session
      await req.session.save()
      console.log(`Successfully inserted item with _id: ${result.insertedId}`)

      // Send response
      res.status(200).json({ message: "User registered successfully" })
    } catch (err) {
      console.log(err.stack)
      res.status(500).json({ message: "An error occurred" })
    }

    // Close connection
    client.close()
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: "Method not allowed" })
  }



  // Send a success response
  res.status(200).json({ message: "Logged in successfully" })
}, {
  password: "H?FCM$$45A4YmhqhPhj9y#j6p$K?G9$CikTbt34Y",
  cookieName: "my-session",
})



  
  