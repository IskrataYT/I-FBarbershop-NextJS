import { MongoClient } from "mongodb"
import serviceTranslations from "./models/serviceTranslations"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { date, fromApp } = req.body
    const language = req.body.language || "bg"

    // Connection URL
    const url = process.env.MONGODB_URL

    // Database Name
    const dbName = process.env.DB_NAME

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
      let services = []
      if (fromApp) {
        services = bookings.map(booking => serviceTranslations[language][booking.service])
      }

      // Send response
      res.status(200).json({ message: "Fetched Times successfully", times: times, services: services })
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


