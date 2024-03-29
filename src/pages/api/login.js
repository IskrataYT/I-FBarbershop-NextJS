import { MongoClient } from "mongodb"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const handleLogin = async (req, res) => {
  if (req.method === "POST") {
    const { phone, password } = req.body
    const url = process.env.MONGODB_URL
    const dbName = process.env.DB_NAME
    const client = new MongoClient(url)

    try {
      await client.connect()
      console.log("Connected successfully to server")
      const db = client.db(dbName)
      const collection = db.collection("users")
      const user = await collection.findOne({ phone })

      if (!user) {
        return res.status(400).json({ message: "Invalid phone number" })
      }

      const isValidPassword = await bcrypt.compare(password, user.password)

      if (!isValidPassword) {
        return res.status(400).json({ message: "Invalid password" })
      }

      // Create JWT
      const secretKey = process.env.SECRET_KEY // Replace with your actual secret key
      const token = jwt.sign({ id: user._id, username: user.name, phonenumber: user.phone }, secretKey, { expiresIn: "1h" })

      // Send JWT in response
      res.status(200).json({ message: "Logged in successfully", token })
    } catch (err) {
      console.log(err.stack)
      res.status(500).json({ message: "An error occurred" })
    }

    client.close()
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}

export default handleLogin