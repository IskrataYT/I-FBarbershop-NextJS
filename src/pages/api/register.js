import { MongoClient } from "mongodb"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const handleRegister = async (req, res) => {
  if (req.method === "POST") {
    const { name, phone, password } = req.body
    const url = process.env.MONGODB_URL
    const dbName = process.env.DB_NAME
    const client = new MongoClient(url)

    try {
      await client.connect()
      console.log("Connected successfully to server")
      const db = client.db(dbName)
      const collection = db.collection("users")

      // Check if a user with the provided phone number already exists
      const existingUser = await collection.findOne({ phone })
      if (existingUser) {
        return res.status(400).json({ message: "A user with this phone number already exists" })
      }

      const saltRounds = 10
      const hashedPassword = await bcrypt.hash(password, saltRounds)
      const result = await collection.insertOne({ name, phone, password: hashedPassword })
      console.log(`Successfully inserted item with _id: ${result.insertedId}`)

      // Create JWT
      const user = { id: result.insertedId, username: name, phonenumber: phone }
      const secretKey = process.env.SECRET_KEY // Replace with your actual secret key
      const token = jwt.sign(user, secretKey, { expiresIn: "1h" })

      // Send JWT in response
      res.status(200).json({ message: "User registered successfully", token })
    } catch (err) {
      console.log(err.stack)
      res.status(500).json({ message: "An error occurred" })
    }

    client.close()
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}

export default handleRegister



  
  