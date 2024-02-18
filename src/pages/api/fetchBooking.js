import { MongoClient } from "mongodb"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { date } = req.body

    // Connection URL
    const url = "mongodb+srv://root:EHp3wLINM3dPT6x4@db1.yr4dzh4.mongodb.net/?retryWrites=true&w=majority"

    // Database Name
    const dbName = "myproject"

    // Create a new MongoClient
    const client = new MongoClient(url)

    try {
      // Connect to the MongoDB cluster
      await client.connect()

      // Connect to the desired database
      const db = client.db(dbName)

      // Get the bookings collection
      const collection = db.collection("bookings")

      // Find bookings with the specified date
      const bookings = await collection.find({ date: date }).toArray()

      // Extract only the times of the bookings
      const times = bookings.map(booking => booking.time)

      // Send response
      res.status(200).json({ message: "Fetched Times successfully", times: times })
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
}
