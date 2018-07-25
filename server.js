//Install express server
const express = require('express');
//var cors = require('cors')
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/bibsearch-krook'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/bibsearch-krook/index.html'));
});


//app.use(cors());

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);