import { MongoClient } from "mongodb"
import serviceTranslations from "./models/serviceTranslations"
const deleteBooking = async (req, res) => {
  const url = process.env.MONGODB_URL
  const dbName = process.env.DB_NAME  
  const client = new MongoClient(url)
  const {date, service, time,} = req.body
  const language = req.body.language || "bg"

  // Reverse the translation
  const serviceKey = Object.keys(serviceTranslations[language]).find(key => serviceTranslations[language][key] === service)

  try {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection("bookings")
    console.log(`Date: ${date}, Service: ${serviceKey}, Time: ${time}`)

    // Delete the booking
    const result = await collection.deleteOne({ date, service: serviceKey, time })

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Deleted succefully" })
    } else {
      res.status(402).json({ message: "No ducuments found" })
    }
  } catch (err) {
    res.status(500).json({err})
    throw err
  } finally {
    client.close()
  }
}

export default deleteBooking
