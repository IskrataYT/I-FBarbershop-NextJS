import { MongoClient } from "mongodb"
import bcrypt from "bcrypt"
import { withIronSession } from "next-iron-session"

export default withIronSession(async (req, res) => {
  if (req.method === "POST") {
    const {phone, password } = req.body

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

      // Find the user with the given phone number
      const user = await collection.findOne({ phone })

      // If the user doesn't exist, return an error
      if (!user) {
        return res.status(400).json({ message: "Invalid phone number" })
      }

      // Compare the provided password with the stored one
      const isValidPassword = await bcrypt.compare(password, user.password)

      // If the password is invalid, return an error
      if (!isValidPassword) {
        return res.status(400).json({ message: "Invalid password" })
      }

      // Set the user session
      req.session.set("user", { id: user._id, username: user.name, phonenumber: user.phone })

      // Save the session
      await req.session.save()

      // Send response
      res.status(200).json({ message: "Logged in successfully" })
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
}, {
  password: "H?FCM$$45A4YmhqhPhj9y#j6p$K?G9$CikTbt34Y",
  cookieName: "my-session",
})
