import { MongoClient } from "mongodb"
import serviceTranslations from "./models/serviceTranslations"

async function deleteBooking(date, service, time, language = "bg") {
  const url = process.env.MONGODB_URL
  const dbName = process.env.DB_NAME
  const client = new MongoClient(url)

  // Reverse the translation
  const serviceKey = Object.keys(serviceTranslations[language]).find(key => serviceTranslations[language][key] === service)

  try {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection("bookings")

    // Delete the booking
    const result = await collection.deleteOne({ date, service: serviceKey, time })

    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.")
    } else {
      console.log("No documents matched the query. Deleted 0 documents.")
    }
  } catch (err) {
    console.log(err.stack)
    throw err
  } finally {
    client.close()
  }
}

export default deleteBooking
