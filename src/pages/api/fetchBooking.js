// pages/api/bookedTimes.js

import mongoose from "mongoose"

mongoose.connect("mongodb+srv://root:EHp3wLINM3dPT6x4@db1.yr4dzh4.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

const Booking = mongoose.model("Booking", {
  time: String,
  // Add other fields as needed
})

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const bookings = await Booking.find()
      const bookedTimes = bookings.map((booking) => booking.time)
      res.status(200).json({ bookedTimes })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: "Internal Server Error" })
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" })
  }
}