const express = require("express")
const app = express()

app.use(express.static("public"))

app.listen(8000, () => {
  console.log("App listening on port 3000!")
})

app.get("/", (req, res) => {
  res.send("s")
})
