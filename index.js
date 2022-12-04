const express = require('express');
const app = express();
const externalUrl = process.env.RENDER_EXTERNAL_URL;
const port= externalUrl && process.env.PORT ? parseInt(process.env.PORT) : 3000

app.get('/', (req, res) => {
  res.render('index.ejs')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});