import express from 'express';
const app = express()   //create nw wxpress application
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});
//lisener listen to server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});