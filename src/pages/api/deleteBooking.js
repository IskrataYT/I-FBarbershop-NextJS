const { MongoClient } = require("mongodb")

async function deleteBooking(date, service, time) {
  const url = process.env.MONGODB_URL
  const dbName = process.env.DB_NAME
  const client = new MongoClient(url)

  try {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection("bookings")
    console.log("Date: " + date + ", Service: " + service + ", Time: " + time)
    // Delete the booking
    const result = await collection.deleteOne({ date: date, service: service, time: time })

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