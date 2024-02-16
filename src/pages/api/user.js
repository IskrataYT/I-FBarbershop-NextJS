import { withIronSession } from "next-iron-session"

export default withIronSession(async (req, res) => {
  const user = req.session.get("user")

  if (user) {
    // If the user session exists, send a success response
    res.status(200).json({ loggedIn: true, username: user.username, phonenumber: user.phonenumber })
  } else {
    // If the user session does not exist, send an error response
    res.status(200).json({ loggedIn: false })
  }
}, {
  password: "H?FCM$$45A4YmhqhPhj9y#j6p$K?G9$CikTbt34Y",
  cookieName: "my-session",
})

