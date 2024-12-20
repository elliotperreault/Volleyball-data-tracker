const express = require('express')
const app = express()
const port = 24140

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(port, () => {
  console.log(`Volleyball data tracker app listening on port ${port}`)
});