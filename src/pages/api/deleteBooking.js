import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const { date, service, time } = req.body;

  const url = process.env.MONGODB_URL;
  const dbName = process.env.DB_NAME;
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('bookings');
    console.log(`Date: ${date}, Service: ${service}, Time: ${time}`);

    // Delete the booking
    const result = await collection.deleteOne({ date, service, time });

    if (result.deletedCount === 1) {
      console.log('Successfully deleted one document.');
      res.status(200).json({ message: 'Successfully deleted one document.' });
    } else {
      console.log('No documents matched the query. Deleted 0 documents.');
      res.status(404).json({ message: 'No documents matched the query. Deleted 0 documents.' });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ message: 'An error occurred.', error: err });
  } finally {
    client.close();
  }
}
