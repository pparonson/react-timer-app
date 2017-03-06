const express = require('express');

// create the app
const app = express();
// configure port with environment var for heroku or 3000 for localhost
const PORT = process.env.PORT || 3000;

// express middleware pattern to do something with requests
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`)
  } else {
    next();
  }
});

app.use(express.static('public'));



app.listen(PORT, () => {
  console.log(`Express server is running on port: ${PORT}`);
});
