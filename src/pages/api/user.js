import jwt from "jsonwebtoken"

export default async (req, res) => {
  // Get the token from the Authorization header
  const token = req.headers.authorization?.split(" ")[1]

  if (token) {
    try {
      // Verify the token
      const secretKey = "your-secret-key" // Replace with your actual secret key
      const user = jwt.verify(token, secretKey)

      // If the token is valid, send a success response
      res.status(200).json({ loggedIn: true, username: user.username, phonenumber: user.phonenumber })
    } catch (err) {
      // If the token is not valid, send an error response
      res.status(401).json({ loggedIn: false, message: "Invalid token" })
    }
  } else {
    // If the token does not exist, send an error response
    res.status(401).json({ loggedIn: false, message: "No token provided" })
  }
}

