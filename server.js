const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

// the __dirname is the current directory from where the script is running
const publicPath = path.join(__dirname, 'dist')
app.use('/static', express.static(publicPath));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, 'dist'), 'app.html'));
});

app.listen(port);
