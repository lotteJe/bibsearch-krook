/* //Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/bibsearch-krook'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/bibsearch-krook/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);*/

const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);