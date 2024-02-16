import { withIronSession } from "next-iron-session"

export default withIronSession((req, res) => {
  req.session.destroy()
  res.status(200).json({ message: "Logged out successfully" })
}, {
  password: "H?FCM$$45A4YmhqhPhj9y#j6p$K?G9$CikTbt34Y",
  cookieName: "my-session",
})
