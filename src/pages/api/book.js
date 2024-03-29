import { MongoClient } from "mongodb"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { phone, name, time, service, date } = req.body

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

      // Insert a new booking into the collection
      const result = await collection.insertOne({
        phone,
        name,
        time,
        service,
        date,
      })

      console.log(`Successfully inserted item with _id: ${result.insertedId}`)

      // Send response
      res.status(200).json({ message: "Booking created successfully" })
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

