const axios = require("axios")
const querystring = require("querystring")

// Account details
const apiKey = "NzEzNTU5NjQ2ZTRhNDQ0NzQxNmM0YzM0Mzg0NDM2NDI="

// Message details
const number = [359988740911]
const sender = "I&F Barbers"
const message = "You OTP is 123456"

// Prepare data for POST request
const data = querystring.stringify({
  "apikey": apiKey,
  "numbers": number,
  "sender": sender,
  "message": message
})

// Send the POST request with axios
axios.post("https://api.txtlocal.com/send/", data)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })


  